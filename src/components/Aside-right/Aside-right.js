import React from "react";
import './_listings.scss';
import brand from '../Assets/Imagenes/mongoHackathon.webp';

const AsideRight = () => {
    return (
        <aside className="page__rightColumn">
          <article className="mongoHackathon">
            <img src={brand} alt="mongo hackathon"/>
            <div class="mongoHackathon__body">
              <h3 class="px-3 py-4">MongoDB Atlas Hackathon 2022 (9)</h3>
              <ul class="p-0">
                <li>Introducing Odesey: Personal Journal</li>
                <li>Introducing Owen Sauce - a new way to collaborate</li>
                <li>MongoDB Atlas Hackathon 2022 on DEV</li>
                <li>Announcing the MongoDB Atlas Hackathon 2022 on DEV!</li>
                <li>MongoDB Atlas Hackathon 2022 on DEV</li>
              </ul>
              <div class="d-grid gap-2 col-11 mx-auto ">
                <button class="btn btn-project" type="button">Share your project</button>
                <button class="btn btn-posts" type="button">See all posts</button>
              </div>
            </div>
          </article>
          <article class="listings">
          <ul class="list-group">
            <li class="list-group-item title d-flex justify-content-between">Listings <a href="/listings">See all </a> </li>            
            <li class="list-group-item elemento-lista ">🆘 Help Needed for Low-code Project in Node.js <a href="#">    collabs</a></li>
            <li class="list-group-item elemento-lista"> Cloud App Developers <a href="#"> events</a></li>
            <li class="list-group-item elemento-lista"> Binance Clone Script <a href="#"> collabs </a></li>
            <li class="list-group-item elemento-lista"> (Free Credits) Build your next web project with CodeDesign <a href="#"> products</a></li>
            <li class="list-group-item elemento-lista"> Convert Website To CMS In Great Budget! <a href="#"> collabs </a></li>
            <li class="list-group-item lista-btn">  <a href="#"> Create a Listing  </a></li>
          </ul>
          </article>
          <article class="listings">
            <ul class="list-group">
              <li class="list-group-item title  d-flex justify-content-between">#discuss </li>
              
              <li class="list-group-item elemento-lista "> "Who or what are you grateful for in tech?" <a href="#"> 2 comments </a></li>
              <li class="list-group-item elemento-lista"> "Why creative AI matters more than we think " <a class="New" href="#"> New</a></li>
              <li class="list-group-item elemento-lista">  "What are your goals for the week of November 21? " <a class="New" href="#"> New  </a></li>
              <li class="list-group-item elemento-lista"> "Artificial "Intelligence" and Controversial Ideas about Future Technology "<a class="New" href="#"> New </a></li>
              <li class="list-group-item elemento-lista"> "Hello, World!"" <a class="New" href="#"> New  </a></li>
  
            </ul>
            </article>
            
          <article class="listings">
            <ul class="list-group">
              <li class="list-group-item title  d-flex justify-content-between">#explainlikeimfive  </li>
              <li class="list-group-item elemento-lista "> Explain picking up a second language Like I'm Five  <a href="#"> 2 comments </a></li>
  
            </ul>
            </article>
            <article class="listings">
              <ul class="list-group">
                <li class="list-group-item title  d-flex justify-content-between">#challenge  </li>
                
                <li class="list-group-item elemento-lista "> "Daily Challenge #32- Hide Phone Numbers" <a href="#"> 23 comments </a></li>
                <li class="list-group-item elemento-lista"> "Daily Challenge #238 - One is the Loneliest Number  " <a href="#"> 6 comments </a></li>
                <li class="list-group-item elemento-lista"> "Debugging- you're doing it wrong. 10 techniques to find a bug in your code" <a href="#"> 42 comments </a></li>
                <li class="list-group-item elemento-lista"> "Daily Challenge #76 - Bingo! (or not...) " <a href="#"> 14 comments </a></li>

                <li class="list-group-item elemento-lista"> "NgRx Efferct vs Reducer vs Selector" <a class="New" href="#"> New  </a></li>
    
              </ul>
              </article>
        </aside>
    )
}

export default AsideRight