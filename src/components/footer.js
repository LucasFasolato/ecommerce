import React from "react";
import "./estilosComponents.css";
import logoInstagram from "./../imgs/icons8-instagram.svg";
import logoLinkedin from "./../imgs/icons8-linkedin-white.svg";
import logoFacebook from "./../imgs/icons8-facebook.svg";
import logoTwitter from "./../imgs/icons8-twitter-white.svg";
import logoWhatsApp from "./../imgs/icons8-whatsapp.svg";

const Footer = (props) => {
  return (
    <div className="footer-size">
      <div className="footer-div-top">
        <div className="footer-top-logo">
          <img src={props.imgsrc} alt="Logo" />
        </div>
      </div>
      <div className="footer-div-mid">
        <div className="footer-mid-column">
          <div className="footer-mid-column-top">ABOUT</div>
          <div className="footer-mid-column-mid">
            Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis.
            Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer
            ac sem.
          </div>
          <div className="footer-mid-column-bottom">CREDIT CARDS</div>
        </div>
        <div className="footer-mid-column">
          <div className="footer-mid-column-top">QUESTIONS</div>
          <div className="footer-mid-column-mid-indice">
            <div className="footer-mid-column-mid-indice-column">
              <ul>
                <li>
                  <button>About Us</button>
                </li>
                <li>
                  <button>Track Orders</button>
                </li>
                <li>
                  <button>Returns</button>
                </li>
                <li>
                  <button>Jobs</button>
                </li>
                <li>
                  <button>Shipping</button>
                </li>
                <li>
                  <button>Blog</button>
                </li>
              </ul>
            </div>
            <div className="footer-mid-column-mid-indice-column">
              <ul>
                <li>
                  <button>Partners</button>
                </li>
                <li>
                  <button>Bloggers</button>
                </li>
                <li>
                  <button>Support</button>
                </li>
                <li>
                  <button>Terms of Use</button>
                </li>
                <li>
                  <button>Press</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-mid-column">
          <div className="footer-mid-column-top">INFO</div>
          <div className="footer-mid-column-mid-third-column">
            <div className="footer-mid-column-mid-third-column-img"></div>
            <div className="footer-mid-column-mid-third-column-text"></div>
          </div>
          <div className="footer-mid-column-mid-third-column">
            <div className="footer-mid-column-mid-third-column-img"></div>
            <div className="footer-mid-column-mid-third-column-text"></div>
          </div>
        </div>
        <div className="footer-mid-column">
          <div className="footer-mid-column-top">Q & A</div>
          <div className="footer-mid-column-mid-fourth-column">
            <div className="footer-mid-column-mid-third-column-qa"></div>
            <div className="footer-mid-column-mid-third-column-qa"></div>
            <div className="footer-mid-column-mid-third-column-qa"></div>
            <div className="footer-mid-column-mid-third-column-qa"></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-div-bottom">
        <div className="footer-bottom-socialmedia">
          <div className="footer-bottom-socialmedia-box">
            <img src={logoInstagram} alt="Logo instagram" />
            <h3 className="footer-h3">INSTAGRAM</h3>
          </div>
          <div className="footer-bottom-socialmedia-box">
            <div className="footer-bottom-socialmedia-box">
              <img src={logoTwitter} alt="Logo twitter" />
              <h3 className="footer-h3">TWITTER</h3>
            </div>
          </div>
          <div className="footer-bottom-socialmedia-box">
            <div className="footer-bottom-socialmedia-box">
              <img src={logoWhatsApp} alt="Logo whatsapp" />
              <h3 className="footer-h3">WHATSAPP</h3>
            </div>
          </div>
          <div className="footer-bottom-socialmedia-box">
            <div className="footer-bottom-socialmedia-box">
              <img src={logoFacebook} alt="Logo facebook" />
              <h3 className="footer-h3">FACEBOOK</h3>
            </div>
          </div>
          <div className="footer-bottom-socialmedia-box">
            <div className="footer-bottom-socialmedia-box">
              <img src={logoLinkedin} alt="Logo linkedin" />
              <h3 className="footer-h3">LINKEDIN</h3>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyright ©2023 All rights reserved | This website is made by Lucas
          Fasolato
        </p>
      </div>
    </div>
  );
};

export default Footer;
