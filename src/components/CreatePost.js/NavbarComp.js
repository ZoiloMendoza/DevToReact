import React from React;

export const Post = () =>{
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex container-fluid">
      <div className="container-xxl crayons-header d-flex w-100 ps-0 pe-0 justify-content-between">
          <div id="barraSuperior" className="crayons-header__logo d-flex w-100">
              <div className="logoContainer d-flex justify-content-start w-75">
                  <a href="../index.html">
                      <img id="logo_Dev"  src="../Assets/Imagenes/logo.png" alt="logo" />
                  </a>
                  <div className="d-flex">
                      <span id="spanDev" className="fw-bolder text-center pt-2 ps-2">Cread Post</span>
                  </div>
              </div>
            <div className="d-flex">
              <button className="btn text-dark fw-bolder" type="submit">Edit</button>
              <button className="btn text-dark" type="submit">Preview</button>
            </div>
            <div id="cerrar" className="d-flex justify-content-end">
              <button id="cerrar" className="btn-close fw-bolder" type="submit"></button>
            </div>
            <button id="cerrar" className="btn fw-bolder" type="submit">X</button>
          </div>
      </div>
    </nav>
            </div>
        )
    }
 
