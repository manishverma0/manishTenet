import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';

import image from "../../../assets/CaseStudy/CaseStudyDetail/heroSection.svg";

const technologyContent = () => {
    const technologyText = [
        {
            title: 'After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.',
            description: "While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises — it was also in a state of rapid innovation. Like other established brands at a turning point in their growth, Zuora’s story had become fragmented. Revisiting the brand’s verbal identity was critical to support its bold new look with messaging to match.<br><br>The team’s vision: to get people excited about the brand again, and tell their story with clarity, consistency, and conviction. While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises — it was also in a state of rapid innovation. Like other established brands at a turning point in their growth, Zuora’s story had become fragmented. Revisiting the brand’s verbal identity was critical to support its bold new look with messaging to match.<br><br>The team’s vision: to get people excited about the brand again, and tell their story with clarity, consistency, and conviction.",
        }
    ];
    return (
        <Container
            paddingTop={["60px", "60px", "60px", "80px", "80px", "80px"]}
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
                alignItems={["center"]}
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
                    TECHNOLOGY USED
                </Text>
                <Flex
                    flexDirection={["row"]}
                    gap={["40px"]}>
                    <img width="80" src="https://raw.githubusercontent.com/digitallamp/svg-upload/0074818693c2005ce9c589aacffc9bc07d551839/amazon-web-services-2.svg" />
                    <img width="80" src="https://raw.githubusercontent.com/digitallamp/svg-upload/0074818693c2005ce9c589aacffc9bc07d551839/amazon-web-services-2.svg" />
                    <img width="80" src="https://raw.githubusercontent.com/digitallamp/svg-upload/0074818693c2005ce9c589aacffc9bc07d551839/amazon-web-services-2.svg" />
                    <img width="80" src="https://raw.githubusercontent.com/digitallamp/svg-upload/0074818693c2005ce9c589aacffc9bc07d551839/amazon-web-services-2.svg" />
                    <img width="80" src="https://raw.githubusercontent.com/digitallamp/svg-upload/0074818693c2005ce9c589aacffc9bc07d551839/amazon-web-services-2.svg" />
                </Flex>
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
                direction={['column', 'column', 'column', 'row', 'row', 'row']}
                gap={["30px", "30px", "30px", "30px", "30px", "30px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
                paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
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
                <Flex
                    width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                    maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                    direction={['column', 'column', 'column', 'column', 'column', 'column']}
                    gap={["30px", "30px", "30px", "30px", "30px", "30px"]}
                    alignItems={["baseline"]}
                    margin={["0 auto"]}
                // paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
                // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '24px', '24px', '24px', '24px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                    >
                        {technologyText[0].title}
                    </Text>
                    <Text
                        //  width={['100%', '100%', '100%', '90%', '80%', '75%']}
                        fontSize={['14px', '14px', '16px', '18px', '18px', '18px']}
                        as='p'
                        fontFamily='var(--garnett-regular)'
                        fontWeight={"400"}
                        lineHeight={"normal"}
                        dangerouslySetInnerHTML={{ __html: technologyText[0].description.replace(/<br\s*\/?>/gi, '<br>') }}
                    >
                    </Text>
                </Flex>
            </Flex>
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'column', 'row', 'row', 'row']}
                gap={["30px", "30px", "30px", "0px", "0px", "0px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
                paddingTop={["16px", "18px", "30px", "40px", "50px", "80px"]}
                justifyContent={["flex-start", "flex-start", "flex-start", "space-evenly", "space-evenly", "space-evenly"]}
            >
                <Image src={image} width={"calc(50% - 15px)"} />
                <Image src={image} width={"calc(50% - 15px)"} />
            </Flex>
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'column', 'row', 'row', 'row']}
                gap={["30px", "30px", "30px", "0px", "0px", "0px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
                paddingTop={["16px", "18px", "20px", "10px", "10px", "10px"]}
                justifyContent={["flex-start", "flex-start", "flex-start", "space-evenly", "space-evenly", "space-evenly"]}
            >
                <Image src={image} width={"calc(50% - 15px)"} />
                <Image src={image} width={"calc(50% - 15px)"} />
            </Flex>
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "70.9%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "70.9%"]}
                direction={['column', 'column', 'column', 'row', 'row', 'row']}
                gap={["30px", "30px", "30px", "30px", "30px", "30px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
                paddingTop={["16px", "18px", "20px", "10px", "10px", "10px"]}
            // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
            >
                <Image
                    src={image}
                    width={"100%"}
                />
            </Flex>
        </Container>
    );
};
export default technologyContent;