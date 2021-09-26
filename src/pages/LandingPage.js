import { Box, Text, Divider } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box px={8} py={24} mx="auto">
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
