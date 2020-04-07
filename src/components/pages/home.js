import React, {useEffect, useState} from 'react'
import ImageRender from '../component-library/image-render';

export default function Home() {
    const [image, setImage] = useState('');

    useEffect(() => {
      fetchLaunchImage();
    }, [])
  
    const fetchLaunchImage = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json()
      setImage(data);
    }
  
  
    return (
        <div className="mainImage">
        <ImageRender 
        image={image.url}
        explanation={image.explanation}
        copyright={image.copyright}
        date={image.date}/>
    </div>
    );
}