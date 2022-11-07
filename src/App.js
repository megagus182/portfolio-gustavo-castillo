import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Home from "./Sections/Home"
import Theme from './Components/Theme';
import AboutMe from "./Sections/AboutMe"
import Projects from "./Sections/Projects"
import ContactMe from "./Sections/ContactMe"

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
        <Theme />
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
