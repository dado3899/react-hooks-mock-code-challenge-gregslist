import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsFull, setlistingsFull] = useState([])
  const [currentsearch, setcurrentsearch] =useState("")
  console.log(currentsearch)
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setlistingsFull(listings))
  },[])

  function deleteItem(idtodelete){
    fetch(`http://localhost:6001/listings/${idtodelete}`,{
      method:"DELETE"
    }) 
    const newlistings = listingsFull.filter((listing)=>{return listing.id!==idtodelete})
    setlistingsFull(newlistings)
  }

  function handlepost(postobj){
    fetch(`http://localhost:6001/listings`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postobj)
    })
    .then(r => r.json())
    .then(newlisting => {
      const newArray = [...listingsFull,newlisting]
      setlistingsFull(newArray)
    })
  }

  const filteredArray = listingsFull.filter((listing)=>{
    return listing.description.toLowerCase().includes(currentsearch.toLowerCase())
  })
  
  return (
    <div className="app">
      <Header setcurrentsearch={setcurrentsearch} handlepost={handlepost}/>
      <ListingsContainer listingsFull={filteredArray} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
