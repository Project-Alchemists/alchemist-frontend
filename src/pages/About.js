import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Center,
  Stack,
  Button,
  Link,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

  return (
    <Box>
      <Heading
        as="h1"
        fontSize="50px"
        marginTop="30px"
        marginBottom="100px"
        color={"gray.400"}
      >
        About PolyCraft
      </Heading>
      <Flex
        alignItems="center"
        direction={isNotSmallerScreen ? "row" : "column"}
      >
        <Box textAlign="left">
          <Text color={"gray.500"} maxW={"3xl"}>
            Are you not in the mood to get out of bed, get dressed, and go out
            to a restaurant?
          </Text>
          <Text color={"gray.500"} maxW={"3xl"} marginTop="20px">
            Use{" "}
            <Text as={"span"} color={"primary.400"}>
              khalo
            </Text>{" "}
            web app to order food from the best restaurants near you.
          </Text>
        </Box>

        <Box ml={isNotSmallerScreen ? "10" : "0"}>
          <Image src={"https://bit.ly/2Z4KKcF"} w="300px" />{" "}
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
