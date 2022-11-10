import { Box, Image, Heading, Circle, Button } from "@chakra-ui/react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import { useState } from "react";
import cv from "../images/cv.png";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export default function ContactMe() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  return (
    <Box >
       <Heading textAlign={"center"}  marginTop={"20px"} as="h2" size="lg">
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
        <Box>
          <Circle size="60px" bg="red.600" color="white">
            <Image
              height={"fit-content"}
              width={"100%"}
              src={github}
              alt="github"
            />
          </Circle>
          <Circle size="60px" bg="red.600" color="white">
            <Image
              height={"fit-content"}
              width={"90%"}
              src={linkedin}
              alt="linkedin"
            />
          </Circle>
          <Circle size="60px" bg="red.600" color="white">
            <Image height={"fit-content"} width={"87%"} src={cv} alt="cv" />
          </Circle>
        </Box>
      </Box>
      {/* FORMULARIO */}
      <Box width={"50%"} marginTop={"50px"} marginBottom={"50px"} marginRight={"30px"} className="rightSideFromHome">
        <Box>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" />
            <FormHelperText>Enter your Name please.</FormHelperText>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the answer.
              </FormHelperText>
            ) : (
              <FormHelperText color={"red"}>Email is required.</FormHelperText>
            )}
            <FormLabel>Message</FormLabel>
            <Input type="text" placeholder="Message" />
            <FormHelperText>
              Please write a message to contact me.
            </FormHelperText>

            <Button type="submit">Submit</Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
