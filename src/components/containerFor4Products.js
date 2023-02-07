// LA CARGA NO ES OPTIMA, SI TOCAS RAPIDO LOS BOTONES NO SE MUEVE RAPIDO
import React, { useState } from "react";
import "./estilosComponents.css";
import ProductCard from "./productCard";
import leftArrow from "./../imgs/left-arrow.png";
import rightArrow from "./../imgs/right-arrow.png";
const ContainerFor4Products = () => {
  const productsOnScreen = [
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
  ];
  let [firstProduct, setFirstProduct] = useState(0);
  let [secondProduct, setSecondProduct] = useState(1);
  let [thirdProduct, setThirdProduct] = useState(2);
  let [fourthProduct, setFourthProduct] = useState(3);
  function prevOn() {
    if (firstProduct === 0) {
      setFirstProduct(6);
      setSecondProduct(0);
      setThirdProduct(1);
      setFourthProduct(2);
    } else {
      if (secondProduct === 0) {
        setFirstProduct(5);
        setSecondProduct(6);
        setThirdProduct(0);
        setFourthProduct(1);
      } else {
        if (thirdProduct === 0) {
          setFirstProduct(4);
          setSecondProduct(5);
          setThirdProduct(6);
          setFourthProduct(0);
        } else {
          if (fourthProduct === 0) {
            setFirstProduct(3);
            setSecondProduct(4);
            setThirdProduct(5);
            setFourthProduct(6);
          } else {
            setFirstProduct(firstProduct--);
            setSecondProduct(secondProduct--);
            setThirdProduct(thirdProduct--);
            setFourthProduct(fourthProduct--);
          }
        }
      }
    }
  }

  function nextOn() {
    // firstProduct === 7 ? setFirstProduct(1) : setFirstProduct(firstProduct++);
    // secondProduct === 7
    //   ? setSecondProduct(1)
    //   : setSecondProduct(secondProduct++);
    // thirdProduct === 7 ? setThirdProduct(1) : setThirdProduct(thirdProduct++);
    // fourthProduct === 7
    //   ? setFourthProduct(1)
    //   : setFourthProduct(fourthProduct++);

    if (fourthProduct === 6) {
      setFirstProduct(4);
      setSecondProduct(5);
      setThirdProduct(6);
      setFourthProduct(0);
    } else {
      if (thirdProduct === 6) {
        setFirstProduct(5);
        setSecondProduct(6);
        setThirdProduct(0);
        setFourthProduct(1);
      } else {
        if (secondProduct === 6) {
          setFirstProduct(6);
          setSecondProduct(0);
          setThirdProduct(1);
          setFourthProduct(2);
        } else {
          if (firstProduct === 6) {
            setFirstProduct(0);
            setSecondProduct(1);
            setThirdProduct(2);
            setFourthProduct(3);
          } else {
            setFirstProduct(firstProduct++);
            setSecondProduct(secondProduct++);
            setThirdProduct(thirdProduct++);
            setFourthProduct(fourthProduct++);
          }
        }
      }
    }
  }
  return (
    <div className="components-full-size">
      <div className="containerForProducts-container">
        <div className="containerFor4Products-card">
          <ProductCard
            image={productsOnScreen[firstProduct].image}
            title={productsOnScreen[firstProduct].title}
            price={productsOnScreen[firstProduct].price}
          />
        </div>
        <div className="containerFor4Products-card">
          <ProductCard
            image={productsOnScreen[secondProduct].image}
            title={productsOnScreen[secondProduct].title}
            price={productsOnScreen[secondProduct].price}
          />
        </div>
        <div className="containerFor4Products-card">
          <ProductCard
            image={productsOnScreen[thirdProduct].image}
            title={productsOnScreen[thirdProduct].title}
            price={productsOnScreen[thirdProduct].price}
          />
        </div>
        <div className="containerFor4Products-card">
          <ProductCard
            image={productsOnScreen[fourthProduct].image}
            title={productsOnScreen[fourthProduct].title}
            price={productsOnScreen[fourthProduct].price}
          />
        </div>
      </div>
      <button
        className="containerFor4Products-button-left"
        onClick={() => {
          prevOn();
        }}
      >
        <img
          src={leftArrow}
          alt="Right arrow"
          className="containerFor4Products-button-img"
        />
      </button>
      <button
        className="containerFor4Products-button-right"
        onClick={() => {
          nextOn();
        }}
      >
        <img
          className="containerFor4Products-button-img"
          src={rightArrow}
          alt="Right arrow"
        />
      </button>
    </div>
  );
};

export default ContainerFor4Products;
