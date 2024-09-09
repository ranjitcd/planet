import React, { useRef, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Grid,
  HStack,
  Text,
  Stack,
  Spacer,
  Center,
  Square,
  Img,
  WrapItem,
  AspectRatio,
  Image,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  Badge,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Wrap,
  Heading,
  useMediaQuery,
  Icon,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  InputLeftElement,
  AccordionPanel,
  LinkOverlay,
  LinkBox,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import "react-bootstrap-typeahead/css/Typeahead.css";
import { Link, Navigate } from "react-router-dom";
import { isUserLoggedIn, openCart } from "../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl, api } from "../../Helpers/urlConfig";
import { useEffect } from "react";
import { addToCart } from "../../Store/Actions";
import axios from "axios";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Index = () => {
  const headcat = [
    {
      id: 12,
      name: "Burger",
      slug: "#",
      icon: "/images/burger.jpg",
      des: "this is the description",
    },
    {
      id: 13,
      name: "Pizza",
      slug: "#",
      icon: "/images/pizza.jpg",
      des: "this is the description",
    },
    {
      id: 11,
      name: "Salad",
      slug: "#",
      icon: "/images/salad.jpg",
      des: "this is the description",
    },
    {
      id: 14,
      name: "Chicken Burger",
      slug: "#",
      icon: "/images/burger.jpg",
      des: "this is the description",
    },
    {
      id: 15,
      name: "Chicken Pizza",
      slug: "#",
      icon: "/images/pizza.jpg",
      des: "this is the description",
    },
  ];

  const dispatch = useDispatch();
  const { loading, isCartOpen } = useSelector((state) => state.cart);
  const childRef = useRef();
  const [isLargerThan1080] = useMediaQuery("(min-width: 1080px)");
  // This is the default breakpoint
  const [size, setSize] = useState("xs");
  const [cartsize, setCartsize] = useState("sm");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartProducts } = useSelector((state) => state.cart);
  const [search, setsearch] = useState("");
  const [headerCat, setHeaderCat] = useState(headcat);
  const [headerCatLoading, setHeaderCatLoading] = useState(true);
  // const isLoading = useCallback(pathOr(false, [keyword, "loading"]), [keyword]);

  localStorage.setItem("SearchKeyword", search);

  // const [value, setValue] = React.useState("")
  const handleChange = (event) => setsearch(event.target.value);

  useEffect(() => {
    setHeaderCatLoading(false);
    // getHeaderCategories();
  }, []);

  const callModal = (value) => {
    console.log(value);
  };

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const openCartFnc = () => {
    dispatch(openCart());
  };

  let lstest = false;
  const cart_item = localStorage.getItem("cart");
  {
    Object.keys(cartProducts).map((i, j) => {
      lstest = true;
    });
  }
  if (lstest) {
  } else {
    let newcart = JSON.parse(cart_item);
    if (newcart != "" && newcart != null) {
      Object.keys(newcart).map((i, j) => {
        dispatch(addToCart(newcart[i], newcart[i].qty));
      });
    }
  }

  let user = JSON.parse(localStorage.getItem("user"));
  let userid = "";
  if (localStorage.getItem("user")) userid = user.id;
  const LogOut = () => {
    window.localStorage.clear();

    window.location = "/";
    <Navigate push to="/" />;
  };
  const [data, setdata] = useState([]);

  //const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSearch, setOptions1] = useState([]);
  //const [search, setSearch] = useState("");
  const filterBy = () => true;

  const handleSearch = async (query) => {
    setIsLoading(true);
    setsearch(query);

    const response = await axios.post(`${api}searchProcess?search=${query}`);
    const data = (await response.data.products) || [];

    const options1 = Object.keys(data).map((i) => ({
      feature_image: response.data.products[i].feature_image,
      fallbackSrc: "../images/no-image.jpg",
      sno: response.data.products[i].product_id,
      name: `${response.data.products[i].product_name}`,
      slug: response.data.products[i].product_slug,
    }));
    setOptions1(options1);
    setIsLoading(false);
  };

  async function searchfunctionEnter(event) {
    if (event.which === 13) {
      window.location = "/search?q=" + search;
    } else {
      //  console.log(search);
      // let res = await axios.post("searchProcess" + search);
      // // res = await res.data.JSON();
      // console.log(res);
      // setdata(res);
    }
  }
  async function searchfunction() {
    window.location = "/search?q=" + search;

    // const form_data = new FormData();
    // form_data.append("search", search);
    // let res = await axios.post(
    //   "https://supermed.test-projects.com/api_v1/searchProcess",
    //   form_data
    // );
    // if (res.status == "") {
    // }
    // console.log("res");
    // console.log(res);
  }

  const getHeaderCategories = async () => {
    const res = await axios.post(`${api}headerCategory`);
    setHeaderCatLoading(true);
    if (res.status === 200) {
      const { data } = res;
      setHeaderCatLoading(false);
      setHeaderCat(data);
    }
  };

  return (
    <>
      <Box
        bg="#0BA8E6"
        py={["5px", "10px", "10px", "10px"]}
        px={["5px", "10px", "10px", "10px"]}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "32px", color: "White" }}>Planet Tax Refund</Text> */}
          <Box
            style={{
              width: "250px",
              height: "80px",
              borderRight: "1px solid white",
            }}
          >
            {" "}
            <Img mt="5px" ml="50px" mr="auto" src="../images/opticallogo.png" />
          </Box>
          <Box style={{ width: "200px", height: "80px" }}>
            {" "}
            <Img mt="23px" ml="auto" mr="auto" src="../images/planetlogo.png" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
