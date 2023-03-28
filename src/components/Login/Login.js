import { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from 'axios';
import './login.css';
import { useRef } from 'react';

const Login = () => {

    const formularioRef = useRef(null);
    const eventoResetFormulario = () => {
        formularioRef.current.reset()
    }

    const [contentForm, setcontentForm] = useState({});
    const [ trigger, setTrigger] = useState(false);
    //const [ready, setReady] = useState(false);
    //const [userArray, setUserArray] = useState([]);
    //crea el objeto
    const onFormInputChange=(event)=>{
        event.preventDefault();
        const inputID= event.target.name
        const inputValue=event.target.value
        setcontentForm({
          ...contentForm,
          [inputID]:inputValue
        })
      }

    const newUserSumbit = (event) => {
        event.preventDefault();
        setTrigger(true)
    };
    //vvalida que este completo
    
    //const newUserSumbit = (event) => {
    //    setReady(false)
    //    event.preventDefault();
    //    setReady(false)
    //    if(Object.values(contentForm).length !== 4){
    //        return alert('Completa el formulario')    
    //    }
    //    setReady(true)
        //console.log(Object.values(contentForm).length)
    //}
    //metodo post
    useEffect(() => {
        if(trigger){
            console.log("Use Effect User")
            const addUser = async () => {
                const userPost = await axios.post('http://localhost:5000/api/v1/users', contentForm);
               console.log('statusCode',userPost.status)
                if(userPost.status !==201){
                    console.log('error al insertar')
                }else{
                    console.log(userPost.statusText)
                }
            }
            addUser();
            setTrigger(false);
            eventoResetFormulario();
        }
    }, [trigger])


    //console.log('userArray',userArray,ready)
    return (
        <body>
        <Navbar/>    

        <section>
        <div class="registration_card">
            <div class="container">
                <h1 class="registration_title">
                    Welcome to Dev Community
                </h1>
                <p class="registration_description">
                    DEV Community is a community of 1,017,764 amazing developers
                </p>
            </div>
            <div class="registration_actions">
                <div class="registration_actions-providers">
                    <button class="btn btn-dark btn--l w-100 m-1" id="button_apple">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                          </svg>
                        Continue with Apple
                    </button>
                    <button class="btn btn-success btn--l w-100 m-1" id="button-forem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gpu-card" viewBox="0 0 16 16">
                            <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
                            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"/>
                            <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"/>
                          </svg>
                        Continue with Forem
                    </button>
                    <button class="btn btn-dark btn--l w-100 m-1" id="button-github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        Continue with GitHub
                    </button>
                    <button class="btn btn-info btn--l w-100 m-1" style={{color: "white"}} id="button-twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        Continue with Twitter
                    </button>
                </div>
                <div class="registration_actions-email mt-3" id="sign-in-password-form">
                    <div class="registration_hr">
                        <p class="registration_hr-label">
                            Have a password? Continue with your email address
                        </p>
                    </div>

                    <form onChange={onFormInputChange} ref={formularioRef} class="new_user" id="new_user" accept-charset="UTF-8" method="post">
   
                        <div class="login_name">
                          <label for="user_name">Name</label>
                          <input class="form-control" type="text" name="name" id="user_name"/>
                        </div>
                        <div class="login_email mb-3">
                            <label for="user_email">Email</label>
                            <input class="form-control" autocomplete="email" type="email" name="email" id="user_email"/>
                        </div>
                        <div class="login_password mb-3">
                            <label for="user_password">Password</label>
                            <input class="form-control" autocomplete="current-password" type="password" name="password" id="user_password"/>
                        </div>
                        
                        <div class="login_profile_picture">
                          <label for="user_profile_picture">Profile picture</label>
                          <input class="form-control" type="text" name="userPhoto" id="user_profile_picture"/>
                        </div>
                        
                        <div class="form_actions mb-3 mt-3">
                            <button onChange={newUserSumbit} type="submit" name="commit" value="Continue" class="btn btn-primary btn--l w-100" data-disable-with="Continue" id="Continue">Continue</button>
                        </div>
                    </form>

                    <p class="pt-6 fs-s align-center">
                        <a href="/user/password/new">I forgot my password</a>
                    </p>

                </div>
            </div>
        </div> 
        </section>
        <Footer/>
        </body>
    )

}

export default Login;