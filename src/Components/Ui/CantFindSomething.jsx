import {
  Button,
  Modal,
  useDisclosure,
  FormControl,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  Textarea,
  ModalFooter,
  File,
  Input,
  Box,
  Text,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";
import React, {
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { urlConfig, api } from "../../Helpers/urlConfig";

const CantFindSomething = forwardRef((props, ref) => {
  function handleSubmitModalForm(event) {
    document.getElementById("loading").style.display = "block";
    const form = event.currentTarget;

    event.preventDefault();

    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    // console.log(formDataObj["fname"]);
    // console.log(formDataObj["lname"]);
    // console.log(formDataObj["comment"]);
    // console.log(formDataObj["email"]);
    // console.log(formDataObj["file"]);

    async function makeGetRequest(formDataObj) {
      console.log("api call");
      const bodyFormData = new FormData(event.target);
      bodyFormData.append("fname", formDataObj["fname"]);
      bodyFormData.append("lname", formDataObj["lname"]);
      bodyFormData.append("comment", formDataObj["comment"]);
      bodyFormData.append("email", formDataObj["email"]);
      bodyFormData.append("pfile", formDataObj["file"]);

      let presdata = await axios.post(
        api + "prescriptionProcess",
        bodyFormData
      );

      console.log(presdata.data);
      document.getElementById("loading").style.display = "none";
      document.getElementById("msg").innerHTML = presdata.data.msg;
    }
    makeGetRequest(formDataObj);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  useImperativeHandle(ref, () => ({
    getAlert() {
      onOpen(true);
    },
  }));

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submit your prescription to us</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Form onSubmit={handleSubmitModalForm}>
              <FormControl>
                {/* <FormLabel>First name</FormLabel> */}
                <Input required name="fname" placeholder="First name" />
              </FormControl>
              <FormControl mt={4}>
                {/* <FormLabel>Last name</FormLabel> */}
                <Input required name="lname" placeholder="Last name" />
              </FormControl>
              <FormControl mt={4}>
                {/* <FormLabel>Email</FormLabel> */}
                <Input required name="email" type="email" placeholder="Email" />
              </FormControl>
              <FormControl mt={4}>
                {/* <FormLabel>Note</FormLabel> */}
                <Textarea required name="comment" placeholder="Your Comments" />
              </FormControl>
              <FormControl mt={4}>
                {/* <FormLabel>Attachment</FormLabel> */}

                <Input
                  required
                  type="file"
                  name="file"
                  accept=".pdf,.docx,.jpg,.png,.gif,.jpeg "
                />
              </FormControl>
              {/* <Button as="submit" type="submit" colorScheme="green" mr={3}>
                Upload
              </Button> */}
              <Box ml="50%" mt="5%">
                <Flex flexDirection="row">
                  <Spinner
                    id="loading"
                    display="none"
                    size="lg"
                    thickness="4px"
                    speed="1.00s"
                    emptyColor="gray.200"
                    color="green.500"
                    mr="5"
                  />
                  <Button size="sm" type="submit" colorScheme="green" mr={3}>
                    Upload
                  </Button>

                  <Button size="sm" onClick={onClose}>
                    Cancel
                  </Button>
                </Flex>
              </Box>

              <Text id="msg" ml="50%" mt="5%"></Text>
            </Form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
export default CantFindSomething;
