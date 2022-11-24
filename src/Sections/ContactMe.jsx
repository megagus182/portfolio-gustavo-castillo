import { Box, Image, Heading, Circle, Button, useMediaQuery, Tooltip, useColorModeValue, Text } from "@chakra-ui/react";
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
  const [isLargerThan481] = useMediaQuery("(min-width: 481px)");

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
  const bg = useColorModeValue("blue.600", 'blackAlpha.900')
  const bgc = useColorModeValue("white", 'red')

  return (
    <Box backgroundColor={bg}>
      <Heading textAlign={"center"} color={"white"} paddingTop={"20px"} marginTop={"20px"} as="h2" size="lg">
        Contact Me
      </Heading>
      <Box width={"100%"} heigh={"100vh"} display={"flex"} className="Home">
        {/* LEFT */}
        {isLargerThan481 ? 
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          textAlign={"center"}
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
              <Tooltip label="Go to my Github" aria-label='A tooltip'>
              <Circle size="80px" bgGradient={"linear(to-l, blue.400, teal.400)"} color="white">
                <a href="https://github.com/megagus182">
                  <Image
                    height={"fit-content"}
                    width={"100%"}
                    src={github}
                    alt="github"
                  />
                </a>
              </Circle>
              </Tooltip>
             <Text color={"white"}>Github</Text> 
            </Box>
            <Box>
            <Tooltip label="Go to my LinkedIn" aria-label='A tooltip'>
              <Circle size="80px" bgGradient={"linear(to-l, blue.400, teal.400)"} color="white">
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
              </Tooltip>
              <Text color={"white"}>LinkedIn</Text>
            </Box>
            <Box>
            <Tooltip label="Download CV" aria-label='A tooltip'>
              <Circle size="80px" bgGradient={"linear(to-l, blue.400, teal.400)"} color="white">
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
              </Tooltip>
              <Text color={"white"}>Curriculum</Text>
            </Box>
          </Box>
        </Box>
        //TAMAÑO
          : 
          //TAMAÑO
          <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          width={"50%"}
          marginLeft={"20px"}
          textAlign={"center"}
          className="leftSideFromHome"
        >
          {/* ICONOS */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            flexFlow={"column"}
            alignItems={"center"}
          >
            <Box>
            <Tooltip label="Go to my Github" aria-label='A tooltip'>
              <Circle size="80px" bgGradient={"linear(to-l, blue.400, teal.400)"}  color="white">
                <a href="https://github.com/megagus182">
                  <Image
                    height={"fit-content"}
                    width={"100%"}
                    src={github}
                    alt="github"
                  />
                </a>
              </Circle>
              </Tooltip>
              Github
            </Box>
            <Box>
            <Tooltip label="Go to my LinkedIn" aria-label='A tooltip'>
              <Circle size="80px" bgGradient={"linear(to-l, blue.400, teal.400)"} color="white">
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
              </Tooltip>
              LinkedIn
            </Box>
            <Box>
            <Tooltip label="Download CV" aria-label='A tooltip'>
              <Circle size="80px"  bgGradient={"linear(to-l, blue.400, teal.400)"}  color="white">
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
              </Tooltip>
              Curriculum
            </Box>
          </Box>
        </Box>}
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
                  <FormHelperText color={bgc}>
                  Name is required.
                </FormHelperText>
              )}
              <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isEmailError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the answer.
                  </FormHelperText>
                ) : (
                  <FormHelperText color={bgc}>
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
                  <FormHelperText color={bgc}>
                  Message is required.
                </FormHelperText>
              )}
                <br></br>
                {!isEmailError && !isNameError && !isMessageError ? (
                <Button type="submit">Submit</Button>
                ):(
                  null
                )}
              </FormControl>
            </form>
          </Box>
        </Box>
          
      </Box>
    </Box>
  );
}
