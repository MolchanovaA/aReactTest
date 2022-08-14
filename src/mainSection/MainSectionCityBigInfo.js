import React from "react";
import MainSectionBigInfoGeneral from "./MainSectionBigInfoGeneral";

import MainSectionCityBigInfoTemp from "./MainSectionCityBigInfoTemp";

export default function MainSectionCityBigInfo() {
  return (
    <div className="mainCity__bigInfo">
      <MainSectionCityBigInfoTemp />
      <MainSectionBigInfoGeneral />
    </div>
  );
}
