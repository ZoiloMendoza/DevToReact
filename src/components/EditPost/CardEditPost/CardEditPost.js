import React from "react";
import be from "../../Assets/iconos/be.svg";
import icon2 from "../../Assets/iconos/icon2.svg";
import icon3 from "../../Assets/iconos/icon3.svg";
import icon4 from "../../Assets/iconos/icon4.svg";
import icon5 from "../../Assets/iconos/icon5.svg";
import icon6 from "../../Assets/iconos/icon6.svg";
import icon7 from "../../Assets/iconos/icon7.svg";
import icon8 from "../../Assets/iconos/icon8.svg";
import NavbarEdit from "../../EditPost/NavbarEditPost/NavbarEdit";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const { postid } = params;
  const [contentForm, setContentForm] = useState({});
  //console.log(editId)
  const [editCard, setEditCard] = useState({});
  const [trigger, setTrigger] = useState(false);
  

  useEffect(() => {
    const fetchedEdit = async () => {
      const editResponse = await axios.get(
        `http://localhost:5001/api/v1/posts/${postid}`
      );
      setEditCard(editResponse.data);
    };
    fetchedEdit();
  }, [postid]);
  console.log(editCard);
  const [title, setTitle] = useState(editCard.title);
  const [content, setContent] = useState(editCard.content);

  const onFormInputChange = (event) => {
    event.preventDefault();
    const inputID = event.target.name;
    const inputValue = event.target.value;
    setContentForm({
      ...contentForm,
      [inputID]: inputValue,
    });
    setTitle(contentForm.title);
  setContent(contentForm.content);
  };
  const editPostPublish = (event) => {
    event.preventDefault();
    setTrigger(true);
  };

  useEffect(() => {
    if (trigger) {
      console.log("Use Effect");
      const addPatch = async () => {
        const Post = await axios.patch(
          `http://localhost:5001/api/v1/posts/${postid}`,
          contentForm
        );
        console.log("statusCode", Post.status);
        if (Post.status !== 201) {
          console.log("error al insertar");
        } else {
          console.log(Post.statusText);
        }
      };
      addPatch();
      setTrigger(false);
    }
  }, [trigger]);
  
  return (
    <div>
      <NavbarEdit />
      <main className="main__cards mt-0 d-flex w-100 vh-100">
        <form
          onChange={onFormInputChange}
          id="formPost"
          className="formPost container-fluid d-flex justify-content-center mx-0"
        >
          <div className="cardMainPost w-100 py-3">
            <div className="cabezera w-100">
              <div className="d-flex justify-content-start px-0">
                <p className="ps-3">
                  <a
                    className="btn btn-outline-secondary text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Add a cover image
                  </a>
                </p>
                <div className="row">
                  <div className="col">
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div className="card card-body px-0 py-0"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-floating w-100 px-0 mb-3">
                <textarea
                  readOnly={true}
                  id="floatingTextarea"
                  value={editCard.title}
                  name="title"
                  className="form-control border-0 fs-3 fw-bold pt-5"
                  style={{ height: "200px;" }}
                  placeholder=""
                >
                  {" "}
                </textarea>
              </div>

              <div className="bg-light">
                <ul className="list-group list-group-horizontal px-3 bg-light py-2">
                  <li className="list-group-item border-0 px-0 bg-light">
                    <object className="me-2" data={be}>
                      be
                    </object>
                  </li>
                  <li className="list-group-item border-0 bg-light">
                    <object className="me-2" data={icon2}>
                      icon2
                    </object>
                  </li>
                  <li className="list-group-item border-0 px-0 bg-light">
                    <object className="me-2" data={icon3}>
                      icon3
                    </object>
                  </li>
                  <li className="list-group-item border-0 bg-light">
                    <object className="me-2" data={icon4}>
                      icon4
                    </object>
                  </li>
                  <li className="list-group-item border-0 px-0 bg-light">
                    <object className="me-2" data={icon5}>
                      icon5
                    </object>
                  </li>
                  <li className="list-group-item border-0 bg-light w-75">
                    <object className="me-2" data={icon6}>
                      icon6
                    </object>
                  </li>
                  <li className="list-group-item border-0 bg-light">
                    <object className="me-2" data={icon7}>
                      icon7
                    </object>
                  </li>
                </ul>
              </div>
              <div className="form-floating w-100 h-100 px-0 mb-3 d-flex flex-column align-content-end">
                <textarea
                  id="floatingTextarea2"
                  value={content}
                  name="content"
                  className="form-control border-0 fs-4 pt-5"
                  style={{ height: "45vh" }}
                  placeholder="New post title here..."
                ></textarea>
                <div className="bg-light mt-2">
                  <ul className="list-group list-group-horizontal px-3 bg-light py-2">
                    <button
                      id="Publish"
                      onClick={editPostPublish}
                      name="Publish"
                      type="button"
                      className="btn btn-primary fw-bold"
                    >
                      Publish
                    </button>
                    <li className="list-group-item border-0 bg-light">
                      Save draft
                    </li>
                    <li className="list-group-item border-0 px-0 bg-light ps-2">
                      <object className="me-2" data={icon8}>
                        icon8
                      </object>
                    </li>
                    <li className="list-group-item border-0 bg-light">
                      Revert new changes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div
          id="main__column-3P"
          className="main__column-3P d-flex flex-column justify-content-center align-items-center mx-0"
        >
          <h4 className="column-H4">Writing a Great Post Title</h4>
          <p className="column-P1 lh-sm">
            Think of your post title as a super short but compelling!
            description — like an overview of the actual post in one short
            sentence.
          </p>
          <p className="column-P2 lh-sm">
            Use keywords where appropriate to help ensure people can find your
            post by search.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Edit;
