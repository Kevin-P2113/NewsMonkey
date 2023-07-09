import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default function App() {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("us");

  function handleCategoryChange(category) {
    setCategory(category);
  }

  function handleCountryChange(country){
    setCountry(country)
  }

  useEffect
  return (
    <>
      <NavBar setCategory={handleCategoryChange} setCountry={handleCountryChange}></NavBar>
      <News pageSize={15} country={country} category={category}></News>
    </>
  );
}
