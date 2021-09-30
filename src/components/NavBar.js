import { useState } from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Logo } from "Logo";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import WalletBtn from "./WalletBtn";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} className="navbar">
      <Logo w="50px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <ColorModeSwitcher />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link as={RouterLink} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

// const signOut = () => {
//   localStorage.removeItem("jwtToken");
//   window.location.reload();
// };

const MenuLinks = ({ isOpen }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      ml={isNotSmallerScreen ? 20 : 0}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
      >
        <MenuItem to="/">Home</MenuItem>
        {/* <MenuItem to="/marketplace">Marketplace</MenuItem> */}
        <MenuItem to="/craft">Craft</MenuItem>
        <MenuItem to="/balance">Balance</MenuItem>
        {/* <MenuItem to="/about">About</MenuItem> */}
        <WalletBtn />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={useColorModeValue("gray.700", "gray.300")}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBar;
