import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import React from "react";
import Card from "./Card";

const Index = (props) => {
  const { heading, subHeading } = props;
  return (
    <Box p="5" bg="#ebebeb">
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

      <SimpleGrid m="4" columns={[1, 2, 2, 4]} spacing="22px">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Box>
  );
};

export default Index;
