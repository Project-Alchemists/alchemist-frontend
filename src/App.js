import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WalletBtn from './components/WalletBtn';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <WalletBtn />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text fontSize="xl" fontWeight="bold">
                Alchemist
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
