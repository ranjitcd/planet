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
import  { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

const CategoryNavigations = () => {
  // const { categories, loading } = useSelector((state) => state.category);

  const categories = [
    {product_id:12,category_name:"Premium Black Collection",product_image:"/images/p_1.jpg",mrp:"150",dis_mrp:"60",product_slug:"Premium Black Collection"},
    {product_id:13,category_name:"Avantspace Collection",product_image:"/images/p_2.jpg",mrp:"160",dis_mrp:"40",product_slug:"Premium Black Collection"},
    {product_id:11,category_name:"Olimpia Collection",product_image:"/images/p_3.jpg",mrp:"170",dis_mrp:"50",product_slug:"Premium Black Collection"},
    {product_id:14,category_name:"Elfo Collection",product_image:"/images/p_4.jpg",mrp:"200",dis_mrp:"50",product_slug:"Premium Black Collection"},
    {product_id:15,category_name:"Avantspace Collection",product_image:"/images/p_5.jpg",mrp:"130",dis_mrp:"70",product_slug:"Premium Black Collection"},
    {product_id:16,category_name:"Premium Black Collection",product_image:"/images/p_1.jpg",mrp:"140",dis_mrp:"80",product_slug:"Premium Black Collection"},
    {product_id:14,category_name:"Elfo Collection",product_image:"/images/p_4.jpg",mrp:"200",dis_mrp:"50",product_slug:"Premium Black Collection"},
    {product_id:15,category_name:"Avantspace Collection",product_image:"/images/p_5.jpg",mrp:"130",dis_mrp:"70",product_slug:"Premium Black Collection"},
    {product_id:16,category_name:"Premium Black Collection",product_image:"/images/p_1.jpg",mrp:"140",dis_mrp:"80",product_slug:"Premium Black Collection"},
    {product_id:14,category_name:"Elfo Collection",product_image:"/images/p_4.jpg",mrp:"200",dis_mrp:"50",product_slug:"Premium Black Collection"},
    {product_id:15,category_name:"Avantspace Collection",product_image:"/images/p_5.jpg",mrp:"130",dis_mrp:"70",product_slug:"Premium Black Collection"},
    {product_id:16,category_name:"Premium Black Collection",product_image:"/images/p_1.jpg",mrp:"140",dis_mrp:"80",product_slug:"Premium Black Collection"},
    
  ];
  const [loading, setloading] = useState("");


  useEffect(() => {
   
    setloading(false)
  }, []);

  const renderCategories = () => {
    let navItems = [];
    if (categories && categories.parent && categories.parent.length) {
      Object.keys(categories.parent).map((i, j) => {
        if (categories.parent[i].sub) {
          if (categories.parent[i].sub.length == 0) {
            navItems.push(
              <motion.div
                key={i}
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
                          color="#686161"
                          textTransform="capitalize"
                          _active={{
                            bg: "green.900",
                            color: "white",
                            transform: "scale(0.98)",
                            borderColor: "#bec3c9",
                            fontWeight: "semibold",
                            boxShadow: "none",
                          }}
                          _expanded={{ bg: "green.900", color: "white" }}
                          _focus={{
                            boxShadow: "none",
                          }}
                        >
                          <Box flex="1" textAlign="left">
                            <Text
                              as={Link}
                              to={`/${categories.parent[i].category_slug}`}
                            >
                              {categories.parent[i].category_name}
                            </Text>
                          </Box>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <List fontSize="xs" spacing={2}>
                          {Object.keys(categories.parent[i].sub).map((k, l) => {
                            return (
                              <ListItem
                                mx="2"
                                _hover={{ bg: "green.900", color: "white" }}
                                _highlighted={{
                                  bg: "green.900",
                                  color: "white",
                                }}
                                key={categories.parent[i].sub[k].category_id}
                                selected
                              >
                                <Text
                                  as={Link}
                                  textTransform="uppercase"
                                  to={`/${categories.parent[i].category_slug}/${categories.parent[i].sub[k].category_slug}`}
                                >
                                  {categories.parent[i].sub[k].category_name}
                                </Text>
                              </ListItem>
                            );
                          })}
                        </List>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>
              </motion.div>
            );
          } else {
            navItems.push(
              <motion.div
                key={i}
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
                          color="#686161"
                          textTransform="capitalize"
                          _active={{
                            bg: "green.900",
                            color: "white",
                            transform: "scale(0.98)",
                            borderColor: "#bec3c9",
                            fontWeight: "semibold",
                            boxShadow: "none",
                          }}
                          _expanded={{ bg: "green.900", color: "white" }}
                          _focus={{
                            boxShadow: "none",
                          }}
                        >
                          {isExpanded ? (
                            <ChevronDownIcon fontSize="12px" />
                          ) : (
                            <ChevronRightIcon fontSize="12px" />
                          )}
                          <Box flex="1" textAlign="left">
                            <Text
                              as={Link}
                              to={`/${categories.parent[i].category_slug}`}
                            >
                              {categories.parent[i].category_name}
                            </Text>
                          </Box>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <List fontSize="xs" spacing={2}>
                          {Object.keys(categories.parent[i].sub).map((k, l) => {
                            return (
                              <ListItem
                                mx="2"
                                _hover={{ bg: "green.900", color: "white" }}
                                // _hover={{ color: "green.900" }}
                                _highlighted={{
                                  bg: "green.900",
                                  color: "white",
                                }}
                                key={categories.parent[i].sub[k].category_id}
                                selected
                              >
                                <Text
                                  as={Link}
                                  textTransform="uppercase"
                                  to={`/${categories.parent[i].category_slug}/${categories.parent[i].sub[k].category_slug}`}
                                >
                                  {categories.parent[i].sub[k].category_name}
                                </Text>
                              </ListItem>
                            );
                          })}
                        </List>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>
              </motion.div>
            );
          }
        } else {
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
                          {categories.parent[i].category_name}
                        </Box>
                      </AccordionButton>
                    </h2>
                  </>
                )}
              </AccordionItem>
            </motion.Box>
          );
        }
      });
    }
    return navItems;
  };
  return (
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
  );
};

export default CategoryNavigations;
