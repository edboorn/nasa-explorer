import React from "react";
import RoverModal from "../component-library/roverModal";

const Image = ({ image, date_created, roverData }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={image} alt="Rover"/>
        <RoverModal date_created={date_created} roverData={roverData} />
      </div>
    </div>
  );
};

export default Image;
