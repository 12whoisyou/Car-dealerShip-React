//libs
import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";

//componentes
import Car from "./Car.js";
import CarPage from "./CarPage.js";
import CarPageEdit from "./CarPageEdit.js";
import Filters from "./Filters.js";
import Edits from "./Edits.js";
import AboutPage from "./AboutPage.js";

//hooks
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";

//Data
import data from "../data/cars.json";

function Cars({ currentWindow }) {
  const generateCars = () => {
    //Generating cars
    let carsList = [
      "Aston_Martin_Vantage.png",
      "Audi_A8_.png",
      "Audi_e-tron.png",
      "Audi_Q5.png",
      "Audi_Q7.png",
      "BMW_5_Series.png",
      "BMW_M4.png",
      "BMW_X3.png",
      "Force_Motors_Gurkha.png",
      "Ford_Fiesta.png",
      "Ford_Figo.png",
      "Ford_Kuga_2Wd.png",
      "Ford_Mondeo.png",
      "Honda.png",
      "Honda_Amaze.png",
      "Hyundai_Alcazar.png",
      "Hyundai_i20.png",
      "Jaguar_F_TYPE.png",
      "Jeep_Compass.png",
      "Kia_Carens.png",
      "Lexus_RX_450h.png",
      "Mahindra_Bolero_Neo.png",
      "Mahindra_Marazzo.png",
      "Mahindra_XUV700.png",
      "Maruti_Suzuki_Celerio.png",
      "Maruti_Suzuki_XL6.png",
      "Mercedes_AMG-GT-S.png",
      "Mercedes_Benz.png",
      "Mercedes_C180.png",
      "Mercedes_Cabriolet.png",
      "Mercedes_Coupe.png",
      "Mercedes_E-Class-Coupe.png",
      "Mercedes_Roadster.png",
      "Mercedes_Sedan.png",
      "Mercedes_SUV.png",
      "Mercedes_Wagon.png",
      "MG_Astor.png",
      "MG_ZS_EV_Facelift.png",
      "MINI_Cooper.png",
      "Porsche_Taycan.png",
      "Renault_Triber.png",
      "Rolls_Royce.png",
      "Silver_Infiniti_Q60.png",
      "Skoda_Kodiaq.png",
      "Skoda_Kushaq.png",
      "Skoda_Octavia.png",
      "Skoda_Slavia.png",
      "Skoda_Superb.png",
      "Tata_Punch.png",
      "Tata_Tigor.png",
      "Tata_Tigor_EV.png",
      "Toyata_Aygo.png",
      "Toyata_C-HR.png",
      "Toyata_Camry.png",
      "Toyata_Coralla.png",
      "Toyata_Innova_Crysta.png",
      "Toyata_Rav_4Wd.png",
      "Toyata_Yaris.png",
      "Volkswagen_Golf.png",
      "Volkswagen_Phideon.png",
      "Volkswagen_Polo.png",
      "Volkswagen_Taigun.png",
      "Volvo_V40.png",
      "Vw_Golf.png",
    ];

    carsList.forEach(function(car, index) {
      const carPath = car;
      car = car.replace("_", " ");
      car = car.replace("_", " ");
      car = car.replace("_", " ");

      car = car.replace(".png", "");

      carsList[index] = {
        name: car,
        path: "./images/" + carPath,
        price: (Math.floor((Math.random() + 1) * 6 * 10) * 1000).toString(),
        transmission:
          Math.floor(Math.random() * 2) == 1 ? "Manual" : "Automatic",
        motor: Math.floor(Math.random() * 2) == 1 ? "Electric" : "Gas",
        type: Math.floor(Math.random() * 2) == 1 ? "Sport" : "Family",
        color: Math.floor(Math.random() * 2) == 1 ? "Grey" : "Black",
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
      //console.log("Genrated cars");
      //const generatedCars = generateCars();

      //return generatedCars;
      return data[0];
    } else {
      let carsLocal = JSON.parse(localStorage.getItem("cars"));
      console.log("Loaded cars from local storage");
      return carsLocal;
    }
  };
  const [cars, setCars] = useState(loadCars);
  const [filterdCars, setFilterdCars] = useState(cars);

  const [sort, setSort] = useState(data[2]);
  const [filters, setFilters] = useState(data[1]);
  const [carPage, setCarPage] = useState({});

  const saveLocalCars = () => {
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log("Saved cars");
  };
  const resetCars = () => {
    localStorage.removeItem("cars");
    localStorage.removeItem("images");
    setCars(loadCars());
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
  }, [currentWindow]);

  useEffect(() => {
    if (sort !== "") {
      const sorted = [...cars].sort(
        (a, b) => a[sort.split(" ")[0]] - b[sort.split(" ")[0]]
      );
      if (sort.split(" ")[1] == "hl") {
        sorted.reverse();
      }
      setCars(sorted);
    }
  }, [sort]);

  useEffect(() => {
    let stored = cars;
    for (const [key, value] of Object.entries(filters)) {
      if (value !== "All" && value !== "") {
        const filtered = [...cars].filter((car) => car[key] == value);
        stored = filtered.filter((x) =>
          stored.some((item) => item.id === x.id)
        );
      }
    }
    setFilterdCars(stored);
  }, [filters, cars]);

  const limit = 5;
  const [page, setPage] = useState(1);
  const elements = useInfiniteScroll(filterdCars, limit, page);

  if (Object.keys(carPage).length) {
    if (currentWindow === "EditPage") {
      return (
        <>
          {" "}
          <Filters
            setSort={setSort}
            sort={sort}
            setFilters={setFilters}
            filters={filters}
            currentWindow={currentWindow}
            carPage={carPage}
          />
          <CarPageEdit car={carPage} cars={cars} setCars={setCars} />
        </>
      );
    } else {
      return (
        <>
          <Filters
            setSort={setSort}
            sort={sort}
            setFilters={setFilters}
            filters={filters}
            currentWindow={currentWindow}
            carPage={carPage}
          />
          <CarPage car={carPage} />{" "}
        </>
      );
    }
  } else if (currentWindow === "AboutPage") {
    return (
      <>
        <Filters
          setSort={setSort}
          sort={sort}
          setFilters={setFilters}
          filters={filters}
          currentWindow={currentWindow}
          carPage={carPage}
        />
        <AboutPage />
      </>
    );
  } else {
    return (
      <>
        <>
          <Filters
            setSort={setSort}
            sort={sort}
            setFilters={setFilters}
            filters={filters}
            currentWindow={currentWindow}
            carPage={carPage}
          />

          {currentWindow === "EditPage" && (
            <Edits
              uploadCar={uploadCar}
              cars={cars}
              resetCars={resetCars}
              filters={filters}
              sort={sort}
            />
          )}
        </>
        <div className="container-fluid row mx-auto">
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
