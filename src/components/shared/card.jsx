
// export const CourseCard = ({ cardtitle }) => {
//     return (
//         <>
{/* <div className="col-md-4 ">
    <div className={`card text-dark mb-3`}>
        <div className="card-body">
            <h5 className="card-title">{cardtitle}</h5>
            <p className="card-text fs-3">{cardtitle}</p>
        </div>
    </div>
</div> */}
//         </>
//     )
// }

export const CoursesCard = () => {
    const coursesInfo = [
        {
            src: "https://treemiti.com/img/graphic-design.png",
            name: "Graphics Designing",
            cCourse: "CGD",
            aCourse: "AGD",
        },
        {
            src: "https://treemiti.com/img/graphic-design.png",
            name: "Graphics Designing",
            cCourse: "CGD",
            aCourse: "AGD",
        },
        {
            src: "https://treemiti.com/img/graphic-design.png",
            name: "Graphics Designing",
            cCourse: "CGD",
            aCourse: "AGD",
        },
        {
            src: "https://treemiti.com/img/graphic-design.png",
            name: "Graphics Designing",
            cCourse: "CGD",
            aCourse: "AGD",
        },
        {
            src: "https://treemiti.com/img/graphic-design.png",
            name: "Graphics Designing",
            cCourse: "CGD",
            aCourse: "AGD",
        },
        {
            src: "https://treemiti.com/img/graphic-design.png",
            name: "Graphics Designing",
            cCourse: "CGD",
            aCourse: "AGD",
        },

    ]
    return (
        <>
            {coursesInfo.map((value) => {
                return (
                    <>
                        <div class="col-3 p-0">
                            <div class="card rounded-4 p-4 d-flex gap-2">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={value.src} class="" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title">{value.name}</h2>
                                    <p class="card-text h5">Certificate Course - {value.cCourse}</p>
                                    <p class="card-text h5">Advanced Course - {value.aCourse}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}