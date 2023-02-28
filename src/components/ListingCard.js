import React, { useState } from "react";

function ListingCard({individuallisting,handleDelete}) {
  let {id,image,description,location} = individuallisting
  const [favorited,setfavorited] = useState(false)


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={()=>setfavorited(!favorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setfavorited(!favorited)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
