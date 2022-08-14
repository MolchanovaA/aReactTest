import React from "react";
import "./MainSectionBigInfoGeneralStyles.css";

export default function MainSectionBigInfoGeneral() {
  return (
    <div className="generalInfo">
      <img
        classList="icon"
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="icon"
      />
      <span className="weatherDescrioption">Sunny</span>
    </div>
  );
}
