import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import NumericFormat  from "react-number-format";
import { FaShareAlt, FaComment } from "react-icons/fa";
import {
  Badge,
  Box,
  Button,
  Center,
  Fade,
  Heading,
  HStack,
  IconButton,
  Image,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  Progress,
  SimpleGrid,
  SlideFade,
  Spinner,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { data } = props;

  return (
    <LinkBox>
      <HStack>
        <Square h="65px" w="65px" rounded="lg" bg="white" color="white">
          <a href={"/" + data.slug}>
            <Img h="45px" w="45px" src={data.icon} />
          </a>
        </Square>

        <Stack>
          <a href={"/" + data.slug}>
            <Heading
              as="h4"
              fontSize="lg"
              p="0"
              mt="0px !important"
              fontWeight="normal"
              color="white"
            >
              {data.name}
            </Heading>
            <Text
              as="p"
              fontWeight="thin"
              fontSize="11px"
              p="0"
              mt="0px !important"
              color="white"
            >
              {data.des}
            </Text>
          </a>
        </Stack>
      </HStack>
    </LinkBox>
  );
};

export default Card;
