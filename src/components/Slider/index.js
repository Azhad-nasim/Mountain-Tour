import React from "react";
import Slider from "react-slick";
import "../Slider/slick.css";
import "../Slider/slick-theme.css";

import S1 from "../../assets/slider/slider1.jpg";
import S2 from "../../assets/slider/slider2.jpg";
import S3 from "../../assets/slider/slider3.jpg";
import S4 from "../../assets/slider/slider4.jpg";
import S5 from "../../assets/slider/slider5.jpg";
import S6 from "../../assets/slider/slider6.jpg";
import S7 from "../../assets/slider/slider7.jpg";
import { Component } from "react";

export default class Animate extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1000,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 1000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 1000,
          },
        },
      ],
    };

    return (
      <>
        <div className=" slider ">
          <Slider {...settings}>
            <div className="slide">
              <img src={S1} alt="slider1" />
            </div>
            <div className="slide">
              <img src={S2} alt="slider2" />
            </div>
            <div className="slide">
              <img src={S3} alt="slider3" />
            </div>
            <div className="slide">
              <img src={S4} alt="slider4" />
            </div>
            <div className="slide">
              <img src={S5} alt="slider5" />
            </div>
            <div className="slide">
              <img src={S6} alt="slider6" />
            </div>
            <div className="slide">
              <img src={S7} alt="slider7" />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
