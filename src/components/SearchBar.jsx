import React from "react";

function SearchBar(props) {
  function handleChange(userInput) {
    props.selectSearchInput(userInput);
  }
  return (
    <div className="searchBar">
      <label htmlFor="search">Search Acts</label>
      <input type="text" id="search" className="searchInput" onChange={(e) => handleChange(e.target.value)}></input>
    </div>
  );
}

export default SearchBar;
