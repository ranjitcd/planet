import { CheckboxGroup } from "@chakra-ui/checkbox";
import { Checkbox } from "@chakra-ui/checkbox";
import {
  Box,
  GridItem,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";

import { FaFacebook, FaGoogle, FaWeight } from "react-icons/fa";
import React from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";

const RegistrationFormn = () => {
  // this.registerUser = ({ serialized, fields, form }) => {
  //   return fetch("https://backend.dev", {
  //     body: JSON.stringify(serialized),
  //   });
  // };

  return (
    <Form>
      <Text
        style={{ marginTop: "50px", marginBottom: "20px" }}
        fontSize="2xl"
        fontWeight="extrabold"
      >
        Forgot Password to SuperMed.pk
      </Text>
      {/* <Text style={{ marginTop: "50px" }} size="4xl"></Text> */}

      <Text style={{ marginBottom: "0px" }}>
        Please enter your email address or phone number to search for your
        account.{" "}
      </Text>
      {/* <Form action={this.registerUser} onSubmitStart={this.props.onSubmitStart}></Form> */}

      <Stack direction="row" spacing={10}>
        <Field.Group name="primaryInfo">
          <Input name="userEmail" type="email" label="Email" required />
        </Field.Group>
      </Stack>

      <Box
        as="button"
        primary
        height="45px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="60px"
        borderRadius="20px"
        fontSize="14px"
        fontWeight="bold"
        textColor="blue"
        bg="#5fa100"
        borderColor="#ccd0d5"
        color="white"
        _hover={{ bg: "#5fa100" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        Submit
      </Box>
    </Form>
  );
};

export default RegistrationFormn;
