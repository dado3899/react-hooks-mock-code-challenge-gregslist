import React, { useState } from "react";

function ListingCard({listingindividual,deleteItem}) {
  const [favorited, setfavorited] = useState(false)
  let {id,description,image,location} = listingindividual
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={()=>setfavorited(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setfavorited(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>deleteItem(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
