import React from "react";

function Edits({ uploadCar, cars, resetCars }) {
  let data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cars));
  return (
    <>
      <button className="btn btn-primary mx-2 mt-1" onClick={uploadCar}>
        Upload Car
      </button>
      <button className="btn btn-danger mt-1" onClick={resetCars}>
        Reset Data
      </button>
      <a
        href={`data: ${data}`}
        download={"data.json"}
        className="btn btn-success mx-2 mt-1"
      >
        Download JSON
      </a>
    </>
  );
}

export default Edits;
