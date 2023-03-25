import React from "react";
import be from "../../Assets/iconos/be.svg"
import icon2 from "../../Assets/iconos/icon2"
//import "./_cardPost.scss"

const Post = () => {
    return(
      <body>
        <main className="main__cards mt-0 d-flex w-100 vh-100"> 
        <form id="formPost" className="formPost container-fluid d-flex justify-content-center mx-0">
          <div className="cardMainPost w-100 py-3">
            <div className="cabezera w-100">
              <div className="d-flex justify-content-start px-0">
                <p className="ps-3">
                  <a className="btn btn-outline-secondary text-dark" type="button" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Add a cover image</a>
                </p>
                <div className="row">
                  <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                      <div className="card card-body px-0 py-0">
                        <input name="urlImagenPrincipal" id="urlImagenPrincipal" type="text" className="form-control" placeholder="Url de la imagen" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-floating w-100 px-0 mb-3">
                <textarea id="floatingTextarea" name="title" className="form-control border-0 fs-3 fw-bold pt-5" style={{height: "90px"}} placeholder="New post title here..."></textarea>
                <label for="floatingTextarea"><p className="fs-3 fw-bold">New post title here...</p></label>
                <small className="px-3">Add up to 4 tags . . .</small>
              </div>

              <div className="bg-light">
                <ul className="list-group list-group-horizontal px-3 bg-light py-2">
                  <li className="list-group-item border-0 px-0 bg-light"><object className="me-2" data={be}>be</object></li>
                  <li className="list-group-item border-0 bg-light"><object className="me-2" data={icon2}>icon2</object></li>
                  <li className="list-group-item border-0 px-0 bg-light"><object className="me-2" data="/src/components/Assets/iconos/icon3.svg">icon3</object></li>
                  <li className="list-group-item border-0 bg-light"><object className="me-2" data="/src/components/Assets/iconos/icon4.svg">icon4</object></li>
                  <li className="list-group-item border-0 px-0 bg-light"><object className="me-2" data="/src/components/Assets/iconos/icon5.svg">icon5</object></li>
                  <li className="list-group-item border-0 bg-light w-75"><object className="me-2" data="/src/components/Assets/iconos/icon6.svg">icon6</object></li>
                  <li className="list-group-item border-0 bg-light"><object className="me-2" data="/src/components/Assets/iconos/icon7.svg">icon7</object></li>
                </ul>
              </div>

              <div className="form-floating w-100 h-100 px-0 mb-3 d-flex flex-column align-content-end">
                <textarea id="floatingTextarea" name="floatingTextarea" className="form-control border-0 fs-4 pt-5" style={{height: "45vh"}} placeholder="New post title here..." ></textarea>
                <div className="bg-light mt-2">
                  <ul className="list-group list-group-horizontal px-3 bg-light py-2">
                    <button id="Publish" name="Publish" type="button" className="btn btn-primary fw-bold">Publish</button>
                    <li className="list-group-item border-0 bg-light">Save draft</li>
                    <li className="list-group-item border-0 px-0 bg-light ps-2"><object className="me-2" data="/src/components/Assets/iconos/icon8.svg">icon8</object></li>
                    <li className="list-group-item border-0 bg-light">Revert new changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </form>
        <div id="main__column-3P" className="d-flex flex-column justify-content-center align-items-center mx-0">
                <h4 id="column-H4" >Writing a Great Post Title</h4>
                <p id="column-P1" className="lh-sm">Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</p>
                <p id="column-P2" className="lh-sm">Use keywords where appropriate to help ensure people can find your post by search.</p>
        </div>
        
        </main>
    </body>
    )

}
export default Post;