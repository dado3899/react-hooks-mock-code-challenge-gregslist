import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingCopy,handleDelete}) {
  console.log(listingCopy)
  
  const listingCardList = listingCopy.map((listing)=>{
    return <ListingCard key={listing.id} individuallisting={listing} handleDelete={handleDelete}/>
  })
  return (
    <main>
      <ul className="cards">
        {/* <ListingCard individuallisting={listingCopy[0]}/> */}
        {listingCardList}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
