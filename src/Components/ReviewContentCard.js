
import {
    Box,
  Grid,
  Img,
  Stack,
    Text,
  } from "@chakra-ui/react";
import axios from "axios";
  import React, { useEffect, useState } from "react";
  import Ratings from "react-ratings-declarative";
  import { generatePublicUrl, api } from "../Helpers/urlConfig";
  import Pagination from "../Components/Ui/Pagination";


import { useSelector } from "react-redux";

  const ReviewContentCard = ( ) => {
    

    const [reviewslist,setreviewslist] =useState("");
    const [productShows, setProductShows] = useState(10);
    const [page, setPage] = useState(1);
    const handlePageClick = (e) => {
      const selectedPage = e.selected + 1;
      setOffset(selectedPage);
      setPage(selectedPage);
      reviewlist(selectedPage);
    };
    const [offset, setOffset] = useState(1);
    
    const [tRecords, settRecords] = useState(); 
    const [pageCount, setPageCount] = useState(tRecords); 
    useEffect(() => {
      setPageCount(Math.ceil(tRecords / productShows));
    }, [pageCount, reviewslist]);
 
  
    const {
      rvw_id,
      rvw_name,
      rvw_email,
      rvw_rate,
      rvw_title,
      rvw_comment,
      rvw_date,
    } = "";


    function storeData(res){
      var Objectreviewlist = {};
      Object.assign(Objectreviewlist,res.data.review_list);
      setreviewslist(Objectreviewlist);
      settRecords(res.data.review_count);
      localStorage.setItem("reviewcount",tRecords);
      setPageCount(res.data.review_count);
      
    }
    const { details } = useSelector((state) => state.allproducts);

  //  let product_id=localStorage.getItem("productid");
     async function reviewlist(page) {
      const form_data = new FormData();
          form_data.append("product_id", details.product_id);
          form_data.append("page",page );
          let res = await axios.post(api+"reviewsList",form_data);
            storeData(res);
        }

        useEffect(() => {
          reviewlist("1");
         }, []);
        
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {!reviewslist ? (
        <Text>No Reviews for this product</Text>
        // <Img
        //   src="../images/preloader.gif"
        //   style={{ width: 100, marginLeft: "48%" }}
        // />
      ) : 
      Object.keys(reviewslist).map((i,j) => (
       <Box>
        <Ratings rating={parseFloat(reviewslist[i].rvw_rate)} widgetDimensions="20px" widgetSpacings="2px">
          <Ratings.Widget widgetRatedColor="green" />
          <Ratings.Widget widgetRatedColor="green" />
          <Ratings.Widget widgetRatedColor="green" />
          <Ratings.Widget widgetRatedColor="green" />
          <Ratings.Widget widgetRatedColor="green" />
        </Ratings>
        <Text fontSize="22px" fontWeight="bold">
          {reviewslist[i].rvw_title}
        </Text>
        <Text fontSize="14px" fontWeight="semibold">
          {reviewslist[i].rvw_name} on {reviewslist[i].rvw_date}
        </Text>
        <Text fontSize="14px" fontWeight="medium">
          {reviewslist[i].rvw_comment}
        </Text>
      </Box>))
  }
  <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </Grid>
      
    
         );
  };
  
  export default ReviewContentCard;
  