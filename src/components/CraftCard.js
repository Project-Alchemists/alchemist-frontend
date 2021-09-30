import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Async } from "react-async";
import { useSelector } from "react-redux";
import { craftToken } from "web3Integration";

const CraftCard = ({ card }) => {
  // const fetchData = async () => {
  //   return await
  // };
  const targetData = () =>
    fetch(
      `https://raw.githubusercontent.com/Project-Alchemists/Alchemy-Contracts/main/json-data/${card}.json`
    ).then(response => response.json());
  console.log(targetData);
  const property = {
    imageUrl: `https://gateway.pinata.cloud/ipfs/QmbBaacQJBy18r13qU3V4yweJ9qTGpMPWrW9BxYeLQWYbd/${card}.png`,
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  const [isLoaded, setIsLoaded] = useState(
    property.cardData == null ? false : true
  );
  const rawMatArray = [
    "Iron",
    "Gold",
    "Silicon",
    "Glass",
    "Plastic",
    "Copper",
    "Motherboard",
    "Monitor",
    "Case",
  ];

  // TODO: Recipes and unavailable card

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} />

      <Box p="6">
        {/* <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box> */}
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Async promiseFn={targetData}>
            {({ data, err, isLoading }) => {
              if (isLoading) return "Loading...";
              if (err) return `Something went wrong: ${err.message}`;
              if (data) {
                return `Recipe: ${data.recipe.map(id => rawMatArray[id])}`;
              }
            }}
          </Async>
        </Box>

        <Button onClick={craftToken}>Craft</Button>

        {/* <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box> */}

        {/* <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default CraftCard;
