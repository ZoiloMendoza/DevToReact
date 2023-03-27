import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const userLogin = () => {
    return (
        <body>
            <Navbar />

            <section>
            <div class="registration_card">
            <div class="container">
                <p class="registration_description">
                    User login
                </p>
            </div>
            <div class="registration_actions">

                <div class="registration_actions-email mt-3" id="sign-in-password-form">
                   
                

                    <form onChange={onFormInputChange} onSubmit={newUserSumbit} ref={formularioRef} class="new_user" id="new_user" accept-charset="UTF-8" method="post">
   
                        
                        <div class="login_email mb-3">
                            <label for="user_email">Email</label>
                            <input class="form-control" autocomplete="email" type="email" name="email" id="user_email"/>
                        </div>
                        <div class="login_password mb-3">
                            <label for="user_password">Password</label>
                            <input class="form-control" autocomplete="current-password" type="password" name="password" id="user_password"/>
                        </div>
                        
                        
                        <div class="form_actions mb-3 mt-3">
                            <button type="submit" name="commit" value="Continue" class="btn btn-primary btn--l w-100" data-disable-with="Continue" id="Continue">Continue</button>
                        </div>
                    </form>

                    <p class="pt-6 fs-s align-center">
                        <a href="/user/password/new">I forgot my password</a>
                    </p>

                </div>
            </div>
        </div> 
            </section>

            <Footer />
        </body>
    )
}

export default userLogin;