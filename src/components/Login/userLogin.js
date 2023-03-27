import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './login.css';

const UserLogin = () => {
    return (
        <body>
            <Navbar />

            <section className="" >
            <div class="registration_card">
            <div className="container">
                <p className="registration_description">
                    User login
                </p>
            </div>
            <div className="registration_actions">

                <div className="registration_actions-email mt-3" id="sign-in-password-form">

                    <form  className="new_user" id="user_login" accept-charset="UTF-8" method="post">
   
                        <div className="login_email mb-3">
                            <label for="user_email">Email</label>
                            <input className="form-control" autocomplete="email" type="email" name="email" id="user_email"/>
                        </div>
                        <div className="login_password mb-3">
                            <label for="user_password">Password</label>
                            <input className="form-control" autocomplete="current-password" type="password" name="password" id="user_password"/>
                        </div>
                                              
                        <div className="form_actions mb-3 mt-3">
                            <button type="submit" name="commit" value="Continue" className="btn btn-primary btn--l w-100" data-disable-with="Continue" id="Continue">Continue</button>
                        </div>
                    </form>

                    <p className="pt-6 fs-s align-center">
                        <p>I forgot my password</p>
                    </p>

                </div>
            </div>
            </div>
      
            </section>

            <Footer />
        </body>
    )
}

export default UserLogin;