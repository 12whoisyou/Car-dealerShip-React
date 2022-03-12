import React, { useState, useEffect } from "react";

import "./carImage.css";
function CarImage({ car }) {
  const [img, setImg] = useState(car.path);

  useEffect(() => {
    if (localStorage.hasOwnProperty("images")) {
      let imgs = JSON.parse(localStorage.getItem("images"));
      if (typeof imgs[car.id] !== "undefined") {
        console.log("Started");

        const dataImage = imgs[car.id];
        setImg(dataImage);
        console.log("Loaded image from images");
      }
    } else {
      setImg(car.path);
    }
  }, [car]);

  return <img src={img} />;
}

export default CarImage;
