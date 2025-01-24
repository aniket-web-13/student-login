import Dashboard from "../components/DashBoard.jsx";
// import { RightCanva } from "../components/shared/DashBoardCard.jsx";
// import { CanvasRight } from "../components/shared/buttons.jsx";
// import StudentLogin from "../components/shared/Login.jsx";
import Navbar from "../components/shared/Nav.jsx";



const Home = () => {
    return (
        <>
            {/* <StudentLogin /> */}
            <Navbar />            
            <Dashboard />                        
        </>
    )
}

export default Home;