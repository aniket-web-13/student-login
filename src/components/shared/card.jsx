
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
                        <div class="col-3 p-3">
                            <div class="card rounded-2 py-2 d-flex gap-2">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={value.src} class="" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title h4">{value.name}</h2>
                                    <p class="card-text h6">Certificate Course - {value.cCourse}</p>
                                    <p class="card-text h6">Advanced Course - {value.aCourse}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}