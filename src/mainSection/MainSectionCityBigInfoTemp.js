import React from "react";
import "./MainSectionCityBigInfoTempStyles.css";

export default function MainSectionCityBigInfoTemp() {
  return (
    <div className="temInfo">
      <h2>
        Last update on <span className="lastUpdate"></span>
      </h2>
      <span>
        Temperature: <span className="temp">18</span> ℃
      </span>
      <span>
        Humidity: <span className="hum">60</span> %
      </span>
    </div>
  );
}
