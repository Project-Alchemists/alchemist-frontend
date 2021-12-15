import React, { useEffect } from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "components/NavBar";
import LandingPage from "pages/LandingPage";
import BalanceCards from "pages/BalanceCards";
import Footer from "components/Footer";
import CraftPage from "pages/CraftPage";
import Map from "pages/Map";
import getSensorData from "config/graphql";
const App = () => {
  // useEffect(()=>{
  //   getSensorData({});
  // },[])
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <NavBar />
            <VStack spacing={8}>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                {/* <Route exact path="/marketplace">
                  <Marketplace />
                </Route> */}
                <Route exact path="/craft">
                  <CraftPage />
                </Route>
                <Route exact path="/balance">
                  <BalanceCards />
                </Route>
                <Route exact path="/map">
                  <Map />
                </Route>
              </Switch>
            </VStack>
            <Footer />
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
