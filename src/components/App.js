import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState } from "react";

function App() {
  const [search,setSearch] = useState("")
  // True = a-z, false = z-a
  const [alphabetical,setAlphabetical] = useState(true)
  console.log(alphabetical)
  return (
    <div className="app">
      <Header setSearch={setSearch} setAlphabetical={setAlphabetical}/>
      <ListingsContainer search={search} alphabetical={alphabetical}/>
    </div>
  );
}

export default App;
