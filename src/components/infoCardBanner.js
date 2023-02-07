import React from "react";
import "./estilosComponents.css";

const InfoCardBanner = (props) => {
  return (
    <div className="infoCardBanner-size">
      <div className="infoCardBanner-logo">
        <img src={props.logo} alt="Logo" />
      </div>
      <div className="infoCardBanner-title">{props.title}</div>
    </div>
  );
};

export default InfoCardBanner;
