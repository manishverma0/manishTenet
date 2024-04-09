import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "./DetailPage/HeroSection";
import OurRole from "./DetailPage/OurRole";
import WhatToExpect from "./DetailPage/ExpectSection";
import OurProcess from "./DetailPage/OurProcess";
import OutcomeSection from "./DetailPage/OutcomeSection";
import CeoSection from "./DetailPage/CeoSection";
import CheckoutSection from "./DetailPage/CheckoutSection";
import WorkTogether from "./DetailPage/WorkTogether";

const Strategy = () => {
    return (
        <>
          <Box>
              <HeroSection />
          </Box>

          <Box>
            <OurRole />
          </Box>

          <Box>
            <WhatToExpect />
          </Box>

          <Box>
            <OurProcess />
          </Box>

          <Box>
            <OutcomeSection />
          </Box>

          <Box>
            <CeoSection />
          </Box>

          <Box>
            <CheckoutSection />
          </Box>

          <Box>
            <WorkTogether />
          </Box>

          </>
  );
};

export default Strategy;