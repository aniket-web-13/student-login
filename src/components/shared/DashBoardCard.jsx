import React, { use, useState } from "react";
import { StudentBtn } from "./buttons";
import { CoursesCard } from "./card";
// import { CourseCard } from "./card.jsx";

;

export const StudentId = () => {

  const [img, setImg] = useState("https://i.pinimg.com/736x/10/ad/45/10ad45d94be1e0c70da38265bfd7933c.jpg");
  const [stdName, setStdName] = useState("Aniket Bhalerao");

  return (
    <>
      <div className="row">
        <div style={{ width: "90px" }} className="col-3 --bs-aspect-ratio: 70%;">
          <img className="img-fluid img-thumbnail rounded-circle" src={img} alt="" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h6 className="m-0">Welcome</h6>
          <h2 className="m-0">{stdName}</h2>
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
        <div className="col-sm">
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
      <div class="row d-flex align-items-center justify-content-center gap-3">
        <CoursesCard />
      </div>
    </>
  );
};
