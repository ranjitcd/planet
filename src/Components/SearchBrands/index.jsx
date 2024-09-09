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
import SearchBrandsCard from "../SearchBrandsCard";
const Index = ({ data, brandsLoading }) => {
  return (
    <Box>
      <SimpleGrid my="5" columns={[1, 2, 3, 4]} spacing="10px">
        {!brandsLoading && data
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
  {
    console.log(data[i]);
  }
  return (
    <Box key={i}>
      <SearchBrandsCard
        id={data[i].id}
        ImagePath={data[i].image}
        AltText={data[i].name}
        CardTitle={data[i].name}
        slug={data[i].slug}
      />
    </Box>
  );
}
