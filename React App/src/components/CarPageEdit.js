import React from "react";
import EdiText from "react-editext";

import "./carpage.css";
function CarPage({ car, cars, setCars }) {
  const onSave = (val, self) => {
    const updatedCars = cars.filter((i) => i.id !== car.id);
    car[self.id] = val;
    updatedCars.splice(car.id, 0, car);
    console.log(car);
    setCars(updatedCars);
  };

  /** var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(car));
        <a href={`data: ${data}`} download={"data.json"}>
        Download JSON
      </a> */
  return (
    <div className="container-fluid row m-2">
      <div className="col-lg-6 row">
        <div className="container-fluid">
          <img src={car.path}></img>
        </div>

        <div className="container-fluid">
          <h1>{car.name}</h1>
          <h2>{car.price + " 000 Kr"}</h2>
        </div>
      </div>

      <div className="col-lg-6 row">
        <EdiText
          cancelOnUnfocus
          viewContainerClassName="my-custom-view-wrapper"
          type="textarea"
          inputProps={{
            className: "textarea",
            id: "description",
            placeholder: "Type your content here",
            style: {
              outline: "none",
              width: "100%",
            },
            rows: 15,
          }}
          saveButtonContent="Apply"
          cancelButtonContent={<strong>Cancel</strong>}
          editButtonContent="Edit Description"
          value={car.description}
          onSave={onSave}
          submitOnEnter={true}
        />
      </div>
    </div>
  );
}

export default CarPage;