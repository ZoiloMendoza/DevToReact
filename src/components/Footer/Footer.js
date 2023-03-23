import React from "react";
import './_footer.scss';

const Footer = () => {
    return (
        <footer class="container-fluid d-flex flex-column justify-content-center align-items-center px-5 py-4">
      <p class="text__azul">
        <span>DEV Community </span> 👩‍💻👨‍💻 — A constructive and inclusive social
        network for software developers. With you every step of your journey.
      </p>

      <p>
        Built on <span> Forem </span> — the <span> open source </span> software
        that powers <span> DEV </span> and other inclusive communities.
      </p>

      <p>
        Made with love and <span> Ruby on Rails. </span> DEV Community 👩‍💻👨‍💻 ©
        2016 - 2022.
      </p>
      <div class="">
        <a class="logoContainer" href="/" role="button">
          <img src="../Assets/iconos/leaf.svg" alt="logo"/>
        </a>
      </div>
    </footer>
    )
}

export default Footer;