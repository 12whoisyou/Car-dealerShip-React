import React from "react";
import logo from "../data/LOGO.png";
function AboutPage() {
  return (
    <div className="container-fluid row">
      <div className="col-9">
        <h2 className="m-3">
          A simple project to learn react. If your interested in the source code
          check out on{" "}
          <a href="https://github.com/12whoisyou/Car-dealerShip-React">
            github
          </a>
        </h2>
        <h2 className="m-3">
          To edit click the edit page and edit as you wish.
        </h2>
        <h2 className="m-3">
          This website is not meant to be breath taking pretty but get the job
          done. The only thing meant to be pretty and easily understanable is my
          code
        </h2>
      </div>
      <div className="col-3 ">
        {" "}
        <img src={logo} />
      </div>
    </div>
  );
}

export default AboutPage;
