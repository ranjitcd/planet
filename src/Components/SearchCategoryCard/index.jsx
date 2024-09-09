import {
  Box,
  Image,
  Button,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = ({ CardTitle, AltText, ImagePath, slug }) => {
  return (
    <LinkBox role="group">
      <LinkOverlay as={Link} to={`/${slug}`}>
        <Box bg="white" borderWidth="0px" borderRadius="2px" overflow="hidden">
          <Center p="5">
            <Image
              h="200px"
              maxW="100%"
              objectFit="contain"
              src={ImagePath}
              alt={AltText}
              fallbackSrc="../images/no-image.jpg"
            />
          </Center>

          <Box>
            <Box
              borderTopRadius="0px"
              borderRadius="2px"
              fontWeight="semibold"
              textTransform="uppercase"
              as={Button}
              lineHeight="tight"
              w="100%"
              _groupHover={{
                bg: "green.900",
                boxShadow: "none",
              }}
              _active={{
                bg: "green.900",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow: "none",
              }}
              bg="gray.900"
              textColor="white"
            >
              {CardTitle}
            </Box>
          </Box>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};
export default Index;
