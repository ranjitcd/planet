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
  Image,
  HStack,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Skeleton,
  useStyleConfig,
} from "@chakra-ui/react";

import SpecialCategory from "../Components/SpecialCategory";
import AboutUsPageBanner from "../Components/AboutUsPageBanner";
import CategoryPageLeftNav from "../Components/CategoryPageLeftNav";
import CategoryPageProductGrid from "../Components/CategoryPageProductGrid";

import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsQty } from "../Store/Actions";
import axios from "../Helpers/axios";
import ReactPaginate from "react-paginate";
import Pagination from "../Components/Ui/Pagination";
const Esc = () => {
  let { mainCat, subCat } = useParams();

  const { products, loading, totalRecords } = useSelector(
    (state) => state.allproducts
  );
  const [page, setPage] = useState(1);
  const [productShows, setProductShows] = useState(30);
  const [sort, setSort] = useState("asc");

  const [sortBy, setSortBy] = useState("asc");
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(totalRecords);
  const [meta, setmeta] = useState("");
  const dispatch = useDispatch();
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
    setPage(selectedPage);
  };
  useEffect(() => {
    Pagemetadata();
  }, []);

  useEffect(() => {
    dispatch(getAllProducts(productShows, offset, sort, mainCat, subCat || ""));
  }, [mainCat, subCat, offset, page, sort]);

  useEffect(() => {
    setPageCount(Math.ceil(totalRecords / productShows));
  }, [pageCount, products]);

  const Pagemetadata = async () => {
    var form_data = new FormData();
    form_data.append("page_name", "aboutus");
    const res = await axios.post(`pageseo`, form_data);
    if (res.status === 200) {
      console.log("data");
      console.log(res);
      const data = res.data.page_seo;
      setmeta(data);
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="Emaar Sales Capture Program" content={meta.meta_title} />
        <meta name="description" content={meta.meta_desc} />
        {/* <meta name="description" content="hello" /> */}
        <meta name="Keywords" content={meta.meta_keys} />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <Box style={{ width: "100%" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px", color: "white" }}>Emaar Sales Capture Program</Text>
        </Box>

        <Box style={{ width: "100%" }}>
          <Text style={{ marginTop:"40px",textAlign: "center", fontWeight: "normal", fontSize: "15px", color: "white" }}>**Please select Duration of record</Text></Box>

        <Box style={{marginTop:"100px", width:"60%",marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"row" }}>
        
        <Button 
         bg="black"
         borderRadius="15px" 
         border="1px solid green" 
         
         
        _hover={{bg:"green"}} 
         margin="10px"
         marginBottom="10px"
         color="white" 
         width="75%"
         fontSize="44px"
         height="400px"
         as={Link}
         to={`/daily-emaar-sales`} 
           >Daily Sales</Button>

           
        <Button 
         bg="black"
         borderRadius="15px" 
         border="1px solid green" 
        _hover={{bg:"green"}} 
         margin="10px"
         width="75%"
         fontSize="44px"
         height="400px"
         marginBottom="10px"
         color="white" 
         as={Link}
         to={`/monthly-emaar-sales`} 
           >Monthly Sales</Button>
        </Box>













    </Layout>
  );
};

export default Esc;
