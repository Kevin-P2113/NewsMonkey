import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News"

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <News pageSize="15"></News>

    </>
  )
}
