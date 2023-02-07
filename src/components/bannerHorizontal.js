import React from "react";
import "./estilosComponents.css";
import iconPC from "./../imgs/icon-pc.png";
import quality from "./../imgs/icons8-quality.png";
import delivery from "./../imgs/delivery-truck.png";
import InfoCardBanner from "./infoCardBanner";

const BannerHorizontal = () => {
  return (
    <div className="bannerHorizontal-infocards">
      <div className="bannerHorizontal-infocards-div3">
        <InfoCardBanner logo={iconPC} title="FAST SECURE PAYMENTS" />
      </div>
      <div className="bannerHorizontal-infocards-div3 bannerHorizontal-mid">
        <InfoCardBanner logo={quality} title="PREMIUM PRODUCTS" />
      </div>
      <div className="bannerHorizontal-infocards-div3">
        <InfoCardBanner logo={delivery} title="FREE & FAST DELIVERY" />
      </div>
    </div>
  );
};

export default BannerHorizontal;
