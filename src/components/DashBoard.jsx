
import React from 'react';
import SideBar from './shared/SideBar.jsx';
import { DashboardCards, StudentBar } from './shared/DashBoardCard.jsx';


const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="col-2">
                        <SideBar />
                    </div>
                    <div className="col-10 container-fluid p-3">
                        <div className="row flex-column align-items-center justify-content-between gap-4">
                            <div className="col ">
                                <StudentBar />
                            </div>
                            <div className="col">
                                <DashboardCards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
