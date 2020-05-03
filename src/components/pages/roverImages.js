import React, { useEffect, useState } from "react";
import RoverImageRender from "../component-library/roverImageRender";
import { roverImageSearch } from "../../api/index";
import {getTodaysDate} from '../../util'
export default function RoverImages() {

  const todaysDate = getTodaysDate();

  const [images, setImages] = useState([]);
  const [rover, setRover] = useState("curiosity");
  const [date, setDate] = useState("2015-6-3");

  useEffect(() => {
    const fetchAPI = async () => {
      setImages(await roverImageSearch(rover,date));
    };
    fetchAPI();
  }, [rover]);
  const updateRover = (e) => {
    e.preventDefault();
    setRover(e.target.value);
  };

  const updateDate = (e) =>{
    e.preventDefault();
    setDate(e.target.value);
  }
  if (images.photos === undefined) {
    return <h4> This page is loading </h4>;
  } else {
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-4">Rover Images</h1>
          <p className="lead">See what our rovers are seeing</p>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="exampleFormControlSelect2">
                    Select Date{" "}
                  </label>
                  <input
                    className="date-search"
                    type="date"
                    id="exampleFormControlSelect2"
                    defaultValue="2015-06-03"
                    onChange={updateDate}
                  />
                </div>
                <div className="col-sm-5">
                  <select
                    onChange={updateRover}
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                  </select>
                </div>
                <div className="col-sm-1"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {images.photos.map((image) => (
            <RoverImageRender
              key={image.id}
              date_created={image.earth_date}
              image={image.img_src}
              roverData={image.rover}
            />
          ))}
        </div>
      </>
    );
  }
}
