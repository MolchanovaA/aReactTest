import React from "react";
import "./HeaderSearchStyles.css";

export default function HeaderSearch() {
  return (
    <form className="searchCity" action="#">
      <input type="text" placeholder="SEARCH" classList="searchField" />
    </form>
  );
}
