
import React, { useState } from 'react';
// import SideBar from './shared/SideBar.jsx';
import { DashboardCards } from './shared/DashBoardCard.jsx';
import EnquiryFrom from './shared/EnquiryForm.jsx';


const Dashboard = () => {

    const [activeComponent, setActiveComponent] = useState("DashboardCards");

    const components = {
        DashboardCards:<DashboardCards />,
        EnquiryFrom:<EnquiryFrom />
    }
    

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="">
                    <div className="border-end vh-100 rounded-2 mt-3" style={{ width: "250px",backgroundColor:"#882556" }}>
                        <ul className="list-group list-group-flush p-2 d-flex gap-3 ">
                            <li className="col p-1 btn btn-light"  key={"Navlink".i}>
                                <p className="text-dark h5" onClick={() => setActiveComponent("DashboardCards")}>Courese</p>
                            </li>
                            <li className="col p-1 btn btn-light"  key={"Navlink".i}>
                                <p className="text-dark h5" onClick={() => setActiveComponent("EnquiryFrom")}>Enroll</p>
                            </li>
                        </ul >
                    </div>
                </div>
                    <div className="col p-3">
                        <div className="row">
                           {components[activeComponent]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
