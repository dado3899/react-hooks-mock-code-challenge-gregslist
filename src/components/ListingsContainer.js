import React from "react";
import { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import ListingsForm from "./ListingsForm"

function ListingsContainer({search,alphabetical}) {
  const [listings,setListings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then(data=>setListings(data))
  },[])

  function deleteListing(id){
    fetch(`http://localhost:6001/listings/${id}`,{
      method:"DELETE"
    })
    .then(r => {
      const newListings = listings.filter((listing)=>{
        return listing.id!==id
      })
      setListings(newListings)
    })
  }

  function addListing(newListing){
    fetch('http://localhost:6001/listings',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListing)
    })
    .then(r=>r.json())
    .then(data=>setListings([...listings,data]))
  }

  listings.sort((a,b)=>{
    if((a.location.toLowerCase()>b.location.toLowerCase())===alphabetical){
      return 1
    }
    else if((a.location.toLowerCase()<b.location.toLowerCase())===alphabetical){
      return -1
    }
    return 0
  })

  const listingFiltered = listings.filter((listing)=>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  const listingCards = listingFiltered.map((listing)=>{
    return <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing}/>
  })

  return (
    <main>
      <ListingsForm addListing={addListing}/>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
