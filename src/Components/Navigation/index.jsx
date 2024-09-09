import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  useDisclosure,
  MenuList,
  Text,
  Collapse,
  Skeleton,
} from "@chakra-ui/react";
import axios from "../../Helpers/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {

  // const initialState = [
  //   {category_id:12,category_name:"Premium Black Collection",category_slug:"Premium Black Collection"},
  //   {category_id:13,category_name:"Avantspace Collection",category_slug:"Avantspace Collection"},
  //   {category_id:11,category_name:"Olimpia Collection",category_slug:"Olimpia Collection"},
  //   {category_id:14,category_name:"Elfo Collection",category_slug:"Elfo Collection"},
  //   {category_id:15,category_name:"Avantspace Collection",category_slug:"Avantspace Collection"},
  //   {category_id:16,category_name:"Premium Black Collection",category_slug:"Premium Black Collection"},
    
  // ];


  const [nav, setNav] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNavigation();
    // setLoading(false)
  }, []);
  const getNavigation = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/categories`);
    if (res.status === 200) {
      console.log("----res----")
      console.log(res)
      console.log("---res---")
      setNav(res.data)
      setLoading(false);
      // let { parent } = res.data;

      // if (parent) {
      //   setNav(parent);
      //   setLoading(false);
      // }
    }
  };

  const renderNavigations = () => {
    let navItems = [];
    if (nav.length) {
      Object.keys(nav).map((i, j) => {
        navItems.push(
          <MenuButton
            key={nav[i].category_id}
            as={Link}
            // to={`/${nav[i].category_slug}`}
            to={`/category-page`}
            ///${nav[i].category_slug + nav[i].category_id}
          >
            <Text
              isTruncated
              fontSize={["xs", "xs", "sm", "14.5px"]}
              fontWeight="Bold"
              color="white"
            >
              {nav[i]}
            </Text>
          </MenuButton>
        );
      });
    }
    return navItems;
  };
  return (
    <Flex
      maxW="themeSize"
      m="auto"
      spacing={(10, 9, 0, 0)}
      py="2"
      px={["5px", "5px", "0", "0"]}
    
    >
      <HStack m="auto" spacing={["10px", "10px", "10px", "20px"]}>
        {loading ? (
          <Skeleton minW="themeSize" width="100%">
            &nbsp;
          </Skeleton>
        ) : (
          <Menu>{renderNavigations()}</Menu>
        )}
      </HStack>
    </Flex>
  );
};

export default Index;
