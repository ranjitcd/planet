import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Skeleton,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandCard from "../BrandCard";
const Index = ({ data, brandsLoading }) => {
  return (
    <Box>
      <Flex>
        <Heading as="h4" color="gray.900" size="sm">
          Popular Brands
        </Heading>
        <Spacer />
        <Heading as="h5" fontWeight="normal" size="xs">
          <Link to="/brands">View all</Link>
        </Heading>
      </Flex>

      <SimpleGrid my="5" columns={[1, 2, 3, 4]} spacing="10px">
        {!brandsLoading
          ? Object.keys(data).map((i, j) => {
              return renderData(data, i, brandsLoading);
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => {
              return (
                <Skeleton height="xs" key={i}>
                  asdasdhaskdjh
                </Skeleton>
              );
            })}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
function renderData(data, i) {
  return (
    <Box key={i}>
      <BrandCard
        id={data[i].brand_id}
        ImagePath={data[i].image}
        AltText={data[i].name}
        CardTitle={data[i].name}
        slug={data[i].slug}
      />
    </Box>
  );
}
