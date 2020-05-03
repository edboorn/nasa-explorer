import React, { useEffect, useState } from "react";
import RoverImageRender from "../component-library/roverImageRender";
import { roverImageSearch } from "../../api/index";

export default function RoverImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setImages(await roverImageSearch());
    };
    fetchAPI();
  }, []);

  if (images.photos === undefined) {
    return <h4> This page is loading </h4>;
  } else {
    return (
      <div className="mainPage">
        <div className="titleText">
          <h2>Rover Images</h2>
          <p>See what our rovers are seeing</p>
        </div>
        <div className="images">
          {images.photos.map((image) => (
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
}
