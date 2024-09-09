import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import NumericFormat  from "react-number-format";
import { FaShareAlt, FaComment } from "react-icons/fa";
import {
  Badge,
  Box,
  Button,
  Center,
  Fade,
  IconButton,
  Image,
  Progress,
  SlideFade,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { data } = props;
  
  console.log("blogdt card");
  console.log(data);
  console.log("blogdt card");
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box  position="relative" overflow="hidden" role="group">
      <Center bg="white" position="relative" p="5">

        <Image
         
          src={data.image}
          alt={data.name}
          h="220px"
          maxW="120%"
          objectFit="fill"
          fallbackSrc="../images/no-image.jpg"
        />

        <Box
          position="absolute"
          opacity="0"
          _groupHover={{
            bg: "green.900",
            boxShadow: "none",
            d: "box",
            opacity: "0.9",
            height: "100%",
            flexDir: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            display: "flex",
            borderColor: "black",
          }}
        >
          <IconButton
            aria-label="Search database"
            onClick={() =>
              openInNewTab("blog/"+ data.id)
            }
            mx="2"
            icon={<FaShareAlt />}
          />
         
        </Box>
      </Center>
      <Box>
        <Box d="flex" mt="6" mb="1" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {data.created_on} |{" "}
            <Text as="span" color="green.900" fontWeight="bold">
              {data.name}
            </Text>
          </Box>
        </Box>

        <Box
          mt="0"
          fontWeight="semibold"
          as="h3"
          noOfLines="2"
          lineHeight="tight"
          fontSize="sm"
          isTruncated
        >
          {data.name}
        </Box>
        <Box mt="1" as="h4" noOfLines="3" fontSize="xs">
          {data.description}
        </Box>

        {/* <Button
          mt="3"
          _focus={{
            boxShadow: "none",
            borderColor: "black",
          }}
          _groupHover={{
            bg: "green.900",
            boxShadow: "none",
            color: "white",
            borderColor: "black",
          }}
          _active={{ color: "white", transform: "scale(0.98)" }}
          colorScheme="teal"
          borderRadius="full"
          borderColor="green.900"
          color="green.900"
          bg="white"
          fontSize="sm"
          variant="outline"
        >
          Read More
        </Button> */}
      </Box>
    </Box>
  );
};

export default Card;
