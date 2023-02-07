import React from "react";
import "./estilosComponents.css";
import shoppingBag from "./../imgs/shopping-bag.png";
import fav from "./../imgs/heart.png";
const ProductCard = (props) => {
  return (
    <div className="components-full-size">
      <div className="productCard-image">
        <img src={props.image} alt="Producto imagen" />
      </div>
      <div className="productCard-info">
        <div className="productCard-name">{props.title}</div>
        <div className="productCard-price">${props.price}</div>
      </div>
      <button className="productCard-button-left">
        <img
          className="productCard-button-img"
          src={shoppingBag}
          alt="Shopping bag icon"
        />
      </button>
      <button className="productCard-button-right">
        <img className="productCard-button-img" src={fav} alt="Fav icon" />
      </button>
    </div>
  );
};

export default ProductCard;
