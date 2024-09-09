import { Stack, Box, Icon } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

let currentpage = window.location.href;
console.log(window.location.href);
const SocialIcons = () => {
  return (
    <Stack direction={["column", "row"]} spacing="0px" alignContent="center">
      <FacebookShareButton
        url={currentpage}
        quote="Hey Subscribe to my channel"
        hashtag="#React"
      >
        <Box textAlign="center" fontSize="2xl" h="100%" color="#3b5998">
          <Icon as={AiFillFacebook} />
        </Box>
      </FacebookShareButton>

      <WhatsappShareButton title="Sharing Content" url={currentpage}>
        <Box textAlign="center" fontSize="2xl" h="100%" color="green.900">
          <Icon as={AiOutlineWhatsApp} />
        </Box>
      </WhatsappShareButton>

      <TwitterShareButton
        url={currentpage}
        quote="Hey Subscribe to my channel"
        hashtag="#React"
      >
        <Box textAlign="center" fontSize="2xl" color="#1DA1F2" h="100%">
          <Icon as={AiOutlineTwitter} />
        </Box>
      </TwitterShareButton>

      <LinkedinShareButton
        url={currentpage}
        title="SuperMed Products"
        summary="This product is one of its kind"
      >
        <Box textAlign="center" fontSize="2xl" color="#cd486b" h="100%">
          <Icon as={AiOutlineLinkedin} />
        </Box>
      </LinkedinShareButton>
    </Stack>
  );
};

export default SocialIcons;
