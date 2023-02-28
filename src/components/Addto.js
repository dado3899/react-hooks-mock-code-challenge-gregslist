import React, { useState } from "react";

function Addto({handlePost}){
    const [description,setdescription] = useState("")
    const [location,setlocation] = useState("")
    const [image,setimage] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        const newobj={
            description: description,
            image: image,
            location: location
        }
        fetch("http://localhost:6001/listings",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newobj)
        })
        .then(r => r.json())
        .then(listing => handlePost(listing))
      }
    return(
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input
        type="text"
        id="search"
        placeholder="Location"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
      />
      <input
        type="text"
        id="search"
        placeholder="Image"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    )
}

export default Addto