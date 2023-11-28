import React, {useState} from "react";

function Search({setSearch}) {
  const [formSearch,setFormSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.search.value);
    setSearch(formSearch)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        // name="search"
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formSearch}
        onChange={(e) => setFormSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
