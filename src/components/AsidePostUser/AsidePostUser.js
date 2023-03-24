const AsidePostUser = () => {
    return (
        <article id="main__article">
        <div id="column-3__card-1" class="card">
          <div class="card-body">
              <div id="card__perfil" class="card__user d-flex align-items-end">
                <img class="rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg" alt="Vicent Will"/>
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
              <p class="card-text text-muted">#nextjs  #templete  #webdev #javascript</p>
          </div>
        </div>
       </article>
    )
}