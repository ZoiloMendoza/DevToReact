import articleCover from '../Assets/Imagenes/article-cover.webp'
//import vient from '../Assets/Imagenes/vincent.webp'
import like from '../Assets/iconos/like.svg'
import save from '../Assets/iconos/save.svg'
import { Link}  from 'react-router-dom'
import comment from '../Assets/iconos/comment.svg';

const Card = ({props}) => {
    //console.log(props)

    const formatFecha = (fecha) =>{
      const fechaForm = new Date(fecha);
      const opciones = { day: 'numeric', month: 'long'};
      const fechaOk = fechaForm.toLocaleDateString('es-Es', opciones);
      return fechaOk;
    }

    const tiempoTranscurrido = (fecha) =>{
      const createdAt = Date.parse(fecha)
      const ahora = new Date().getTime();
      const diferenciaMilisegundos = ahora - createdAt;
      const minutos = Math.floor(diferenciaMilisegundos/60000);
      const horas = Math.floor(minutos/60)
      const dias = Math.floor(horas/24)
      if(minutos < 60){
          return `${minutos} min read`
      }else if(horas < 24 && horas > 1){
          return `${horas} hour read`
      }
      else if(horas > 24){
          return `${dias} day read`
      }
  }

    return (
        <>
        <article className="card m-3 " >
            <img src={articleCover} className="card-img-top" alt="Clover"/>
            <div className="card-body">
              <div className="card__userDetails d-flex align-items-center mb-2">
                <img src={props.author.userPhoto} alt="profile"/>
                <div className="d-flex flex-column">
                  <p className="fw-bold"> {props.author.name} </p>
                  <p className="time">{`${formatFecha(props.createdAt)}`}</p>
                </div>
              </div>
              <Link to={`/post/${props._id}`}>
                <h3 className="card-title ms-4">{props.title}</h3>
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
                  <p>{`${tiempoTranscurrido(props.createdAt)}`}</p>
                  <img src={save} alt="save icon"/>
                </div>
              </div>
            </div>
        </article>
        </>
    )
}

export default Card;
