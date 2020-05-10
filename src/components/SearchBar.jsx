import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        name="query"
        type="text"
        className="form-control mt-3"
        placeholder="Search here ..."
      />
    </div>
  );
}

export default SearchBar;
