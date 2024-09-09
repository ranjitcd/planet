import { Box, Button, useControllableState, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/Actions";

const QTY = ({ data, qty, qtyFnc }) => {
  
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [currentData, setCurrentData] = useState(data);

  let ptype=data.ptype
  let eachtabprice=data.eachtabprice
  
  
  useEffect(() => {
    setCurrentData(data);
    qtyFnc(value);
  }, [value]);
  const toast = useToast();
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  function loclstrgup() {
    //   alert("local storage updated +");
    //   localStorage.setItem("cart", JSON.parse(cartProducts));
  }

  const increment = () => {
    
     if (qty > value) {
     
      setCurrentData(data);
      setInternalValue(value + 1);

      toast({
        description: "Qty Increased",
        status: "success",
        duration: 1000,
        position: "bottom-left",
        isClosable: true,
      });
      dispatch(addToCart(currentData, value, "increment",ptype,eachtabprice));
    } else {
      
      toast({
        description: "Not Enough Stock",
        status: "warning",
        duration: 2000,
        position: "bottom-left",
        isClosable: true,
      });
    }
    loclstrgup();
  };
  const decrement = () => {
    if (value > 1) {
      
      setInternalValue(value - 1);
      toast({
        description: "Qty decreased",
        status: "warning",
        duration: 1000,
        position: "bottom-left",
        isClosable: true,
      });
      dispatch(addToCart(data, null, "decrement",ptype,eachtabprice));
    }
  };
  useEffect(() => {
    setCurrentData(data);
  }, [increment]);
  return (
    <Box my="5">
      <Button
        bg="#D6AE3699"
        _hover={{ bg: "green.900" }}
        _active={{
          bg: "green.500",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow: "none",
        }}
        onClick={() => {
          decrement();
        }}
        color="white"
        loadingText="Adding"
        fontSize="sm"
        variant="solid"
        //   isLoading
        textTransform="uppercase"
      >
        -
      </Button>
      <Box as="span" w="200px" mx="24px">
        {internalValue ? internalValue : 1}
      </Box>
      <Button
        bg="#D6AE3699"
        _hover={{ bg: "green.900" }}
        _active={{
          bg: "green.500",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow: "none",
        }}
        onClick={() => {
          increment();
        }}
        color="white"
        loadingText="Adding"
        fontSize="sm"
        variant="solid"
        //   isLoading
        textTransform="uppercase"
      >
        +
      </Button>
    </Box>
  );
};

export default QTY;
