"use client";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../public/images/Logo png.webp";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";


export default function Header() {
  return (
    <Box pt="5" as="header">
      {/*left area*/}
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box>
          <HStack>
            <Image src="/images/Logo png.webp" alt="logo" />
            <List>
              <HStack align={"center"} spacing={10} fontWeight="bold" ml="40px">
                <ListItem> Home</ListItem>
                <ListItem> About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/*right area*/}
        <Box>
          <Box pl="15" as="span">
            <SearchIcon w="25" h="25" />
          </Box>
          <Box px="15" as="span">
          
            <MoonIcon w="25" h="25" />
          </Box>
          <Link href="https://www.piaic.org/" target={"_blank"}>
            <Button variant={"outline"}>Go to Piaic</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
