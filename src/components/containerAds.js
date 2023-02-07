import React from "react";
import "./estilosComponents.css";
import publicidad from "./../imgs/publicidad.png";

const ContainerAds = () => {
  return (
    <div className="containerAds-size">
      <img src={publicidad} alt="Publicidad" />
    </div>
  );
};

export default ContainerAds;
