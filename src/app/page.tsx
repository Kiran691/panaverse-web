"use client"

import { Box } from "@chakra-ui/react";
import CTA from "./components/cta/CTA";
import Feature from "./components/features/Feature";
import Header from "./components/header";
import HighLights from "./components/highlights/HighLights";
import TopContainer from "./components/topcontainer/TopContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
      <TopContainer />
      <Feature/>
      <CTA/>
      <HighLights />
      
      </Box>
    </>
  );
}
