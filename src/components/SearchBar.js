import React, { useState } from "react";

function SearchBar(props) {
  var { onFormSubmit } = props;
  var [term, setTerm] = useState("");

  var onInputChange = (event) => {
    setTerm(event.target.value);
  };

  var onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search for a video</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
