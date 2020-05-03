import React from "react";

const Image = ({ image, title, date_created, keywords }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
      <img src={image} alt={title} className="card-img-top"/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{date_created}</p>

      <p className="card-text">Keywords</p>
      {keywords.map((keyword ,index) => (
        <span className="badge badge-pill badge-dark" key={index}> {keyword}</span>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Image;
