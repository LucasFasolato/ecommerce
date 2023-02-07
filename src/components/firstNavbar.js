import React from "react";
import "./estilosComponents.css";
import loginuser from "./../imgs/icons8-male-user.png";
import shopcart from "./../imgs/icons8-bolsa-de-compras.png";

const FirstNavbar = (props) => {
  return (
    <div className="components-size">
      <div className="firstNavbar-logo">
        <img
          className="firstNavbar-logo-img"
          src={props.imgsrc}
          alt={props.imgalt}
        />
      </div>
      <div className="firstNavbar-searchbar">
        <input
          className="firstNavbar-searchbar-input"
          placeholder="Search on Strada"
        />
        <button className="firstNavbar-searchbar-button">🔍︎</button>
      </div>
      <div className="firstNavbar-login">
        <div className="firstNavbar-login-button">
          <div className="firstNavbar-login-button-img-size">
            <img
              className="firstNavbar-login-button-img"
              src={loginuser}
              alt="Login user"
            />
          </div>
          <div className="firstNavbar-login-button-button-size">
            <button className="firstNavbar-login-button-button">
              Sign in or Create Account
            </button>
          </div>
        </div>
        <div className="firstNavbar-login-button">
          <div className="firstNavbar-login-button-img-size">
            <img
              className="firstNavbar-login-button-img"
              src={shopcart}
              alt="Bolsa de compras"
            />
          </div>
          <div className="firstNavbar-login-button-button-size">
            <button className="firstNavbar-login-button-button">
              Shopping Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNavbar;
