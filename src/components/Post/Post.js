import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import corazon from '../Assets/iconos/corazon.svg';
import globito from '../Assets/iconos/globito.svg';
import rectangulo from '../Assets/iconos/rectangulo.svg';
import trash from '../Assets/iconos/trash3.svg';
import edit from '../Assets/iconos/pencil.svg';
import { Link } from "react-router-dom";

const Post = () => {
    return (
        <>
        <Navbar />
        

        <main className="main__cards">
            
      
       <div  id="barra" className="container-fluid">
              <ul className="m-0">
                <li className="nav-item d-flex align-items-center">
                  <object className="p-2" data={corazon} type=""></object>
                  <small className="text-muted">15</small>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <object className="p-2" data={globito} type=""></object>
                  <small className="text-muted">4</small>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <object className="p-2" data={rectangulo} type=""></object>
                  <small className="text-muted">20</small>
                </li>
                <li id="tresPuntos" className="d-flex align-items-center">
                  <strong className="pb-2 fs-4">...</strong>
                </li>
              </ul>
       </div>
      <div className="cards__contenido d-flex flex-column">
      <div className="iconos d-flex p-2 justify-content-end align-items-center">
                <Link >
                <object className="post-icons m-2" data={trash}></object> 
                </Link>
                <Link to={'/editPost'}>
                <object className="post-icons m-2" data={edit}></object> 
                </Link>
            </div>

      <div className="card container-fluid px-0 ">
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
          <h1 className="card-title mb-0 pt-3 pb-3">Weekly web development resources #124</h1>
          <div className="d-flex justify-content-start">
            <a className="p-1 me-2 text-decoration-none text-dark" href="#">#weekly</a>
            <a className="p-1 me-2 text-decoration-none text-dark" href="#">#webdev</a>
            <a className="p-1 me-2 text-decoration-none text-dark" href="#">#beginners</a>
            <a className="p-1 text-decoration-none text-dark" href="#">#javascript</a>
          </div>
        </div>
      </div>

      <div className="card container-fluid pt-4">
        <p className="card-text fst-italic fs-6">Sponsored</p>
        <a href="" className="link-primary mb-3"><strong className="fw-bolder fs-4">Indie Worldwide</strong></a>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7jTKri2g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://wweb.dev/weekly/content/124/indieworldwide.jpg" alt="Indie Worldwide" />
        <div className="card-body">
          <div className="d-flex">
            <p className="card-text pb-4">The friendliest online community of bootstrapped startup founders. Get 1-1 introductions every week to other founders with similar interests and revenue.</p>
          </div>
        </div>
      </div>

      <div className="card container-fluid pt-5">
        <a href="" className="link-primary mb-3"><strong className="fw-bolder fs-4">nfty.sh</strong></a>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--absRZpQR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://wweb.dev/weekly/content/124/nfty.jpg" alt="nfty.sh" />
        <div className="card-body">
          <div className="d-flex">
            <p className="card-text">An open-source notification service to send push notifications to your phone or desktop via PUT/POST.</p>
          </div>
        </div>
      </div>
      </div>

      <div id="main__column-3" className="">
       <article id="main__article">
        <div id="column-3__card-1" className="card">
          <div className="card-body">
              <div id="card__perfil" className="card__user d-flex align-items-end">
                <img className="rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg" alt="Vicent Will" />
                <strong className="fw-bolder ps-2">Vicent Will</strong>
              </div>
              <button type="button" className="btn btn-primary w-100 fw-bold mt-4 mb-3">Follow</button>
              <p className="card-text">A full-stack JavaScript developer and maintainer of wweb.dev</p>
              <small className="p-0 fw-bolder">LOCATION</small>
              <p className="card-text p-0"><small className="p-0 fs-6">Berlin</small></p>
              <small className="p-0 fw-bolder">WORK</small>
              <p className="card-text p-0"><small className="p-0 fs-6">Fullstack developer</small></p>
              <small className="p-0 fw-bolder">JOINED</small>
              <p className="card-text p-0"><small className="p-0 fs-6">16 oct 2019</small></p>
          </div>
        </div>
        <div id="column-3__card-2" className="card mt-3">
          <div className="card-body">
              <strong className="fs-5">More from</strong>
              <strong className="text-primary fs-5">Vicent Will</strong>
              <p className="mt-4"></p>
              <span className="">Weekly web development resources #123</span>
              <p className="card-text text-muted">#weekly  #webdev  #beginners</p>
              <span className="p-0">Weekly web development resources #122</span>
              <p className="card-text text-muted">#webdev  #weekly  #javascript  #css</p>
              <span className="">Next.js Web App Template</span>
              <p className="card-text text-muted">#nextjs  #templete  #webdev #javascript</p>
          </div>
        </div>
       </article>
      </div>

    </main>

    <Footer />
    </>
    )
}

export default Post;