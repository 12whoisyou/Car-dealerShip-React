import React from "react";

import NavButton from "./NavButton.js";

function NavBar({ setCurrentWindow, currentWindow }) {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <ul className="nav nav-tabs mb-2">
      <li className="nav-item mx-3">
        <button
          className="btn-lg disabled font-weight-bold nav-link text-black "
          href="#"
          onClick={refreshPage}
          style={{ fontSize: 2 + "vw" }}
        >
          Car DealerShip
        </button>
      </li>
      <NavButton
        value="Cars"
        text="Cars"
        setCurrentWindow={setCurrentWindow}
        currentWindow={currentWindow}
      />
      <NavButton
        value="EditPage"
        text="Edit"
        setCurrentWindow={setCurrentWindow}
        currentWindow={currentWindow}
      />
      <NavButton
        value="AboutPage"
        text="About"
        setCurrentWindow={setCurrentWindow}
        currentWindow={currentWindow}
      />
    </ul>
  );
}

export default NavBar;
