import React, {useState} from "react";

function Search(props) {
  // const [term, setTerm] = useState("")
  
  // function handleSubmit(e) {
  //   e.preventDefault();
    
  //   props.handleSearch(term)

  // }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={props.term}
        onChange={(e) => props.setTerm(e.target.value)}
      />
      {/* <button type="submit">🔍</button> */}
    </form>
  );
}

export default Search;
