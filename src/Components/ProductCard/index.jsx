import { StarIcon } from "@chakra-ui/icons";
import {NumericFormat}  from "react-number-format";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Collapse,
  Image,
  LinkOverlay,
  Progress,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddToCartBtn from "../Ui/AddToCartBtn";
import { Link } from "react-router-dom";

const Index = (props) => {
  const {
    brand_id,
    brand_name,
    image,
    mrp,
    dis_mrp,
    dis_per,
    dis_sts,
    product_id,
    product_name,
    product_qty,
    product_slug,
    product_status,
  } = props.data;

  console.log("image");
  console.log(image);
  console.log("image");

  const [show, setShow] = useState(false);

  return (
    <Skeleton isLoaded={true}>
      <Box
        position="relative"
        borderWidth="1px"
        borderRadius="lg"
        // onMouseEnter={() => {
        //   setShow(true);
        // }}
        // onMouseLeave={() => {
        //   setShow(false);
        // }}
        bg="white"
        mb="5"
        overflow="hidden"
      >
        <Box
          d="flex"
          zIndex="999"
          position="absolute"
          top="10px"
          left="10px"
          alignItems="baseline"
        >
          {dis_per ? (
            <Badge borderRadius="md" px="2" bg="#f4742f" color="white">
              {dis_per ? dis_per : 0}% off
            </Badge>
          ) : (
            ""
          )}
        </Box>
        <AspectRatio ratio={15 / 12}>
          <Center>
            <Image
              src={image}
              alt={brand_name}
              // h={["160px", "120px", "120px", "120px"]}
              h={["210px", "190px", "190px", "190px"]}
              maxW="120%"
              objectFit="cover"
              fallbackSrc="../images/no-image.jpg"
            />
          </Center>
        </AspectRatio>

        <Box p="3">
          {/* <LinkOverlay as={Link} to={`/product/${product_slug}`}> */}
          <LinkOverlay as={Link} to={`/product-details`}>
            <Box
              mt="1"
              fontWeight="bold"
              as="h3"
              noOfLines="1"
              textAlign="center"
              lineHeight="tight"
              isTruncated
              fontSize="xs"
              minHeight="40px"
            >
              <Collapse startingHeight={40} in={show}>
                {product_name}
                {/* - {product_id} */}
              </Collapse>
            </Box>
            {/* <Box
              my="2"
              as="h4"
              minHeight="40px"
              noOfLines="2"
              fontSize="xs"
              isTruncated
              textAlign="center"
            >
              <Collapse startingHeight={40} in={show}>
                {brand_name}
              </Collapse>
            </Box> */}
            <Box fontWeight="bold" fontSize="xs">
              <Box
                as="s"
                mx="2"
                fontWeight="normal"
                color="gray.600"
                fontSize="xs"
              >
                {dis_mrp ? (
                  <NumericFormat 
                    value={mrp}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Aed."}
                  />
                ) : (
                  ""
                )}
              </Box>
              <NumericFormat 
                style={{ marginLeft: "30px" }}
                value={dis_mrp ? dis_mrp : mrp}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Aed."}
              />
            </Box>
          </LinkOverlay>
          <AddToCartBtn
            title="Add to cart"
            productQty={product_qty}
            data={props.data}
          />
        </Box>
      </Box>
    </Skeleton>
  );
};

export default Index;
