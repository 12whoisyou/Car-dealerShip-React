import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
//components
import NavBar from "./components/NavBar.js";
import Cars from "./components/Cars.js";

//rfce will help you create components
function App() {
  const [currentWindow, setCurrentWindow] = useState("Cars");

  return (
    <>
      <NavBar
        setCurrentWindow={setCurrentWindow}
        currentWindow={currentWindow}
      />
      <Cars currentWindow={currentWindow} />
    </>
  );
}

export default App;
