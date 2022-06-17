import React from "react";

// npm install better-react-carousel
import Carousel from "better-react-carousel";

import styleHome from "../Styles/Home.module.scss";

export const Home = () => {
  return (
    <div className={styleHome.container}>
      <div className={styleHome.title}>
        <img src="https://readme-typing-svg.herokuapp.com?color=%48421d&size=40&center=true&vCenter=true&width=600&height=50&lines=A+Principal+Loja+De+Tênis;Do+Mundo+!!!;" />
      </div>
      <>
        <Carousel
          width={"100vw"}
          cols={2}
          rows={1}
          gap={5}
          loop={true}
          autoplay={2000}
        >
          <Carousel.Item>
            <img src="https://source.unsplash.com/700x450/?shoes=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://source.unsplash.com/700x450/?shoes=2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://source.unsplash.com/700x450/?shoes=3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://source.unsplash.com/700x450/?shoes=4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://source.unsplash.com/700x450/?shoes=5" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://source.unsplash.com/700x450/?shoes=6" />
          </Carousel.Item>
        </Carousel>
      </>
    </div>
  );
};
