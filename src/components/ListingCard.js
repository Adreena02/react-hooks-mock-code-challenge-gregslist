import React, {useState} from "react";

function ListingCard(props) {
  const [toggleLike, setToggleLike] = useState(false)
  
  const {deleteListing, description, location, id, image = "https://via.placeholder.com/300x300"} = props

  function handleToggle() {
    setToggleLike(toggleLike => !toggleLike)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    deleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {toggleLike ? (
          <button onClick={handleToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
