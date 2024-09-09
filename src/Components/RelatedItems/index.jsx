import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "./Slider";

const Index = (props) => {
  const { heading, subHeading } = props;
  return (
    <Box p="5" pt="5" pb="0" bg="#ebebeb">
      <Heading mx="4" mb="1" as="h4" color="gray.900" size="sm">
        {heading}
      </Heading>

      {subHeading ? (
        <Heading mx="4" as="h6" color="gray.900" size="xs">
          <Text as="span" fontWeight="normal">
            {subHeading}
          </Text>
        </Heading>
      ) : null}

      <Slider />
    </Box>
  );
};
export default Index;
