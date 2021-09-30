import { Box, Heading, Flex, Icon, Input, SimpleGrid } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Card from "components/Card";
import { useSelector } from "react-redux";

const BalanceCards = () => {
  const tokens = useSelector(state => state.globalState.tokens);

  return (
    <Box>
      <Heading mb={10}>Balance Cards</Heading>
      <Flex align="center" justify="center">
        <Input size="md" mx={2} />
        <Icon as={FaSearch} />
      </Flex>
      {/* TODO: Add crafting button and popup modal component, also add filters on left sidebar type */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        mt={10}
      >
        {tokens !== null && tokens.length !== 0 ? (
          tokens.map((tokenNum, index) => {
            console.log(tokenNum);
            if (tokenNum !== "0")
              return <Card card={index} quantity={tokenNum} />;
            return <></>;
          })
        ) : (
          <p>{"Please connect your wallet"}</p>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default BalanceCards;
