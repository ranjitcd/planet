import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Preview from "react-data-preview";
import { FormProvider } from "react-advanced-form";
import rules from "./validation-rules";
import messages from "./validation-messages";
import FPForm from "./ForgotPassForm";
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
      <div className="flex">
        {/* <RegistrationForm onSubmitStart={this.handleSubmitStart} />
        <Preview data={this.state.serialized} /> */}
        <box style={{ margintop: "100px" }} />

        <box style={{ marginLeft: "20px" }}>
          <FPForm />
        </box>
      </div>
    </FormProvider>
  );
};

export default index;
