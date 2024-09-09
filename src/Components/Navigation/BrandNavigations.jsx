import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Skeleton,
  Stack,
  Slide,
  Progress,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

const BrandNavigations = () => {
  const { brands, loading } = useSelector((state) => state.brands);

  //const brands = "";
  //const loading = "";

  const renderCategories = () => {
    let navItems = [];

    if (brands && brands.length) {
      Object.keys(brands).map((i, j) => {
        console.log(brands[i]);

        navItems.push(
          <motion.Box
            key={i}
            as="div"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            exit={{ opacity: 0, y: 10 }}
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "green.900", color: "white" }}
                      fontSize="sm"
                      _active={{
                        bg: "green.900",
                        color: "white",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                        boxShadow: "none",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text
                          as={Link}
                          textTransform="uppercase"
                          to={`/brands/${brands[i].slug}`}
                        >
                          {brands[i].name}
                        </Text>
                      </Box>
                    </AccordionButton>
                  </h2>
                </>
              )}
            </AccordionItem>
          </motion.Box>
        );
      });
    }

    return navItems;
  };
  return (
    <Box
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "green.400",
          borderRadius: "24px",
        },
      }}
    >
      <Accordion>
        {!loading ? (
          <AnimatePresence>{renderCategories()}</AnimatePresence>
        ) : (
          <Stack>
            <Progress size="xs" isIndeterminate />
            <AnimatePresence>
              {[...Array(10)].map(function (_, i) {
                return (
                  <Box as="div" key={i}>
                    <Skeleton fadeDuration="1" height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                  </Box>
                );
              })}
            </AnimatePresence>
          </Stack>
        )}
      </Accordion>
    </Box>
  );
};

export default BrandNavigations;
