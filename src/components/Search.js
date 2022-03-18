import React from "react";

function Search({findPlant, handleFindPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={findPlant}
        placeholder="Type a name to search..."
        onChange={handleFindPlant}
      />
    </div>
  );
}

export default Search;
