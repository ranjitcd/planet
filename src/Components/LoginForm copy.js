import axios from '../Helpers/axios';
import SocialLogin from './Socialmediabuttons';
import { Checkbox } from '@chakra-ui/checkbox';
import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import React, {useState} from 'react';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Redirect } from 'react-router';
class LoginForm extends React.Component {
  
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    const FormData = require('form-data');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  check(input) {
    if (input.value != document.getElementById('password').value.length < 7) {
        input.setCustomValidity('password is short');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.validate()){
      async function makeGetRequest(input) {
        const form_data = new FormData();
              
        form_data.append('email', input.email);
        form_data.append('password', input.password);
       
        let res = await axios.post('loginProcess', form_data);
        let data = res.data;
        let user = { email: res.data.userEmail, id: res.data.id, name: res.data.name }
        const { token } = res.data.token;
        console.log(data);
        console.log(res);


       

        if (data.stat || data.stat=='true') {
          document.getElementById('msc').classList.add("success");
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          window.location = "/dashboard";
        } else {
          document.getElementById('msc').classList.add("danger");
        }
        document.getElementById('msc').innerHTML=data.message;

        // this.setResponse(res);
        // console.log(data);
        // let msg= alert(data.status);
        // alert(data.msg);
    }
        
    makeGetRequest(this.state.input);
    }
  }
  validate(){
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
        errors: errors
      });
      return isValid;
  }

  render() {
   
    return (
     
            <div>
                 <form onSubmit={this.handleSubmit}>
        <Box style={{marginLeft:"89px"}}><Text
                  style={{ marginTop:"-100px",marginBottom: "20px" }}
                  fontSize="2xl"
                  fontWeight="extrabold"
                >
                  Sign In to SuperMed.pk
                </Text>
                   <SocialLogin/>
                           
                        <Text style={{ marginBottom: "20px" }}>
                          Or sign in using your email address{" "}
                        </Text>
                      
                       <Stack direction="row" spacing={10}>
                              
                                                     {/* USER EMAIL */}
                              <Stack>
                              <label for="email">Email</label>
                              <input
                              required
                              minLength="3"
                              type="email"
                              id="email"    
                              name="email"
                              value={this.state.input.email} 
                              onChange={this.handleChange}
                              isValid
                                />
                                <div className="text-danger">{this.state.errors.email}</div>
                                </Stack>
                                

                                {/* PASSWORD */}
                                <Stack>
                                                <label for="password">Password</label>
                                                <input
                                              required 
                                              minLength="7"
                                              type="password" 
                                              placeholder="7+ characters" 
                                              autoComplete="off"  
                                              id="password"
                                              name="password"
                                              value={this.state.input.password} 
                                                 onChange={this.handleChange}
                                              />
                                              <div className="text-danger">{this.state.errors.password}</div>
                                              </Stack>




                                </Stack>
          
          <Stack style={{ marginTop: 50,marginBottom: 50 }} direction="row" spacing={220}>
        <Checkbox >Remember Me</Checkbox>
        <Box as="a" href="/resetpassword" target="_blank" color="green.400">Forgot Password </Box>
      </Stack>
                          
                          <Stack>
                         <div id="msc" style={{fontSize:'15px'}}></div>
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