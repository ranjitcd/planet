import React, { useDisclosure, useEffect, useState } from "react";
import {
  SimpleGrid,
  Grid,
  GridItem,
  Box,
  Input,
  Image,
  Stack,
  Text,
  List,
  ListItem,
  Container,
} from "@chakra-ui/react";
import { Flex, Link, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import axios from "../../Helpers/axios";
import { api } from "../../Helpers/urlConfig";

import { Col, Row, Form, Modal, InputGroup, Dropdown } from "react-bootstrap";

import {
  FaRegCopyright,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlay,
} from "react-icons/fa";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const handleSignin = (e) => {
  e.preventDefault();
  alert("handleSignin has called.");
};
function forgotPasswordProcess(event) {
  event.preventDefault();
  async function makeGetRequest(input) {
    var form_data = new FormData();
    form_data.append("email", input);
    let res = await axios.post(api + "subscribeProcess", form_data);

    var status = res.data.status;
    var msg = "";
    console.log(res);
    if (status == true) {
      msg = "thanks for subscribing";
    } else {
      msg = "Email not found!";
    }
    document.getElementById("msg").innerHTML = msg;
  }
  var email = document.getElementById("emailaddress").value;
  makeGetRequest(email);
}

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Box bg="#0BA8E6" py="8px" position={"fixed"} bottom={"0px"} width="100%">
      {/* <Grid
      maxW="themeSize"
      m="auto"
      p="5"
      templateColumns={[
        "repeat(1,1fr)",
        "repeat(4,1fr)",
        "repeat(3,1fr)",
        "repeat(6,1fr)",
      ]}
      gap={["10", "9", "8", "7px"]}
      justifyContent="center"
    >
      <GridItem colSpan={2}>
        <Image
          w="70%"
          mx="auto"
          src="/images/logo_footer.png"
          alt="Super Med"
          fallbackSrc="../images/no-image.jpg"
        />
        <Container></Container>

        <Text
          as="p"
          marginTop="15px"
          fontSize="xs"
          justifySelf="center"
          alignSelf="center"
          textColor="white"
          textAlign="center"
        >
           Al Jaber Gallery LLC, P.O. Box 1940 1st Floor,<br/> Al Jaber Building,
Nad Al Hamar, Dubai, UAE.
        </Text>
        <Text
          textAlign="center"
          marginTop="15px"
          textColor="gray.50"
          fontSize="xs"
        >
          10:00 AM to 12:00 AM
        </Text>
        <Text
          textAlign="center"
          fontSize="xs"
          marginTop="15px"
          textColor="gray.50"
        >
          {" "}
          <Icon textColor="gray.50" fontSize="xs" as={FaRegCopyright} /> 2022
          Aljabergallery.com{" "}
        </Text>
        <Text textAlign="center" textColor="gray.50" fontSize="xs">
          All rights reserved.
        </Text>
      </GridItem>


 

    
    </Grid> */}

      <Flex
        justifyContent="center"
        align="flex-start"
        w="full"
        fontWeight="500"
        color="white"
        fontSize="16px"
        mt="3px"
        textDecoration=""
      >
        Developed By IT-Department Al Jaber © Copyright 2023. All rights
        reserved. <b style={{ marginLeft: "60%" }}>(Beta Version : 1.0)</b>
      </Flex>
    </Box>
  );
};

export default Footer;
