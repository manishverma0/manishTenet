import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';

import image from "../../../assets/CaseStudy/CaseStudyDetail/heroSection.svg";

const approachContent = () => {
    const backgroundText = [
        {
            title: 'After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.',
            description: "After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.",
            description2: "While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises — it was also in a state of rapid innovation. Like other established brands at a turning point in their growth, Zuora’s story had become fragmented. Revisiting the brand’s verbal identity was critical to support its bold new look with messaging to match.<br><br>The team’s vision: to get people excited about the brand again, and tell their story with clarity, consistency, and conviction.<br><br>The team’s vision: to get people excited about the brand again, and tell their story with clarity, consistency, and conviction"
        }
    ];
    return (
        <Container
            //  paddingTop={["60px", "60px", "60px", "80px", "100px", "120px"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
            marginBottom={["50px", "50px", 0, 0, 0, 0]}
            padding={["0"]}
        >
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'row', 'row', 'row', 'row']}
                gap={["55px", "55px", "55px", "80px", "140px", "160px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
            // paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
            // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
            >
                <Text
                    as="h1"
                    fontSize={['18px', '20px', '20px', '20px', '20px', '20px']}
                    fontFamily='var(--foundersGrotesk-medium)'
                    color={["#860038"]}
                    fontWeight={["500"]}
                    lineHeight={"normal"} >
                    APPROACH
                </Text>
                <Text
                    as="h1"
                    fontSize={['18px', '20px', '24px', '24px', '24px', '24px']}
                    fontFamily='var(--garnett-regular)'
                    color={["#333333"]}
                    fontWeight={["400"]}
                    lineHeight={"normal"}
                >
                    {backgroundText[0].title}
                </Text>
            </Flex>

            <Image
                paddingTop={["30px", "40px", "50px", "50px", "50px", "50px"]}
                paddingBottom={["30px", "40px", "50px", "50px", "50px", "50px"]}
                src={image}
                width={"100%"}
            />
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'row', 'row', 'row', 'row']}
                gap={["55px", "55px", "55px", "80px", "140px", "160px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
            // paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
            // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
            >
                <Text
                    visibility={["hidden"]}
                    as="h1"
                    fontSize={['18px', '20px', '20px', '20px', '20px', '20px']}
                    fontFamily='var(--foundersGrotesk-medium)'
                    color={["#860038"]}
                    fontWeight={["500"]}
                    lineHeight={"normal"} >
                    APPROACH
                </Text>
                <Text
                    //  width={['100%', '100%', '100%', '90%', '80%', '75%']}
                    fontSize={['14px', '14px', '16px', '18px', '18px', '18px']}
                    as='p'
                    fontFamily='var(--garnett-regular)'
                    fontWeight={"400"}
                    lineHeight={"normal"}
                    dangerouslySetInnerHTML={{ __html: backgroundText[0].description2.replace(/<br\s*\/?>/gi, '<br>') }}
                >
                </Text>
            </Flex>

        </Container>
    );
};
export default approachContent;