import { Box, Image, Img } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
const Index = ({ images }) => {

  
  useEffect(() => {}, []);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
      speed: 500,
      autoplaySpeed: 1000,
      
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
  };

  return (
    <div>
      <Slider {...settings}>
      {images &&
        Object.keys(images).map((i, j) => (
          <Box align="center">
          <Image
            // src={images}
            src={images[i].image}
            key={j}
            // alt={imageAlt}
            // h={["160px", "120px", "120px", "120px"]}
            maxW="100%"
            fallbackSrc="../images/no-image.jpg"
            objectFit="cover"
          />
           </Box>
        ))}
       

      
      </Slider>
    </div>
  );
};

export default Index;
