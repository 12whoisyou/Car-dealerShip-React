import React, { useState, useEffect } from "react";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import "./carpage.css";
import Selection from "./Selection.js";

function CarPage({ car, cars, setCars }) {
  const [img, setImg] = useState(car.path);

  const onSave = ({ name, value }) => {
    console.log(name, value);
    const updatedCars = cars.filter((i) => i.id !== car.id);
    car[name] = value;
    updatedCars.splice(car.id, 0, car);
    console.log(car);
    setCars(updatedCars);
  };

  const storeBase64Image = (img) => {
    let reader = new FileReader();
    reader.onload = () => {
      let imgs = JSON.parse(localStorage.getItem("images"));
      const image = { [car.id]: reader.result };
      imgs = Object.assign(imgs, image);
      console.log(imgs);
      localStorage.setItem("images", JSON.stringify(imgs));
    };
    reader.readAsDataURL(img);
  };

  const carImageHandler = (e) => {
    console.log("Calling the img saver / loader");
    let img = e.target.files[0];

    setImg(URL.createObjectURL(img));

    if (localStorage.getItem("images") === null) {
      localStorage.setItem("images", JSON.stringify({}));
    }
    storeBase64Image(img);
  };

  useEffect(() => {
    if (localStorage.getItem("images") !== null) {
      let imgs = JSON.parse(localStorage.getItem("images"));
      if (typeof imgs[car.id] !== "undefined") {
        const dataImage = imgs[car.id];
        setImg(dataImage);
        console.log("Loaded image from images");
      }
    }
  }, []);
  return (
    <>
      <div className="container-fluid row m-2">
        <input
          type="file"
          id="uploadBannerImage"
          accept="image/*"
          name="helo"
          onChange={carImageHandler}
        />

        <div className="col-lg-6 row">
          <div className="container-fluid">
            <img src={img}></img>
          </div>

          <div className="container-fluid">
            <EditText name="name" defaultValue={car.name} onSave={onSave} />
            <EditText
              name="price"
              defaultValue={car.price}
              onSave={onSave}
              type="number"
            />
            <Selection
              Buttons={"Automatic Manual!Gas Electric!2 3 4 5"}
              onSave={onSave}
              car={car}
              cars={cars}
              setCars={setCars}
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
