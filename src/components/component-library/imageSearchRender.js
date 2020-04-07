import React from "react";

const Image = ({ image, title, date_created, keywords }) => {
  return (
    <div className="imageRender">
      <img src={image} alt={title} className="searchImages"/>
      <h4>{title}</h4>
      <p>{date_created}</p>

      <h5>Keywords</h5>
      {keywords.map((keyword ,index) => (
        <p key={index}>{keyword} </p>
      ))}
    </div>
  );
};

export default Image;
