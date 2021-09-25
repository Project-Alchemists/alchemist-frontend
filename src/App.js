import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WalletBtn from "components/WalletBtn";
import NavBar from "components/NavBar";
import LandingPage from "pages/LandingPage";
import Marketplace from "pages/Marketplace";
import BalanceCards from "pages/BalanceCards";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <NavBar />
            {/* <WalletBtn /> */}
            <VStack spacing={8}>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/marketplace">
                  <Marketplace />
                </Route>
                <Route exact path="/balance">
                  <BalanceCards />
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
