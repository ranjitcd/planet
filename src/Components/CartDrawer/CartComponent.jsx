import React from "react";
import { CloseButton } from "@chakra-ui/close-button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image, Img } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import {NumericFormat}  from "react-number-format";
import { removeCartItem } from "../../Store/Actions";
import { useDispatch } from "react-redux";
const CartComponent = ({ xyz, data }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        position="relative"
        alignItems="center"
      >
        <Box w="20%" d="flex" alignItems="center">
          <Image
            src={data.product_image}
            alt={data.product_name}
            width="60px"
            objectFit="contain"
            fallbackSrc="../images/no-image.jpg"
          />
        </Box>
        <Box position="relative" px="2" w="70%" fontSize={[10, 12, 12, 12]}>
          {data.product_name}
          <Box fontWeight="bold" justifyContent="space-between" display="flex">
            <Text> QTY: {data.qty} </Text>
                  <NumericFormat 
                    value={data.ptype === "Tablets" ?  (parseFloat(data.eachtabprice*data.qty)).toFixed(2) : data.dis_mrp ? (parseFloat(data.dis_mrp*data.qty)).toFixed(2) : (parseFloat(data.mrp*data.qty)).toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs "}
                  />
                  {data.dis_mrp ? (
                    <Text mx="2" color="red" fontSize="sm" as="s">
                      <NumericFormat 
                      
                        value={data.ptype === "Tablets" ? data.eachtabprice  : data.mrp }
                     displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rs "}
                      />
                    </Text>
                  ) : (
                    ""
                  )}
                

            {/* <NumericFormat 
              value={(data.dis_mrp) ? data.dis_mrp*data.qty : data.mrp*data.qty}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rs."}
            /> */}
          </Box>


          <CloseButton
            cursor="pointer"
            position="absolute"
            size="sm"
            color="white"
            _hover={{
              color: "black",
            }}
            bg="green.900"
            right="-30px"
            top="0"
            onClick={() => dispatch(removeCartItem(data))}
            mr="2"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default CartComponent;
