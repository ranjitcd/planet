import { Checkbox } from "@chakra-ui/checkbox";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";

import { FaFacebook, FaGoogle, FaWeight } from "react-icons/fa";
import React, { useState } from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";

const RegistrationFormn = () => {
  // const [registerUser, setCount] = useState("");
  // registerUser = ({ serialized, fields, form }) => {
  //   return fetch("https://backend.dev", {
  //     body: JSON.stringify(serialized),
  //   });
  // };
  return (
    <Form>
      <Text
        style={{ marginBottom: "20px" }}
        fontSize="2xl"
        fontWeight="extrabold"
      >
        Sign Up to SuperMed.pk
      </Text>
      {/* <Text style={{ marginTop: "50px" }} size="4xl"></Text> */}

      <Stack
        style={{
          marginBottom: "50px",
        }}
        direction="row"
        spacing={5}
      >
        <Box
          marginLeft="10px"
          as="button"
          height="45px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="60px"
          borderRadius="20px"
          fontSize="14px"
          fontWeight="bold"
          textColor="white"
          bg="#ebedf0"
          borderColor="#ccd0d5"
          color="#DB4437"
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
          <HStack>
            <FaGoogle color="#DB4437" /> <Text>with Google</Text>
          </HStack>
        </Box>

        <Box
          as="button"
          height="45px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="60px"
          borderRadius="20px"
          fontSize="14px"
          fontWeight="bold"
          textColor="blue"
          bg="#ebedf0"
          borderColor="#ccd0d5"
          color="#3b5998"
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
          <HStack>
            <FaFacebook color="#3b5998" />
            <Text>with Facebook</Text>
          </HStack>
        </Box>
      </Stack>

      <Text style={{ marginBottom: "0px" }}>
        Or sign up using your email address{" "}
      </Text>
      {/* <Form action={this.registerUser} onSubmitStart={this.props.onSubmitStart}></Form> */}

      <Stack direction="row" spacing={10}>
        {/* <input type="text" onChange={this.updateInput}></input> */}
        <Field.Group name="primaryInfo">
          <Input
            name="Name"
            label="Name"
            required={({ get }) => {
              return !!get(["primaryInfo", "Name", "value"]);
            }}
          />

          <Box className="abc" style={{ marginBottom: "0px" }}>
            <Input
              name="User Name"
              label="User Name"
              required={({ get }) => {
                return !!get(["primaryInfo", "UName", "value"]);
              }}
            />
          </Box>
        </Field.Group>
      </Stack>

      <Stack direction="row" spacing={10}>
        <Field.Group name="primaryInfo">
          <Input name="userEmail" type="email" label="Email" required />
        </Field.Group>
        <Box style={{ marginTop: "0px" }}>
          <Input
            placeholder="7+ characters"
            name="userPassword"
            type="password"
            label="Password"
            required
          />
        </Box>
        <Input name="Address" label="Address" type="Text" required></Input>
      </Stack>

      <Stack>
        <Checkbox style={{ marginBottom: 50 }}>
          Creating an account means you're okay with our Terms of Service,
          Privacy Policy and our default Notification Settings.
        </Checkbox>
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
        Create Account
      </Box>
    </Form>
  );
};

export default RegistrationFormn;
