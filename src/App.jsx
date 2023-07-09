import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default function App() {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("us");
  const [mode, setMode] = useState("light");
  function handleCategoryChange(category) {
    setCategory(category);
  }

  function handleCountryChange(country) {
    setCountry(country);
  }
  function switchMode() {
    console.log(mode);
    if (mode == "light") {
      setMode("dark");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      setMode("light");
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }

  useEffect;
  return (
    <>
      <NavBar
        setCategory={handleCategoryChange}
        setCountry={handleCountryChange}
        country={country}
        toggleMode={switchMode}
        mode={mode}
      ></NavBar>
      <News pageSize={15} country={country} category={category} mode={mode}></News>
    </>
  );
}
