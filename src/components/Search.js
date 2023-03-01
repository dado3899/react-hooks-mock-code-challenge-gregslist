import React, { useState } from "react";

function Search({setcurrentsearch}) {
  const [search,setsearch] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    setcurrentsearch(search);
    //setsearch("")
  }

  return (
    <form className="searchbar" onChange={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
