import { Box, Image, Button } from "@chakra-ui/react";
import { Async } from "react-async";
import { craftToken } from "web3Integration";

const CraftCard = ({ card }) => {
  const targetData = () =>
    fetch(
      `https://raw.githubusercontent.com/Project-Alchemists/Alchemy-Contracts/main/json-data/${card}.json`
    ).then(response => response.json());
  console.log(targetData);

  const imageUrl = `https://ipfs.infura.io/ipfs/QmbBaacQJBy18r13qU3V4yweJ9qTGpMPWrW9BxYeLQWYbd/${card}.png`;

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
      <Image src={imageUrl} />
      <Box py="4">
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
                return `Recipe: ${data.recipe
                  .map(id => rawMatArray[id])
                  .join(", ")}`;
              }
            }}
          </Async>
        </Box>
        <Button onClick={() => craftToken(card)}>Craft</Button>
      </Box>
    </Box>
  );
};

export default CraftCard;
