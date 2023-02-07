import { React, useState } from "react";
import "./estilosComponents.css";
import PortadaScreen from "./portadaScreen";

const ImgPortada = () => {
  const portadas = [
    {
      image: "./../imgs/tshirt1.jpg",
      subtitle: "NUEVO INGRESO",
      title: "REMERA STRADA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      price: "50",
    },
    {
      image: "./../imgs/tshirt1.jpg",
      subtitle: "NUEVO INGRESO",
      title: "REMERA OVERSIZE STR",
      description: "blablabla blablabla blabla",
      price: "38.50",
    },
    {
      image: "./../imgs/tshirt1.jpg",
      subtitle: "NUEVO INGRESO",
      title: "REMERA OVERSIZE STR",
      description: "blablabla blablabla blabla",
      price: "38.50",
    },
  ];
  const [portadaSelec, setPortadaSelec] = useState(portadas[0]);
  return (
    <div className="imgsCarrusell-size">
      <PortadaScreen
        image={portadaSelec.image}
        subtitle={portadaSelec.subtitle}
        title={portadaSelec.title}
        description={portadaSelec.description}
        price={portadaSelec.price}
      />
    </div>
  );
};

export default ImgPortada;
