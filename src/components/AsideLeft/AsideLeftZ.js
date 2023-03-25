import React from 'react';
import casa from '../Assets/iconos/casa.svg';
import cardFile from '../Assets/iconos/card-file.png';
import listings from '../Assets/iconos/listings.svg';
import podcasts from '../Assets/iconos/podcasts.svg';
import tags from '../Assets/iconos/tags.svg';
import faq from '../Assets/iconos/faq.svg';
import foremShop from '../Assets/iconos/forem-shop.svg';
import sponsors from '../Assets/iconos/sponsors.svg';
import about from '../Assets/iconos/about.svg';
import contact from '../Assets/iconos/contact.svg';
import twitter from '../Assets/iconos/twitter.svg';
import faceboock from '../Assets/iconos/facebook.svg';
import github from '../Assets/iconos/github.svg';
import instagram from '../Assets/iconos/insta.svg';
import twitch from '../Assets/iconos/twitch.svg';
import gear from '../Assets/iconos/gear.svg';
import forem from '../Assets/Imagenes/forem.png';
import Card from '../Card/Card';
const AsideLeftZ = () => {
    return (
            <>
            <ul className="categories">
            <li>
              <img src={casa} alt="casita"/>
              <p>Home</p>
            </li>
            <li>
              <img src={cardFile} alt="mailbox"/>
              <p>Reading List</p>
            </li>
            <li>
              <img src={listings} alt="listings"/>
              <p>Listings</p>
            </li>
            <li>
              <img src={podcasts} alt="podcasts"/>
              <p>Podcasts</p>
            </li>
            <li>
              <img src={tags} alt="tags"/>
              <p>Tags</p>
            </li>
            <li>
              <img src={faq} alt="faq"/>
              <p>FAQ</p>
            </li>
            <li>
              <img src={foremShop} alt="forem"/>
              <p>Forem Shop</p>
            </li>
            <li>
              <img src={sponsors} alt="sponsors"/>
              <p>Sponsors</p>
            </li>
            <li>
              <img src={about} alt="about"/>
              <p>About</p>
            </li>
            <li>
              <img src={contact} alt="contact"/>
              <p>Contact</p>
            </li>
            <li>
              <img src={contact} alt="guides"/>
              <p>Guides</p>
            </li>
            <li>
              <img src={contact} alt="software"/>
              <p>Software comparisons</p>
            </li>
            </ul>
          <div className="otherCategories">
            <h2>Other</h2>
            <ul>
              <li>
                <img src={contact} alt="code-of-conduct"/>
                <p>Code of Conduct</p>
              </li>
              <li>
                <img src={contact} alt="privacy-policy"/>
                <p>Privacy Policy</p>
              </li>
              <li>
                <img src={contact} alt="terms of use"/>
                <p>Terms of use</p>
              </li>
            </ul>
          </div>
          <div className="redesDesktop d-flex justify-content-around">
            <img src={twitter} alt="twitter"/>
            <img src={faceboock} alt="facebook"/>
            <img src={github} alt="github"/>
            <img src={instagram} alt="instagram"/>
            <img src={twitch} alt="twitch"/>
          </div>
          <div className="myTags">
            <div className="myTags__title d-flex justify-content-between mt-4">
              <h2>My tags</h2>
              <img src={gear} alt="gear"/>
            </div>
            <div className="myTags__list">
              <ul>
                <li>#javascript</li>
                <li>#beginners</li>
                <li>#react</li>
                <li>#linux</li>
                <li>#git</li>
              </ul>
            </div>
            <div className="thanks py-2 px-3">
              <p>Nearly 700 developers have contributed to the Forem codebase that powers DEV and other communities. 🤯</p>
              <h2>Thank you!</h2>
              <h3>👉 Forem on GitHub 👈</h3>
            </div>
            <div className="card mt-3 foremShopCard px-3 pt-3" >
              <img src={forem} alt="forem"/>
              <div className="card-body">
                <h5 className="card-title">The Forem Shop is Here!</h5>
                <p className="card-text">Shop Forem, DEV, and CodeNewbie merch</p>
              </div>
            </div>
          </div>
            </>
            )
  };

export default AsideLeftZ;