"use client";
import { Box, Container, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { BiRocket } from 'react-icons/bi';
import {RiMoonFoggyLine} from 'react-icons/ri';
import {FaPaintBrush} from 'react-icons/fa';
import {RxCode} from 'react-icons/rx';
export default function Feature() {
  return (
    <Box py={"50"}>
      {/*Top headers*/}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"20"} py="3">
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Box>
      <Container maxW={"1200"} mt="10">
        {/* 6 features*/}

      <Box>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>  
        {/*feature 1*/}
        <Box>
          <HStack>
            <Box color={"blue.500"}>
            <StarIcon w="10" h="10" />
            </Box>
            <Box>
              <Heading fontSize={"18"}>220+ Components</Heading>
              <Text>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
          {/*feature 1 end*/}
        </Box>

          {/*feature 2*/}
          <Box>
            <HStack>
             <Box color={"blue.500"}>
              <BiRocket size={50}/>
              </Box>
              <Box>
                <Heading fontSize={"18"}>Themable</Heading>
                <Text>
                Your style. Your brand. Customize the components as you need them.It&apos;s that simple.
                </Text>
              </Box>
            </HStack>
            {/*feature 2 end*/} 
            </Box>
        {/*feature 3*/}
        <Box>
          <HStack>
            <Box color={"blue.500"}>
            <RiMoonFoggyLine size={50} />
            </Box>
            <Box>
              <Heading fontSize={"18"}>Light & Dark</Heading>
              <Text>
              All our components come with a light and dark color mode by default.
              </Text>
            </Box>
          </HStack>
          {/*feature 3 end*/}
        </Box>

          {/*feature 4*/}
          <Box>
            <HStack>
              <Box color={"blue.500"}>
              <FaPaintBrush size={50} />
              </Box>
              <Box>
                <Heading fontSize={"18"}>Themable</Heading>
                <Text>
                Your style. Your brand. Customize the components as you need them.It&apos;s that simple.
                </Text>
              </Box>
            </HStack>
            {/*feature 4 end*/}

          </Box>
          
           {/*feature 5*/}
        <Box>
          <HStack>
            <Box color={"blue.500"}>
            <RxCode size={50} />
            </Box>
            <Box>
              <Heading fontSize={"18"}>Developer Friendly</Heading>
              <Text>
              Components are semantically divided into several files for better developer experience.
              </Text>
            </Box>
          </HStack>
          {/*feature 5 end*/}
        </Box>

          {/*feature 6*/}
          <Box>
            <HStack>
              <Box color={"blue.500"}>
              <StarIcon w="10" h="10" />
              </Box>
              <Box>
                <Heading fontSize={"18"}>Accessible</Heading>
                <Text>
                Accessibility first. That why we pay attention to accessibility right from the start.
                </Text>
              </Box>
            </HStack>
            {/*feature 6 end*/}
         </Box>
          </SimpleGrid>

          {/* features 6 end*/}
        </Box>
      </Container>
    </Box>
  );
}
