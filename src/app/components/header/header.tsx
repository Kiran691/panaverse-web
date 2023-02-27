"use client";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Hide,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../public/images/Logo png.webp";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
// import NavMenu from "./NavMenu";
// import {ColorModeSwitcher} from "./ColorModeSwitcher";
// import Burger from "./Burger";
export default function Header() {
  
    const { colorMode } = useColorMode();
    return (
    <Box as="header" top="0" zIndex={1}>
      {/*left area*/}
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
         bg={"white"}
        py="5"
      >
        <Box>
          <HStack>
            <Image src="/images/Logo png.webp" alt="logo" />
            <Hide below="md">
              <List>

              <HStack align={"center"} spacing={10} fontWeight="bold" ml="40px">
                <ListItem> Home</ListItem>
                <ListItem> About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
              <HStack spacing={10} pl="10">
                 {/* <NavMenu /> */}
              </HStack>
            </Hide>
          </HStack>
        </Box>
        {/*right area*/}
        <HStack>
          <Box pl="15">
            <SearchIcon w="25" h="25" />
          </Box>
          {/* <Box pl="15">
            <MoonIcon w="25" h="25" />
          </Box> */}
          {/* <ColorModeSwitcher/> */}
          <Show below="md">
            {/* <Burger /> */}
            {/* <GiHamburgerMenu size={25} /> */}

          </Show>
          <Link href="https://www.piaic.org/" target={"_blank"}>
            <Button variant={"outline"}>Go to Piaic</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
