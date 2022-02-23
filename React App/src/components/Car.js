import React from "react";
import PlaceholderLoading from "react-placeholder-loading";
import "./car.css";
//this is the website I used to get the car images https://www.carrentals.com/carsearch?paandi=true&fdrp=1&styp=2&dagv=1&subm=1&locn=Skien,%20Vestfold%20og%20Telemark,%20Norway&dpln=3185&date1=2/27/2022&date2=3/1/2022&crfrr=defaultFlex&SearchType=Place
//https://www.carmax.com/cars/sports-cars

function Car({ setCars, car, cars, currentWindow, setCarPage }) {
  const carClicked = (e) => {
    setCarPage(car.id);
  };
  const deleteSelf = (e) => {
    car.id = currentWindow;
    setCarPage("");
    console.log(cars.length);
    const updatedCars = cars.filter((i) => i.id !== car.id);
    setCars(updatedCars);
  };
  return (
    <div className="col-xxl-4 col-lg-6 col-sm-12">
      <div onClick={carClicked} className="border m-3 row car">
        <div className="col-6">
          <img src={car.path}></img>
        </div>
        <div className="col-6">
          {currentWindow === "EditPage" && (
            <button
              className="btn btn-danger position -relative top-0 start-100 translate-middle"
              onClick={deleteSelf}
            >
              Delete
            </button>
          )}

          <h2>{car.name}</h2>
          <h6>Den perfekte familie bilen</h6>
          <h5 value="price">{car.price + " 000 Kr"}</h5>
        </div>
      </div>
    </div>
  );
}

export default Car;
