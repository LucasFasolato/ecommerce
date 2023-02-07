import React from "react";
import FirstNavbar from "../components/firstNavbar";
// import ImgsCarrusell from "../components/imgsCarrusell";
import SecondNavbar from "../components/secondNavbar";
import "./estilosPages.css";
import ContainerFor4Products from "../components/containerFor4Products";
import ProductsNavbar from "../components/productsNavbar";
import ContainerAllProducts from "../components/containerAllProducts";
import ContainerAds from "../components/containerAds";
import Footer from "../components/footer";
import ImgPortada from "../components/imgPortada";
import BannerHorizontal from "../components/bannerHorizontal";

const HomePage = () => {
  return (
    <div className="main">
      <div className="home-top-navbars">
        <div className="home-top-first-navbar">
          <FirstNavbar
            // imgsrc="https://i.ibb.co/zfVJTm4/logo.png"
            imgsrc="https://i.ibb.co/r535BDq/logo2.png"
            imgalt="Undefeated Logo@nicepng.com"
          />
        </div>
        <div className="home-top-second-navbar">
          <SecondNavbar />
        </div>
      </div>
      <div className="home-img-main">
        <ImgPortada />
      </div>
      <div className="home-infocards">
        <BannerHorizontal />
      </div>
      <div className="home-contproducts">
        <div className="home-contproducts-title">LAST PRODUCTS</div>
        <div className="home-contproducts-container">
          <ContainerFor4Products />
        </div>
        <div className="home-contproducts-title">
          BROWSE TOP SELLING PRODUCTS
        </div>
        <div className="home-contproducts-container-all">
          <div className="home-contproducts-container-all-navbar">
            <ProductsNavbar />
          </div>
          <div className="home-contproducts-container-all-products">
            <ContainerAllProducts />
          </div>
        </div>
      </div>
      <div className="home-banner">
        <ContainerAds />
      </div>
      <div className="home-footer">
        <Footer
          // imgsrc="https://i.ibb.co/r535BDq/logo2.png"
          imgsrc="https://i.ibb.co/8YfS5gd/logo3.png"
        />
      </div>
    </div>
  );
};

export default HomePage;
