import { React, useState, useEffect } from "react";
import "./estilosComponents.css";
import ProductCard from "./productCard";

const ContainerAllProducts = () => {
  const [showAll, setShowAll] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const defaultProduct = {
    image: "https://i.ibb.co/my61Gck/default.png",
    title: "Default product",
    price: "0000",
  };
  const [allProducts, setAllProducts] = useState([
    {
      image: "https://i.ibb.co/8dLjCRK/tshirt3.jpg",
      title: "Remera 1",
      price: "8345",
    },
    {
      image: "https://i.ibb.co/R7k6mcF/tshirt1.jpg",
      title: "Remera 2",
      price: "8346",
    },
    {
      image: "https://i.ibb.co/M2Lbn2p/tshirt2.jpg",
      title: "Remera 3",
      price: "8347",
    },
    {
      image: "https://i.ibb.co/xqKJSZj/tshirt4.jpg",
      title: "Remera 4",
      price: "8348",
    },
    {
      image: "https://i.ibb.co/8dLjCRK/tshirt3.jpg",
      title: "Remera 5",
      price: "8349",
    },
    {
      image: "https://i.ibb.co/R7k6mcF/tshirt1.jpg",
      title: "Remera 6",
      price: "8350",
    },
    {
      image: "https://i.ibb.co/M2Lbn2p/tshirt2.jpgg",
      title: "Remera 7",
      price: "8351",
    },
    {
      image: "https://i.ibb.co/8dLjCRK/tshirt3.jpg",
      title: "Remera 8",
      price: "8345",
    },
    {
      image: "https://i.ibb.co/R7k6mcF/tshirt1.jpg",
      title: "Remera 9",
      price: "8346",
    },
    {
      image: "https://i.ibb.co/M2Lbn2p/tshirt2.jpg",
      title: "Remera 10",
      price: "8347",
    },
    {
      image: "https://i.ibb.co/xqKJSZj/tshirt4.jpg",
      title: "Remera 11",
      price: "8348",
    },
    {
      image: "https://i.ibb.co/8dLjCRK/tshirt3.jpg",
      title: "Remera 12",
      price: "8349",
    },
    {
      image: "https://i.ibb.co/R7k6mcF/tshirt1.jpg",
      title: "Remera 13",
      price: "8350",
    },
    {
      image: "https://i.ibb.co/M2Lbn2p/tshirt2.jpgg",
      title: "Remera 14",
      price: "8351",
    },
  ]);
  let contadorProductos = allProducts.length;
  useEffect(() => {
    //Runs only on the first render
    if (allProducts.length % 4 === 0) {
      setTotalProducts(allProducts.length);
    } else {
      while (contadorProductos % 4 !== 0) {
        setAllProducts([...allProducts, defaultProduct]);
        contadorProductos++;
      }
      setTotalProducts(contadorProductos);
    }
  }, [allProducts, contadorProductos, defaultProduct]);
  if (showAll === 1) {
    return (
      <div className="containerForProducts-container">
        {allProducts
          .filter((product, idx) => idx < totalProducts)
          .map((product, index) => (
            <div key={index} className="containerFor4Products-card">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        <div className="containerForProducts-button-container">
          <button
            className="containerForProducts-vermas"
            onClick={() => setShowAll(0)}
          >
            VER MENOS
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="containerForProducts-container">
        {allProducts
          .filter((product, idx) => idx < 8)
          .map((product, index) => (
            <div key={index} className="containerFor4Products-card">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        <div className="containerForProducts-button-container">
          <button
            className="containerForProducts-vermas"
            onClick={() => setShowAll(1)}
          >
            VER MÁS
          </button>
        </div>
      </div>
    );
  }
};

export default ContainerAllProducts;
