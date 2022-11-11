import { Box } from "@chakra-ui/react";
import { Image, Heading } from "@chakra-ui/react";
import perfil from "../images/CompletoSinFondo.png";
import icono1 from "../images/css.png";
import icono2 from "../images/html.png";
import icono3 from "../images/js.PNG";
import icono4 from "../images/node.png";
import icono5 from "../images/react.png";
import icono6 from "../images/redux.png";
import icono7 from "../images/sql.png";
import gif from "../images/scroll-down.gif";

export default function Home() {
  return (
    <Box width={"100%"} heigh={"100vh"} display={"flex"} className="Home">
      {/* LEFT */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"50%"}
        marginLeft={"20px"}
        className="leftSideFromHome"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Heading as="h2" size="xl">
            👋 Hello my name is
          </Heading>
          <Heading as="h2" size="2xl">
            Gustavo Castillo 🧑🏻‍💻
          </Heading>
          <Heading marginBottom={"20px"} as="h2" size="xl">
            FullStack Web Developer
          </Heading>
          <Box
            justifyContent={"space-evenly"}
            display={"inline-flex"}
            width={"-moz-fit-content"}
          >
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono1}
              alt="icon"
            />
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono2}
              alt="icon"
            />
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono3}
              alt="icon"
            />
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono4}
              alt="icon"
            />
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono5}
              alt="icon"
            />
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono6}
              alt="icon"
            />
            <Image
              height={"fit-content"}
              width={"10%"}
              src={icono7}
              alt="icon"
            />
          </Box>
          <Image height={"fit-content"} width={"10%"} src={gif} alt="icon" />
        </Box>
      </Box>
      {/* RIGHT */}
      <Box width={"50%"} className="rightSideFromHome">
        <Box
          backgroundColor={"blue.600"}
          clipPath="polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);"
        >
          <Image width={"fit-content"} src={perfil} alt="imgPerfil" />
        </Box>
      </Box>
    </Box>
  );
}
