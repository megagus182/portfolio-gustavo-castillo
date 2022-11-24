import { Box, Heading, Text, Image, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import experience from "../images/experience.png";

export default function AboutMe() {
  const [isLargerThan481] = useMediaQuery("(min-width: 481px)");
  const bg = useColorModeValue("blue.600", 'blackAlpha.900')
  return (
    <Box backgroundColor={bg}>
{isLargerThan481 ? 
      <Box display={"flex"} className="AboutMe">
        {/* Left */}
        <Box width={"40%"} alignSelf={"center"} className="LeftSide">
          <Image src={experience} alt="experiences" />
        </Box>
        {/* Right */}
        <Box
          width={"80%"}
          padding={"30px"}
          paddingBottom={"0px"}
          justifyContent={"center"}
          textAlign={"justify"}
          className="RighttSide"
        >
          <Heading marginTop={"20px"} color={"white"} as="h2" size="lg">
            About Me
          </Heading>
          <br></br>
          <Text width={"100%"} color={"white"} fontSize="md">
            I've always been interested in the world of technology since I was
            little, since I always had a fascination for video games🕹 and
            computers💾, so since high school I took computer courses, in high
            school, technical career in computer science and in college 🎓
            Systems Engineering.
          </Text>
          <br></br>
          <Text width={"100%"} color={"white"} fontSize="md">
            Due to economic situations and lack of opportunities at that time
            🤔, I had to work in other areas outside of mine, such as logistics
            and transportation 🚛 in which, I could develop many Soft Skills,
            such as leadership, communication, teamwork, problem solving and
            many more.
          </Text>
          <br></br>
        </Box>
      </Box>
      //TAMAÑO
      : 
      //TAMAÑO
      <Box display={"flex"} flexDirection={"column"} className="AboutMe">
        {/* Left */}
        <Box width={"100%"} alignSelf={"center"} className="LeftSide">
          <Image src={experience} alt="experiences" />
        </Box>
        {/* Right */}
        <Box
          width={"100%"}
          padding={"30px"}
          paddingBottom={"0px"}
          paddingTop={"0px"}
          justifyContent={"center"}
          textAlign={"justify"}
          className="RighttSide"
        >
          <Heading marginTop={"20px"} as="h2" size="lg">
            About Me
          </Heading>
          <br></br>
          <Text width={"100%"} color={"white"} fontSize="md">
            I've always been interested in the world of technology since I was
            little, since I always had a fascination for video games🕹 and
            computers💾, so since high school I took computer courses, in high
            school, technical career in computer science and in college 🎓
            Systems Engineering.
          </Text>
          <br></br>
          <Text width={"100%"} color={"white"} fontSize="md">
            Due to economic situations and lack of opportunities at that time
            🤔, I had to work in other areas outside of mine, such as logistics
            and transportation 🚛 in which, I could develop many Soft Skills,
            such as leadership, communication, teamwork, problem solving and
            many more.
          </Text>
          <br></br>
        </Box>
      </Box>}
      <Box
        width={"100%"}
        padding={"30px"}
        paddingTop={"0px"}
        justifyContent={"center"}
        textAlign={"justify"}
      >
        <Text width={"100%"} color={"white"} fontSize="md">
          Now that I gave myself a chance, I took the intensive bootcamp of
          Henry📚, to update and retake what I like, the ⌨programming and
          technology🖱, so I took seriously the career of Full Stack Developer ✍
          which was not easy, but I am proud of what I can do now💪, of the
          projects I did and the experiences I took, I can handle for now the
          following technologies and methodologies💼:
        </Text>
        <br></br>
        <Text width={"100%"} textAlign={"center"} color={"white"} fontSize="md">
          JavaScript | React | Redux | HTML5 | CSS3 | NodeJs | SQL | Express |
          Scrum | GIT | Postman | Heroku | Netlify |.
        </Text>
        <br></br>
      </Box>

    </Box>
  );
}
