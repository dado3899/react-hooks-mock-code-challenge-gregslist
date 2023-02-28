import React from "react";
import Addto from "./Addto";
import Search from "./Search";

function Header({setSearch,handlePost}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch}/>
      <Addto handlePost={handlePost}/>
    </header>
  );
}

export default Header;
