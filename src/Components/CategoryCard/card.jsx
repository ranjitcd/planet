import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Image,
  LinkOverlay,
  Progress,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  const {
    category_id,
    category_name,
    category_slug,
    category_image,
    category_status,
  } = props.data;

  return (
    <>
      <Skeleton isLoaded={true}>
        <Box
          position="relative"
          borderWidth="1px"
          borderRadius="40%"
          bg="#D6AE3699"
          overflow="hidden"
        >
          <LinkOverlay as={Link} to={`/${category_slug}`}>
            <Center p="5">
              <Image
                src={category_image}
                alt={category_name}
                h={["240px", "220px", "220px", "220px"]}
                maxW="100%"
                objectFit="cover"
                fallbackSrc="../images/no-image.jpg"
              />
            </Center>
          </LinkOverlay>
        </Box>
        <Box p="3">
          <Link to={`/${category_slug}`}>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h3"
              noOfLines="2"
              textAlign="center"
              lineHeight="tight"
              isTruncated
              color="#D6AE3699"
            >
              {category_name}
            </Box>
          </Link>
        </Box>
      </Skeleton>
    </>
  );
};

export default Index;
