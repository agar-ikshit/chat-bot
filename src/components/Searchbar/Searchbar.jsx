import React, { useState, useEffect } from 'react';
import "./searchbar.css";
import searchIcon from '../../assets/search.svg';
import closeIcon from '../../assets/close.svg';
import data from '../printers.json';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClose = () => {
    setQuery('');
    setSearchData([]);
  };

  useEffect(() => {
    if (query !== "") {
      const newFilterData = data.filter(printer => 
        printer.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchData(newFilterData);
    } else {
      setSearchData([]);
    }
  }, [query]);

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
        />
        <button onClick={query ? handleClose : handleSearch} className="search-button">
          <img 
            src={query === "" ? searchIcon : closeIcon}
            alt="search"
            className="searchIcon"
          />
        </button>
      </div>
      {searchData.length > 0 && (
        <div className="search-result">
          {searchData.map((data, index) => (
            <a 
              href={data.link}
              key={index}
              target='_blank'
              className='search-suggestion-line'
            >
              {data.title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Searchbar;
