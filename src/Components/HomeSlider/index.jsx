import { Image } from "@chakra-ui/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { api } from "../../Helpers/urlConfig";
const Index = () => {


  const initialState = [
    {image:"/images/Banner1.jpg"},
    {image:"/images/Banner2.jpg"},
    
  ];




  const [Sliderimages, setSliderimages] = useState(initialState);

  // const MainSlider = async () => {
  //   const Repos = await axios.get(api + "mainSlider");
  //   const allRepos = Repos.data;
  //   var destinationObj = {};
  //   Object.assign(destinationObj, allRepos);
  //   setSliderimages(destinationObj);
  // };

  // useEffect(() => {
  //   MainSlider();
  // }, []);

  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          bottom: "0",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {Sliderimages &&
        Object.keys(Sliderimages).map((keyName, i) => (
          <Image borderRadius="15px"  key={i} src={Sliderimages[keyName].image} />
          
          
        ))}
    
    </Slider>
  );
};

export default Index;
