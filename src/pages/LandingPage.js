import { Box, Text, Divider, Button } from "@chakra-ui/react";
import { craftToken, initiateTransaction } from "web3Integration";

const LandingPage = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Button onClick={() => craftToken(8)}>{"Craft"}</Button>
      <Button onClick={initiateTransaction}>{"buy "}</Button>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize={{ base: "5xl", md: "7xl" }}
        fontWeight="extrabold"
        mb={6}
      >
        CRAFT <Divider /> NFTs
      </Text>
    </Box>
  );
};

export default LandingPage;
