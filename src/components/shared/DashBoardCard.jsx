import React, { useState } from "react";
import { CoursesCard } from "./card";
import { StdProfileBtn } from "./buttons";
// import { StdProfileBtn } from "./buttons";


;

export const StudentId = () => {

  const [img, setImg] = useState("https://i.pinimg.com/736x/10/ad/45/10ad45d94be1e0c70da38265bfd7933c.jpg");
  const [stdName, setStdName] = useState("Aniket Bhalerao");
  // const pathName = window.location.pathname;

  return (
    <>
      <div className="row">       
        <div className="col d-flex flex-column justify-content-center">
          <h6 className="m-0 text-white">Welcome</h6>
          <h2 className="m-0 text-white h3">{stdName}</h2>
        </div>
        <div style={{width:"85px"}} class="nav-item dropdown">
          <div style={{ width: "60px",cursor:"pointer" }} className="col-3 nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="img-fluid img-thumbnail rounded-circle" src={img} alt="" />
              <ul style={{left:"-80px"}} class="dropdown-menu">
                <li className="dropdown-item">
                  <StdProfileBtn 
                    btnName={"Your Profile"}
                    btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>}
                  />
                </li>
                <li className="dropdown-item">
                  <StdProfileBtn 
                    btnName={"Sign out"}
                    btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>}                  
                  />  
                </li>           
              </ul>
          </div>
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


