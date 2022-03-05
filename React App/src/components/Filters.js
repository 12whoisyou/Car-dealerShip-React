import React from "react";

function Filters({ setSort }) {
  return (
    <>
      <select
        name="dropdown"
        className="ms-2"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="price high to low">Price high to low</option>
        <option value="price low to high">Price low to high</option>
      </select>
    </>
  );
}

export default Filters;
