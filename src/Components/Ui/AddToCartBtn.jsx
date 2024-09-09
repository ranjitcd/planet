import { DeleteIcon } from "@chakra-ui/icons";
import {
  useToast,
  useControllableProp,
  Box,
  Button,
  useControllableState,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeCartItem } from "../../Store/Actions";
const AddToCartBtn = ({ title, data, productQty }) => {
  const toast = useToast();
  const [addedInCart, setAddedInCart] = useState(false);
  const [qty, setQty] = useState(productQty);
  const [value, setValue] = useControllableState({ defaultValue: 1 });
  const [currentData, setCurrentData] = useState(data);
  const dispatch = useDispatch();
  const incressQty = () => {
    if (productQty <= value) {
      toast({
        title: "An error occurred.",
        description: "Out of Stock Now",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setValue(value + 1);
      dispatch(addToCart(data));
    }
  };
  useEffect(() => {}, [productQty]);
  if (qty <= 0) {
    return (
      <Button
        mt="3"
        bg="#D6AE3699"
        _hover={{ bg: "gray.900" }}
        _active={{
          bg: "gray.900",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow: "none",
        }}
        onClick={() => {
          toast({
            title: "An error occurred.",
            description: "Out of Stock Now",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }}
        color="white"
        loadingText="Adding"
        width="full"
        fontSize="xs"
        variant="solid"
        //   isLoading

        textTransform="uppercase"
      >
        Out of stock
      </Button>
    );
  } else if (!addedInCart) {
    return (
      <Button
        mt="3"
        bg="#D6AE3699"
        _hover={{ bg: "#D6AE3699" }}
        _active={{
          bg: "#D6AE3699",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow: "none",
        }}
        onClick={() => {
          toast({
            title: "Successfully Added",
            description: "Added to cart",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setAddedInCart(true);
          dispatch(addToCart(currentData));
        }}
        color="white"
        loadingText="Adding"
        width="full"
        fontSize="xs"
        variant="solid"
        //   isLoading
        textTransform="uppercase"
      >
        {title}
      </Button>
    );
  } else {
    return (
      <Box borderRadius="lg" mt="3" bg="#D6AE3699">
        <Flex align="center">
          {value > 1 ? (
            <Button
              color="white"
              bg="#D6AE3699"
              borderRightRadius="0"
              _hover={{ bg: "#D6AE3699" }}
              _active={{
                bg: "#D6AE3699",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow: "none",
              }}
              onClick={() => {
                setValue(value - 1);
                dispatch(addToCart(data, null, "decrement"));
              }}
            >
              -
            </Button>
          ) : (
            <Button
              color="white"
              bg="#D6AE3699"
              borderRightRadius="0"
              _hover={{ bg: "#D6AE3699" }}
              _active={{
                bg: "#D6AE3699",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow: "none",
              }}
              onClick={() => {
                setAddedInCart(false);
                dispatch(removeCartItem(data));
              }}
            >
              <DeleteIcon size="xs" />
            </Button>
          )}
          <Spacer />
          <Box color="white" as="span" mx="10px">
            {value}
          </Box>
          <Spacer />

          <Button
            color="white"
            bg="#D6AE3699"
            borderLeftRadius="0"
            _hover={{ bg: "#D6AE3699" }}
            _active={{
              bg: "#D6AE3699",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow: "none",
            }}
            onClick={() => {
              incressQty();
            }}
          >
            +
          </Button>
        </Flex>
      </Box>
    );
  }
};

export default AddToCartBtn;
