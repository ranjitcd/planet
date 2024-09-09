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
                              // to={`/${categories.parent[i].category_slug}`}
                            >
                              {/* {categories.parent[i].category_name} */}Main Category Name
                            </Text>
                          </Box>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <List fontSize="xs" spacing={2}>
                       
                              <ListItem
                                mx="2"
                                _hover={{ bg: "green.900", color: "white" }}
                                _highlighted={{
                                  bg: "green.900",
                                  color: "white",
                                }}
                                // key={categories.parent[i].sub[k].category_id}
                                selected
                              >
                                <Text
                                  as={Link}
                                  textTransform="uppercase"
                                  // to={`/${categories.parent[i].category_slug}/${categories.parent[i].sub[k].category_slug}`}
                                >
                                  {/* {categories.parent[i].sub[k].category_name} */}
                                  Sub Category
                                </Text>
                              </ListItem>
                        
                        
                        </List>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>
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
