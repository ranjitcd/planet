import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import {NumericFormat}  from "react-number-format";
import { FaShareAlt, FaComment } from "react-icons/fa";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Collapse,
  Fade,
  IconButton,
  Image,
  LinkOverlay,
  Progress,
  SlideFade,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddToCartBtn from "../Ui/AddToCartBtn";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [show, setShow] = useState(false);

  const {
    product_id,
    product_name,
    product_image,
    product_qty,
    mrp,
    dis_mrp,
    dis_per,
    dis_sts,
    product_slug,
  } = props.data;

  const title = product_name;
  const imageAlt = product_name;
  const formattedPrice = mrp;
  const strikePrice = mrp;
  useEffect(() => {}, []);
  return (
    <Box
      position="relative"
      overflow="hidden"
      role="group"
      border="1px"
      borderRadius="lg"
      borderColor="#737373"
      p="5"
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
          <Badge borderRadius="md" px="2" bg="green.900" color="white">
            {dis_per ? dis_per : 0}% off
          </Badge>
        ) : (
          ""
        )}
      </Box>

      <Box as="div">
        <LinkOverlay
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}
          as={Link}
          to={`/product/${product_slug}`}
        >
          <AspectRatio ratio={[8 / 6, 10 / 6, 15 / 12, 15 / 12]}>
            <Image
              src={product_image}
              alt={imageAlt}
              h="100%"
              maxW="100%"
              objectFit="contain"
              fallbackSrc="../images/no-image.jpg"
            />
          </AspectRatio>
        </LinkOverlay>
        <Box>
          <Text
            mt="2"
            fontWeight="semibold"
            as="h3"
            noOfLines="2"
            lineHeight="tight"
            textAlign="center"
            fontSize="sm"
            isTruncated
            minHeight={["0px", "10px", "46px", "46px"]}
          >
            <Collapse startingHeight={40} in={show}>
              {title}
            </Collapse>
          </Text>

          <Text fontWeight="bold" textAlign="center" fontSize="xs">
            {dis_mrp ? (
              <Text
                as="s"
                mx="2"
                fontWeight="normal"
                color="gray.600"
                fontSize="xs"
              >
                <NumericFormat 
                  value={strikePrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs."}
                />
              </Text>
            ) : (
              ""
            )}
            <NumericFormat 
              value={dis_mrp ? dis_mrp : formattedPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rs."}
            />
          </Text>

          <AddToCartBtn
            title="Add to cart"
            productQty={product_qty}
            data={props.data}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
