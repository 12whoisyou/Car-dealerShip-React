import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
//components
import NavBar from "./components/NavBar.js";
import Cars from "./components/Cars.js";

import AboutPage from "./components/AboutPage.js";

//rfce will help you create components
function App() {
  const [currentWindow, setCurrentWindow] = useState("Cars");

  switch (currentWindow) {
    case "Cars":
      return (
        <>
          <NavBar
            setCurrentWindow={setCurrentWindow}
            currentWindow={currentWindow}
          />
          <Cars currentWindow={currentWindow} />
        </>
      );
    case "AboutPage":
      return (
        <>
          <NavBar
            setCurrentWindow={setCurrentWindow}
            currentWindow={currentWindow}
          />
          <AboutPage />
        </>
      );
    case "EditPage":
      return (
        <>
          <NavBar
            setCurrentWindow={setCurrentWindow}
            currentWindow={currentWindow}
          />
          <Cars currentWindow={currentWindow} />
        </>
      );
  }
}

export default App;
{
  /* default:
      const index = cars.findIndex((x) => x["id"] === currentWind ow); 
      const car = cars[index];
      if (car !== null) {
        return <CarPage car={car} />;
      } else {
        return <h1>404 Not Found</h1>;
      } 
      
      
      
      
        const generateCars = () => {
    //Generating cars
    let carsList = [
      "Ford Fiesta",
      "Ford Kuga 2Wd",
      "Ford Mondeo",
      "Mercedes C180",
      "Toyata Aygo",
      "Toyata C-HR",
      "Toyata Coralla",
      "Toyata Rav 4Wd",
      "Toyata Yaris",
      "Volkswagen Golf",
      "Volvo V40",
      "Lexus RX 450h",
      "Audi A8 ",
      "Honda",
      "Rolls Royce",
      "Silver Infiniti Q60",
      "Aston Martin Vantage",
      "Volkswagen Phideon",
      "Jaguar F TYPE",
      "Mercedes Roadster",
      "Mercedes Sedan",
      "Mercedes Coupe",
      "Mercedes AMG-GT-S",
      "Mercedes SUV",
      "Mercedes Wagon",
      "Mercedes E-Class-Coupe",
      "Mercedes Cabriolet",
      "Audi e-tron",
      "Audi Q5",
      "Audi Q7",
      "BMW 5 Series",
      "BMW M4",
      "BMW X3",
      "Force Motors Gurkha",
      "Ford Figo",
      "Honda Amaze",
      "Hyundai Alcazar",
      "Hyundai i20",
      "Jeep Compass",
      "Kia Carens",
      "Mahindra Bolero Neo",
      "Mahindra Marazzo",
      "Mahindra XUV700",
      "Maruti Suzuki Celerio",
      "Maruti Suzuki XL6",
      "Mercedes Benz",
      "MG Astor",
      "MG ZS EV Facelift",
      "MINI Cooper",
      "Porsche Taycan",
      "Renault Triber",
      "Skoda Kodiaq",
      "Skoda Kushaq",
      "Skoda Octavia",
      "Skoda Slavia",
      "Skoda Superb",
      "Tata Punch",
      "Tata Tigor EV",
      "Tata Tigor",
      "Toyata Camry",
      "Toyata Innova Crysta",
      "Volkswagen Polo",
      "Volkswagen Taigun",
    ];

    carsList.forEach(function (car, index) {
      console.log(car);
      carsList[index] = {
        name: car,
        path: "/images/" + car + ".png",
        price: Math.floor(Math.random() * 10 * 10).toString(),
        id: index,
      };
    });
    console.log(carsList);
    return carsList;
  };*/
}
