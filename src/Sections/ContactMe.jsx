import { Box, Image, Heading, Circle, Button } from "@chakra-ui/react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import pdf from "../images/CVGustavoCastillo.pdf";
import { useState } from "react";
import cv from "../images/cv.png";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FormControl,
  FormLabel,
  useToast,
  Input,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";

export default function ContactMe() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const [inputName, setInputName] = useState("");
  const handleInputNameChange = (e) => setInputName(e.target.value);
  const [inputMessage, setInputMessage] = useState("");
  const handleInputMessageChange = (e) => setInputMessage(e.target.value);
  const isEmailError = input === "";
  const isNameError = inputName === "";
  const isMessageError = inputMessage === "";
  const form = useRef();
  const toast = useToast()

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kgwu2uc",
        "template_i0822lk",
        form.current,
        "UoL2za3bsCOGDob5k"
      )
      .then((res) => {
        
        toast({
          title: 'Your email has send.',
          description: "Thank you for contact me!",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      });
  }

  return (
    <Box>
      <Heading textAlign={"center"} marginTop={"20px"} as="h2" size="lg">
        Contact Me
      </Heading>
      <Box width={"100%"} heigh={"100vh"} display={"flex"} className="Home">
        {/* LEFT */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"50%"}
          marginLeft={"20px"}
          className="leftSideFromHome"
        >
          {/* ICONOS */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            flexFlow={"wrap"}
          >
            <Box>
              <Circle size="80px" bg="blue.600" color="white">
                <a href="https://github.com/megagus182">
                  <Image
                    height={"fit-content"}
                    width={"100%"}
                    src={github}
                    alt="github"
                  />
                </a>
              </Circle>
              Github
            </Box>
            <Box>
              <Circle size="80px" bg="blue.600" color="white">
                <a href="https://www.linkedin.com/in/gacr1990/">
                  <Image
                    height={"fit-content"}
                    width={"100%"}
                    src={linkedin}
                    alt="linkedin"
                    borderRadius={"50px"}
                  />
                </a>
              </Circle>
              LinkedIn
            </Box>
            <Box>
              <Circle size="80px" bg="blue.600" color="white">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CVGustavoCastillo.pdf"
                >
                  <Image
                    borderRadius={"50px"}
                    height={"fit-content"}
                    width={"100%"}
                    src={cv}
                    alt="cv"
                  />
                </a>
              </Circle>
              Curriculum
            </Box>
          </Box>
        </Box>
        {/* FORMULARIO */}
        <Box
          width={"50%"}
          marginTop={"50px"}
          marginBottom={"50px"}
          marginRight={"30px"}
          className="rightSideFromHome"
        >
          <Box>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Name" name="from_name" value={inputName}
                  onChange={handleInputNameChange}/>
                {!isNameError ? (
                <FormHelperText>Enter your Name please.</FormHelperText>
                ) : (
                  <FormHelperText color={"red"}>
                  Name is required.
                </FormHelperText>
              )}
              <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isEmailError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the answer.
                  </FormHelperText>
                ) : (
                  <FormHelperText color={"red"}>
                    Email is required.
                  </FormHelperText>
                )}
                <FormLabel>Message</FormLabel>
                <Textarea
                  type="text"
                  height={"20"}
                  name="message"
                  placeholder="Message"
                  value={inputMessage}
                  onChange={handleInputMessageChange}
                />
                {!isMessageError ? (
                <FormHelperText>
                  Please write a message to contact me.
                </FormHelperText>
                 ) : (
                  <FormHelperText color={"red"}>
                  Message is required.
                </FormHelperText>
              )}
                <br></br>
                <Button type="submit">Submit</Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
