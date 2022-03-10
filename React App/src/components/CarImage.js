import React, { useState, useEffect } from "react";

function CarImage({ car }) {
  const [img, setImg] = useState(car.path);

  useEffect(() => {
    if (localStorage.getItem("images") !== null) {
      let imgs = JSON.parse(localStorage.getItem("images"));
      if (typeof imgs[car.id] !== "undefined") {
        console.log("Started");

        const dataImage = imgs[car.id];
        setImg(dataImage);
        console.log("Loaded image from images");
      }
    }
  }, []);

  return <img src={img} />;
}

export default CarImage;
