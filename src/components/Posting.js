import React, { useState } from "react";

function Posting({handlepost}) {
  const [description,setdescription] = useState("")
  const [location, setlocation] = useState("")
  const [image, setimage] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    const newobj = {
        description: description,
        image: image,
        location: location
    }
    handlepost(newobj)
    setdescription("")
    setimage("")
    setlocation("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input
        type="text"
        id="search"
        placeholder="location"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
      />
      <input
        type="text"
        id="search"
        placeholder="image"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Posting;
