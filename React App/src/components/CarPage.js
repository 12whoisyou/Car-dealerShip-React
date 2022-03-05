import React from "react";

import "./carpage.css";
function CarPage({ car, cars, setCars }) {
  return (
    <div className="container-fluid row m-2">
      <div className="col-lg-6 row">
        <div className="container-fluid">
          <img src={car.path}></img>
        </div>

        <div className="container-fluid">
          <h1>{car.name}</h1>
          <h2>{car.price}</h2>
        </div>
      </div>
      <div className="container-fluid col-lg-6">
        <p>{car.description}</p>
      </div>
    </div>
  );
}

export default CarPage;
