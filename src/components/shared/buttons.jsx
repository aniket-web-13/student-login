// import { useState } from "react"

// export const StudentBtn = () => {

//     const [alert, setAlert] = useState("1")


//     return (
//         <>
//             {/* <div className="row">
//                 <div className="col-8">
//                     <form class="d-flex form-control rounded-5" role="search">
//                         <input style={{ width: "700px" }} class="rounded-5 me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button id="stdSearch" class="btn rounded-4" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//                         </svg></button>
//                     </form>
//                 </div>
//                 <div className="col-2">
//                     <button type="button" class="btn btn-primary position-relative">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
//                             <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
//                         </svg>
//                         <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
//                             <span class="visually-hidden">{alert}</span>
//                         </span>
//                     </button>
//                 </div>
//             </div> */}
//         </>
//     )
// }


export const Navilink = () => {
    const navlink =[
        {
            name:"Home",
            link:""
        },
        {
            name:"About",
            link:""
        },
        {
            name:"Contact",
            link:""
        },
    ]
    return(
        <>
         <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">           
            {navlink.map((value) => {
                return(
                    <>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">{value.name}</a>
                        </li>
                    </>
                )
            })}
          </ul>
        </div>
        </>
    )
}

export const HamBtn = () => {
    return(
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        </>
    )
}

export const LogoBtn = () => {
    return(
        <>
            <a className="navbar-brand" href="#a">
              Treemiti Informatics
            </a>
        </>
    )
}

export const StdProfileBtn = ({btnName,btnIcon}) => {
    return(
        <>
            <div className="d-flex gap-2 align-items-center">{btnIcon}{btnName}</div>
        </>
    )
}

