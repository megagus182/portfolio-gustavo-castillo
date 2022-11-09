import { useColorMode } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { MoonIcon } from '@chakra-ui/icons'

export default function Theme() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Box zIndex={1} position={"fixed"} right="8" top="5">
        <Button onClick={toggleColorMode}>
        <MoonIcon /> 
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
    )
  }