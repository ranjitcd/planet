import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import {

  Box,
  
  Input,
  
  Text,

} from "@chakra-ui/react";


import { Helmet } from "react-helmet";
import axios from "../Helpers/axios";
const Ptrp = () => {
  
  const [tagNumberinp, settagNumberinp] = useState("");


  const close = async () => {
    document.getElementById("succ").style.display = 'none';
    // window.location.href = "/";
  };

  // FUNCTION TO SEND FORM DATA
  const cansub = async () => { 
console.log("inside cansub")
    const body = {
      tagNumber: tagNumberinp,
      note: "Some comment here"
      
    };
    // console.log("tag number ");
    // console.log(tagNumberinp);
    // console.log("tag number ");
    const res = await axios.post(`/api/token/canceltoken`, body);
    if (res.status === 200) {
      if (res.data.stcode === 200){
        console.log(res.data);
        document.getElementById("succ").style.display = 'block';
        document.getElementById("succmsg").innerHTML = res.data.response.message;
        document.getElementById("Taxtag").innerHTML = res.data.response.tagNumber;
       }

      if (res.data.stcode === 500){
      document.getElementById("decmsg").style.display = 'block';
      document.getElementById("decmsgt").innerHTML = res.data.details.message;
     }
    } else {
      console.log("api not hit");
    }
  };


  // Function to go back to home page
  const bktohome = () => {
    window.location.href = "/";
  };
  return (
    <Layout>
      <Helmet>
        <title>Planet Tax Refund</title>
        <meta name="title" content="Aljaber Planet" />
        <meta name="description" content="Aljaber Loyalty Programme" />
        <meta name="Keywords" content="Aljaber" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <Box style={{ width: "100%" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#414141",
            marginTop:"55px",
            marginBottom:"15px"
          }}
        >
          CANCEL TRANSACTION
        </Text>
      </Box>
      <Box
            style={{
              padding: "55px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderBottom: "1px solid #3eb55f",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontWeight: "Normal",
                fontSize: "18px",
                color: "#414141",
              }}
            >
              Enter Refund Tag Number:
            </Text>
            <input
              type="text"
              required
              maxLength="17"
              autoFocus 
              minLength="14"
              placeholder="AEXXXXXXXXXXXXXXX"
              onChange={(e) => settagNumberinp(e.target.value)}
              value={tagNumberinp}
              style={{
                width: "50%",
                height: "40px",
                borderRadius: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
                border:"1px solid #3eb55f"
              }}
            ></input>
            <Box
               as="button"
               type="submit"
               value="Submit"
               bg="white"
               height="40px"
               width="150px"
               borderRadius="15px"
               // border="1px solid #414141"
               boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
               color="#414141"
               _hover={{ bg: "#3eb55f",color:"white",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              onClick={cansub}
            >
              Fetch Data
            </Box>



            <Box id="succ" style={{ display: "none",borderRadius:"25px", padding: "25px", background: "#3eb55f", width: "550px", height: "400px", border: "5px solid green", position: "absolute", top: "30%", left: "38%" }}>
          <Text id="succmsg" style={{ color: "White", fontSize: "28px", fontWeight: "bold",textAlign:"center" }}></Text>
        <Text style={{ color: "White", fontSize: "18px", fontWeight: "normal",marginTop:"30px" }}>Please copy the code below: </Text>
        
        <Text id="Taxtag" style={{ color: "Black", fontSize: "24px", fontWeight: "bold",textAlign:"center",marginTop:"10px" }}></Text>
        
        <Box
              as="button"
              type="submit"
              value="Submit"
              bg="white"
              height="40px"
              width="150px"
              borderRadius="15px"
              // border="1px solid #414141"
              boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              color="#414141"
              _hover={{bg:"#3eb55f", color:"white",boxShadow: "rgba(0, 0, 0, 0.77) 0px 8px 12px", border:"0px solid #414141"}} 
              onClick={close}
              position="absolute"
              bottom="15px"
              left="37%"
            >
             Close
            </Box>
      </Box>

      <Box id="decmsg" style={{ display: "none", padding: "15px", background: "rgba(255,255,255,1)", width: "395px", border: "5px solid red", position: "absolute", top: "4%", left: "78%" }}>
        <Text id="decmsgt" style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>Record Not Submitted Successfully. Please resubmit</Text>
      </Box>





          </Box>

    </Layout>
  );
};

export default Ptrp;
