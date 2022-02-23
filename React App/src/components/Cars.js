//libs
import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";

//componentes
import Car from "./Car.js";
import CarPage from "./CarPage.js";

//hooks
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";

//Data
import data from "../data/cars.json";

function Cars({ currentWindow }) {
  const [cars, setCars] = useState([
    {
      name: "Ford Fiesta",
      path: "/images/Ford Fiesta.png",
      price: "42",
      id: 0,
    },
    {
      name: "Ford Kuga 2Wd",
      path: "/images/Ford Kuga 2Wd.png",
      price: "93",
      id: 1,
    },
    {
      name: "Ford Mondeo",
      path: "/images/Ford Mondeo.png",
      price: "48",
      id: 2,
    },
    {
      name: "Mercedes C180",
      path: "/images/Mercedes C180.png",
      price: "5",
      id: 3,
    },
    {
      name: "Toyata Aygo",
      path: "/images/Toyata Aygo.png",
      price: "73",
      id: 4,
    },
    {
      name: "Toyata C-HR",
      path: "/images/Toyata C-HR.png",
      price: "6",
      id: 5,
    },
    {
      name: "Toyata Coralla",
      path: "/images/Toyata Coralla.png",
      price: "64",
      id: 6,
    },
    {
      name: "Toyata Rav 4Wd",
      path: "/images/Toyata Rav 4Wd.png",
      price: "65",
      id: 7,
    },
    {
      name: "Toyata Yaris",
      path: "/images/Toyata Yaris.png",
      price: "36",
      id: 8,
    },
    {
      name: "Volkswagen Golf",
      path: "/images/Volkswagen Golf.png",
      price: "78",
      id: 9,
    },
    {
      name: "Volvo V40",
      path: "/images/Volvo V40.png",
      price: "64",
      id: 10,
    },
    {
      name: "Lexus RX 450h",
      path: "/images/Lexus RX 450h.png",
      price: "55",
      id: 11,
    },
    {
      name: "Audi A8 ",
      path: "/images/Audi A8 .png",
      price: "37",
      id: 12,
    },
    {
      name: "Honda",
      path: "/images/Honda.png",
      price: "99",
      id: 13,
    },
    {
      name: "Rolls Royce",
      path: "/images/Rolls Royce.png",
      price: "5",
      id: 14,
    },
    {
      name: "Silver Infiniti Q60",
      path: "/images/Silver Infiniti Q60.png",
      price: "12",
      id: 15,
    },
    {
      name: "Aston Martin Vantage",
      path: "/images/Aston Martin Vantage.png",
      price: "11",
      id: 16,
    },
    {
      name: "Volkswagen Phideon",
      path: "/images/Volkswagen Phideon.png",
      price: "37",
      id: 17,
    },
    {
      name: "Jaguar F TYPE",
      path: "/images/Jaguar F TYPE.png",
      price: "15",
      id: 18,
    },
    {
      name: "Mercedes Roadster",
      path: "/images/Mercedes Roadster.png",
      price: "99",
      id: 19,
    },
    {
      name: "Mercedes Sedan",
      path: "/images/Mercedes Sedan.png",
      price: "69",
      id: 20,
    },
    {
      name: "Mercedes Coupe",
      path: "/images/Mercedes Coupe.png",
      price: "63",
      id: 21,
    },
    {
      name: "Mercedes AMG-GT-S",
      path: "/images/Mercedes AMG-GT-S.png",
      price: "4",
      id: 22,
    },
    {
      name: "Mercedes SUV",
      path: "/images/Mercedes SUV.png",
      price: "56",
      id: 23,
    },
    {
      name: "Mercedes Wagon",
      path: "/images/Mercedes Wagon.png",
      price: "20",
      id: 24,
    },
    {
      name: "Mercedes E-Class-Coupe",
      path: "/images/Mercedes E-Class-Coupe.png",
      price: "41",
      id: 25,
    },
    {
      name: "Mercedes Cabriolet",
      path: "/images/Mercedes Cabriolet.png",
      price: "54",
      id: 26,
    },
    {
      name: "Audi e-tron",
      path: "/images/Audi e-tron.png",
      price: "88",
      id: 27,
    },
    {
      name: "Audi Q5",
      path: "/images/Audi Q5.png",
      price: "94",
      id: 28,
    },
    {
      name: "Audi Q7",
      path: "/images/Audi Q7.png",
      price: "43",
      id: 29,
    },
    {
      name: "BMW 5 Series",
      path: "/images/BMW 5 Series.png",
      price: "0",
      id: 30,
    },
    {
      name: "BMW M4",
      path: "/images/BMW M4.png",
      price: "80",
      id: 31,
    },
    {
      name: "BMW X3",
      path: "/images/BMW X3.png",
      price: "86",
      id: 32,
    },
    {
      name: "Force Motors Gurkha",
      path: "/images/Force Motors Gurkha.png",
      price: "17",
      id: 33,
    },
    {
      name: "Ford Figo",
      path: "/images/Ford Figo.png",
      price: "98",
      id: 34,
    },
    {
      name: "Honda Amaze",
      path: "/images/Honda Amaze.png",
      price: "66",
      id: 35,
    },
    {
      name: "Hyundai Alcazar",
      path: "/images/Hyundai Alcazar.png",
      price: "98",
      id: 36,
    },
    {
      name: "Hyundai i20",
      path: "/images/Hyundai i20.png",
      price: "67",
      id: 37,
    },
    {
      name: "Jeep Compass",
      path: "/images/Jeep Compass.png",
      price: "33",
      id: 38,
    },
    {
      name: "Kia Carens",
      path: "/images/Kia Carens.png",
      price: "68",
      id: 39,
    },
    {
      name: "Mahindra Bolero Neo",
      path: "/images/Mahindra Bolero Neo.png",
      price: "76",
      id: 40,
    },
    {
      name: "Mahindra Marazzo",
      path: "/images/Mahindra Marazzo.png",
      price: "21",
      id: 41,
    },
    {
      name: "Mahindra XUV700",
      path: "/images/Mahindra XUV700.png",
      price: "35",
      id: 42,
    },
    {
      name: "Maruti Suzuki Celerio",
      path: "/images/Maruti Suzuki Celerio.png",
      price: "85",
      id: 43,
    },
    {
      name: "Maruti Suzuki XL6",
      path: "/images/Maruti Suzuki XL6.png",
      price: "66",
      id: 44,
    },
    {
      name: "Mercedes Benz",
      path: "/images/Mercedes Benz.png",
      price: "96",
      id: 45,
    },
    {
      name: "MG Astor",
      path: "/images/MG Astor.png",
      price: "64",
      id: 46,
    },
    {
      name: "MG ZS EV Facelift",
      path: "/images/MG ZS EV Facelift.png",
      price: "28",
      id: 47,
    },
    {
      name: "MINI Cooper",
      path: "/images/MINI Cooper.png",
      price: "53",
      id: 48,
    },
    {
      name: "Porsche Taycan",
      path: "/images/Porsche Taycan.png",
      price: "93",
      id: 49,
    },
    {
      name: "Renault Triber",
      path: "/images/Renault Triber.png",
      price: "71",
      id: 50,
    },
    {
      name: "Skoda Kodiaq",
      path: "/images/Skoda Kodiaq.png",
      price: "38",
      id: 51,
    },
    {
      name: "Skoda Kushaq",
      path: "/images/Skoda Kushaq.png",
      price: "81",
      id: 52,
    },
    {
      name: "Skoda Octavia",
      path: "/images/Skoda Octavia.png",
      price: "50",
      id: 53,
    },
    {
      name: "Skoda Slavia",
      path: "/images/Skoda Slavia.png",
      price: "72",
      id: 54,
    },
    {
      name: "Skoda Superb",
      path: "/images/Skoda Superb.png",
      price: "24",
      id: 55,
    },
    {
      name: "Tata Punch",
      path: "/images/Tata Punch.png",
      price: "78",
      id: 56,
    },
    {
      name: "Tata Tigor EV",
      path: "/images/Tata Tigor EV.png",
      price: "30",
      id: 57,
    },
    {
      name: "Tata Tigor",
      path: "/images/Tata Tigor.png",
      price: "7",
      id: 58,
    },
    {
      name: "Toyata Camry",
      path: "/images/Toyata Camry.png",
      price: "82",
      id: 59,
    },
    {
      name: "Toyata Innova Crysta",
      path: "/images/Toyata Innova Crysta.png",
      price: "5",
      id: 60,
    },
    {
      name: "Volkswagen Polo",
      path: "/images/Volkswagen Polo.png",
      price: "61",
      id: 61,
    },
    {
      name: "Volkswagen Taigun",
      path: "/images/Volkswagen Taigun.png",
      price: "17",
      id: 62,
    },
  ]);
  const [sort, setSort] = useState("");

  const [carPage, setCarPage] = useState("");

  useEffect(() => {
    console.log("Fuck off");
    setCarPage("");
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
  if (carPage === "") {
    return (
      <>
        <select
          name="dropdown"
          className="me-auto"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="price high to low">Price high to low</option>
          <option value="price low to high">Price low to high</option>
        </select>
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
  } else if (cars.find((c) => c.id === carPage) !== null) {
    return <CarPage car={cars.find((c) => c.id === carPage)} />;
  }
}
export default Cars;
