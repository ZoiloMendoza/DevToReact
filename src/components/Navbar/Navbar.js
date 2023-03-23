import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <div>
            <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-xxl crayons-header d-flex">
          <div class="crayons-header__logo">
            <button
              class="navbar-toggler border-0 me-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample">
              <span class="navbar-toggler-icon "></span>
            </button>
      <nav class="navbar bg-light search" >
        <div class="container-fluid">               
         </div>
            
            <!-- Inicia menu desplegable -->
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    DEV Community 👩‍💻👨‍💻
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="links_list">
                  <ul class="lista">
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/casa.svg"></object>Home</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><img class="me-2" src="../Assets/iconos/card-file.png" width="20" height="20" alt="read-list" />Reading List</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/listings.svg"></object>Listings</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/podcasts.svg"></object>Podcasts</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/videos.svg"></object>Videos</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/tags.svg"></object>Tags</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/faq.svg"></object>FAQ</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/forem-shop.svg"></object>Forem Shop</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/sponsors.svg"></object>Sponsors</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/about.svg"width="24" height="24"></object></object>About</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/casa.svg"></object>Contact</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/guides.svg"width="24" height="24"></object>Guides</a></li>
                      <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/software-comparisons.svg"width="24" height="24"></object>Software camparisons</a></li>
                  </ul>
                  <h6 class="fw-bold mt-3 ms-3">Other</h6>
                  <div class="">
                    <ul class="lista">
                    <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/code-of-conduct.svg"></object>Code of Conduct</a></li>
                    <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/privacy-policy.svg"></object>Privacy Policy</a></li>
                    <li><a href="#" class="list-group-item list-group-item-action d-flex"><object class="me-2" data="../Assets/iconos/term.of-use.svg"></object>Terms of use</a> </li>
                  </ul>
                  </div>
  
                  <div class="container mt-4 redes">
                    <ul class="d-flex lista-horizontal">
                      <li class=""><object class="me-1" data="../Assets/iconos/twitter.svg"width="21" height="21"></object></li>
                      <li class=""><object class="me-1" data="../Assets/iconos/facebook.svg"></object></li>
                      <li class=""><object class="me-1" data="../Assets/iconos/github.svg"></object></li>
                      <li class=""><object class="me-1" data="../Assets/iconos/insta.svg"></object></li>
                      <li class=""><object class="me-1" data="../Assets/iconos/twitch.svg"></object></li>
                    </ul>
                  </div>
                    </div>
                <div class="dropdown mt-3">
                 
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            
            <!-- Termina menu desplegable -->
            <div class="logoContainer">
              <a href="./index.html">
                <img src="../Assets/Imagenes/logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div class="header__search ">
            <form class="d-flex justify-content-between" role="search">
              <div class="input-group">
                <input class="form-control" type="search" placeholder="Search..." aria-label="Search">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                  <img src="../Assets/iconos/lupita.svg" alt="lupita de busqueda">
                </button>
              </div>
                <button class="btn btn-outline-primary" type="submit">Create Post</button>
            </form>
          </div>
           <div class="crayons-header__option d-flex">
            <div class="iconContainer lupita navbar-toggler me-3" >
              <img src="../Assets/iconos/lupita.svg" alt="lupita" />
            </div>
          <div class="crayons-header__option d-flex">
            </div>
            <div class="iconContainer mx-3">
              <img src="../Assets/iconos/campana.svg" alt="campana" />
            </div>
            <div class="profilePicContainer">
              <img
                src="../Assets/Imagenes/profile-picture.png"
                alt="profile picture"
              />
            </div>
          </div>

        </div>
      </nav>
    </header>
        </div>
    )
}

export default Navbar;