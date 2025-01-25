import { Link } from "react-router";






const SideBar = () => {
    const dashComp = [
        {
            name: "Courses",
            link:"./DashBoardCard.jsx"
        },     
        {
            name: "Enroll", 
            link:"./EnquiryForm.jsx"
        },
    ]
    return (
        <>
            <div className="border-end vh-100 rounded-2 mt-3" style={{ width: "250px",backgroundColor:"#882556" }}>
                <ul className="list-group list-group-flush p-2 d-flex gap-3 ">
                    {dashComp.map((value, i) => {
                        return (
                            <>
                                <li className="col p-1 btn btn-light"  key={"Navlink".i}>
                                   <Link to={"/"}><p className="text-dark h5">{value.name}</p></Link>
                                </li>
                            </>
                        )
                    })}
                </ul >
            </div>
        </>
    )
}

export default SideBar;