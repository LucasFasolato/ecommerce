import React from "react";
import "./estilosComponents.css";

const PortadaScreen = (props) => {
  return (
    <div className="portada-full-size">
      <div className="portada-content">
        <div className="portada-content-top">
          <div className="portada-top-left">
            <div className="portada-top-left-titles">
              <div className="portada-top-left-titles-subt">
                <h2>{props.subtitle}</h2>
              </div>
              <div className="portada-top-left-titles-title">
                <h1>{props.title}</h1>
              </div>
            </div>
            <div className="portada-top-left-description">
              <p className="portada-top-left-description-p">
                {props.description}
              </p>
            </div>
            <div className="portada-top-left-buttons">
              <button className="portada-top-left-buttons-bttn-vermas">
                VER MAS
              </button>
              <button className="portada-top-left-buttons-bttn">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="portada-top-right">
            <div className="portada-top-right-circleprice">
              <div className="portada-top-right-circleprice-content">
                <h2 className="portada-top-right-circleprice-h2-top">from</h2>
                <h1 className="portada-top-right-circleprice-h1">
                  ${props.price}
                </h1>
                <h2 className="portada-top-right-circleprice-h2">buy now!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="portada-content-bottom"></div>
      </div>
    </div>
  );
};

export default PortadaScreen;
