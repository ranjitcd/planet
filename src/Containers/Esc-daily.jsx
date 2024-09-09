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


import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import axios from "../Helpers/axios";
const Escd = () => {
  


  // state for second api call
  const [unitno, setunitno] = useState("");
  const [leasecode, setleasecode] = useState("");
  const [salesdate, setsalesdate] = useState("");
  const [transactioncount, settransactioncount] = useState("");
  const [netsales, setnetsales] = useState("");

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

  const formsub = async () => {
    
    if (unitno.length == "0" || leasecode.length == "0" || salesdate == "0" || transactioncount.length == "0" || netsales.length == "0")
    {
      alert("All fields are required")
    }
    else{
      alert("Unit No : " + unitno + "\nLeasse Code : " + leasecode + "\nSales Date : " + salesdate + "\nTransaction Count : " + transactioncount + "\nNet Sales : " + netsales)
      document.getElementById("succmsg").style.display = 'block';
      

      const body = {
          "SalesDataCollection": {
            "SalesInfo": [
              {
                "UnitNo": "TDM-SF-MLB 030",
                "LeaseCode": "t0001476",
                "SalesDate": "2023-01-05",
                "TransactionCount": "24326",
                "NetSales": "3400001"
              }
            ]
        }
       
      };
    
      const emrdailysales = await axios.post(
        `https://apidev.emaar.com/etenantsales/dailysales`,
        body,
        {
          headers: {
            "x-apikey": "QL2yGsTkC5lzzUQacan1Fzt9TGrAwun6",
            "Content-Type": "application/json"
           
          },
        }
      );
    
      console.log("Emar daily sales ");
      console.log(emrdailysales.data);
      console.log("Emar daily sales ");

      // setTimeout(function(){
      //   window.location.href = "/";
      // }, 500); 
    
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
        <Text style={{ marginTop: "40px", textAlign: "center", fontWeight: "normal", fontSize: "15px", color: "white" }}>**Please Fill form for daily sales record</Text></Box>

      <Box style={{ marginTop: "60px", width: "35%", padding: "20px", marginLeft: "auto", marginRight: "auto", border: "1px solid green", borderRadius: "25px", background: "rgba(0,128,0,0.4)" }}>

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
            minLength="20"
            onChange={(e) => setleasecode(e.target.value)}
            value={leasecode}
          />
        </Box>


        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Box color="white" ml="15px" mr="80px" mt="7px" >
            Sales Date :{" "}
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
            min={new Date().toISOString().split('T')[0]}
            required
           
            onChange={(e) => setsalesdate(e.target.value)}
            value={salesdate}

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

export default Escd;
