import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [term, setTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  // function handleSort() {
  //   setSort
  // }

  function deleteListing(listingId){
   let filteredArray = listings.filter(listing => listing.id !== listingId)

   setListings(filteredArray)
  }
  
  let filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(term.toLowerCase()))

  return (
    <div className="app">
      <Header term={term} setTerm={setTerm}/>
      <ListingsContainer listings={listings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
