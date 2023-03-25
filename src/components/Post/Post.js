
const Post = () => {
    return (
        <main class="main__cards">
      
       <div  id="barra" class="container-fluid">
              <ul class="m-0">
                <li class="nav-item d-flex align-items-center">
                  <object class="p-2" data="../Assets/iconos/corazon.svg" type=""></object>
                  <small class="text-muted">15</small>
                </li>
                <li class="nav-item d-flex align-items-center">
                  <object class="p-2" data="../Assets/iconos/globito.svg" type=""></object>
                  <small class="text-muted">4</small>
                </li>
                <li class="nav-item d-flex align-items-center">
                  <object class="p-2" data="../Assets/iconos/rectangulo.svg" type=""></object>
                  <small class="text-muted">20</small>
                </li>
                <li id="tresPuntos" class="d-flex align-items-center">
                  <strong class="pb-2 fs-4">...</strong>
                </li>
              </ul>
       </div>
      <div class="cards__contenido d-flex flex-column">

      <div class="card container-fluid px-0 ">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qveVZoV6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/if0w9fs7g4hk8sftjyo9.jpg" class="card-img-top" alt="Cover image for Weekly web development resources #124">
        <div class="card-body">
          <div class="d-flex">
            <div class="card__user">
              <img class="rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg" alt="Vicent Will">
            </div>
            <div class="card__user__data d-flex flex-column ps-2">
              <strong class="fw-bolder">Vicent Will</strong>
              <small class="text-muted">Posted on 16 nov</small>
            </div>
          </div>
          <h1 class="card-title mb-0 pt-3 pb-3">Weekly web development resources #124</h1>
          <div class="d-flex justify-content-start">
            <a class="p-1 me-2 text-decoration-none text-dark" href="#">#weekly</a>
            <a class="p-1 me-2 text-decoration-none text-dark" href="#">#webdev</a>
            <a class="p-1 me-2 text-decoration-none text-dark" href="#">#beginners</a>
            <a class="p-1 text-decoration-none text-dark" href="#">#javascript</a>
          </div>
        </div>
      </div>

      <div class="card container-fluid pt-4">
        <p class="card-text fst-italic fs-6">Sponsored</p>
        <a href="" class="link-primary mb-3"><strong class="fw-bolder fs-4">Indie Worldwide</strong></a>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7jTKri2g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://wweb.dev/weekly/content/124/indieworldwide.jpg" alt="Indie Worldwide">
        <div class="card-body">
          <div class="d-flex">
            <p class="card-text pb-4">The friendliest online community of bootstrapped startup founders. Get 1-1 introductions every week to other founders with similar interests and revenue.</p>
          </div>
        </div>
      </div>

      <div class="card container-fluid pt-5">
        <a href="" class="link-primary mb-3"><strong class="fw-bolder fs-4">nfty.sh</strong></a>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--absRZpQR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://wweb.dev/weekly/content/124/nfty.jpg" alt="nfty.sh">
        <div class="card-body">
          <div class="d-flex">
            <p class="card-text">An open-source notification service to send push notifications to your phone or desktop via PUT/POST.</p>
          </div>
        </div>
      </div>
      </div>

      <div id="main__column-3" class="">
       <article id="main__article">
        <div id="column-3__card-1" class="card">
          <div class="card-body">
              <div id="card__perfil" class="card__user d-flex align-items-end">
                <img class="rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg" alt="Vicent Will">
                <strong class="fw-bolder ps-2">Vicent Will</strong>
              </div>
              <button type="button" class="btn btn-primary w-100 fw-bold mt-4 mb-3">Follow</button>
              <p class="card-text">A full-stack JavaScript developer and maintainer of wweb.dev</p>
              <small class="p-0 fw-bolder">LOCATION</small>
              <p class="card-text p-0"><small class="p-0 fs-6">Berlin</small></p>
              <small class="p-0 fw-bolder">WORK</small>
              <p class="card-text p-0"><small class="p-0 fs-6">Fullstack developer</small></p>
              <small class="p-0 fw-bolder">JOINED</small>
              <p class="card-text p-0"><small class="p-0 fs-6">16 oct 2019</small></p>
          </div>
        </div>
        <div id="column-3__card-2" class="card mt-3">
          <div class="card-body">
              <strong class="fs-5">More from</strong>
              <strong class="text-primary fs-5">Vicent Will</strong>
              <p class="mt-4"></p>
              <span class="">Weekly web development resources #123</span>
              <p class="card-text text-muted">#weekly  #webdev  #beginners</p>
              <span class="p-0">Weekly web development resources #122</span>
              <p class="card-text text-muted">#webdev  #weekly  #javascript  #css</p>
              <span class="">Next.js Web App Template</span>
              <p className="card-text text-muted">#nextjs  #templete  #webdev #javascript</p>
          </div>
        </div>
       </article>
      </div>

    </main>
    )
}

export default Post;