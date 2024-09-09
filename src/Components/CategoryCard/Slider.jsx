import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../ProductCard";
import Card from "./card";
import Slider from "react-slick";
const SliderComponent = ({ data, loading }) => {
  const property = [
    {
      imageUrl: "/images/mask_1.png",
      imageAlt: "Mfr: Sharp Mint Limited",
      title: "Shampoo & Conditioner",
      formattedPrice: "Rs. 749.00",
      strikePrice: "Rs. 749.00",
    },
    {
      imageUrl: "/images/mask_2.png",
      imageAlt: "Mfr: Sharp Mint Limited",
      title: "Creams & Oils",
      formattedPrice: "Rs. 749.00",
      strikePrice: "Rs. 749.00",
    },
    {
      imageUrl: "/images/mask_3.png",
      imageAlt: "Mfr: Sharp Mint Limited",
      title: "Speciality Medicines",
      formattedPrice: "Rs. 1500.00",
      strikePrice: "Rs. 250.00",
    },
    {
      imageUrl: "/images/mask_4.png",
      imageAlt: "Mfr: Sharp Mint Limited",
      title: "Homepathy",
      formattedPrice: "Rs. 749.00",
      strikePrice: "Rs. 749.00",
    },
    {
      imageUrl: "/images/mask_2.png",
      imageAlt: "Mfr: Sharp Mint Limited",
      title: "Family Nutrition",
      formattedPrice: "Rs. 749.00",
      strikePrice: "Rs. 749.00",
    },
    {
      imageUrl: "/images/mask_1.png",
      imageAlt: "Mfr: Sharp Mint Limited",
      title: "N95 mask Adjustable nose clip High density filter - White",
      formattedPrice: "Rs. 749.00",
      strikePrice: "Rs. 749.00",
    },
  ];
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
                <Card data={data[i]} />
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
