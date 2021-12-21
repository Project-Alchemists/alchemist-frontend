import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import CraftCard from "components/CraftCard";
import React from "react";
import { FaSearch } from "react-icons/fa";

const CraftPage = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

  return (
    <Box mb={16}>
      <Heading mb={10}>Craft cards</Heading>
      <Flex align="center" justify="center">
        <Input size="md" mx={2} />
        <Icon as={FaSearch} />
      </Flex>

      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Box>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
            mt={10}
          >
            {[6, 7, 8, 9].map(card => (
              <CraftCard card={card} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default CraftPage;
