import React from "react";
import HeaderNavCitiesList from "./HeaderNavCitiesList";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header>
      <HeaderNavCitiesList />
      <HeaderSearch />
    </header>
  );
}
