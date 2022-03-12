import React from "react";

import "./carpage.css";
import CarImage from "./CarImage.js";
function CarPage({ car }) {
  return (
    <div className="container-fluid row m-2">
      <div className="col-lg-6 row">
        <div className="container-fluid">
          <CarImage car={car} />
        </div>

        <div className="container-fluid">
          <h1>{car.name}</h1>
          <h2>{car.price + " Kr"}</h2>
          <br />
          <br />
          <h3 className="fw-bolder">Info: </h3>
          <h5>{car.type + " car"}</h5>
          <h5>{car.transmission}</h5>
          <h5>{"Top speed is " + car.speed + " km/h"}</h5>
          <h5>{car.miles + " miles driven"}</h5>
          <h5>{car.seats + " seats"}</h5>
          <h5>{car.color + " color"}</h5>
        </div>
      </div>
      <div className="container-fluid col-lg-6">
        <p>{car.description}</p>
      </div>
    </div>
  );
}

export default CarPage;
