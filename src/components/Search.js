import React from "react";

function Search({ search, onSearchChange, setSortByCat, setSortByDesc }) {

  function handleCatClick(){
    setSortByDesc(false)
    setSortByCat(true)
  }

  function handleDescClick(){
    setSortByCat(false)
    setSortByDesc(true)
  }

  return (
    <>
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
        <i className="circular search link icon"></i>
      </div>
      <button onClick={handleCatClick}>Sort by category</button>
      <button onClick={handleDescClick}>Sort by description</button>
    </>
  );
}

export default Search;
