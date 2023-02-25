"use client";

import { Box } from "@chakra-ui/react";
import CTA from "./components/cta/CTA";
import Faq from "./components/faq/Faq";
import Feature from "./components/features/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import HighLights from "./components/highlights/HighLights";
import NewsLetter from "./components/newsletter/NewsLetter";
import TopContainer from "./components/topcontainer/TopContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
        <TopContainer />
        <Feature />
        <CTA />
        <HighLights />
        <NewsLetter />
        <Faq />
        <Footer />
      </Box>
    </>
  );
}
