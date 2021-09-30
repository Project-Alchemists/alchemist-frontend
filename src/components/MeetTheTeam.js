import { Heading, Avatar, Box, Center, Text, Link } from "@chakra-ui/react";

const MeetTheTeam = ({ githubpfp, name, title, linkedinlink }) => {
  // const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

  return (
    <Center py={6} px={6}>
      <Link
        href={linkedinlink}
        style={{ textDecoration: "none" }}
        _hover={{
          color: "teal.300",
        }}
      >
        <Box
          maxW={"320px"}
          w={"full"}
          boxShadow={"2xl"}
          borderRadius="15px"
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={githubpfp}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"} marginBottom="20px">
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            {title}
          </Text>
        </Box>
      </Link>
    </Center>
  );
};

export default MeetTheTeam;
