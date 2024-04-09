import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import image from "../../../assets/Strategy/ourProcess.svg";

const ourProcess = () => {
    return (
        <Box>
            <Container
                width={["100%", "100%", "100%", "94%", "90%", "83%"]}
                maxW={["100%", "100%", "100%", "94%", "90%", "83%"]}
                padding={"0"}
                marginTop={["35px", "35px", "48px", "85px", "93px", "113px"]}
                // paddingTop={["35px", "35px", "48px", "55px", "63px", "63px"]}
                marginBottom={["50px", "50px", 0, 0, 0, 0]}
            // paddingBottom={["35px", "35px", "48px", "55px", "63px", "69px"]}
            >
                <Flex
                    width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    gap={["25px", "35px", "45px", "60px", "70px", "78px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                >
                    <Text
                        as="h1"
                        fontSize={['25px', '32px', '42px', '50px', '60px', '64px']}
                        fontFamily='var(--foundersGrotesk-regular)'
                        color={["#000000"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '25%', '25%', '25%', '25%']} >
                        Our Process
                    </Text>
                </Flex>
                <Flex
                    width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    marginTop={["20px", "25px", "38px", "45px", "53px", "60px"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    gap={["15px", "15px", "15px", "20px", "20px", "20px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '30px', '30px', '30px', '36px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '50%', '50%', '50%', '50%']} >
                        Lorem ipsum dolor
                    </Text>
                    <Text
                        as="h1"
                        fontSize={['14px', '16px', '16px', '18px', '18px', '20px']}
                        fontFamily='var(--foundersGrotesk-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '50%', '50%', '50%', '50%']}
                    >
                        While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises — it was also in a state of rapid innovation. Like other established brands at a turning point in their growth, Zuora’s story had become fragmented. Revisiting the brand’s verbal identity was critical to support its bold new look with messaging to match.<br /><br />The team’s vision: to get people excited about the brand again, and tell their story with clarity, consistency, and conviction.
                    </Text>
                </Flex>
                <Box
                    marginTop={["50px", "65px", "78px", "95px", "123px", "150px"]}
                >
                    <img src={image} width={["100%"]}/>
                </Box>
            </Container>
        </Box>
    );
};

export default ourProcess;