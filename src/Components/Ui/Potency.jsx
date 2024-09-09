import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import RadioCard from "./RadioCard";

const Potency = () => {
 
  const options = ["Box", "Tablets"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Size",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} my="4">
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default Potency;
