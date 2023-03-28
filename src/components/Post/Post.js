import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import corazon from "../Assets/iconos/corazon.svg";
import globito from "../Assets/iconos/globito.svg";
import rectangulo from "../Assets/iconos/rectangulo.svg";
import trash from "../Assets/iconos/trash3.svg";
import edit from "../Assets/iconos/pencil.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetails from "./CardDetails/CardDetails";
import { useState, useEffect } from "react";
import axios from "axios";


const Post = () => {
  const params = useParams();
  const { postid } = params;
  console.log(postid)
  const [postCard, setPostCard] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchedPost = async () => {
      const postResponse = await axios.get(
        `http://localhost:5001/api/v1/posts/${postid}`
      );
      setPostCard(postResponse.data);
      setLoading(false);
    };
    fetchedPost();
  }, [postid]);

  return (
    <>
      <Navbar />
      <main className="main__cards">
        <div id="barra" className="container-fluid">
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
          <div className="iconos d-flex p-2 justify-content-end">
            <Link>
              <object className="post-icons m-2" data={trash}></object>
            </Link>
            <Link to={`/editPost/${postid}`}>
              <object className="post-icons m-2" data={edit}></object>
            </Link>
          </div>

          <div className="card container-fluid px-0 ">
            {loading ? 
              <span> loading ... </span>
             : 
              <CardDetails props={postCard} />
              
            }
          </div>
        </div>

        <div id="main__column-3" className="">
          <article id="main__article">
            <div id="column-3__card-1" className="card">
              <div className="card-body">
                <div
                  id="card__perfil"
                  className="card__user d-flex align-items-end"
                >
                  <img
                    className="rounded-circle"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg"
                    alt="Vicent Will"
                  />
                  <strong className="fw-bolder ps-2">Vicent Will</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100 fw-bold mt-4 mb-3"
                >
                  Follow
                </button>
                <p className="card-text">
                  A full-stack JavaScript developer and maintainer of wweb.dev
                </p>
                <small className="p-0 fw-bolder">LOCATION</small>
                <p className="card-text p-0">
                  <small className="p-0 fs-6">Berlin</small>
                </p>
                <small className="p-0 fw-bolder">WORK</small>
                <p className="card-text p-0">
                  <small className="p-0 fs-6">Fullstack developer</small>
                </p>
                <small className="p-0 fw-bolder">JOINED</small>
                <p className="card-text p-0">
                  <small className="p-0 fs-6">16 oct 2019</small>
                </p>
              </div>
            </div>
            <div id="column-3__card-2" className="card mt-3">
              <div className="card-body">
                <strong className="fs-5">More from</strong>
                <strong className="text-primary fs-5">Vicent Will</strong>
                <p className="mt-4"></p>
                <span className="">Weekly web development resources #123</span>
                <p className="card-text text-muted">
                  #weekly #webdev #beginners
                </p>
                <span className="p-0">
                  Weekly web development resources #122
                </span>
                <p className="card-text text-muted">
                  #webdev #weekly #javascript #css
                </p>
                <span className="">Next.js Web App Template</span>
                <p className="card-text text-muted">
                  #nextjs #templete #webdev #javascript
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;
