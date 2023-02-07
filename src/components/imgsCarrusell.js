import { React, useState } from "react";
import "./estilosComponents.css";
import { CSSTransition } from "react-transition-group";
import over1 from "./../imgs/oversize1.jpg";
import over2 from "./../imgs/oversize2.jpg";
import over3 from "./../imgs/oversize3.jpg";
const ImgsCarrusell = () => {
  const images = [{ over1 }, { over2 }, { over3 }];
  const [currentIndex, setCurrentIndex] = useState(0);

  // setInterval(() => {
  //   setCurrentIndex((currentIndex + 1) % images.length);
  //   console.log(images[currentIndex]);
  // }, 4000);

  return (
    <div className="imgsCarrusell-size">
      <CSSTransition in={true} timeout={500} classNames="fade" unmountOnExit>
        <img
          className="imgsCarrusell-container-img"
          src={images[currentIndex]["over" + (currentIndex + 1)]}
          alt={"Foto numero: " + currentIndex}
        />
      </CSSTransition>
      <div>
        {images.map((image, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImgsCarrusell;
