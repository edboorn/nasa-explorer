import React from "react";
import RoverModal from "../component-library/roverModal";

const Image = ({ image, date_created, roverData }) => {
  
  return (
    <div className="imageRender">
      <img src={image} alt="Rover" className="searchImages" />
      <p>{date_created}</p>
      <RoverModal roverData={roverData}/>
    </div>
  );
};

export default Image;
