import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Icon,
  useMediaQuery,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import MeetTheTeam from "components/MeetTheTeam";

const LandingPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
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
          </Text>{" "}
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Lorem Ipsum
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="primary"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Get Started
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
        </Stack>
      </Box>

      <Box>
        <Text
          as="h2"
          fontSize="35px"
          marginTop="120px"
          marginBottom="70px"
          className="about-stonkr"
        >
          Meet the Developer Team
        </Text>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          justifyContent="center"
        >
          <MeetTheTeam
            name="Akash Jha"
            title="Blockchain Maven"
            githubpfp="https://avatars.githubusercontent.com/u/75901900?v=4"
            linkedinbtn={"https://www.linkedin.com/in/akash-jha-063b441b0/"}
            githubbtn={"https://github.com/akashjha011"}
          />
          <Spacer />
          <MeetTheTeam
            name="Ritvij Kumar Sharma"
            title="Tech wizard"
            githubpfp="https://avatars.githubusercontent.com/u/75934932?v=4"
            linkedinbtn={"https://www.linkedin.com/in/rks-1410/"}
            githubbtn={"https://github.com/ritvij14"}
          />
          <Spacer />
          <MeetTheTeam
            name="Aviral Bansal"
            title="Artist extraordinaire"
            githubpfp="https://avatars.githubusercontent.com/u/72680953?v=4"
            linkedinbtn={"https://www.linkedin.com/in/aviral-bansal-6139491aa/"}
            githubbtn={"https://github.com/swarnabgarang"}
          />
          <Spacer />
          <MeetTheTeam
            name="Arihant Bansal"
            title="UI developer"
            githubpfp="https://avatars.githubusercontent.com/u/17180950?v=4"
            linkedinbtn={"https://www.linkedin.com/in/arihantbansal/"}
            githubbtn={"https://github.com/arihantbansal"}
          />
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
};

export default LandingPage;
