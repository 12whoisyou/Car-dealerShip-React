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

  const getBase64Image = (img) => {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  };

  const carImageHandler = (e) => {
    console.log("Calling the img saver / loader");
    let img = e.target.files[0];
    setImg(URL.createObjectURL(img));

    if (localStorage.getItem("images") === null) {
      localStorage.setItem("images", JSON.stringify({}));
    }

    let imgs = JSON.parse(localStorage.getItem("images"));
    imgs[car.id] = getBase64Image(img);

    localStorage.setItem("images", JSON.stringify(img));
    console.log(imgs);
    console.log(img);
  };

  useEffect(() => {
    if (localStorage.getItem("images") !== null) {
      let imgs = JSON.parse(localStorage.getItem("images"));
      if (imgs[car.id] !== null) {
        const dataImage = imgs[car.id];
        setImg("data:image/png;base64," + dataImage);
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
            <Selection Buttons={"Helo Button|your choices|Yeah you choice"} />
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
