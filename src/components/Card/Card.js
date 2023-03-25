import articleCover from '../Assets/Imagenes/article-cover.webp'
import vient from '../Assets/Imagenes/vincent.webp'
import like from '../Assets/iconos/like.svg'
import save from '../Assets/iconos/save.svg'
import comment from '../Assets/iconos/comment.svg';
import { Link } from 'react-router-dom';

const Card = () => {

    return (
        <>
        <article className="card m-3 " >
            <img src={articleCover} className="card-img-top" alt="image article"/>
            <div className="card-body">
              <div className="card__userDetails d-flex align-items-center mb-2">
                <img src={vient} alt="profile picture"/>
                <div className="d-flex flex-column">
                  <p className="fw-bold">Vincent Will</p>
                  <p className="time">Posted on 16 nov</p>
                </div>
              </div>
              <Link to={'/post/1'}>
                <h3 className="card-title ms-4">Weekly web development resources #124</h3>
                </Link>
              <ul className="d-flex flex-wrap p-0 ms-4">
                <li>
                  <a href="/">
                    #weekly
                  </a>
                </li>
                <li>
                  <a href="/">
                    #webdev
                  </a>
                </li>
                <li>
                  <a href="/">
                    #beginners
                  </a>
                </li>
                </ul>
              <div className="card__buttons d-flex ms-4">
                <div className="interactions d-flex">
                  <div className="reactions d-flex me-4">
                    <img src={like} alt="like icon"/>
                    <p>2 reactions</p>
                  </div>
                  <div className="comments d-flex">
                    <img src={comment} alt="comment icon"/>
                    <p>Add Comment</p>
                  </div>
                </div>
                <div className="tools d-flex">
                  <p>2 min read</p>
                  <img src={save} alt="save icon"/>
                </div>
              </div>
            </div>
          </article>
        </>
    )
}

export default Card;
