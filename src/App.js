
import React from "react";
import { BrowserRouter } from "react-router";
import Routing from "./routes/student.routes";



// import Home from "./pages/homePage.js";

function App() {
  return (
    <>
      <BrowserRouter>
                  <Routing />   
      </BrowserRouter>
    </>
  );
}

export default App;
