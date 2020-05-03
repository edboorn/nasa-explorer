import React, {useEffect, useState} from 'react'
import {imageOfDay} from '../../api/index'
import ImageRender from '../component-library/image-render';

export default function Home() {
    const [image, setImage] = useState('');

    useEffect(() => {
      const fetchApi = async () => {
        setImage(await imageOfDay());
      }
      fetchApi();
    }, [])
  

  
    if(image.imageurl === null ) {
      return <h3> The Image is loading</h3>
      
    }
    else {
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

}