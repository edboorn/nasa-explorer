/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ImageRenderer from "../component-library/imageSearchRender";

export default function ImageSearch() {
  // Set State
  const [images, setImages] = useState([]);

  //Input States
  const [search, setSearch] = useState("Hubble");
  const [startYear, setStartYear] = useState("1950");
  const [endYear, setEndYear] = useState("2020");

  //Query States
  const [textQuery, setTextQuery] = useState("Hubble");
  const [startDateQuery, setStartDateQuery] = useState("1950");
  const [endDateQuery, setEndDateQuery] = useState("2020");
  
  useEffect(() => {
    getImages();
  }, [textQuery]);

  const getImages = async () => {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${textQuery}&year_start=${startDateQuery}&year_end=${endDateQuery}&media_type=image`
    );
    const data = await response.json();
    setImages(data.collection.items);
    //console.log(data.collection.items);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateStartDate = (e) => {
    setStartYear(e.target.value);
  };

  const updateEndDate = (e) => {
    setEndYear(e.target.value);
  };
  

  const getSearch = (e) => {
    e.preventDefault();
    setTextQuery(search);
    setStartDateQuery(startYear);
    setEndDateQuery(endYear);
  };

  return (
    <div className="mainPage">
      <div className="titleText">
        <h2>Nasa Image Search</h2>
        <p>Search The Nasa Image Database</p>
      </div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <input
          className="date-search"
          type="text"
          value={startYear}
          onChange={updateStartDate}
        />
        <input
          className="date-search"
          type="text"
          value={endYear}
          onChange={updateEndDate}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="images">
        {images.map((image) => (
          <ImageRenderer
            key={image.data[0].nasa_id}
            title={image.data[0].title}
            date_created={image.data[0].date_created}
            image={image.links[0].href}
            keywords={image.data[0].keywords}
          />
        ))}
      </div>
    </div>
  );
}
