import axios from '../Helpers/axios';
import SocialLogin from './Socialmediabuttons';
import { Checkbox } from '@chakra-ui/react';
import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import React, {useState} from 'react';
class registerform extends React.Component {
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
      if (input.value != document.getElementById('password').value) {
          input.setCustomValidity('Password Must be Matching.');
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
    // if(this.validate()){
      if(1){
      async function makeGetRequest(input) {
        const form_data = new FormData();
              form_data.append('fullname', input.FullName);
        form_data.append('email', input.email);
        form_data.append("type", "form");
        form_data.append('password', input.password);
        let res = await axios.post('registrationProcess', form_data);
        
        let data = res.data;
        if (data.status || data.status=='true') {
          document.getElementById('msc').classList.add("success");
        } else {
          document.getElementById('msc').classList.add("danger");
        }
        document.getElementById('msc').innerHTML=data.msg;
    }
    makeGetRequest(this.state.input);
    }
  }
  validate(){
    console.log('validating');
      let input = this.state.input;
      let errors = {};
      let isValid = true;
      if (!input["FullName"]) {
        isValid = false;
        errors["FullName"] = "Please enter your FullName.";
        console.log('Full Name error');
      }

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email.";
        console.log('email error');
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
        console.log('password error');
      }
      this.setState({
        errors: errors
      });
      return isValid;
  }
    render() {
    // return (


    //   <div>
    //     <form onSubmit={this.handleSubmit}>
    //     <Box style={{marginLeft:"49px"}}>
          
    //       <Text
    //              marginBottom={["-20px","0px","40px","40px"]}
    //              fontSize={["lg","lg","2xl","2xl",]}
    //              fontWeight="extrabold"
    //             >
    //               Sign Up to SuperMed.pk
    //             </Text>


    //                 <SocialLogin
    //                  marginBottom={["-20px","0px","40px","20px"]}
    //                 />

    //                     <Text
    //                      marginBottom={["4px","0px","0px","0px"]}
    //                      >
    //                       Or sign up using your email address{" "}
    //                     </Text>

    //                    <Stack 

    //                     direction={["column", "column", "row", "row"]}
    //                     justify="flex-start"
    //                     display={["flex", "flex", "block", "block"]}
    //                     alignItems="flex-start"
    //                     spacing={["0px", "0px", "0px", "0px"]}
    //                     >
                       
                       
                       
                       
    //                           {/* Full NAME */}
    //                           <Stack
                              
    //                           direction={["column", "column", "column", "column"]}
    //                           justify="flex-start"
    //                           display={["flex", "flex", "flex", "flex"]}
    //                           alignItems="flex-start"
    //                           my={4}
    //                           spacing={["0px", "0px", "10px", "10px"]}
    //                           marginTop={["0px", "0px", "0px", "10px"]}
    //                           >
                              
    //                           <Box fontSize={["xs","xs","md","md"]}>
    //                           <label for="FullName"> Full Name</label>
    //                           </Box>



                             
    //                           <input
    //                           className="form-control"
    //                           required
    //                           type="text"
    //                           id="FullName"    
    //                           name="FullName"
    //                           value={this.state.input.FullName} 
    //                           onChange={this.handleChange}
    //                           />

    //                           <div className="text-danger">{this.state.errors.FullName}</div>
                              
    //                           </Stack>
                              
                              
                              
                              
                              
    //                           {/* USER EMAIL */}
    //                           <Stack
                              
    //                           direction={["column", "column", "column", "column"]}
    //                             display={["flex", "flex", "flex", "flex"]}
    //                             alignItems="flex-start"
    //                             justify="flex-start"
    //                             my={4}
    //                             spacing={["0px", "0px", "10px", "10px"]}
    //                             marginTop={["0px", "0px", "0px", "0px"]}
    //                             >

    //                             <Box fontSize={["xs","xs","md","md"]}>
    //                             <label for="email">Email</label>                    
    //                             </Box>
                              
    //                           <input
    //                           required
    //                           className="form-control"
    //                           type="email"
    //                           id="email"    
    //                           name="email"
    //                           value={this.state.input.email} 
    //                           onChange={this.handleChange}
    //                             />
    //                             <div className="text-danger">{this.state.errors.email}</div>
    //                             </Stack>
                          
                          
    //                        </Stack>
                             
                             
                             
                             
                             
                             
    //                           {/* <Stack marginBottom="25px" marginTop="25px" direction="row" spacing={10}>
    //                                          */}
    //                                          <Stack 
              
    //                           direction={["column", "column", "column", "column"]}
    //                           display={["flex", "flex", "flex", "flex"]}
    //                           alignItems="flex-start"
    //                           justify="flex-start"
    //                           my={4}
    //                           spacing={["0px", "0px", "10px", "10px"]}
    //                           marginTop={["0px", "0px", "0px", "0px"]}
    //                           >
    //                               {/* PASSWORD */}
    //                               <Stack>
    //                               <Box fontSize={["xs","xs","md","md"]}>
    //                                             <label for="password">Password</label>
    //                                             </Box>
                                              
    //                                             <input
    //                                           required 
    //                                           type="password" 
    //                                           placeholder="7+ characters" 
    //                                           className="form-control"
    //                                           minLength="7"
    //                                           autoComplete="off"  
    //                                           id="password"
    //                                           name="password"
    //                                           value={this.state.input.password} 
    //                                              onChange={this.handleChange}
    //                                           />
    //                                           <div className="text-danger">{this.state.errors.password}</div>
    //                                           </Stack>
    //                               {/*CONFIRM PASSWORD */}
    //                               {/* <Stack>
    //                                             <label for="confirmpassword">Confirm Password</label>
    //                                             <input
    //                                              required 
    //                                              name="confirmpassword"
    //                                              type="password" 
    //                                              placeholder="7+ characters" 
    //                                              value={this.state.input.confirmpassword} 
    //                                              onChange={this.handleChange}
    //                                             autoComplete="off"  
    //                                             id="confirmpassword"
    //                                             oninput="check(this)"
    //                                             />
                                                
    //                                             <div className="text-danger">{this.state.errors.confirmpassword}</div>
    //                                             </Stack> */}
    //                                             </Stack>
                                              
                                              
    //                                             {/* <div className="text-danger">{this.state.errors.title}</div> */}
    //         {/* <div className="form-group">
    //         <label for="title">Title:</label>
    //         <input 
    //           type="text" 
    //           name="title" 
    //           value={this.state.input.title}
    //           onChange={this.handleChange}
    //           className="form-control" 
    //           placeholder="Enter title" 
    //           id="title" />
    //           <div className="text-danger">{this.state.errors.title}</div>
    //       </div>
    //       <div className="form-group">
    //         <label for="body">Body:</label>
    //         <textarea 
    //           name="body"
    //           value={this.state.input.body} 
    //           onChange={this.handleChange}
    //           placeholder="Enter body"
    //           className="form-control" />
    //           <div className="text-danger">{this.state.errors.body}</div>
    //       </div>
    //        */}
    //       <Stack
    //       direction={["column", "column", "row", "row"]}
    //       justify="flex-start"
    //       display={["flex", "flex", "flex", "flex"]}
    //       alignItems="flex-start"
    //        my={4}
    //       spacing={["10px", "0px", "10px", "200px"]}
    //       marginBottom={["20px","20px","20px","20px"]}
    //       >
    //         <Box ><Checkbox  >
    //           <Text fontSize={["xs","xs","md","md"]}>Creating an account means you're okay with our Terms of Service,
    //                           Privacy Policy and our default Notification Settings.</Text>
                              
    //                         </Checkbox></Box>
                            
    //                       </Stack>
                         
                         
    //                       <Stack
                          
    //                       direction={["column", "column", "row", "row"]}
    //            justify="flex-start"
    //            display={["flex", "flex", "flex", "flex"]}
    //            alignItems="flex-start"
    //            spacing={["10px", "0px", "10px", "20px"]}
                          
    //                       >
    //                      <div id="msc" style={{fontSize:'15px'}}></div>
    //                       <Box
    //                       as="button"
    //                       type="submit"
    //                       value="Submit"
    //                       className="btn btn-success"
    //                       height="45px"
    //                       lineHeight="1.2"
    //                       transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    //                       border="1px"
    //                       px="60px"
    //                       borderRadius="20px"
    //                       fontSize="14px"
    //                       fontWeight="bold"
    //                       textColor="blue"
    //                       bg="#5fa100"
    //                       borderColor="#ccd0d5"
    //                       color="white"
    //                       _hover={{ bg: "#5fa100" }}
    //                       _active={{
    //                         bg: "#dddfe2",
    //                         transform: "scale(0.98)",
    //                         borderColor: "#bec3c9",
    //                       }}
    //                       _focus={{
    //                         boxShadow:
    //                           "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    //                       }}
    //                     >
    //                       Create Account
    //                     </Box>
    //                     </Stack>
    //             </Box>
    //             </form>
    //   </div>
    // );


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
              Sign Up
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
             
             

             <Stack 
            
            direction={["column", "column", "row", "row"]}
            justify="flex-start"
            display={["flex", "flex", "flex", "flex"]}
            alignItems="center"
            spacing={["0px", "0px", "0px", "0px"]}
            >  {/* USER first Name */}
              
            <Stack 
   direction={["column", "column", "column", "column"]}
    justify="flex-start"
    display={["flex", "flex", "flex", "flex"]}
    alignItems="center"
   
    spacing={["0px", "0px", "10px", "20px"]}>
     
     
     <Box fontSize={["xs","xs","md","md"]} color="gray.900" fontWeight="600">
     <label for="email">First Name</label>
     </Box>
     
     <input
     // style={{borderRadius:"5px",marginTop:"5px",height:"35px",width:"65%",padding:"10px"}}
     className="inputhovrow"
     required
     placeholder="First Name"
       minLength="3"
       type="string"
       id="fname"
       name="fname"
       value={this.state.input.fname}
       // value="mazin.zunnoon95@gmail.com"
       onChange={this.handleChange}
       isValid
     />
     
     <div className="text-danger">{this.state.errors.fname}</div>
   
   </Stack>


{/* USER last Name */}
   
<Stack 
   direction={["column", "column", "column", "column"]}
    justify="flex-start"
    display={["flex", "flex", "flex", "flex"]}
    alignItems="center"
   
    spacing={["0px", "0px", "10px", "20px"]}>
     
     
     <Box fontSize={["xs","xs","md","md"]} color="gray.900" fontWeight="600">
     <label for="email">Last Name</label>
     </Box>
     
     <input
     // style={{borderRadius:"5px",marginTop:"5px",height:"35px",width:"65%",padding:"10px"}}
     className="inputhovrow"
     required
     placeholder="Last Name"
       minLength="3"
       type="string"
       id="lname"
       name="lname"
       value={this.state.input.lname}
       // value="mazin.zunnoon95@gmail.com"
       onChange={this.handleChange}
       isValid
     />
     
     <div className="text-danger">{this.state.errors.lname}</div>
   
   </Stack>
</Stack>
              


<Stack 
            
            direction={["column", "column", "row", "row"]}
            justify="flex-start"
            display={["flex", "flex", "flex", "flex"]}
            alignItems="center"
            spacing={["0px", "0px", "0px", "0px"]}
            >  


 {/* PASSWORD */}
 <Stack 
              
              direction={["column", "column", "column", "column"]}
              display={["flex", "flex", "flex", "flex"]}
              alignItems="center"
              justify="center"
              marginTop={["0px", "0px", "0px", "0px"]}
              >

                <Box fontSize={["xs","xs","md","md"]}  color="gray.900" fontWeight="600">
                <label for="password">Password</label>
                </Box>
                
                
                <input
                  className="inputhovrow"
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


                 {/* PASSWORD Repeat */}
                 <Stack 
              
              direction={["column", "column", "column", "column"]}
              display={["flex", "flex", "flex", "flex"]}
              alignItems="center"
              justify="center"
              marginTop={["0px", "0px", "0px", "0px"]}
              >

                <Box fontSize={["xs","xs","md","md"]}  color="gray.900" fontWeight="600">
                <label for="password">Repeat Password</label>
                </Box>
                
                
                <input
                  className="inputhovrow"
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

                      

  {/* USER Phone Number */}
              
  <Stack 
              direction={["column", "column", "column", "column"]}
               justify="flex-start"
               display={["flex", "flex", "flex", "flex"]}
               alignItems="center"
              
               spacing={["0px", "0px", "10px", "20px"]}>
                
                
                <Box fontSize={["xs","xs","md","md"]} color="gray.900" fontWeight="600">
                <label for="email">Phone Number</label>
                </Box>
                
                <input
                // style={{borderRadius:"5px",marginTop:"5px",height:"35px",width:"65%",padding:"10px"}}
                className="inputhov"
                required
                placeholder="Abc@xyz.com"
                  minLength="3"
                  type="Number"
                  id="Pnum"
                  name="Pnum"
                  value={this.state.input.Pnum}
                  // value="mazin.zunnoon95@gmail.com"
                  onChange={this.handleChange}
                  isValid
                />
                
                <div className="text-danger">{this.state.errors.Pnum}</div>
              
              </Stack>




             
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








           










        
              
              
             


              
            </Stack>

            
            
            
    

            
            
            
            
            {/* ---------------------------button------------------------------------------------ */}
            
            
            
            
            
            
            <Stack
               direction={["column", "column", "column", "column"]}
               justify="center"
               display={["flex", "flex", "flex", "flex"]}
               alignItems="center"
               spacing={["10px", "0px", "10px", "20px"]}
               my={2}
              
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
                Register
              </Box>
            </Stack>
          </Box>
        </form>
      </div>
    );
  }
  
}
export default registerform;