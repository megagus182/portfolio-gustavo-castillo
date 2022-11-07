import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import perfil from "../images/ejemplo.png"

export default function Home() {
    return (
      <Box width={"100%"}  display={"flex"} className="Home">
        <Box width={"50%"} className="leftSideFromHome">



        Quien soy



        </Box>
        <Box width={"50%"} className="rightSideFromHome">
          <Image src={perfil} alt="imgPerfil" />
        </Box>
      </Box>
    );
  }