import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

import Desk from "./containers/Desk";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <div className="container">
        <Link to="/" className="App__title">
          Персональные доски
        </Link>
        <div className="App__boards-wrapper">
          <Desk />
        </div>
      </div>
    </div>
  );
}

export default App;
