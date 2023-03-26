const Navbar = () => {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:'40px'}}>
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
              <div class="logoContainer">
                <a href="./index.html">
                  <img src="../Assets/Imagenes/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div class="header__search ">
              <form class="d-flex justify-content-between" role="search">
                <div class="input-group">
                  <input class="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <img src="../Assets/iconos/lupita.svg" alt="lupita de busqueda"/>
                  </button>
                </div>
              </form>
            </div>
             <div class="crayons-header__option d-flex">
                <a href="/" id="BtnLogin" class="btn btn-light" type="submit">Login</a>
                <a href="/" id="BtnCreateAccount" class="btn btn-outline-primary" type="submit">Create Account</a>
             </div>
  
          </div>
        </nav>
      </header>
    )
}

export default Navbar;