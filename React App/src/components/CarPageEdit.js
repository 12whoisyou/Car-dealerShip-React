import React from "react";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import "./carpage.css";
function CarPage({ car, cars, setCars }) {
  const onSave = ({ name, value }) => {
    console.log(name, value);
    const updatedCars = cars.filter((i) => i.id !== car.id);
    car[name] = value;
    updatedCars.splice(car.id, 0, car);
    console.log(car);
    setCars(updatedCars);
  };

  return (
    <>
      <div className="container-fluid row m-2">
        <input
          type="file"
          id="uploadBannerImage"
          accept="image/*"
          name="helo"
        />
        <div className="col-lg-6 row">
          <div className="container-fluid">
            <img src={car.path}></img>
          </div>

          <div className="container-fluid">
            <EditText name="name" defaultValue={car.name} onSave={onSave} />
            <EditText
              name="price"
              defaultValue={car.price}
              onSave={onSave}
              type="number"
            />
          </div>
        </div>

        <div className="col-lg-6 row">
          <EditTextarea
            name="description"
            defaultValue={car.description}
            rows="8"
            onSave={onSave}
          />
        </div>
      </div>
    </>
  );
}

export default CarPage;
