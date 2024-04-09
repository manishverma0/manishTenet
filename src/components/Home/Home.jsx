import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import LogoMarquee from "./LogoMarquee";
import Counter from "./Counter";
import WhyChooseUs from "./WhyChooseUs";
import ClientsLogo from "./ClientsLogo";
import LetsWorkTogether from "./LetsWorkTogether";
import OurWork from "./OurWork";
import BrandGrowth from "./BrandGrowth";
import BusinessTabSection from "./BusinessTabSection";
import ClientAboutUs from "./ClientAboutUs";
import ContactForm from "./ContactForm";
import Stories from "./Stories";
import WeWorkWith from "./WeWorkWith";
import BeyondLimitations from "./BeyondLimitation";
import ClientSay from "./ClientSay";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <>
      <Box>
          <HeroSection />
      </Box>

      <Box>
        <LogoMarquee/>
      </Box>

      <Box>
        <Counter/>
      </Box>

      <Box>
        <OurServices />
      </Box>

      <Box>
        <BeyondLimitations />
      </Box>

      <Box>
        <OurWork />
      </Box>

      <Box>
        <ClientSay />
      </Box>

      <Box>
        <BrandGrowth />
      </Box>

      <Box>
        <WeWorkWith />
      </Box>

      <Box>
        <BusinessTabSection />
      </Box>

      <Box>
        <WhyChooseUs />
      </Box>

      <Box>
        <ClientsLogo />
      </Box>

      <Box>
        <ClientAboutUs />
      </Box>

      <Box>
        <Stories />
      </Box>

      <Box>
        <LetsWorkTogether />
      </Box>

      <Box>
        <ContactForm />
      </Box>

    </>
  );
};

export default Home;