import axios from "../Helpers/axios";
import SocialLogin from "./Socialmediabuttons";
import { Checkbox } from "@chakra-ui/react";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };
    const FormData = require("form-data");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  check(input) {
    if (input.value != document.getElementById("password").value.length < 7) {
      input.setCustomValidity("password is short");
    } else {
      // input is valid -- reset the error message
      input.setCustomValidity("");
    }
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      async function makeGetRequest(input) {
        const form_data = new FormData();
        // form_data.append("email", input.email);
        form_data.append("email", 'mazin.zunnoon95@gmail.com');
        form_data.append("password", input.password);
        let res = await axios.post("loginProcess", form_data);
        let data = res.data;
        let user = {
          email: res.data.userEmail,
          id: res.data.id,
          name: res.data.name,
        };
        const { token } = res.data.token;
        console.log(data);
        console.log(res);
        if (data.stat || data.stat == "true") {
          
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          window.location = "/dashboard";
        } else {
          document.getElementById("msc").classList.add("danger");
        }
        document.getElementById("msc").innerHTML = data.message;
      }
      makeGetRequest(this.state.input);
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email.";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Box  style={{height:"80%"}}>
                    
         <Text
            marginBottom={["0px","0px","0px","0px"]}
            fontSize={["lg","lg","2xl","2xl",]}
            fontWeight="bold"
            color="rgba(214, 174, 54, 0.6)"
            textAlign="center"
            
            >
              Sign In
            </Text>

            <Text
            marginBottom={["-20px","0px","40px","40px"]}
            fontSize={["sm","sm","sm","sm",]}
            fontWeight="normal"
            textAlign="center"
            >
             Don't have an account Signup
            </Text>

            {/* <SocialLogin
             marginBottom={["-20px","0px","40px","20px"]}
             
             /> */}

            {/* <Text 
            marginBottom={["-20px","0px","0px","0px"]}
            >
              Or sign in using your email address{" "}
            </Text> */}

            <Stack 
            
              direction={["column", "column", "row", "row"]}
              justify="flex-start"
              display={["flex", "flex", "block", "block"]}
              alignItems="flex-start"
              spacing={["0px", "0px", "0px", "0px"]}
              >
             
             
             
              {/* USER EMAIL */}
              
              <Stack 
              direction={["column", "column", "column", "column"]}
               justify="flex-start"
               display={["flex", "flex", "flex", "flex"]}
               alignItems="center"
              
               spacing={["0px", "0px", "10px", "20px"]}>
                
                
                <Box fontSize={["xs","xs","md","md"]} color="gray.900" fontWeight="600">
                <label for="email">Email</label>
                </Box>
                
                <input
                // style={{borderRadius:"5px",marginTop:"5px",height:"35px",width:"65%",padding:"10px"}}
                className="inputhov"
                required
                placeholder="Abc@xyz.com"
                  minLength="3"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.input.email}
                  // value="mazin.zunnoon95@gmail.com"
                  onChange={this.handleChange}
                  isValid
                />
                
                <div className="text-danger">{this.state.errors.email}</div>
              
              </Stack>

              
              
              {/* PASSWORD */}
              <Stack 
              
              direction={["column", "column", "column", "column"]}
              display={["flex", "flex", "flex", "flex"]}
              alignItems="center"
              justify="center"
              spacing={["0px", "0px", "10px", "20px"]}
              marginTop={["0px", "0px", "20px", "20px"]}
              >

                <Box fontSize={["xs","xs","md","md"]}  color="gray.900" fontWeight="600">
                <label for="password">Password</label>
                </Box>
                
                
                <input
                  className="inputhov"
                  required
                  minLength="7"
                  type="password"
                  placeholder="*******"
                  autoComplete="off"
                  id="password"
                  name="password"
                  value={this.state.input.password}
                  onChange={this.handleChange}
                />
                <div className="text-danger">{this.state.errors.password}</div>
              </Stack>


              
            </Stack>

            
  {/* ---------------------------Remember Me------------------------------------------------ */}
            
            
            
            <Stack
               direction={["column", "column", "row", "row"]}
               justify="flex-start"
               display={["flex", "flex", "flex", "flex"]}
               alignItems="flex-start"
               my={2}
               spacing={["10px", "0px", "10px", "110px"]}
               marginBottom={["20px","20px","20px","20px"]}
            >
              <Checkbox >Remember Me</Checkbox>
              <Box
                as="a"
                href="/resetpassword"
                target="_blank"
                color="gray.900"
                _hover={{color:"rgba(214, 174, 54, 0.6)"}}
                fontSize={["xs","xs","md","md"]}
              >
                Forgot Password
              </Box>
            </Stack>

            
            
            
            
            {/* ---------------------------button------------------------------------------------ */}
            
            
            
            
            
            
            <Stack
               direction={["column", "column", "column", "column"]}
               justify="center"
               display={["flex", "flex", "flex", "flex"]}
               alignItems="center"
               spacing={["10px", "0px", "10px", "20px"]}
               my={5}
              
            >
              <div id="msc" style={{ fontSize: "15px" }}></div>
              <Box
                as="button"
                type="submit"
                value="Submit"
                className="btn btn-success"
                height="45px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="1px"
                px="60px"
                borderRadius="20px"
                fontSize="14px"
                fontWeight="bold"
                textColor="blue"
                bg="rgba(214, 174, 54, 0.6)"
                borderColor="#ccd0d5"
                color="white"
                _hover={{ bg: "rgba(214, 174, 54, 1)" }}
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
                Sign In
              </Box>
            </Stack>
          </Box>
        </form>
      </div>
    );
  }
}
export default LoginForm;
