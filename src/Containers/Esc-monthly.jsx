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
const Escm = () => {


  const [unitno, setunitno] = useState("");
  const [leasecode, setleasecode] = useState("");
  const [salesdateto, setsalesdateto] = useState("");
  const [salesdatefrom, setsalesdatefrom] = useState("");
  const [transactioncount, settransactioncount] = useState("");
  const [netsales, setnetsales] = useState("");
  const [remarks, setremarks] = useState("");


  const formsub = async () => {

    if (unitno.length == "0" || leasecode.length == "0" || salesdatefrom.length == "0" 
    || salesdateto == "0" || transactioncount.length == "0" || netsales.length == "0" || remarks.length == "0") {
      alert("All fields are required")
    }
    else {
      alert("Unit No : " + unitno + "\nLeasse Code : " + leasecode + "\nSales Date From : " 
      + salesdatefrom + "\nSales Date To: " + salesdateto + "\nTransaction Count : " + transactioncount + "\nNet Sales : " + netsales + "\nRemarks : " + remarks)
      document.getElementById("succmsg").style.display = 'block';
     
     
      const body = {
        "SalesDataCollection": {
          "SalesInfo": [
            {
              "UnitNo": "TDM-SF-MLB 030",
              "LeaseCode": "t0001476",
              "SalesDateFrom": "2022-12-01",
              "SalesDateTo": "2022-12-31",
              "TransactionCount": "0987",
              "TotalSales": "876539",
              "Remarks": "Remarks"
            }
          ]
      }
     
    };
  
    const emrmonthlysales = await axios.post(
      `https://apidev.emaar.com/etenantsales/casualsales`,
      body,
      {
        headers: {
          "x-apikey": "QL2yGsTkC5lzzUQacan1Fzt9TGrAwun6",
          "Content-Type": "application/json"
         
        },
      }
    );
  
    console.log("Emar daily sales ");
    console.log(emrmonthlysales.data);
    console.log("Emar daily sales ");

     
     
     
      // setTimeout(function(){
      //   window.location.href = "/";
      // }, 500); 
      
    }
  };


  const [meta, setmeta] = useState("");

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
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px", color: "white" }}>Monthly Sales Form</Text>
      </Box>

      <Box style={{ width: "100%" }}>
        <Text style={{ marginTop: "40px", textAlign: "center", fontWeight: "normal", fontSize: "15px", color: "white" }}>**Please Fill form for monthly sales record</Text></Box>

      <Box style={{ marginTop: "60px", width: "55%", padding: "20px", marginLeft: "auto", marginRight: "auto", border: "1px solid green", borderRadius: "25px", background: "rgba(0,128,0,0.4)" }}>

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="105px" mt="7px" >
            Unit No:{" "}
          </Box>
          <input
            style={{
              width: "60%",
              height: "35px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="text"
            required
            maxLength="20"
            onChange={(e) => setunitno(e.target.value)}
            value={unitno}
          // value="UnitNo"
          />
        </Box>




        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="75px" mt="7px" >
            Lease Code:{" "}
          </Box>
          <input
            style={{
              width: "60%",
              height: "35px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="text"
            required
            maxLength="20"
            onChange={(e) => setleasecode(e.target.value)}
            value={leasecode}
          // value="Lease Code"
          />
        </Box>


        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="40px" mt="7px" >
            Sales Date From:{" "}
          </Box>
          <input
            style={{
              width: "60%",
              height: "35px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="date"
            required
            maxLength="20"
            onChange={(e) => setsalesdatefrom(e.target.value)}
            value={salesdatefrom}
          // value="Lease Code"
          />
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="60px" mt="7px" >
            Sales Date To:{" "}
          </Box>
          <input
            style={{
              width: "60%",
              height: "35px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="date"
            required
            maxLength="20"
            onChange={(e) => setsalesdateto(e.target.value)}
            value={salesdateto}
          // value="Lease Code"
          />
        </Box>



        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="25px" mt="7px" >
            Transaction Count:{" "}
          </Box>
          <input
            style={{
              width: "60%",
              height: "35px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="text"
            required
            maxLength="20"
            onChange={(e) => settransactioncount(e.target.value)}
            value={transactioncount}
          // value="Transaction Count"
          />
        </Box>




        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="95px" mt="7px" >
            Net Sales:{" "}
          </Box>
          <input
            style={{
              width: "60%",
              height: "35px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="text"
            required
            maxLength="20"
            onChange={(e) => setnetsales(e.target.value)}
            value={netsales}
          // value="Net Sales"
          />
        </Box>



        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="95px" mt="7px" >
            Remarks:{" "}
          </Box>
          <textarea
            style={{
              width: "60%",
              height: "150px",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="text"
            required
            // maxLength="38"
            onChange={(e) => setremarks(e.target.value)}
            value={remarks}
          // value="Remarks"
          />
        </Box>


        <Button
          bg="black"
          borderRadius="15px"
          border="1px solid green"
          width="50%"
          _hover={{ bg: "green" }}
          marginTop="25px"
          marginRight="auto"
          marginLeft="24%"
          marginBottom="10px"
          color="white"
          type="submit"
          onClick={formsub}
        >Submit</Button>



      </Box>

      <Box id="succmsg" style={{ display:"none",padding:"25px",background: "rgba(255,255,255,1)", width: "395px", height: "100px", border: "5px solid green", position: "absolute", top: "4%", left: "78%"}}>
            <Text style={{color:"green" , fontSize:"22px",fontWeight:"bold"}}>Record Captured Successfully</Text>
      </Box>


    </Layout>
  );
};

export default Escm;
