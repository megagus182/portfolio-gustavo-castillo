import { Box, Heading, Text, Image, Highlight } from "@chakra-ui/react";
import Food from "../images/CapturaFood.PNG";
import Food2 from "../images/CapturaFood2.PNG";
import Food3 from "../images/CapturaFood3.PNG";
import Food4 from "../images/CapturaFood4.PNG";

export default function Projects() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      className="Projects"
    >
      <Heading marginTop={"20px"}>These are some of my projects</Heading>
      <br></br>
      <Heading as="h2" size="lg">
        <Highlight
          query={["GameScript"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
        >
          GameScript
        </Highlight>
      </Heading>
      <Text> GameScript</Text>

      <section width= {"1920px"}
  height= "1080px"

  display= "grid"
  grid-template-rows= "repeat(2, 1fr)"
  grid-template-columns= "repeat(3, 1fr)"
  gap= "8px" class="layout">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </section>

      <Heading as="h2" size="lg">
        <Highlight
          query={["FoodApp"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
        >
          FoodApp
        </Highlight>
      </Heading>
      <Image height={"fit-content"} width={"auto"} src={Food} alt="Food1" />
      <Image height={"fit-content"} width={"auto"} src={Food2} alt="Food2" />
      <Image height={"fit-content"} width={"auto"} src={Food3} alt="Food3" />
      <Image height={"fit-content"} width={"auto"} src={Food4} alt="Food4" />
    </Box>
  );
}
