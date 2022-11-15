import { Image, Heading, Box, useMediaQuery, Text } from "@chakra-ui/react";
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
  // const [isLargerThan320] = useMediaQuery("(min-width: 320px)");
  const [isLargerThan481] = useMediaQuery("(min-width: 481px)");
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  // const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1200px)");
  return (
    <Box>
    {isLargerThan481? 
    <Box width={"100%"} heigh={"100vh"} display={"flex"} className="Home">
      {/* LEFT */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"50%"}
        marginLeft={"20px"}
        className="leftSideFromHome"
        textAlign={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
         {  isLargerThan769 ? <Heading as="h2" margin={"10px"} size="xl">
            👋 Hello, my name is
          </Heading> :
           <Heading as="h3" margin={"5px"} size="lg">
           👋 Hello, my name is
         </Heading> }
         {isLargerThan769? <Box>
          <Text
  bgGradient='linear(to-l, blue.600, teal.400)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
Gustavo Castillo  
</Text><Text fontSize='4xl'>🧑🏻‍💻</Text>
         </Box>  :
           <Box>
           <Text
   bgGradient='linear(to-l, blue.600, teal.400)'
   bgClip='text'
   fontSize='4xl'
   fontWeight='extrabold'
 >
 Gustavo Castillo  
 </Text><Text fontSize='4xl'>🧑🏻‍💻</Text>
          </Box>}
         {isLargerThan769? <Heading margin={"10px"} as="h2" size="xl">
            FullStack Web Developer
          </Heading> :
          <Heading margin={"5px"} as="h2" size="lg">
          FullStack Web Developer
        </Heading>}
          
          <Box
          margin={"10px"}
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
        </Box>
          <Image height={"fit-content"} alignSelf={"flex-end"} paddingBottom={"40px"} width={"10%"} src={gif} alt="icon" />
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

    //TAMAÑO
    : 
    //TAMAÑO
    <Box width={"100%"} heigh={"100vh"} flexDirection={"column"} display={"flex"} className="Home">
      {/* LEFT */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        height={"50%"}
        className="leftSideFromHome"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          textAlign={"center"}
        >

           <Heading as="h4" margin={"10px"} size="lg">
           👋 Hello my name is
         </Heading> 

           <Box>
          <Text
  bgGradient='linear(to-l, blue.600, teal.400)'
  bgClip='text'
  fontSize='3xl'
  fontWeight='extrabold'
>
Gustavo Castillo  
</Text><Text fontSize='3xl'>🧑🏻‍💻</Text>
         </Box>

          <Heading margin={"10px"} as="h2" size="lg">
          FullStack Web Developer
        </Heading>
          
          <Box
          margin={"15px"}
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
        </Box>
        </Box>
      {/* RIGHT */}
      <Box height={"50%"} position={"relative"} className="rightSideFromHome">
        <Box
          backgroundColor={"blue.600"}
          clipPath="polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);"
        >
          <Image height={"auto"}  src={perfil} alt="imgPerfil" />
        </Box>
      </Box>
    </Box>}
    </Box>
  );
}
