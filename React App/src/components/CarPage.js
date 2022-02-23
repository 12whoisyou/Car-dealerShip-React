import React from "react";

function CarPage(car) {
  return (
    <div className="container-fluid row m-2">
      <div className="col-lg-6 row">
        <div className="container-fluid">
          <img src={car.car.path}></img>
        </div>

        <div className="container-fluid">
          <h1>{car.car.name}</h1>
          <h2>{car.car.price + " 000 Kr"}</h2>
        </div>
      </div>

      <div className="col-lg-6 row">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed
        augue lacus viverra vitae congue eu. Placerat orci nulla pellentesque
        dignissim. Semper auctor neque vitae tempus quam pellentesque nec. Sed
        pulvinar proin gravida hendrerit. Nullam non nisi est sit amet facilisis
        magna. Hendrerit gravida rutrum quisque non tellus orci. Laoreet id
        donec ultrices tincidunt arcu non sodales. Sodales neque sodales ut
        etiam sit amet nisl purus. Tortor posuere ac ut consequat semper viverra
        nam libero. Pellentesque nec nam aliquam sem et tortor.
      </div>
    </div>
  );
}

export default CarPage;
