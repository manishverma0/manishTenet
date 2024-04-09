import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "./DetailPage/HeroSection";
import SolutionParagraph from "./DetailPage/SolutionParagraph";
import LogoMarquee from "../Home/LogoMarquee";
import PoweringSection from "./DetailPage/PoweringSection";
import TechnologySection from "./DetailPage/TechnologySection";
import ToolsSection from "./DetailPage/ToolsSection";
import ServiceSection from "./DetailPage/ServicesSection";
import RelatedCaseStudies from "./DetailPage/RelatedCaseStudies";
import RelatedArticles from "./DetailPage/RelatedArticles";
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
                <PoweringSection />
            </Box>

            <Box>
                <TechnologySection />
            </Box>

            <Box>
                <ToolsSection />
            </Box>

            <Box>
                <ServiceSection />
            </Box>

            <Box>
                <RelatedCaseStudies />
            </Box>

            <Box>
                <RelatedArticles />
            </Box>

            <Box>
                <WorkTogether />
            </Box>

        </>
    );
};

export default Industry;