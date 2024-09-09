import { Heading } from "@chakra-ui/react";

import React from "react";

import CategoryNavigations from "../Navigation/CategoryNavigations";

const Index = () => {
  return (
    <>
      <Heading
        as="h3"
        px="5"
        py="5"
        pb="3"
        color="gray.900"
        fontWeight="semibold"
        size="sm"
      >
        Categories
      </Heading>
      <CategoryNavigations />
    </>
  );
};

export default Index;
