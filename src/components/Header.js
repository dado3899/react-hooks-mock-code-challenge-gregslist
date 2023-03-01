import React from "react";
import Search from "./Search";
import Posting from "./Posting";

function Header({setcurrentsearch,handlepost}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setcurrentsearch={setcurrentsearch}/>
      <Posting handlepost={handlepost}/>
    </header>
  );
}

export default Header;
