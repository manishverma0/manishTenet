import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "./DetailPage/HeroSection";
import SolutionParagraph from "./DetailPage/SolutionParagraph";
import LogoMarquee from "../Home/LogoMarquee";
import StrategiesSection from "./DetailPage/StrategiesSection";
import IndustrySolution from "./DetailPage/IndustrySolution";
import ClientAboutUs from "../Home/ClientAboutUs";
import RelatedCaseStudies from "./DetailPage/RelatedCaseStudies";
import WorkTogether from "./DetailPage/WorkTogether";

const Industry = () => {
    return (
        <>
            <Box>
                <HeroSection />
            </Box>

            <Box>
                <SolutionParagraph />
            </Box>

            <Box>
                <LogoMarquee />
            </Box>

            <Box>
                <StrategiesSection />
            </Box>

            <Box>
                <IndustrySolution />
            </Box>

            <Box>
                <ClientAboutUs />
            </Box>

            <Box>
                <RelatedCaseStudies />
            </Box>

            <Box>
                <WorkTogether />
            </Box>

        </>
    );
};

export default Industry;