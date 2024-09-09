import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Image,
  Progress,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

const Index = (props) => {
  const { imageUrl, title, imageAlt, formattedPrice, strikePrice } = props.data;

  return (
    <>
      <Skeleton isLoaded={true}>
        <Box
          position="relative"
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
          overflow="hidden"
        >
          <Box
            d="flex"
            position="absolute"
            top="10px"
            left="10px"
            alignItems="baseline"
          ></Box>
          <Center p="5">
            <Image
              src={imageUrl}
              alt={imageAlt}
              h="180px"
              maxW="90%"
              objectFit="contain"
              fallbackSrc="../images/no-image.jpg"
            />
          </Center>
        </Box>
        <Box p="3">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h3"
            noOfLines="2"
            textAlign="center"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>
        </Box>
      </Skeleton>
    </>
  );
};

export default Index;
