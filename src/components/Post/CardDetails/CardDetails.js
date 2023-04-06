import React from "react"


const CardDetails = ({props}) => {

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
  console.log(props)
    return (
        <>
        {/*<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qveVZoV6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/if0w9fs7g4hk8sftjyo9.jpg" className="card-img-top" alt="Cover image for Weekly web development resources " />*/}
         
        <div className="card-body">
          <div className="d-flex">
            <div className="card__user">
              <img className="rounded-circle" src={props.author.userPhoto ? props.author.userPhoto : 'foto'} alt="profile"/>
            </div>
            <div className="card__user__data d-flex flex-column ps-2">
              <strong className="fw-bolder">{props.author.name}</strong>
              <small className="text-muted">{`${formatFecha(props.createdAt)}`}</small>
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