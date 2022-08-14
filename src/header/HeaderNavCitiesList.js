import React from "react";
import "./HeaderNavCitiesListStyles.css";

export default function HeaderNavCitiesList() {
  return (
    <nav class="navBarCities">
      <span className="city_1 choosenBigBar test">
        <span className="defaultCity">Odessa</span>
      </span>
      <span className="city_2">
        <span>London</span>
      </span>
      <span className="city_3">
        <span>Paris</span>
      </span>
      <span className="city_4">
        <span>Lisbon</span>
      </span>
    </nav>
  );
}
