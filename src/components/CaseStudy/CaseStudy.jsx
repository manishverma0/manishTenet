import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "./DetailPage/HeroSection";
import BackgroundContent from "./DetailPage/backgroundContent";
import ChallengeContent from "./DetailPage/challengeContent";
import ApproachContent from "./DetailPage/approachContent";
import SolutionContent from "./DetailPage/solutionContent";
import TechnologyContent from "./DetailPage/technologyContent";
import Slider from "./DetailPage/slider";
import ConclusionContent from "./DetailPage/conclusionContent";
import Counter from "./DetailPage/counter";
import RelatedCaseStudy from "./DetailPage/relatedCaseStudies";
import WorkTogerhter from "./DetailPage/workTogether";

const CaseStudy = () => {
    return (
        <>
          <Box>
              <HeroSection />
          </Box>

          <Box>
            <BackgroundContent />
          </Box>

          <Box>
            <ChallengeContent />
          </Box>

          <Box>
            <ApproachContent />
          </Box>

          <Box>
            <SolutionContent />
          </Box>

          <Box>
            <TechnologyContent />
          </Box>

          <Box>
            <Slider />
          </Box>

          <Box>
            <ConclusionContent />
          </Box>

          <Box>
            <Counter />
          </Box>

          <Box>
            <RelatedCaseStudy />
          </Box>

          <Box>
            <WorkTogerhter />
          </Box>

          </>
  );
};

export default CaseStudy;