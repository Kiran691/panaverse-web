"use client";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Link from "next/link";
export default function TopContainer() {
  return (
    <Box
    as="section"
      backgroundImage={"/images/background.png"}
      backgroundSize="contain"
      py="20"
      mt="5"
    >
      <HStack>
        {/* left */}
        <Box w="50%" color={"white"} pl="44">
          <Heading fontSize={"60"}>Build your next idea even faster</Heading>
          <Text lineHeight={"8"}>
            One year Panaverse DAO Earn as you Learn Program.Consolidating Web
            3.0, Metaverse, Artificial intelligence (AI), Cloud, Edge and
            Ambient Computing/IoT Technoligies
          </Text>
          <Box mt={"5"}>
            <Button colorScheme={"blue"} mr={"4"}>
              Buy Now
            </Button>
            <Button colorScheme={"blue"} variant="outline">
              View Components
            </Button>
          </Box>
          <Flex alignItems={"center"}>
            <AvatarGroup size="md" max={2} mt="5">
              <Avatar
                name="Zia Khan"
                src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
              />
              <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
             
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>

            <Text mt="5" ml="3">
              Created by{" "}
              <Link
                color="blue.500"
                target={"_blank"}
                href={"https://github.com/Kiran691/panaverse-web"}
              >
                Kiran Imran{" "}
              </Link>
            </Text>
          </Flex>
        </Box>
        <Box w="50%">
          <Image src="images/banner5.png" alt="pic1"/>
        </Box>
      </HStack>
    </Box>
  );
}
