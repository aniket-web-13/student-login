
import React from 'react';
import SideBar from './shared/SideBar.jsx';
import { DashboardCards } from './shared/DashBoardCard.jsx';


const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <SideBar />
                    </div>
                    <div className="col-10 p-3">
                        <div className="row d-flex gap-4">
                            <div className="col-12">
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
