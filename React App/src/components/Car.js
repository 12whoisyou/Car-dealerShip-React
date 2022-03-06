import React from "react";
import "./car.css";

//this is the website I used to get the car images https://www.carrentals.com/carsearch?paandi=true&fdrp=1&styp=2&dagv=1&subm=1&locn=Skien,%20Vestfold%20og%20Telemark,%20Norway&dpln=3185&date1=2/27/2022&date2=3/1/2022&crfrr=defaultFlex&SearchType=Place
//https://www.carmax.com/cars/sports-cars

function Car({ setCars, car, cars, currentWindow, setCarPage, carPage }) {
  const carClicked = (e) => {
    const df = car;
    console.log(df);
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
    <div className="col-xxl-4 col-lg-6 col-sm-12">
      {currentWindow === "EditPage" && (
        <button
          className="btn btn-danger top-100 start-100  position-sticky"
          onClick={deleteSelf}
        >
          Delete
        </button>
      )}
      <div onClick={carClicked} className="border m-3 row car">
        <div className="col-6">
          <img src={car.path}></img>
        </div>
        <div className="col-6 mt-1">
          <h2>{car.name}</h2>
          <h6>Den perfekte familie bilen</h6>
          <h5 value="price">{car.price + " Kr"}</h5>
        </div>
      </div>
    </div>
  );
}

export default Car;
