import React from "react";

function Edits({ uploadCar, data }) {
  return (
    <>
      <button className="ms-2" onClick={uploadCar}>
        Upload Car
      </button>
      <a href={`data: ${data}`} download={"data.json"}>
        Download JSON
      </a>
    </>
  );
}

export default Edits;
