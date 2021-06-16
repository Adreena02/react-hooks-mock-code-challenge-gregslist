import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const {listings, deleteListing} = props

  const cards = listings.map(listing => <ListingCard {...listing} deleteListing={deleteListing} />)


  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
