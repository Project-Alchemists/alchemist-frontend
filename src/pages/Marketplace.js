import { Box, Heading, Flex, Icon, Input, SimpleGrid } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Card from "components/Card";

const Marketplace = () => {
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

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        mt={10}
      >
        {cards.map(card => (
          <Card />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Marketplace;
