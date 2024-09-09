import { Checkbox } from "@chakra-ui/react";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { Redirect } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function Socialmediabuttons() {
  const responseGoogle = (response) => {
    const gdata = response.profileObj;

    makeGlogin(gdata);
  };

  async function makeGlogin(gdata) {
    var GoogleLogindata = new FormData();
    GoogleLogindata.append("email", gdata.email);
    GoogleLogindata.append("fullname", gdata.name);
    GoogleLogindata.append("type", "google");
    GoogleLogindata.append("googleId", gdata.googleId);

    let res = await axios.post("registrationProcess", GoogleLogindata);
    let data = res.data;
    //console.log(data);
    let user = {
      email: res.data.user_data.userEmail,
      id: res.data.user_data.id,
      name: res.data.user_data.name,
    };
    const { token } = res.data.user_data.token;
    if (data.status || data.status == "true") {
      document.getElementById("msc").classList.add("success");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location = "/dashboard";
    } else {
      document.getElementById("msc").classList.add("danger");
    }
    document.getElementById("msc").innerHTML = data.msg;
  }

  const responseFacebook = (response) => {
    const fdata = response;
    makeFlogin(fdata);
  };

  async function makeFlogin(fdata) {
    var fbLogindata = new FormData();
    fbLogindata.append("fullname", fdata.name);
    fbLogindata.append("type", "facebook");
    fbLogindata.append("facebookId", fdata.id);
    fbLogindata.append("userId", fdata.userID);

    let res = await axios.post("registrationProcess", fbLogindata);
    let data = res.data;
    let user = {
      email: res.data.user_data.userEmail,
      id: res.data.user_data.id,
      name: res.data.user_data.name,
    };
    const { token } = res.data.user_data.token;
    if (data.status || data.status == "true") {
      document.getElementById("msc").classList.add("success");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location = "/dashboard";
    } else {
      document.getElementById("msc").classList.add("danger");
    }
    document.getElementById("msc").innerHTML = data.msg;
  }
  const isTabletCeil = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <Box>
      {/* <<<<<<<<<<<<<<<<<<<< Social Login Buttons Start >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {isTabletCeil ? (
        <Stack
          style={{
            marginBottom: "50px",
          }}
          direction="row"
          spacing={5}
        >
          {/* <<<<<<<<<<<<<<<<<<<< Google Button Start >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <GoogleLogin
            clientId="973771586726-qlhkatldfv7e31u9l072tudqpqmsrnrh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Box
                  marginLeft="10px"
                  height="45px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="1px"
                  px="60px"
                  borderRadius="20px"
                  fontSize="14px"
                  fontWeight="bold"
                  textColor="white"
                  bg="#ebedf0"
                  borderColor="#ccd0d5"
                  color="#DB4437"
                  _hover={{ bg: "#5fa100" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  <HStack style={{ paddingTop: "14px" }}>
                    <FaGoogle color="#DB4437" />
                    <Text>with Google</Text>
                  </HStack>
                </Box>
              </button>
            )}
          />

          {/* <<<<<<<<<<<<<<<<<<<< Facebook Button Start >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <FacebookLogin
            appId="4094541807237397"
            callback={responseFacebook}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Box
                  as="button"
                  height="45px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="1px"
                  px="60px"
                  borderRadius="20px"
                  fontSize="14px"
                  fontWeight="bold"
                  textColor="blue"
                  bg="#ebedf0"
                  borderColor="#ccd0d5"
                  color="#3b5998"
                  _hover={{ bg: "#5fa100" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  <HStack>
                    <FaFacebook color="#3b5998" />
                    <Text>with Facebook</Text>
                  </HStack>
                </Box>
              </button>
            )}
          />
        </Stack>
      ) : (
        // ------------------yahan se responsive start hoga pagal-----------------
        <Stack
          direction={["row", "row", "column", "column"]}
          justify="flex-start"
          display={["flex", "flex", "flex", "flex"]}
          alignItems="flex-start"
          my={10}
          spacing={["10px", "10px", "10px", "20px"]}
        >
          {/* <<<<<<<<<<<<<<<<<<<< Google Button Start >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <GoogleLogin
            clientId="973771586726-qlhkatldfv7e31u9l072tudqpqmsrnrh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Box
                  // marginLeft="10px"
                  w="100%"
                  height="45px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="1px"
                  px="28px"
                  borderRadius="20px"
                  fontSize="14px"
                  fontWeight="bold"
                  textColor="white"
                  bg="#ebedf0"
                  borderColor="#ccd0d5"
                  color="#DB4437"
                  _hover={{ bg: "#5fa100" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  <HStack style={{ paddingTop: "14px" }}>
                    <FaGoogle color="#DB4437" />
                    <Text>Google</Text>
                  </HStack>
                </Box>
              </button>
            )}
          />

          {/* <<<<<<<<<<<<<<<<<<<< Facebook Button Start >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <FacebookLogin
            appId="4094541807237397"
            callback={responseFacebook}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Box
                  w="100%"
                  as="button"
                  height="45px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="1px"
                  px="20px"
                  borderRadius="20px"
                  fontSize="14px"
                  fontWeight="bold"
                  textColor="blue"
                  bg="#ebedf0"
                  borderColor="#ccd0d5"
                  color="#3b5998"
                  _hover={{ bg: "#5fa100" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  <HStack>
                    <FaFacebook color="#3b5998" />
                    <Text>facebook</Text>
                  </HStack>
                </Box>
              </button>
            )}
          />
        </Stack>
      )}
    </Box>
  );
}
