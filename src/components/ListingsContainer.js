import React, {useState,useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>setListings(data))
  },[])
  // console.log(listings)
  const filterData = listings.filter((listing)=>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filterData)
  const listingsCards = filterData.map((listing)=>{
    return <ListingCard key={listing.id} listing={listing} deleteById={deleteById}/>
  })

  function deleteById(id){
    fetch(`http://localhost:6001/listings/${id}`,{method:"DELETE"})
    .then(r=>r.json())
    .then(data=>{
      const newListingArray = listings.filter((listing)=>{
        if(id===listing.id){
          return false
        }
        return true
      })
      setListings(newListingArray)
    })
  }

  return (
    <main>
      <ul className="cards">
        {listingsCards}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
