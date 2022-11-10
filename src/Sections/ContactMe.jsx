import { Box, Image, Heading } from "@chakra-ui/react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import cv from "../images/cv.png";

export default function ContactMe() {
  return (
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
        <Heading marginTop={"20px"} as="h2" size="lg">
        Contact Me
      </Heading>
        <Box>
          <Image
            backgroundColor={"red.600"}
            height={"fit-content"}
            width={"10%"}
            src={github}
            alt="github"
          />
        </Box>
        <Box>
          <Image
          backgroundColor={"red.600"}
            height={"fit-content"}
            width={"10%"}
            src={linkedin}
            alt="linkedin"
          />
        </Box>
        <Box >
          <Image backgroundColor={"red.600"} height={"fit-content"} width={"10%"} src={cv} alt="cv" />
        </Box>
      </Box>
      <Box width={"50%"} className="rightSideFromHome">
        <Box
          backgroundColor={"red.600"}
          clipPath="polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);"
        >
          FORMULARIO CONTROLADO
        </Box>
      </Box>
    </Box>
  );
}
