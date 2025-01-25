import React from "react";
import { LogoBtn, Navilink } from "./buttons";
import { StudentBar } from "./DashBoardCard";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#882556" }} className="navbar navbar-expand-lg navbar-dark">
       <div class="container-fluid">
          <LogoBtn />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Navilink />
          <StudentBar />
        </div>
    </nav>       
  );
};

export default Navbar;
