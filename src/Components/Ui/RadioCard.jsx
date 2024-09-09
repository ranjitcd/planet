import { Box, useRadio } from "@chakra-ui/react";
import React ,{ useEffect, useState } from "react";

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const [buttonvalue, setbuttonvalue] = useState("");

  const input = getInputProps();
  const checkbox = getCheckboxProps();


  function packagingvalue  ()   {
  console.log(buttonvalue)
}




  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        fontSize="xs"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "green.900",
          color: "white",
          borderColor: "green.900",
        }}
        _focus={{
          boxShadow: "md",
        }}
        px={4}
        py={4}
        onChange={setbuttonvalue()}
        onClick={packagingvalue}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
