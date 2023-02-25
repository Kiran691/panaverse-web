"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCommentDollar } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { FaHandPeace } from "react-icons/fa";

export default function HighLights() {
  return (
    <Box py="50" as="section">
      {/*Top headers*/}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}>Why Chakra UI Pro?</Heading>
        <Text fontSize={"20"} py="3">
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Box>
      <Container maxW={1200}>
        <SimpleGrid columns={{base: 1, md:2, lg: 4}} gap={5}>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <IoIosSpeedometer size={80} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Speed up your workflow
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <FaCommentDollar size={80} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Save good money
              </Heading>
            </CardHeader>

            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <RiSettings5Fill size={80} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Easily customizable
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <FaHandPeace size={80} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Support Chakra UI
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
