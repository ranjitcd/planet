import { CloseButton } from "@chakra-ui/close-button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Img } from "@chakra-ui/image";
import {
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { openCart, sumOfItems } from "../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";
import CartComponent from "./CartComponent";
import { Button } from "@chakra-ui/button";
import {NumericFormat}  from "react-number-format";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { isCartOpen, cartProducts } = useSelector((state) => state.cart);
 

  useEffect(() => {
    if (!isOpen && isCartOpen) {
      onOpen();
      if (!isOpen) {
        dispatch(openCart());
      }
    }
  }, [isCartOpen]);

  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isFullHeight
      allowPinchZoom
      isOpen={isOpen}
      closeOnOverlayClick
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader style={{backgroundColor:"#D6AE3699",color:"white"}}>
            Your Cart
            <Text fontSize="sm">
              You have {Object.keys(cartProducts).length} items
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              {cartProducts &&
                Object.keys(cartProducts).map((i, j) => {
                  return (
                    <CartComponent  data={cartProducts[i]} key={i} />
                  );
                })}
            </VStack>
          </DrawerBody>
          <DrawerFooter flexDirection="column">
            <Flex width="100%">
              <Box>
                <Text fontWeight="bold" as="h4">
                  Subtotal:
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text as="h4">
                  <NumericFormat 
                    value={Object.keys(cartProducts).reduce(
                      (totalPrice, key) => {
                        const {dis_mrp, mrp, qty, eachtabprice, ptype } = cartProducts[key];  
                        let pp1=cartProducts[key].ptype === "Tablets" ?  cartProducts[key].eachtabprice : cartProducts[key].dis_mrp ? cartProducts[key].dis_mrp : cartProducts[key].mrp
                        // let pp1=(dis_mrp) ? dis_mrp : mrp;
                        return (parseFloat(totalPrice + pp1 * qty)).toFixed(2);
                      },
                      0
                    )}

                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs."}
                  />
                </Text>
              </Box>
            </Flex>

            <Button
              w="100%"
              bg="#D6AE3699"
              fontSize={[12, 14, 14, 14]}
              _hover={{ bg: "#D6AE3699" }}
              _active={{
                bg: "#D6AE3699",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              color="white"
              _focus={{
                boxShadow: "none",
              }}
              variant="outline"
              my={3}
              as={Link}
              to={`/cart`}
            >
              View Cart
            </Button>
            {/* <Button
              bg="gray.900"
              fontSize={[12, 14, 14, 14]}
              _hover={{ bg: "gray.900" }}
              color="white"
              _active={{
                bg: "gray.900",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow: "none",
              }}
              w="100%"
            >
              Checkout
            </Button> */}
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Index;
