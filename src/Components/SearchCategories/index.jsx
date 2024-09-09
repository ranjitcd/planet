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
import SearchCategoryCard from "../SearchCategoryCard";
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
  let slug = data[i].category_slug;
  if (data[i].parent_id != "") {
    slug = data[i].parent_id + "/" + data[i].category_slug;
  }
  return (
    <Box key={i}>
      <SearchCategoryCard
        id={data[i].category_id}
        ImagePath={data[i].category_image}
        AltText={data[i].category_name}
        CardTitle={data[i].category_name}
        slug={slug}
      />
    </Box>
  );
}
