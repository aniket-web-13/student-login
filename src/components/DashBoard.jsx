
import React, { useState } from 'react';
import SideBar from './shared/SideBar.jsx';
import { DashboardCards } from './shared/DashBoardCard.jsx';
import EnquiryFrom from './shared/EnquiryForm.jsx';


const Dashboard = () => {

    const [show, setShow] = useState()

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <SideBar />
                    </div>
                    <div className="col p-3">
                        <div className="row">
                            {/* <div className="col-12" onClick={() => setShow()}>{show}</div> */}
                            {show ? <DashboardCards /> : <EnquiryFrom />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
