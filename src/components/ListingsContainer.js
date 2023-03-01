import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsFull,deleteItem}) {
  const listingcardsarray = listingsFull.map((listing)=>{
    return <ListingCard key={listing.id}listingindividual={listing} deleteItem={deleteItem}/>
  })
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingcardsarray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
