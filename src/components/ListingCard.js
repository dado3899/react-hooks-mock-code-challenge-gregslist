import React, { useState } from "react";

function ListingCard({listing,deleteListing}) {
  const [favorite,setFavorite] = useState(false)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={()=>setFavorite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setFavorite(true)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={()=>deleteListing(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
