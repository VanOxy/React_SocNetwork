import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="nav"></div>
      <div className="content"></div>
    </div>
  );
};

export default App;
