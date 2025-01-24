import React, { useState } from "react";
import { CoursesCard } from "./card";
import { StdProfileBtn } from "./buttons";


;

export const StudentId = () => {

  const [img, setImg] = useState("https://i.pinimg.com/736x/10/ad/45/10ad45d94be1e0c70da38265bfd7933c.jpg");
  const [stdName, setStdName] = useState("Aniket Bhalerao");

  return (
    <>
      <div className="row">       
        <div className="col d-flex flex-column justify-content-center">
          <h6 className="m-0 text-white">Welcome</h6>
          <h2 className="m-0 text-white h3">{stdName}</h2>
        </div>
        <div style={{ width: "60px",cursor:"pointer" }} className="col-3 nav-link">
          <img className="img-fluid img-thumbnail rounded-circle" src={img} alt="" />
        </div>
      </div>
    </> 
  )
}
// =======================================

export const StudentBar = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <StudentId />
        </div>
      </div>
    </>
  )
}
// ==========================================


export const DashboardCards = () => {
  return (
    <>
      <div class="row d-flex">
        <CoursesCard />
      </div>
    </>
  );
};


