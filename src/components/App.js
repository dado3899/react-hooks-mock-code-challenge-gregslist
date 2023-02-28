import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingCopy, setlistingCopy] = useState([])
  const [search, setSearch] = useState("")
  //This use Effect only runs once
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then(listings => setlistingCopy(listings))
  },[])
  // 1 Solution to handling not fully loaded features
  // if(listingCopy.length===0) return <div>Loading</div>
  function handleDelete(toDeleteid){
    fetch(`http://localhost:6001/listings/${toDeleteid}`,{
      method: "DELETE"
    })
    const newListings = listingCopy.filter((listing)=>{
      return listing.id !== toDeleteid
    })
    console.log(newListings)
    setlistingCopy(newListings)
  }

  function handlePost(newlisting){
    setlistingCopy([...listingCopy,newlisting])
  }

  const filteredCopy = listingCopy.filter((listing) => {
    if(search==="") return true
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header setSearch={setSearch} handlePost={handlePost}/>
      <ListingsContainer listingCopy={filteredCopy} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
