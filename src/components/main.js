import React from "react";
import "./main.scss";
import MainTotal from "./main_total";

const Main = () => {
  return (
    <div className="main_container">
      <div>
        <h1>Spending - Last 7 days</h1>
      </div>
      <div>wykres</div>
      <hr></hr>
      <MainTotal />
    </div>
  );
};

export default Main;
