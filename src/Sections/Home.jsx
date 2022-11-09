import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { blue } from "@mui/material/colors";
import perfil from "../images/CompletoSinFondo.png"

export default function Home() {
    return (
      <Box width={"100%"} heigh={"100vh"}  display={"flex"} className="Home">
        <Box width={"50%"} backgroundColor={"blue"} className="leftSideFromHome">



        Quien soy



        </Box>
        <Box  width={"50%"} className="rightSideFromHome">
          <Image width={"fit-content"} src={perfil} alt="imgPerfil" />
        </Box>
      </Box>
    );
  }