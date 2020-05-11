import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value);
    console.log(searchQuery);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") onSubmit(searchQuery);
  };

  return (
    <div className="form-group">
      <input
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        name="query"
        type="text"
        className="form-control mt-3"
        placeholder="Search here ..."
      />
    </div>
  );
}

export default SearchBar;
