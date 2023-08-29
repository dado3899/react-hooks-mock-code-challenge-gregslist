import React, {useState} from "react";

function ListingCard({listing,deleteById}) {
  const [favorite, setFavorite] = useState(false)
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={()=>setFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setFavorite(!favorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={()=>deleteById(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
