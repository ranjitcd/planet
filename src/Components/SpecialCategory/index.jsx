import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const Index = (props) => {
  const { data, subHeading, loading } = props;
  const [recivedData, setRecivedData] = useState(data);
  useEffect(() => {
    getsortData(data, loading);
  }, [data]);
  const getsortData = (data, loading) => {
    if (!loading) {
      setRecivedData(
        data &&
          data.products.sort(function (a, b) {
            return a.product_id - b.product_id;
          })
      );
    }
  };
  return (
    <Box p="1" bg="white">
      
      
      <Heading mx="4" as="h4" color="#D6AE3699" size="md" textAlign="center">
       FEATURED PRODUCTS
      </Heading>
      
      
      
      {/* <Heading mx="4" as="h4" color="gray.900" size="sm">
        {data && data.slider_name}{" "}
        {subHeading ? (
          <Text as="span" fontWeight="normal">
            {"| "}
            {subHeading}
          </Text>
        ) : null}
      </Heading> */}
      <Slider loading={loading} data={recivedData} />
    </Box>
  );
};

export default Index;
