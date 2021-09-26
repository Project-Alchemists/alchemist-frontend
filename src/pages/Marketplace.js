import {
  Box,
  Heading,
  Flex,
  Icon,
  Input,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { FaSearch } from "react-icons/fa";
import MarketCard from "components/MarketCard";

const Marketplace = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

  const cards = [
    {
      name: "Iron",
      description: "Makes good swords",
      gen: "0",
      recipe: [],
    },
    {
      name: "Gold",
      description: "Ore that people are crazy about",
      gen: "0",
      recipe: [],
    },
    {
      name: "Silicon",
      description: "Ore that powers everything",
      gen: "0",
      recipe: [],
    },
    {
      name: "Glass",
      description: "Shiny stuff",
      gen: "0",
      recipe: [],
    },
    {
      name: "Plastic",
      description: "Ruining the world since 1907",
      gen: "0",
      recipe: [],
    },
    {
      name: "Copper",
      description: "Bronze age",
      gen: "0",
      recipe: [],
    },
  ];

  return (
    <Box>
      <Heading mb={10}>Marketplace</Heading>
      <Flex align="center" justify="center">
        <Input size="md" mx={2} />
        <Icon as={FaSearch} />
      </Flex>

      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Box mt={isNotSmallerScreen ? 5 : 2} mr={isNotSmallerScreen ? 5 : 0}>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            py={3}
            px={3}
          >
            <VStack>
              <Text>Filters</Text>
              <Text>Generation</Text>
            </VStack>
          </Box>
        </Box>
        <Box>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
            mt={10}
          >
            {cards.map(card => (
              <MarketCard card={card} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Marketplace;
