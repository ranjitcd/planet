import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Center,
  Fade,
  IconButton,
  Image,
  Progress,
  SlideFade,
  Spinner,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { api } from "../../Helpers/urlConfig";

import React, { useEffect, useState } from "react";
import { FaShareAlt, FaComment } from "react-icons/fa";
import Card from "./Card";

const Index = (props) => {
  const { data, heading, subHeading, loading } = props;
  const [blogdt, setblogdt] = useState(data);
  useEffect(() => {
    getsortData(data, loading);
  }, [data]);
  const getsortData = (data, loading) => {
    if (!loading) {
      setblogdt(
        data &&
          data.posts.sort(function (a, b) {
            return a.product_id - b.product_id;
          })
      );
    }
  };
  return (
    <Box>
      <Heading mb="3" as="h4" px={0} color="gray.900" size="sm">
        {heading} {""}
        {subHeading ? (
          <Text as="span" color="green.900">
            {subHeading}
          </Text>
        ) : null}
      </Heading>

      <SimpleGrid
        columns={[1, 2, 2, 4]}
        p={[2, 2, 2, 0]}
        spacing={["22px", "22px", "22px", "22px"]}
      >
        {!loading
          ? blogdt &&
            Object.keys(blogdt).map((i, j) => {
              return (
                <Box as="div" p="3" key={i}>
                  <Card data={blogdt[i]} />
                </Box>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => {
              return (
                <Box as="div" p="3" key={i}>
                  <Skeleton width="100%" height="xs" />
                </Box>
              );
            })}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
