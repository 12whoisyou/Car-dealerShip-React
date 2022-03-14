import React from "react";

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
      <input
        className="form-check-input  ms-1 my-2"
        type="checkbox"
        value='colors ""'
        hidden={currentWindow !== "EditPage"}
        id="flexCheckDefault"
        onClick={filterHandler}
        defaultChecked={filters["colors"] !== ""}
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

      <input
        className="form-check-input  ms-1 my-2"
        type="checkbox"
        value='motor ""'
        hidden={currentWindow !== "EditPage"}
        id="flexCheckDefault"
        onClick={filterHandler}
        defaultChecked={filters["motor"] !== ""}
      />
      <select
        name="dropdown"
        className="me-2 ms-1"
        hidden={filters["motor"] === "" && currentWindow !== "EditPage"}
        disabled={filters["motor"] === ""}
        onChange={filterHandler}
      >
        <option value="motor All">All motors</option>
        <option value="motor Gas">Gas motors</option>
        <option value="motor Electric">Electric motors</option>
      </select>

      <input
        className="form-check-input  ms-1 my-2"
        type="checkbox"
        value='transmission ""'
        hidden={currentWindow !== "EditPage"}
        id="flexCheckDefault"
        onClick={filterHandler}
        defaultChecked={filters["transmission"] !== ""}
      />
      <select
        name="dropdown"
        className="me-2 ms-1"
        hidden={filters["transmission"] === "" && currentWindow !== "EditPage"}
        disabled={filters["transmission"] == ""}
        onChange={filterHandler}
      >
        <option value="transmission All">All transmissions</option>
        <option value="transmission Manual">Manual transmission</option>
        <option value="transmission Automatic">Automatic transmission</option>
      </select>

      <input
        className="form-check-input  ms-1 my-2"
        type="checkbox"
        value='type ""'
        hidden={currentWindow !== "EditPage"}
        id="flexCheckDefault"
        onClick={filterHandler}
        defaultChecked={filters["type"] !== ""}
      />
      <select
        name="dropdown"
        className="me-2 ms-1"
        hidden={filters["type"] === "" && currentWindow !== "EditPage"}
        disabled={filters["type"] === ""}
        onChange={filterHandler}
      >
        <option value="type Famil">All Car types</option>
        <option value="type Family">Family car</option>
        <option value="type Sport">Sport cars</option>
      </select>
    </div>
  );
}

export default Filters;
