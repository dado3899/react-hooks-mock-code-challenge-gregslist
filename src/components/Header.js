import React from "react";
import Search from "./Search";

function Header({setSearch,setAlphabetical}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch}/>
      <button onClick={()=>setAlphabetical(true)}>A-Z</button>
      <button onClick={()=>setAlphabetical(false)}>Z-A</button>
    </header>
  );
}

export default Header;
