import React, { useEffect, useState } from "react";
import RoverImageRender from '../component-library/roverImageRender'

export default function RoverImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setImages(data.photos);
  };

  return (
    <div className="mainPage">
      <div className="titleText">
        <h2>Rover Images</h2>
        <p>See what our rovers are seeing</p>
      </div>
      <div className="images">
        {images.map((image) => (
            <RoverImageRender 
            key={image.id}
            date_created={image.earth_date}
            image={image.img_src}
            roverData={image.rover}
            />
        ))}
      </div>
    </div>
  );
}
