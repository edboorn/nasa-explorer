/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ImageRenderer from "../component-library/imageSearchRender";
import { imageArchiveSearch } from "../../api/index";
export default function ImageSearch() {

  // Get Todays Year 
  let newDate = new Date();
  let year = newDate.getFullYear();
  // Set State
  const [images, setImages] = useState([]);

  //Input States
  const [search, setSearch] = useState("Hubble");
  const [startYear, setStartYear] = useState("1950");
  const [endYear, setEndYear] = useState(year);

  // Query States
  const [querySearch, setQuerySearch] = useState()
  const [queryStartYear, setQueryStartYear] = useState()
  const [queryEndYear, setQueryEndYear] = useState()

  useEffect(() => {
    const fetchApi = async () => {
      setImages(await imageArchiveSearch(search, startYear, endYear));
    };
    fetchApi();
  }, [querySearch, queryStartYear,queryEndYear]);



  const updateSearch = (e) => {
    console.log(search)
    setSearch(e.target.value)
  };

  const updateStartDate = (e) => {
    setStartYear(e.target.value);
  };

  const updateEndDate = (e) => {
    setEndYear(e.target.value);
  };

  const submitSearch =(e) => {
    e.preventDefault();
    setQuerySearch(search);
    setQueryStartYear(startYear);
    setQueryEndYear(endYear);
  }


  if (images.data === undefined) {
    return <h4> Page is Loading</h4>;
  } else {
    return (
      <div className="mainPage">
        <div className="titleText">
          <h2>Nasa Image Search</h2>
          <p>Search The Nasa Image Database</p>
        </div>
        <form className="search-form" onSubmit={submitSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <input
            className="date-search"
            type="year"
            defaultValue={startYear}
            onChange={updateStartDate}
          />
          <input
            className="date-search"
            type="year"
            defaultValue={endYear}
            onChange={updateEndDate}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="images">
          {images.data.collection.items.map((image) => (
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
}
