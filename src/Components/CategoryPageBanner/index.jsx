import { AspectRatio, Box, Image } from "@chakra-ui/react";
import React from "react";

const Index = () => {
  return (
    <AspectRatio maxW="100%" ratio={17 / 4}>
      <Image
        src="/images/home.jpg"
        alt="Supermed"
        fallbackSrc="../images/no-image.jpg"
      />
    </AspectRatio>
  );
};

export default Index;
