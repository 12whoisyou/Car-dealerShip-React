import React, { useEffect } from "react";

function Filters({ setSort, setFilters, filters, currentWindow }) {
  const filterHandler = (e) => {
    const type = e.target.value.split(" ")[0];
    let value = e.target.value.split(" ")[1];
    if (e.target.checked !== undefined) {
      value = e.target.checked ? "All" : "";
    }
    setFilters({ ...filters, [type]: value });
  };

  return (
    <>
      {" "}
      {currentWindow === "EditPage" && (
        <input
          className="form-check-input ms-4 my-2"
          type="checkbox"
          value='color ""'
          id="flexCheckDefault"
          onClick={filterHandler}
        />
      )}
      <select
        name="dropdown"
        className={"me-2 ms-" + (currentWindow === "EditPage" ? "1" : "4")}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="price hl">Price high to low</option>
        <option value="price lh">Price low to high</option>
      </select>
      <input
        className="form-check-input  ms-1 my-2"
        type="checkbox"
        value='colors ""'
        hidden={currentWindow !== "EditPage"}
        id="flexCheckDefault"
        onClick={filterHandler}
      />
      <select
        name="dropdown"
        className="me-2 ms-1"
        hidden={filters["colors"] === "" && currentWindow !== "EditPage"}
        disabled={filters["colors"] === ""}
        onChange={filterHandler}
      >
        <option value="color All">All colors</option>
        <option value="color Black">Black Cars</option>
        <option value="color Grey">Grey cars</option>
        <option value="color White">White cars</option>
        <option value="color Red">Red cars</option>
        <option value="color Blue">Blue cars</option>
        <option value="color Other">Other cars</option>
      </select>
    </>
  );
}

export default Filters;
