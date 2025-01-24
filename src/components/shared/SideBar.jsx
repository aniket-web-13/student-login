





const SideBar = () => {
    const dashComp = [
        {
            name: "Courses"
        },     
        {
            name: "Enroll"
        },     
    ]
    return (
        <>
            <div className="border-end vh-100 rounded-2 mt-3" style={{ width: "250px",backgroundColor:"#882556" }}>
                <ul className="list-group list-group-flush p-2 d-flex gap-3 ">
                    {dashComp.map((value) => {
                        return (
                            <>
                                <div className="col p-1 btn btn-light">
                                    <p className="text-dark h5">{value.name}</p>
                                </div>
                            </>
                        )
                    })}
                </ul >
            </div>
        </>
    )
}

export default SideBar;