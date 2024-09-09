import { Box, Heading } from "@chakra-ui/react";
import { getQueriesForElement } from "@testing-library/dom";

import React from "react";

import BrandNavigations from "../Navigation/BrandNavigations";

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
        Brands
      </Heading>

      <BrandNavigations />
    </>
  );
};

export default Index;
