import React from "react";

function NavButton({ setCurrentWindow, currentWindow, value, text }) {
  const windowHandler = (e) => {
    if (currentWindow === "Cars" && e.target.value === "Cars") {
      setCurrentWindow("Cars2");
    } else {
      setCurrentWindow(e.target.value);
    }
  };

  return (
    <li className="nav-item">
      <button
        onClick={windowHandler}
        className={
          "nav-link text-black btn-lg " +
          (currentWindow === value ? "active" : "")
        }
        style={{ fontSize: 2 + "vw" }}
        value={value}
      >
        {text}
      </button>
    </li>
  );
}

export default NavButton;
