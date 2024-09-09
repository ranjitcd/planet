import {
  Box,
  Heading,
  LinkBox,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Card from "./card";

const Index = (props) => {
  const { data, loading } = props;

  return (
    <Box>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        minChildWidth={["auto", "40%", "40%", "20%"]}
        spacing={["22px", "22px", "22px", "22px"]}
      >
        <AnimatePresence>
          {data &&
            Object.keys(data).map((index, j) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Box as="div">
                  <Skeleton borderRadius="xl" isLoaded={!loading}>
                    <LinkBox as="article" rounded="md">
                      <Card key={index} data={data[index]} />
                    </LinkBox>
                  </Skeleton>
                </Box>
              </motion.div>
            ))}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
