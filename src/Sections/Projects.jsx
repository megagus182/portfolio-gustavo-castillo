import {
  Box,
  Heading,
  Image,
  Highlight,
  SimpleGrid,
  TabPanel,
  TabList,
  Tabs,
  TabPanels,
  Tab,
} from "@chakra-ui/react";
import Food from "../images/Food1.PNG";
import Food2 from "../images/Food2.PNG";
import Food3 from "../images/Food3.PNG";
import Food4 from "../images/Food4.PNG";
import Food5 from "../images/Food5.PNG";
import Food6 from "../images/Food6.PNG";
import Food7 from "../images/Food7.PNG";
import game from "../images/Game1.PNG";
import game2 from "../images/Game2.PNG";
import game3 from "../images/Game3.PNG";
import game4 from "../images/Game4.PNG";
import game5 from "../images/Game5.PNG";
import game6 from "../images/Game6.PNG";
import game7 from "../images/Game7.PNG";
import game8 from "../images/Game8.PNG";
import game9 from "../images/Game9.PNG";
import game10 from "../images/Game10.PNG";

export default function Projects() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      className="Projects"
    >
      <Heading marginTop={"20px"}>
        Here are a few projects I've worked on recently.
      </Heading>
      <br></br>
      <Heading as="h2" margin={"20px"} size="lg">
        <Highlight
          query={["GameScript"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
        >
          GameScript
        </Highlight>
      </Heading >
      <Heading as="h2" size="sm">
      Academic experience consisting of 3 weeks of intense work on research and application of new technologies, under the agile SCRUM methodology, with all the established guidelines and objectives, such as:
- User administration, password management.
- Administration of shopping cart and product orders.
- View list of products, filter by category, price, rating, search for a specific one, add or remove from favorites, or to the shopping cart.
- Review purchased products, or ask questions about a specific product.
- Send transactional emails
- Modify profile information
- Deploy, both FrontEnd and BackEnd
      </Heading>
      <br></br>
      <SimpleGrid columns={1} spacing={10}>
        <Box  height="auto">
          <Tabs  defaultIndex={1}>
            <TabPanels textAlign={"-webkit-center"} >
              <TabPanel >
                <Image width={"680px"} fit="cover" src={game} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game2} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game3} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game4} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game5} />
              </TabPanel>
              <TabPanel>
                <Image width={"300px"} fit="cover" src={game6} />
              </TabPanel>
              <TabPanel>
                <Image width={"480px"} fit="cover" src={game7} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game8} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game9} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} fit="cover" src={game10} />
              </TabPanel>
            </TabPanels>

            <TabList>
              <Tab>LandingPage</Tab>
              <Tab>Home</Tab>
              <Tab>Detail</Tab>
              <Tab>Questions</Tab>
              <Tab>WishList</Tab>
              <Tab>Cart</Tab>
              <Tab>CheckOut</Tab>
              <Tab>Profile</Tab>
              <Tab>DarkMode</Tab>
              <Tab>Footer</Tab>
            </TabList>
          </Tabs>
        </Box>
      </SimpleGrid>

      <Heading margin={"20px"} marginTop={"40px"} as="h2" size="lg">
        <Highlight
          query={["FoodApp"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
        >
          FoodApp
        </Highlight>
      </Heading>
      <Box bg="tomato" height="auto"></Box>
      <Box height="auto">
        <Tabs defaultIndex={1}>
          <TabPanels textAlign={"-webkit-center"}>
            <TabPanel>
              <Image width={"680px"} fit="cover" src={Food} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} fit="cover" src={Food2} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} fit="cover" src={Food3} />
            </TabPanel>
            <TabPanel>
              <Image width={"300px"} fit="cover" src={Food4} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} fit="cover" src={Food5} />
            </TabPanel>
            <TabPanel>
              <Image width={"580px"} fit="cover" src={Food6} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} fit="cover" src={Food7} />
            </TabPanel>
          </TabPanels>
          <TabList>
              <Tab>LandingPage</Tab>
              <Tab>Home</Tab>
              <Tab>Detail</Tab>
              <Tab>Filter</Tab>
              <Tab>Create a Recipe</Tab>
              <Tab>Create Success</Tab>
              <Tab>Detail of Recipe created</Tab>
            </TabList>
        </Tabs>
      </Box>
    </Box>
  );
}
