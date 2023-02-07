import React from "react";
import "./estilosComponents.css";

const ProductsNavbar = () => {
  const linksinfo = [
    { title: "TSHIRTS", link: "blablabla" },
    { title: "PANTS", link: "blablabla" },
    { title: "SWEATERS", link: "blablabla" },
    { title: "BUZOS", link: "blablabla" },
  ];
  return (
    <div className="components-size-all">
      {linksinfo.map((link, index) => (
        <button className="productsNavbar-buttons" key={index}>{link.title}</button>
      ))}
    </div>
  );
};

export default ProductsNavbar;
