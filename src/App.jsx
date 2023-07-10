import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("us");
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);
  function handleCategoryChange(category) {
    setCategory(category);
  }

  function handleCountryChange(country) {
    setCountry(country);
  }
  function switchMode() {
    if (mode == "light") {
      setMode("dark");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      setMode("light");
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }
  function changeProgress(num) {
    setProgress(num);
  }

  useEffect;
  return (
    <>
      <div>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
      <NavBar
        setCategory={handleCategoryChange}
        setCountry={handleCountryChange}
        country={country}
        toggleMode={switchMode}
        mode={mode}
      ></NavBar>
      <News
        pageSize={15}
        country={country}
        category={category}
        mode={mode}
        changeProgress={changeProgress}
      ></News>
    </>
  );
}
