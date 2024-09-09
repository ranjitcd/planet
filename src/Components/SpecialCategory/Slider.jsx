import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";
const SliderComponent = ({ data, loading }) => {
  console.log("data")
  console.log(data)
  console.log("data")
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {!loading
        ? data &&
          Object.keys(data).map((i, j) => {
            return (
              <Box as="div" p="3" key={i}>
                <ProductCard data={data[i]} />
              </Box>
            );
          })
        : [1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => {
            return (
              <Box as="div" p="3" key={i}>
                <Skeleton width="100%" height="xs" />
              </Box>
            );
          })}
    </Slider>
  );
};

export default SliderComponent;
