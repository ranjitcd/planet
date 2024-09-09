//import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Stack,
  RadioGroup,
  Radio,
  Tab,
  TabPanels,
  Tabs,
  TabPanel,
  TabList,
  Icon,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";

import ReviewContentCard from "../ReviewContentCard";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl, api } from "../../Helpers/urlConfig";
import ReactStars from "react-rating-stars-component";
import { appendErrors, useForm } from "react-hook-form";
// import ReviewGrid from "../../Components/ReviewGrid";
import Ratings from "react-ratings-declarative";
import Pagination from "../../Components/Ui/Pagination";
// import {
//   getallReviews,
//   getAllProductsQty,
// } from "../../Store/Actions/review.action";

import { Link } from "react-router-dom";
import axios from "axios";

const TabsComponent = (pid) => {
  const { details, loading } = useSelector((state) => state.allproducts);

  localStorage.setItem("productid", details.productid);

  let user = JSON.parse(localStorage.getItem("user"));
  let uname = "";
  let uemail = "";

  if (user) {
    if (user.name != "" && user.name != "undefined") {
      uname = user.name;
    }
    if (user.email != "" && user.email != "undefined") {
      uemail = user.email;
    }
  }

  const { handleSubmit, errors, watch, register, formState } = useForm();
  const paymentMethod = watch("paymentMethod");
  let rating = "";
  console.log(
    "%cMyProject%cline:18%cpaymentMethod",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px",
    paymentMethod
  );

  const ratingChanged = (newRating) => {
    rating = newRating;
  };

  function onSubmit(values) {
    async function makeGetRequest(input) {
      const form_data = new FormData();

      form_data.append("rvw_name", input.full_name);
      form_data.append("rvw_email", input.email);
      form_data.append("rvw_rate", rating);
      form_data.append("rvw_title", input.ReviewTitle);
      form_data.append("rvw_comment", input.Body);
      form_data.append("rvw_pid", details.product_id);

      let res = await axios.post(api + "reviewProcess", form_data);
      console.log(res)
      document.getElementById("msg").innerHTML = res.data.msg;
      // window.location.reload(false);
      let status = res.statusText
      console.log(status)
   
      if (status == "OK") {
        window.location.reload(false);
     } else {
      document.getElementById("subtn").style.display = "none";
       document.getElementById("msg").innerHTML = "Form already submitted. Please refresh and use a different Email";
     }
      
   
      
     
    }

    makeGetRequest(values);
  }

  return (
    <Tabs>
      <TabList mb="1em">
        <Tab
          textTransform="uppercase"
          fontSize={[8, 15, 15, 15]}
          _hover={{ bg: "#D6AE3699", color: "white" }}
          _active={{
            bg: "#D6AE3699",
            transform: "scale(1)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow: "none",
            color: "white",
          }}
          _selected={{
            bg: "#D6AE3699",
            transform: "scale(1)",
            color: "white",
            borderColor: "#bec3c9",
          }}
        >
          Customer Reviews
        </Tab>
        <Tab
          textTransform="uppercase"
          fontSize={[8, 15, 15, 15]}
          _hover={{ bg: "#D6AE3699", color: "white" }}
          _active={{
            bg: "#D6AE3699",
            transform: "scale(1)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow: "none",
            color: "white",
          }}
          _selected={{
            bg: "#D6AE3699",
            transform: "scale(1)",
            color: "white",
            borderColor: "#bec3c9",
          }}
        >
          Write a Review
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <hr />

          <ReviewContentCard />
          <hr />
        </TabPanel>
        <TabPanel>
          {" "}
          {/* //FORM SECTION YEH HAI  */}
          <Box marginBottom="10%" marginTop="-80px">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack marginLeft="30%" marginTop="10%">
                <Box w="50%">
                  <Heading
                    ml="35%"
                    as="h4"
                    mb="5"
                    fontWeight="600"
                    fontSize={[20, 20, 20, 20]}
                  >
                    Write a review
                  </Heading>
                  <Stack>
                 
                  
                 
                    <FormControl mb="3">
                      <Input
                        name="full_name"
                        placeholder="Full Name"
                        // value={uname}
                        ref={register({
                          required: "Required",
                        })}
                      />
                    </FormControl>




                    <FormControl mb="3">
                      <Input
                        name="email"
                        placeholder="Email"
                        // value={uemail}
                        ref={register({
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                      />



                      <FormErrorMessage>
                        {errors.email && errors.email.message}
                      </FormErrorMessage>



                    </FormControl>
                    <FormControl mb="3">
                      <ReactStars
                        style={{ marginLeft: "30%" }}
                        count={5}
                        onChange={ratingChanged}
                        size={34}
                        activeColor="#ffd700"
                      />
                    </FormControl>
                  </Stack>
                </Box>
                <Box w="50%">
                  <Stack>
                    <Stack>
                      <FormControl mb="3" isInvalid={errors.email}>
                        <Input
                          name="ReviewTitle"
                          placeholder="Review Title"
                          ref={register}
                        />
                        <FormErrorMessage>
                          {errors.email && errors.email.message}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl mb="3" isInvalid={errors.email}>
                        <Textarea
                          name="Body"
                          placeholder="Body of Review (1500)"
                          ref={register}
                        />
                        <FormErrorMessage>
                          {errors.email && errors.email.message}
                        </FormErrorMessage>
                      </FormControl>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>

              <Box mt="10">
                <FormControl isInvalid={errors.name}>
                  {/* <FormLabel htmlFor="payment">Payment</FormLabel> */}
                </FormControl>
              </Box>

              <Text id="msg" ml="30%"></Text>

              <Button
                marginLeft="30%"
                w="35%"
                bg="#D6AE3699"
                fontSize={[12, 14, 14, 14]}
                isLoading={formState.isSubmitting}
                _hover={{ bg: "gray.900" }}
                type="submit"
                value="Submit"
                className="btn btn-success"
                _active={{
                  bg: "gray.900",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
                color="white"
                _focus={{
                  boxShadow: "none",
                }}
                variant="outline"
                mt={3}
                // as={Link}
                // to={`/cart`}
                type="submit"
                id="subtn"
                
              >
                Submit Review
              </Button>
            </form>
            <hr />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
