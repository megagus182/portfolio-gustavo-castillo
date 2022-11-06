import { BrowserRouter } from 'react-router-dom';
import Home from "./Sections/Home"
import AboutMe from "./Sections/AboutMe"
import Projects from "./Sections/Projects"
import ContactMe from "./Sections/ContactMe"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <MoonIcon/>
				<Home />	
        <AboutMe />	
        <Projects />	
        <ContactMe />	
			</BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
