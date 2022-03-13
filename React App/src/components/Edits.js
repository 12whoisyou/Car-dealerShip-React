import React from "react";

function Edits({ uploadCar, cars, resetCars }) {
  let data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cars));
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
          const downloadBase64File = (contentType, base64Data, fileName) => {
            const linkSource = `data:${contentType};base64,${base64Data}`;
            const downloadLink = document.createElement("a");
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
          };
          let imgs = JSON.parse(localStorage.getItem("images"));
          console.log(imgs);
          for (const [key, value] of Object.entries(imgs)) {
            const obj = cars.filter((x) => x.id === key);
            downloadBase64File("png", value, "Caught a vibe.png");
            console.log("This ain't working");
          }
        }}
      >
        Download JSON
      </a>
    </>
  );
}

export default Edits;
