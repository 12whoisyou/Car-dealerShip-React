import React from "react";

function Edits({ uploadCar, cars, resetCars, filters, sort }) {
  let data =
    "text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify([cars, filters, sort]));
  return (
    <>
      <button className="btn btn-primary mx-2 " onClick={uploadCar}>
        Upload Car
      </button>
      <button className="btn btn-danger " onClick={resetCars}>
        Reset Data
      </button>
      <a
        href={`data: ${data}`}
        download={"data.json"}
        className="btn btn-success mx-2 "
        onClick={() => {
          const downloadFile = (fileFormat, data, fileName) => {
            const linkSource = "data:" + fileFormat + ";base64" + data;
            const downloadLink = document.createElement("a");
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
          };
          if (localStorage.getItem("images") !== null) {
            let imgs = JSON.parse(localStorage.getItem("images"));
            for (const [key, value] of Object.entries(imgs)) {
              const obj = cars.find((x) => x.id === parseInt(key));
              downloadFile("png", value, obj.name + ".png");
              console.log("This ain't working", obj);
            }
          }
        }}
      >
        Download JSON
      </a>
    </>
  );
}

export default Edits;
