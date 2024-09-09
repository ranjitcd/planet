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
import { api } from "../../Helpers/urlConfig";
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
      let user = JSON.parse(localStorage.getItem("user"));
      //console.log(user.id);

      let userid = "";
      user && user.id ? (userid = user.id) : (userid = "");

      form_data.append("shipping", "0");
      form_data.append("coupon_code", coupon_code);
      form_data.append("coupon_id", coupon_codeid);
      form_data.append("user_id", userid);

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

      let res = await axios.post(api + "checkoutProcess", form_data);
      console.log(res.data);
      console.log("checkout process")
      let orderid =res.data.order_id;
      let orderamount =res.data.order_amount;
      let status = res.data.status;
      let paystatus = res.data.paystatus;
      let sessionid= res.data.sessionId;
      let msg = res.data.msg;
      if (paystatus == true) {
        window.location = "https://new.supermed.pk/bankalfalah.php?s="+sessionid +"&o="+orderid+"&om="+orderamount;
      }
      else{
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
              <Input
                name="full_name"
                placeholder="Full Name"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mb="3">
              <Input
                name="email"
                placeholder="Email"
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
              <Input
                name="phone_no"
                placeholder="Phone Number"
                ref={register({
                  required: "Required",
                })}
              />
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
            <Stack direction="row">
              <FormControl mb="3" isInvalid={errors.email}>
                <Input name="address" placeholder="Address" ref={register} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mb="3" isInvalid={errors.email}>
                <Input
                  name="Line 2"
                  placeholder="Appartment,Suite,etc. (Optional)"
                  ref={register}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>

            <Stack direction="row">
              <FormControl mb="3" isInvalid={errors.email}>
                <Input name="City" placeholder="City" ref={register} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mb="3" isInvalid={errors.email}>
                <Input name="Country" placeholder="Country" ref={register} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack direction="row">
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
            </Stack>
          </Stack>
        </Box>
      </HStack>

      {/* -------------------------------------------Khatam Hogaya naw ------------------------------------------------------------------- */}

      <Box mt="10">
        <FormControl isInvalid={errors.name}>
          {/* <FormLabel htmlFor="payment">Payment</FormLabel> */}
          <Heading
            ml="45%"
            as="h4"
            mb="5"
            fontWeight="600"
            fontSize={[20, 20, 20, 20]}
          >
            Payment Method{" "}
          </Heading>
          <RadioGroup>
            <Stack direction="row" spacing={50} mt={5} mb={5}>
              <Radio
                name="paymentMethod"
                value="cod"
                ref={register}
                size="md"
                defaultChecked
              >
                <Image src="./images/cod.png" />
              </Radio>
              {/* <Radio
                name="paymentMethod"
                value={"bank"}
                ref={register}
                size="md"
              >
                <Image w="60%" src="./images/unionpay.png" />
              </Radio> */}
              <Radio
                name="paymentMethod"
                value={"online"}
                ref={register}
                size="md"
              >
                <Text>Online</Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>
      {/* {paymentMethod === "cod" ? (
        <>
          <FormControl mt="5" isInvalid={errors.name}>
            <FormLabel htmlFor="payment">Select Bank</FormLabel>

            <Select
              placeholder="Select option"
              name="gender"
              options={["female", "male", "other"]}
            >
              <option value="2">Habib Metropolitan Bank Limited</option>
              <option value="3">Askari Bank Limited</option>
              <option value="9">Summit Bank Limited</option>
              <option value="13">Silk Bank (DigiSilk)</option>
              <option value="14">Samba Bank Limited</option>
              <option value="99915">Allied Bank (Powered by NiFT ePay)</option>
              <option value="99916">Bank Alfalah (Powered by NiFT ePay)</option>
              <option value="99918">Askari Bank (Powered by NiFT ePay)</option>
              <option value="99919">
                BankIslami Pakistan (Powered by NiFT ePay)
              </option>
              <option value="99920">
                Samba Bank Limited (Powered by NiFT ePay)
              </option>
              <option value="-1">Keenu Wallet</option>
            </Select>
          </FormControl>
        </>
      ) : null} */}

      <Button
        w="100%"
        bg="green.900"
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
      >
        CHECKOUT
      </Button>
      <Button
        w="100%"
        bg="gray.900"
        fontSize={[12, 14, 14, 14]}
        isLoading={formState.isSubmitting}
        _hover={{ bg: "green.900" }}
        _active={{
          bg: "green.900",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        color="white"
        _focus={{
          boxShadow: "none",
        }}
        variant="outline"
        as={Link}
        to={`/`}
      >
        CONTINUE SHOPPING
      </Button>
    </form>
  );
};

export default Index;
