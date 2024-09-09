import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import {
  Button,
  Box,
  Flex,
  SimpleGrid,
  AspectRatio,
  Heading,
  Spacer,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import SpecialCategory from "../Components/SpecialCategory";
import CategoryCard from "../Components/CategoryCard";
import HomeSlider from "../Components/HomeSlider";
import { Helmet } from "react-helmet";
import axios from "../Helpers/axios";
import { api } from "../Helpers/urlConfig";
import { Link, Navigate } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const HomePage = () => {
  const initialState = [
    {
      id: 12,
      product_name: "Premium white Collection",
      image: "/images/p_1.jpg",
      mrp: "150",
      dis_mrp: "60",
    },
    {
      id: 13,
      product_name: "Avantspace Collection",
      image: "/images/p_2.jpg",
      mrp: "160",
      dis_mrp: "40",
    },
    {
      id: 11,
      product_name: "Olimpia Collection",
      image: "/images/p_3.jpg",
      mrp: "170",
      dis_mrp: "50",
    },
    {
      id: 14,
      product_name: "Elfo Collection",
      image: "/images/p_4.jpg",
      mrp: "200",
      dis_mrp: "50",
    },
    {
      id: 15,
      product_name: "Avantspace Collection",
      image: "/images/p_5.jpg",
      mrp: "130",
      dis_mrp: "70",
    },
    {
      id: 16,
      product_name: "Premium white Collection",
      image: "/images/p_1.jpg",
      mrp: "140",
      dis_mrp: "80",
    },
  ];

  const property = [
    {
      category_image: "/images/mask_1.png",
      category_name: "Shampoo & Conditioner",
      category_slug: "Shampoo & Conditioner",
    },
    {
      category_image: "/images/mask_2.png",
      category_name: "Creams & Oils",
      category_slug: "Creams & Oils",
    },
    {
      category_image: "/images/mask_3.png",
      category_name: "Speciality Medicines",
      category_slug: "Speciality Medicines",
    },

    {
      category_image: "/images/mask_2.png",
      category_name: "Family Nutrition",
      category_slug: "Family Nutrition",
    },
    {
      category_image: "/images/mask_1.png",
      category_name:
        "N95 mask Adjustable nose clip High density filter - White",
      category_slug:
        "N95 mask Adjustable nose clip High density filter - White",
    },
  ];

  // const [popularCat, setPopularCat] = useState(property);
  // const [popularCatLoading, setPopularCatLoading] = useState(true);
  // const [popularCatT, setPopularCatT] = useState(initialState);
  // const [popularCatTLoading, setPopularCatTLoading] = useState(true);
  const [meta, setmeta] = useState("");
  const [accesstokendt, setaccesstokendt] = useState();

  // useEffect(() => {

  // }, []);

  const getplanettoken = async () => {
    console.log("ok");
    window.location.href = "/planets-tax-refund-programme";
    // const res = await axios.get(`/api/token/getToken`,{
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   }
    // } );

    // if (res.status === 200) {
    //   setaccesstokendt(res.data)
    //   // console.log(res.data.access_token);
    //   let atk = res.data.access_token;
    //       if (res.data.access_token.length !== 0) {
    //         // console.log("Access Granted");
    //         localStorage.setItem('accesstoken', atk);
    //         // <Navigate  to="/planets-tax-refund-programme" />
    //

    //       }
    //     }
  };

  const emrsales = async () => {
    window.location.href = "/emaar-sales-capture-programme";
  };

  const testbutton = async () => {
    console.log(accesstokendt);
  };

  // const Newsapi = async () => {

  //   const res = await axios.post(`newsalert`);

  //   if (res.status === 200) {

  //     setnewzimg(res.data.nalert_image);
  //     setnewstitle(res.data.nalert_title);
  //     setnewsdes(res.data.nalert_detail);
  //     let newDate = new Date()
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth()+ 1;
  //     let year = newDate.getFullYear();
  //     let pd = year+'-'+month+'-'+date
  //     let apied = res.data.end_date
  //     let apisd = res.data.st_date
  //     console.log(res)

  //     if (pd > apied && pd < apisd ) {
  //       console.log('matched')
  //       setIsOpen(true)
  //     } else {
  //       console.log('not matched')
  //       setIsOpen(false)
  //     }

  //   }
  // };

  // const getBlogpost = async () => {
  //   const res = await axios.post(`homePosts`);
  //   setBlogpostLoading(true);
  //   if (res.status === 200) {
  //     console.log(res);
  //     const { data } = res;
  //     setBlogpostLoading(false);
  //     setBlogpost(data);
  //   }
  // };

  // const getBrandsData = async () => {
  //   const res = await axios.post(`popularBrands`);
  //   setBrandsLoading(true);
  //   if (res.status === 200) {
  //     const { data } = res;
  //     data.sort(function (a, b) {
  //       return b.sort - a.sort;
  //     });
  //     setBrandsLoading(false);
  //     setBrands(data);

  //   }
  // };

  // const getPopularCategoriest = async () => {
  //   const res = await axios.post(`catProdSlider/t`);
  //   setPopularCatTLoading(true);
  //   if (res.status === 200) {
  //     const { data } = res;
  //     setPopularCatTLoading(false);
  //     setPopularCatT(data);
  //   }
  // };

  // const getPopularCategoriesb = async () => {
  //   const res = await axios.post(`catProdSlider/b`);
  //   setPopularCatBLoading(true);
  //   if (res.status === 200) {
  //     const { data } = res;
  //     setPopularCatBLoading(false);
  //     setPopularCatB(data);
  //   }
  // };

  // const getPopularCategories = async () => {
  //   const res = await axios.post(`popularCategories`);
  //   setPopularCatLoading(true);
  //   if (res.status === 200) {
  //     const { data } = res;
  //     setPopularCatLoading(false);
  //     setPopularCat(data);
  //   }
  // };

  // const Pagemetadata = async () => {
  //   var form_data = new FormData();
  //   form_data.append("page_name", "home");
  //   const res = await axios.post(`pageseo`, form_data);
  //   if (res.status === 200) {
  //     console.log("data");
  //     console.log(res);
  //     const data = res.data.page_seo;
  //     setmeta(data);
  //   }
  // };

  return (
    <Layout>
      <Helmet>
        <title>Tax Refund</title>
        <meta name="Tax Refund" content="Tax Refund" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>

      <Box style={{ width: "100%" }}>
        <Text
          style={{
            marginTop: "60px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            color: "#00008B",
          }}
        >
          Welcome to Aljaber's Planet Tax Refund{" "}
        </Text>
      </Box>

      <Box style={{ width: "100%" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: "24px",
            color: "#00008B",
          }}
        >
          Select a process to continue{" "}
        </Text>
      </Box>

      <Box
        style={{
          marginTop: "80px",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          bg="white"
          borderRadius="15px"
          border="0px solid #414141"
          _hover={{
            bg: "#00008B",
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
            border: "0px solid #414141",
          }}
          margin="10px"
          marginBottom="10px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          width="75%"
          fontSize="44px"
          height="400px"
          color="#00008B"
          as={Link}
          to={`/planets-tax-refund-programme`}
        >
          {/* <Image
            w="65%"
            mx="auto"
            my="15px"
            src="/images/daily.png"
            alt="Super Med"
            fallbackSrc="../images/no-image.jpg"
          /> */}
          <Text
            fontWeight={"bold"}
            fontSize={"44px"}
            textAlign="center"
            marginTop="28%"
          >
            {" "}
            New{" "}
          </Text>
        </Box>

        <Box
          bg="white"
          borderRadius="15px"
          border="0px solid #414141"
          _hover={{
            bg: "#00008B",
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px",
            border: "0px solid #414141",
          }}
          margin="10px"
          marginBottom="10px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          width="75%"
          fontSize="44px"
          height="400px"
          color="#00008B"
          as={Link}
          to={`/cancel-refund-request`}
        >
          {/* <Image
           w="65%"
           mx="auto"
           my="15px"
           src="/images/daily.png"
           alt="Super Med"
           fallbackSrc="../images/no-image.jpg"
         /> */}
          <Text
            fontWeight={"bold"}
            fontSize={"44px"}
            textAlign="center"
            marginTop="28%"
          >
            {" "}
            Cancel{" "}
          </Text>
        </Box>
      </Box>
    </Layout>

    //     <Layout>
    //       <Helmet>
    //         <title>{meta.page_title}</title>
    //         <meta name="title" content={meta.meta_title} />
    //         <meta name="description" content={meta.meta_desc} />
    //         {/* <meta name="description" content="hello" /> */}
    //         <meta name="Keywords" content={meta.meta_keys} />
    //         <meta name="theme-color" content="#ccc" />
    //       </Helmet>
    //       <Box style={{ width: "100%" }}>
    //       <Text style={{textAlign:"center",fontWeight:"bold",fontSize:"24px",color:"white"}}>Al Jaber's Third Party Platform</Text>
    //         <Text style={{ textAlign: "center", fontWeight: "normal", fontSize: "15px", color: "white" }}>**Please select the Loyalty Program</Text></Box>

    //       <Box width="16%" mt="50px"  marginLeft="auto" marginRight="auto">
    //         <Button
    //         bg="white"
    //           // paddingTop="10px"
    //           paddingLeft="10px"
    //            borderRadius="15px"
    //            border="1px solid green"

    //             width="100%"
    //          _hover={{bg:"green"}}
    //          display="block"
    //           margin="10px"
    //            marginBottom="25px"
    //                color="white"
    //                onClick={getplanettoken}
    //                >Planet's Tax Refund</Button>

    // <Button
    //          bg="white"

    //          paddingLeft="20px"
    //           borderRadius="15px"
    //           border="1px solid green"
    //            width="100%"
    //         _hover={{bg:"green"}}
    //         display="block"
    //          margin="10px"
    //           marginBottom="25px"
    //               color="white"
    //             //   as={Link}

    //             //  to={`/emaar-sales-capture-programme`}
    //             onClick={emrsales}
    //                       >Emaar Sales Capture</Button>

    //         {/* <Button
    //          bg="white"
    //          paddingTop="10px"
    //          paddingLeft="30px"
    //           borderRadius="15px"
    //           border="1px solid green"

    //            width="100%"
    //         _hover={{bg:"green"}}
    //         display="block"
    //          margin="10px"
    //           marginBottom="25px"
    //               color="white"
    //               as={Link}
    //              to={`/share-loyalty-programme`}
    //                       >Share Loyalty Program</Button>  */}

    //         </Box>

    //     </Layout>
  );
};

export default HomePage;
