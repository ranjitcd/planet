import React from "react";
import { appendErrors, useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  Textarea,
  Stack,
  Radio,
  Image,
  RadioGroup,
  Text,
  Select,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
const Index = () => {
  const { handleSubmit, errors, watch, register, formState } = useForm();
  const paymentMethod = watch("paymentMethod");
  console.log(
    "%cMyProject%cline:18%cpaymentMethod",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px",
    paymentMethod
  );

  function onSubmit(values) {
    async function makeGetRequest(input) {
      const form_data = new FormData();
      let cartItems = JSON.parse(localStorage.getItem("cart"));
      let coupon_code = localStorage.getItem("Coupon_Code");
      let coupon_codeid = localStorage.getItem("Discountcouponid");

      form_data.append("shipping", "0");
      form_data.append("coupon_code", coupon_code);
      form_data.append("coupon_id", coupon_codeid);

      Object.keys(cartItems).map((i, j) => {
        //form_data.append("product_id["+j+"]", cartItems[i].product_id);
        form_data.append(
          "products[" + cartItems[i].product_id + "]",
          cartItems[i].qty
        );
      });
      Object.keys(values).map((i, j) => {
        form_data.append(i, values[i]);
      });

      let res = await axios.post("checkoutProcess", form_data);
      console.log(res.data);
      let status = res.data.status;
      let msg = res.data.msg;
      if (status == true) {
        window.location = "/thankyou";
      }
      // if (data.stat || data.stat == "true") {
      //   document.getElementById("msc").classList.add("success");

      // } else {
      //   document.getElementById("msc").classList.add("danger");
      // }
      // document.getElementById("msc").innerHTML = data.message;

      // this.setResponse(res);
      // console.log(data);
      // let msg= alert(data.status);
      // alert(data.msg);
    }

    makeGetRequest(values);
  }

  return (
    // -------------------------------------------------------Shuru hogaya naw -------------------------------------------------------------------------------------------

    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <Box w="50%">
          <Heading
            ml="35%"
            as="h4"
            mb="5"
            fontWeight="600"
            fontSize={[20, 20, 20, 20]}
          >
            Contact Info
          </Heading>
          <Stack>
            <FormControl mb="3">
              <Stack direction="row" spacing={10}>
                <Text>Full Name</Text>
                <Text> Full Name</Text>
              </Stack>
            </FormControl>
            <FormControl mb="3">
              <Stack direction="row" spacing={10}>
                <Text>Email</Text>
                <Text> Email</Text>
              </Stack>
            </FormControl>
            <FormControl mb="3">
              <Stack direction="row" spacing={10}>
                <Text>Phone No</Text>
                <Text>Phone No</Text>
              </Stack>
            </FormControl>
          </Stack>

          {/* -----------------? */}
        </Box>
        <Box w="50%">
          <Heading
            ml="35%"
            as="h4"
            mb="5"
            fontWeight="600"
            fontSize={[20, 20, 20, 20]}
          >
            Shipping Address{" "}
          </Heading>

          <Stack>
            <Stack>
              <FormControl mb="3" isInvalid={errors.email}>
                <Stack direction="row" spacing={10}>
                  <Text>Address</Text>
                  <Text>Address</Text>
                </Stack>
              </FormControl>

              <FormControl mb="3" isInvalid={errors.email}>
                <Stack direction="row" spacing={10}>
                  <Text>City</Text>
                  <Text>City</Text>
                </Stack>
              </FormControl>
            </Stack>

            <Stack>
              <FormControl mb="3" isInvalid={errors.email}>
                <Stack direction="row" spacing={10}>
                  <Text>Country</Text>
                  <Text>Country</Text>
                </Stack>
              </FormControl>

              <FormControl mb="3" isInvalid={errors.email}>
                <Stack direction="row" spacing={10}>
                  <Text>State</Text>
                  <Text>State</Text>
                </Stack>
              </FormControl>
            </Stack>
            {/* <Stack direction="row">
              <FormControl mb="3" isInvalid={errors.email}>
                <Input name="State" placeholder="State" ref={register} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb="3" isInvalid={errors.email}>
                <Input
                  name="PostalCode"
                  placeholder="Postal Code"
                  ref={register}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            </Stack> */}
          </Stack>
        </Box>
      </HStack>

      {/* -------------------------------------------Khatam Hogaya naw ------------------------------------------------------------------- */}
    </form>
  );
};

export default Index;
