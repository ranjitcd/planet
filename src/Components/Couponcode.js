import axios from '../Helpers/axios';
import SocialLogin from './Socialmediabuttons';
import { Checkbox } from '@chakra-ui/react';
import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import React, {useState} from 'react';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
class Couponcode extends React.Component {
  
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
    if(1){
      async function makeGetRequest(input) {
        const form_data = new FormData();
              
        form_data.append('coupon_code', input.coupon_code);
        
       
        let res = await axios.post('couponProcess', form_data);
        let data = res.data;
        console.log(data.status);
        if(data.status == false)
        {
            console.log(data.msg);
            document.getElementById("cmsg").innerHTML=data.msg;
        }
        else{
            
            
            localStorage.setItem('Coupon_Code',input.coupon_code);


            const dismsg = data.msg;
            localStorage.setItem('DiscountMsg',dismsg);
            // alert(localStorage.getItem('DiscountMsg'));
            
            
            const disper = data.coupon_per;
            localStorage.setItem('Discountpercent',disper);
            // alert(localStorage.getItem('Discountpercent'));
         
            const discouid = data.coupon_id;
            localStorage.setItem('Discountcouponid',discouid);
            // alert(localStorage.getItem('Discountcouponid'));

             window.location ="/cart";
        }
     
        
      
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
        <Box style={{marginLeft:"0px"}}>
                       <Stack direction="row" spacing={10}>
                              {/* USER EMAIL */}
                              <Stack>
                             
                              <input
                              minLength="3"
                              type="text"
                              id="coupon_code"    
                              name="coupon_code"
                              value={this.state.input.email} 
                              onChange={this.handleChange}
                              placeholder='Coupon Code'
                              className='form-control mt-2'
                              style={{border:'1px solid lightgray' }}
                                />
                                {/* <div className="text-danger">{this.state.errors.email}</div> */}
                                </Stack>
                                

                                <Stack style={{marginTop:"8px"}} direction="row" spacing={10}>
                         <div id="msc" ></div>
                          <Box
                          as="button"
                          type="submit"
                          value="Submit"
                          className="btn btn-success"
                          height="35px"
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
                          Apply Coupon
                        </Box>
                        <Text color="crimson" id="cmsg"></Text>
                        </Stack>
                                </Stack>
          
                </Box>
                 
                </form>
      </div>
    );
  }
}
export default Couponcode;



