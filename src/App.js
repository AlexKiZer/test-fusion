import React from "react";
import "./App.css";

import Desk from "./containers/Desk";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <div className="container">
        <h2 className="App__title">Персональные доски</h2>
        <div className="App__boards-wrapper">
          <Desk />
        </div>
      </div>
    </div>
  );
}

export default App;
