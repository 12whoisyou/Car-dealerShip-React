import React from "react";

import { Filter } from "./Filter.js";
function Filters({
  setSort,
  sort,
  setFilters,
  filters,
  currentWindow,
  carPage,
}) {
  const filterHandler = (e) => {
    const type = e.target.value.split(" ")[0];
    let value = e.target.value.split(" ")[1];
    if (e.target.checked !== undefined) {
      value = e.target.checked ? "All" : "";
    }
    setFilters({ ...filters, [type]: value });
  };

  const sortHandler = (e) => {
    const type = e.target.value.split(" ")[0];
    let value = e.target.value.split(" ")[1];
    if (e.target.checked !== undefined) {
      value = e.target.checked ? "hl" : "";
      setSort(value);
    } else {
      setSort(value);
    }
    console.log(sort);
  };

  return (
    <div
      hidden={
        Object.entries(carPage).length !== 0 || currentWindow == "AboutPage"
      }
      className="ms-4"
    >
      <input
        className="form-check-input  my-2"
        hidden={currentWindow !== "EditPage"}
        type="checkbox"
        value='sort ""'
        id="flexCheckDefault"
        onClick={sortHandler}
        defaultChecked={sort !== ""}
      />
      <select
        name="dropdown"
        className={"me-2 ms-1"}
        onChange={(e) => setSort(e.target.value)}
        hidden={sort === "" && currentWindow !== "EditPage"}
        disabled={sort == ""}
      >
        <option value="price hl">Price high to low</option>
        <option value="price lh">Price low to high</option>
        <option value="speed lh">Speed low to high</option>
        <option value="speed hl">Speed high to low</option>
      </select>

      <Filter
        currentWindow={currentWindow}
        filterHandler={filterHandler}
        filters={filters}
        values={["All", "Black", "Grey", "White", "Red", "Blue", "Other"]}
        type="colors"
      />
      <Filter
        currentWindow={currentWindow}
        filterHandler={filterHandler}
        filters={filters}
        values={["All", "Gas", "Electric"]}
        type="motor"
      />
      <Filter
        currentWindow={currentWindow}
        filterHandler={filterHandler}
        filters={filters}
        values={["All", "Manual", "Automatic"]}
        type="transmission"
      />
      <Filter
        currentWindow={currentWindow}
        filterHandler={filterHandler}
        filters={filters}
        values={["All", "Family", "Sport"]}
        type="type"
      />
    </div>
  );
}

export default Filters;
