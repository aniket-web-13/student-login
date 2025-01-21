import React from "react";
import { Routes, Route } from "react-router";


import Home from "../pages/homePage";






function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
    </Routes>
  );
}
export default Routing;