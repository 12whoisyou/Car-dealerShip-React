import React from "react";
export function Filter({
  currentWindow,
  filterHandler,
  filters,
  type,
  values,
}) {
  return (
    <>
      {" "}
      <input
        className="form-check-input  ms-1 my-2"
        type="checkbox"
        value={type + ' ""'}
        hidden={currentWindow !== "EditPage"}
        id="flexCheckDefault"
        onClick={filterHandler}
        defaultChecked={filters["type"] !== ""}
      />
      <select
        name="dropdown"
        className="me-2 ms-1"
        hidden={filters[type] === "" && currentWindow !== "EditPage"}
        disabled={filters[type] === ""}
        onChange={filterHandler}
      >
        {values.map((v) => (
          <React.Fragment key={v}>
            <option value={type + " " + v}>{v + " Car " + type + "s"}</option>
          </React.Fragment>
        ))}
      </select>
    </>
  );
}
