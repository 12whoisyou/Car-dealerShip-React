import React from "react";

function Filters({ setSort, setFilters, filters }) {
  const filterHandler = (e) => {
    const type = e.target.value.split(" ")[0];
    const value = e.target.value.split(" ")[1];
    let updatedFilters = filters;
    updatedFilters[type] = value;
    setFilters(updatedFilters);
    console.log(updatedFilters, filters);
  };

  return (
    <>
      <input
        className="form-check-input ms-2"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onClick={(e) => {
          console.log(e);
        }}
      />

      <select
        disabled
        name="dropdown"
        className="ms-2 "
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="price hl">Price high to low</option>
        <option value="price lh">Price low to high</option>
      </select>

      <input
        className="m-2"
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />

      <select name="dropdown" className="ms-2" onChange={filterHandler}>
        <option value="color Black">Black Cars</option>
        <option value="color Grey">Grey cars</option>
      </select>
    </>
  );
}

export default Filters;
