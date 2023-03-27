import React from "react"


const CardDetails = ({props}) => {

  console.log(props)
    return (
        <>

         <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qveVZoV6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/if0w9fs7g4hk8sftjyo9.jpg" className="card-img-top" alt="Cover image for Weekly web development resources #124" />
        <div className="card-body">
          <div className="d-flex">
            <div className="card__user">
              <img className="rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg" alt="Vicent Will" />
            </div>
            <div className="card__user__data d-flex flex-column ps-2">
              <strong className="fw-bolder">Vicent Will</strong>
              <small className="text-muted">Posted on 16 nov</small>
            </div>
          </div>
          <h1 className="card-title mb-0 pt-3 pb-3">{props.title}</h1>
          <div className="d-flex justify-content-start">
            <a className="p-1 me-2 text-decoration-none text-dark" href="/">#weekly</a>
            <a className="p-1 me-2 text-decoration-none text-dark" href="/">#webdev</a>
            <a className="p-1 me-2 text-decoration-none text-dark" href="/">#beginners</a>
            <a className="p-1 text-decoration-none text-dark" href="/">#javascript</a>
    
          </div>
          <p> {props.content}</p>
        </div>
        </>
    )
}

export default CardDetails;