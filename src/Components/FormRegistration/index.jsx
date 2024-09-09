import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Preview from "react-data-preview";
import { FormProvider } from "react-advanced-form";
import rules from "./validation-rules";
import messages from "./validation-messages";
import RegistrationForm from "./RegistrationForm";
import { AspectRatio, Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const index = () => {
  // this.state = {
  //   serialized: null,
  // };

  // this.handleSubmitStart = ({ serialized }) => {
  //   this.setState({ serialized });
  // };
  return (
    <FormProvider rules={rules} messages={messages}>
      <div style={{ marginBottom: "40px" }} className="flex">
        {/* <RegistrationForm onSubmitStart={this.handleSubmitStart} />
        <Preview data={this.state.serialized} /> */}
        <box style={{ margintop: "100px" }} />
        {/* <Image
          style={{ marginLeft: "-600px" }}
          // boxSize="700px"
          src="/images/SRImage.png"
          alt="Segun Adebayo"
          fallbackSrc="../images/no-image.jpg"
        /> */}
        <box style={{ marginLeft: "180px" }}>
          <RegistrationForm />
        </box>
      </div>
    </FormProvider>
  );
};

export default index;
