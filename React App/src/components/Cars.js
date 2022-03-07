//libs
import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";

//componentes
import Car from "./Car.js";
import CarPage from "./CarPage.js";
import CarPageEdit from "./CarPageEdit.js";
import Filters from "./Filters.js";
import Edits from "./Edits.js";

//hooks
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";

//Data
import data from "../data/cars.json";

function Cars({ currentWindow }) {
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
      carsList[index] = {
        name: car,
        path: "/images/" + car + ".png",
        price: (Math.floor(Math.random() * 10 * 10) * 1000).toString(),
        transmission:
          Math.floor(Math.random() * 2) == 1 ? "Manual" : "Automatic",
        type: Math.floor(Math.random() * 2) == 1 ? "Electric" : "Gas",
        seats: Math.floor(Math.random() * 2) == 1 ? "4" : "5",
        miles: Math.floor(Math.random() * 10 * 10).toString(),
        speed: Math.floor(Math.random() * 20 + 100).toString(),
        desc: "Perfekte famile bil",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Placerat orci nulla pellentesque dignissim. Semper auctor neque vitae tempus quam pellentesque nec. Sed pulvinar proin gravida hendrerit. Nullam non nisi est sit amet facilisis magna. Hendrerit gravida rutrum quisque non tellus orci. Laoreet id donec ultrices tincidunt arcu non sodales. Sodales neque sodales ut etiam sit amet nisl purus. Tortor posuere ac ut consequat semper viverra nam libero. Pellentesque nec nam aliquam sem et tortor.",
        id: index,
      };
    });
    return carsList;
  };
  const loadCars = () => {
    if (localStorage.getItem("cars") === null) {
      console.log("Genrated cars");
      const generatedCars = generateCars();
      return generatedCars;
    } else {
      let carsLocal = JSON.parse(localStorage.getItem("cars"));
      console.log("Loaded cars from local storage");
      return carsLocal;
    }
  };
  const [cars, setCars] = useState(loadCars);
  const [sort, setSort] = useState("");
  const [carPage, setCarPage] = useState({});

  const saveLocalCars = () => {
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log("Saved cars");
  };

  const uploadCar = () => {
    setCars([
      {
        name: "name",
        path: "/images/" + "name" + ".png",
        price: "0",
        transmission: "Manual",
        type: "Electric",
        seats: "5",
        miles: "0",
        speed: "0",
        desc: "desc",
        description: "description",
        id: cars.length + 1,
      },
      ...cars,
    ]);
    setPage(cars.length);
  };

  useEffect(() => {
    saveLocalCars();
  }, [cars]);

  useEffect(() => {
    setCarPage({});
    console.log("ehm");
  }, [currentWindow]);

  useEffect(() => {
    const sorted = [...cars].sort((a, b) => a["price"] - b["price"]);

    if (sort === "price high to low") {
      sorted.reverse();
      setCars(sorted);
    } else if (sort === "price low to high") {
      setCars(sorted);
    } else {
      console.log("Erro: Sort type not availible " + sort);
      setCars(cars);
    }
  }, [sort]);

  const limit = 5;
  const [page, setPage] = useState(1);
  const elements = useInfiniteScroll(cars, limit, page);

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cars));
  if (Object.keys(carPage).length) {
    if (currentWindow === "EditPage") {
      console.log(carPage);
      return <CarPageEdit car={carPage} cars={cars} setCars={setCars} />;
    } else {
      return <CarPage car={carPage} cars={cars} setCars={setCars} />;
    }
  } else {
    return (
      <>
        <Filters setSort={setSort} />

        {currentWindow === "EditPage" && (
          <Edits uploadCar={uploadCar} data={data} />
        )}

        <div className="container-fluid row">
          {elements.map((car) => (
            <React.Fragment key={car.id}>
              <Car
                setCars={setCars}
                key={car.id}
                car={car}
                cars={cars}
                setCarPage={setCarPage}
                currentWindow={currentWindow}
              />

              {cars.findIndex((obj) => obj.id === car.id) + 1 ===
              limit * page ? (
                <Waypoint onEnter={() => setPage(page + 1)} />
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </>
    );
  }
}
export default Cars;
