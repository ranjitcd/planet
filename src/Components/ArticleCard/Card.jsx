import { StarIcon } from "@chakra-ui/icons";
import NumericFormat  from "react-number-format";
import {
  Badge,
  Box,
  Button,
  Center,
  Image,
  Progress,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const imageUrl = "/images/mask_1.png";
  const title = "something";
  const imageAlt = "asdasdas";
  const formattedPrice = 4545;
  const strikePrice = 64756574;

  return (
    <Box
      position="relative"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      overflow="hidden"
    >
      <Box d="flex" position="absolute" top="30px" alignItems="baseline">
        <Badge
          borderRadius="4px"
          borderLeftRadius="0"
          px="2"
          bg="green.900"
          color="white"
        >
          Liver Care
        </Badge>
      </Box>
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
  );
};

export default Card;
