import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import WalletBtn from "components/WalletBtn";
import LandingPage from "pages/LandingPage";
import Marketplace from "pages/Marketplace";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            {/* <WalletBtn /> */}
            <VStack spacing={8}>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/marketplace">
                  <Marketplace />
                </Route>
              </Switch>
            </VStack>
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
