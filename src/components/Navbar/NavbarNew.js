
import profilePicture from '../Assets/Imagenes/profile-picture.png';
import './Navbar/style.css';

const NavbarNew = () => {
    const url = 'https://google.com';

    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-xxl crayons-header d-flex">
          <div className="crayons-header__logo">
            <button
              className="navbar-toggler border-0 me-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample">
              <span class="navbar-toggler-icon "></span>
            </button>
      <nav className="navbar bg-light search" />
        <div className="container-fluid">               
         </div>
            
         
         <div
              className="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    DEV Community 👩‍💻👨‍💻
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="links_list">
                  <ul className="lista">
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Home</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex"><img class="me-2" src="../Assets/iconos/card-file.png" width="20" height="20" alt="read-list" />Reading List</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Listings</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Podcasts</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Videos</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Tags</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">FAQ</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Forem Shop</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Sponsors</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">About</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Contact</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Guides</a></li>
                      <li><a href={url} className="list-group-item list-group-item-action d-flex">Software camparisons</a></li>
                  </ul>
                  <h6 className="fw-bold mt-3 ms-3">Other</h6>
                  <div className="">
                    <ul className="lista">
                    <li><a href={url} className="list-group-item list-group-item-action d-flex">Code of Conduct</a></li>
                    <li><a href={url} className="list-group-item list-group-item-action d-flex">Privacy Policy</a></li>
                    <li><a href={url} className="list-group-item list-group-item-action d-flex">Terms of use</a> </li>
                  </ul>
                  </div>
  
                  <div className="container mt-4 redes">
                    <ul className="d-flex lista-horizontal">
                      <li className=""></li>
                      <li className=""></li>
                      <li className=""></li>
                      <li className=""></li>
                      <li className=""></li>
                    </ul>
                  </div>
                    </div>
                <div className="dropdown mt-3">
                 
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={url}>Action</a></li>
                    <li>
                      <a className="dropdown-item" href={url}>Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href={url}>Something else here</a>
                    </li>
                  </ul>
                </div>
                </div>
                </div>
         
            <div class="logoContainer">
              <a href="./index.html">
                <img src="../Assets/Imagenes/logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div class="header__search ">
            <form class="d-flex justify-content-between" role="search">
              <div class="input-group">
                <input class="form-control" type="search" placeholder="Search..." aria-label="Search" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                  <img src="../Assets/iconos/lupita.svg" alt="lupita de busqueda" />
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
                src={profilePicture}
                alt="profilepicture"
              />
            </div>
          </div>

        </div>
      </nav>
      </header>
    )
}

export default NavbarNew;