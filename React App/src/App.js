import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
//components
import NavBar from "./components/NavBar.js";
import Cars from "./components/Cars.js";

import AboutPage from "./components/AboutPage.js";

//rfce will help you create components
function App() {
  const [currentWindow, setCurrentWindow] = useState("Cars");

  switch (currentWindow) {
    case "Cars":
    case "Cars2":
      return (
        <>
          <NavBar
            setCurrentWindow={setCurrentWindow}
            currentWindow={currentWindow}
          />
          <Cars currentWindow={currentWindow} />
        </>
      );
    case "AboutPage":
      return (
        <>
          <NavBar
            setCurrentWindow={setCurrentWindow}
            currentWindow={currentWindow}
          />
          <AboutPage />
        </>
      );
    case "EditPage":
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
}

export default App;
