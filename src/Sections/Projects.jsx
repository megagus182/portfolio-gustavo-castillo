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
  Text,
  List,
  useMediaQuery
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
  const [isLargerThan481] = useMediaQuery("(min-width: 481px)");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      className="Projects"
    >
      <Heading textAlign={"center"} marginTop={"20px"}>
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
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign={"justify"}
        width={"90%"}
        fontSize="md"
      >
        Academic experience consisting of 3 weeks of intense work on research
        and application of new technologies, under the agile SCRUM methodology,
        with all the established guidelines and objectives, such as:
        <List>
          <li>- User administration, password management.</li>
          <li>- Administration of shopping cart and product orders.</li>
          <li>
            - View list of products, filter by category, price, rating, search
            for a specific one, add or remove from favorites, or to the shopping
            cart.
          </li>
          <li>
            - Review purchased products, or ask questions about a specific
            product.
          </li>
          <li>- Send transactional emails</li>
          <li>- Modify profile information</li>
          <li>- Deploy, both FrontEnd and BackEnd</li>
        </List>
      </Text>
      <br></br>
      {isLargerThan481 ? 
      <SimpleGrid columns={1} spacing={10}>
        <Box height="auto">
          <Tabs defaultIndex={1}>
          <TabList width={"50%"}>
              <Tab width={"30%"}>Landing</Tab>
              <Tab width={"30%"}>Home</Tab>
              <Tab width={"30%"}>Detail</Tab>
              <Tab width={"30%"}>Questions</Tab>
              <Tab width={"30%"}>WishList</Tab>
              <Tab width={"30%"}>Cart</Tab>
              <Tab width={"30%"}>CheckOut</Tab>
              <Tab width={"30%"}>Profile</Tab>
              <Tab width={"30%"}>DarkMode</Tab>
              <Tab width={"30%"}>Footer</Tab>
            </TabList>
            <TabPanels textAlign={"-webkit-center"}>
              <TabPanel>
                <Image width={"680px"} borderRadius={"20px"} fit="cover" src={game} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game2} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game3} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game4} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game5} />
              </TabPanel>
              <TabPanel>
                <Image width={"300px"} borderRadius={"15px"} fit="cover" src={game6} />
              </TabPanel>
              <TabPanel>
                <Image width={"480px"} borderRadius={"15px"} fit="cover" src={game7} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game8} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game9} />
              </TabPanel>
              <TabPanel>
                <Image width={"680px"} borderRadius={"15px"} fit="cover" src={game10} />
              </TabPanel>
            </TabPanels>

            
          </Tabs>
        </Box>
      </SimpleGrid>
      //TAMAÑO
:
//TAMAÑO
<SimpleGrid columns={1} spacing={10}>
        <Box height="auto">
          <Tabs defaultIndex={1}>
          <TabList width={"100%"}>
              <Tab padding={1.5} width={"10%"}>1</Tab>
              <Tab padding={1.5} width={"10%"}>2</Tab>
              <Tab padding={1.5} width={"10%"}>3</Tab>
              <Tab padding={1.5} width={"10%"}>4</Tab>
              <Tab padding={1.5} width={"10%"}>5</Tab>
              <Tab padding={1.5} width={"10%"}>6</Tab>
              <Tab padding={1.5} width={"10%"}>7</Tab>
              <Tab padding={1.5} width={"10%"}>8</Tab>
              <Tab padding={1.5} width={"10%"}>9</Tab>
              <Tab padding={1.5} width={"10%"}>10</Tab>
            </TabList>
            <TabPanels textAlign={"-webkit-center"}>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game2} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game3} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game4} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game5} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game6} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game7} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game8} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game9} />
              </TabPanel>
              <TabPanel>
                <Image width={"450px"} borderRadius={"15px"} fit="cover" src={game10} />
              </TabPanel>
            </TabPanels>

            
          </Tabs>
        </Box>
      </SimpleGrid> }
      <Heading margin={"20px"} marginTop={"40px"} as="h2" size="lg">
        <Highlight
          query={["FoodApp"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.400" }}
        >
          FoodApp
        </Highlight>
      </Heading>
      <Text
        justifyContent={"center"}
        textAlign={"justify"}
        width={"90%"}
        fontSize="md"
      >
        FoddApp is a (SPA) developed on my own as part of a 3-week challenge at
        Henry Bootcamp.
        <List>
        <li>
          - I used React for the FrontEnd and Redux for state management. All
          components were developed with pure CSS.
        </li>
        <li>
          - The SPA consumes data from the "Spoonacular" API through a backend
          developed in Node JS, using Express.
        </li>
        <li>- For the database I used PostgreSQL and Sequelize as ORM.</li>
        <li>
          - The project includes functionalities such as sorting, filtering,
          paging, a search entry, cards to view details of the selected recipe,
          and allows to create a recipe through a controlled form.
        </li>
        </List>
      </Text>
      <Box bg="tomato" height="auto"></Box>
      <Box height="auto">
      {isLargerThan481 ? 
        <Tabs defaultIndex={1}>
          <TabList>
            <Tab>LandingPage</Tab>
            <Tab>Home</Tab>
            <Tab>Detail</Tab>
            <Tab>Filter</Tab>
            <Tab>Create a Recipe</Tab>
            <Tab>Create Success</Tab>
            <Tab>Detail of Recipe created</Tab>
          </TabList>
          <TabPanels textAlign={"-webkit-center"}>
            <TabPanel>
              <Image width={"680px"} borderRadius={"15px"} fit="cover" src={Food} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} borderRadius={"15px"} fit="cover" src={Food2} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} borderRadius={"15px"} fit="cover" src={Food3} />
            </TabPanel>
            <TabPanel>
              <Image width={"300px"} borderRadius={"15px"} fit="cover" src={Food4} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} borderRadius={"15px"} fit="cover" src={Food5} />
            </TabPanel>
            <TabPanel>
              <Image width={"580px"} borderRadius={"15px"} fit="cover" src={Food6} />
            </TabPanel>
            <TabPanel>
              <Image width={"680px"} borderRadius={"15px"} fit="cover" src={Food7} />
            </TabPanel>
          </TabPanels>
          
        </Tabs>
        :
        <Tabs defaultIndex={1}>
           <TabList justifyContent={"space-between"} >
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
          <Tab>4</Tab>
          <Tab>5</Tab>
          <Tab>6</Tab>
          <Tab>7</Tab>
        </TabList>
        <TabPanels textAlign={"-webkit-center"}>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food} />
          </TabPanel>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food2} />
          </TabPanel>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food3} />
          </TabPanel>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food4} />
          </TabPanel>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food5} />
          </TabPanel>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food6} />
          </TabPanel>
          <TabPanel>
            <Image width={"440px"} borderRadius={"15px"} fit="cover" src={Food7} />
          </TabPanel>
        </TabPanels>
       
      </Tabs>
      }
      </Box>
    </Box>
  );
}
