import React from "react";
import "./car.css";
import CarImage from "./CarImage.js";

//this is the website I used to get the car images https://www.carrentals.com/carsearch?paandi=true&fdrp=1&styp=2&dagv=1&subm=1&locn=Skien,%20Vestfold%20og%20Telemark,%20Norway&dpln=3185&date1=2/27/2022&date2=3/1/2022&crfrr=defaultFlex&SearchType=Place
//https://www.carmax.com/cars/sports-cars
//https://github.com/abhionlyone/us-car-models-data

function Car({ setCars, car, cars, currentWindow, setCarPage, carPage }) {
  const carClicked = (e) => {
    const df = car;
    setCarPage((carPage) => ({
      ...carPage,
      ...car,
    }));
  };
  const deleteSelf = (e) => {
    car.id = currentWindow;
    setCarPage("");
    const updatedCars = cars.filter((i) => i.id !== car.id);
    setCars(updatedCars);
  };
  return (
    <div className="col-xxl-4 col-lg-6 col-sm-12 mb-3">
      <div onClick={carClicked} className="border mx-1 mt-3 row car">
        <div className="col-6">
          <CarImage car={car} />
        </div>
        <div className="col-6 mt-1">
          <h2>{car.name}</h2>
          <h6>Den perfekte familie bilen</h6>
          <h5 value="price">{car.price + " Kr"}</h5>
        </div>
      </div>
      {currentWindow === "EditPage" && (
        <button className="btn btn-danger" onClick={deleteSelf} id="delete">
          Delete
        </button>
      )}
    </div>
  );
}

export default Car;
