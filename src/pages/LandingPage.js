import React, { useState } from "react";
import {
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Icon,
  useMediaQuery,
  Flex,
  Spacer,
  Select,
  Heading,
} from "@chakra-ui/react";
import MeetTheTeam from "components/MeetTheTeam";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BiNetworkChart } from "react-icons/bi";
import { initiateTransaction } from "web3Integration";
import Web3 from "web3";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");
  const [cards, setCards] = useState(0);
  const isWalletConnected = useSelector(
    state => state.globalState.isWalletConnected
  );

  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        h="60vh"
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <Heading
          as="h1"
          mb={12}
          fontSize={{ base: "6xl", md: "8xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Poly{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Craft
          </Text>
        </Heading>
        <Text
          px={{ base: 0, lg: 24 }}
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="semibold"
          mb={12}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Let's Get Crafting!
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          {/* <Select
            width={225}
            value={cards}
            onChange={e => setCards(e.target.value)}
          >
            <option value={0}>5 cards</option>
            <option value={1}>10 cards</option>
            <option value={2}>15 cards</option>
          </Select> */}
          {/* <Button
            as="a"
            variant="solid"
            colorScheme="purple"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            onClick={() => {
              if (!isWalletConnected) {
                alert("Not connected to metamask");
              } else {
                initiateTransaction({ packSize: parseInt(cards) });
              }
            }}
          >
            MINT
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button> */}
        </Stack>
      </Box>

      <Box>
        <Heading
          as="h2"
          fontSize="35px"
          marginTop="120px"
          marginBottom="70px"
          className="about-stonkr"
        >
          Roadmap
        </Heading>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#9F7AEA",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="1 month"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiNetworkChart />}
          >
            <h3 className="vertical-timeline-element-title">
              Rewards For Final NFT And Achievement NFTs
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#0BC5EA",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="3 months"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiNetworkChart />}
          >
            <h3 className="vertical-timeline-element-title">Marketplace</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#9F7AEA",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="6 months"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiNetworkChart />}
          >
            <h3 className="vertical-timeline-element-title">
              Clans and Trading
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#0BC5EA",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="12 months"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiNetworkChart />}
          >
            <h3 className="vertical-timeline-element-title">Mini-Games</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>

      <Box>
        <Heading
          as="h2"
          fontSize="35px"
          marginTop="120px"
          marginBottom="70px"
          className="about-stonkr"
        >
          THE TEAM
        </Heading>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          justifyContent="center"
        >
          <MeetTheTeam
            name="Akash Jha"
            title="Blockchain Maven"
            githubpfp="https://avatars.githubusercontent.com/u/75901900?v=4"
            linkedinlink={"https://www.linkedin.com/in/akash-jha-063b441b0/"}
          />
          <Spacer />
          <MeetTheTeam
            name="Ritvij Kumar Sharma"
            title="web3 wizard"
            githubpfp="https://avatars.githubusercontent.com/u/51456744?v=4"
            linkedinlink={"https://www.linkedin.com/in/rks-1410/"}
          />
          <Spacer />
          <MeetTheTeam
            name="Abhijeet Swain"
            title="Artist extraordinaire"
            githubpfp="https://avatars.githubusercontent.com/u/72680953?v=4"
            linkedinlink={
              "https://www.linkedin.com/in/abhijeet-swain-2103"
            }
          />
<Spacer />
          <MeetTheTeam
            name="Anshuman Singh"
            title="Full stack guy"
            githubpfp="https://avatars.githubusercontent.com/u/72680953?v=4"
            linkedinlink={
              "https://www.linkedin.com/in/notanshuman/"
            }
          />

          <Spacer />
          <MeetTheTeam
            name="Arihant Bansal"
            title="React-ista"
            githubpfp="https://avatars.githubusercontent.com/u/17180950?v=4"
            linkedinlink={"https://www.linkedin.com/in/arihantbansal/"}
          />
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
};

export default LandingPage;
