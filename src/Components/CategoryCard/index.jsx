import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Slider from "./Slider";

const Index = (props) => {
  const { loading, data } = props;

  const [recivedData, setRecivedData] = useState(data);
  useEffect(() => {
    getsortData(data, loading);
  }, [data]);
  const getsortData = (data, loading) => {
    if (!loading) {
      setRecivedData(
        data &&
          data.cat.sort(function (a, b) {
            return a.category_id - b.category_id;
          })
      );
    }
  };
  return (
    <Box p="1" >
      <Heading mx="4" mb="1" as="h4" color="#D6AE3699" size="md" textAlign="center">
        {/* {data && data.catslider_name} */}
        IMPORTANT CATEGORIES
      </Heading>

      <Slider loading={loading} data={recivedData} />
    </Box>
  );
};
export default Index;
