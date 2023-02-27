"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function CTA() {
  return (
    <Box>
      <Container maxW={1200} bg={"blue.50"} p="10">
        <Stack direction={{base: "column", md: "row"}}>
          <Box flex={3}>
            <Heading>Try our free components</Heading>
            <Text fontSize={"20px"}>
              You don&apos;t have to buy a pig in a poke - you can experience our
              free community components before making a purchase decision.
            </Text>
          </Box>
          <Box flex={1} alignSelf="flex-start">
            <Button colorScheme={"blue"} float="right">View Components</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
