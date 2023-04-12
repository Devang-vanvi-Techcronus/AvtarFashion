import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FIRSTCROUSER from "../../src/assets/image/banner/34.webp";
import SECCROUSER from "../../src/assets/image/banner/35.webp";
import THIRDCROUSER from "../../src/assets/image/banner/36.webp";
import FORTHCROUSER from "../../src/assets/image/banner/37.webp";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Carousel className="pt-5 pb-3">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={FIRSTCROUSER} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={SECCROUSER} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={THIRDCROUSER} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={FORTHCROUSER} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products />
    </>
  );
};

export default Home;
