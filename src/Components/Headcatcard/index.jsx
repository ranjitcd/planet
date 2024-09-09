import { Box, Heading, SimpleGrid, Text, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Index = (props) => {
  // const { data, loading } = props;
  const {  loading } = props;
  const headcat = [
    {id:12,name:"Burger",slug:"#",icon:"/images/burger.jpg",des:"this is the description"},
    {id:13,name:"Pizza",slug:"#",icon:"/images/pizza.jpg",des:"this is the description"},
    {id:11,name:"Salad",slug:"#",icon:"/images/salad.jpg",des:"this is the description"},
    {id:14,name:"Chicken ",slug:"#",icon:"/images/burger.jpg",des:"this is the description"},
    {id:15,name:"Beef ",slug:"#",icon:"/images/pizza.jpg",des:"this is the description"},
  ];

  return (
    <Box>
      <SimpleGrid
        columns={[2, 2, 3, 5]}
        spacing={["10px", "10px", 10, "10px"]}
        maxW="1100px"
        m="auto"
        px={["10px", "10px", "10px", "10px"]}
        py="5"
      >
        {!loading
          ? headcat &&
            Object.keys(headcat).map((i, j) => {
              return (
                <Box as="div" p="3" key={i}>
                  <Card data={headcat[i]} />
                </Box>
              );
            })
          : [1, 2, 3, 4, 5].map((i, j) => {
              return (
                <Box as="div" p="3" key={i}>
                  <Skeleton width="100%" height="xs" />
                </Box>
              );
            })}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
