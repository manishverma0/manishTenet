import React from 'react';
import { Box, Container, Flex, Text, Button } from '@chakra-ui/react';

const checkoutSection = () => {
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
                    marginTop={["20px", "25px", "38px", "45px", "53px", "60px"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    gap={["15px", "15px", "15px", "20px", "20px", "20px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                    justifyContent={["space-between"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '30px', '30px', '30px', '36px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '50%', '50%', '50%', '40%']} >
                        Checkout our Service offering to get started?
                        <span style={{ color: "#FFFFFF", background: "#E0005E", padding: "17px", fontFamily: "var(--foundersGrotesk-regular)", fontSize: "20px", marginTop: "15px", display: "inline-block" }}>Learn More</span>
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
                <Flex
                    width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    marginTop={["30px", "45px", "68px", "95px", "123px", "140px"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    gap={["15px", "15px", "15px", "20px", "20px", "20px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                    justifyContent={["space-between"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '30px', '40px', '50px', '58px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '50%', '50%', '60%', '70%']} >
                        Results delivered, Impact created, life transformed.
                        <span style={{ color: "#0057FF", fontFamily: "var(--garnett-regular)", fontSize: "32px", marginTop: "15px", display: "inline-block" }}>It’s a mix of these things:</span>
                    </Text>
                </Flex>
                <Flex
                    width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    paddingTop={["20px", "30px", "40px", "50px", "55px", "60px"]}
                    gap={["25px", "35px", "45px", "60px", "70px", "78px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '20px', '20px', '20px', '20px']}
                        fontFamily='var(--foundersGrotesk-medium)'
                        color={["#860038"]}
                        fontWeight={["500"]}
                        lineHeight={"normal"}
                        visibility={["hidden"]}
                        width={['100%', '100%', '25%', '25%', '25%', '25%']} >
                        OUTCOMES
                    </Text>
                    <Flex
                        width={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        maxW={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        direction={['column', 'column', 'row', 'row', 'row', 'row']}
                        gap={["15px", "15px", "15px", "20px", "30px", "35px"]}
                        alignItems={["flex-start"]}
                        margin={["0 auto"]}
                        borderBottom={'1px solid #B5B5B5'}
                    ><Text
                        as="h1"
                        fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                    >01
                        </Text>
                        <Flex
                            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            direction={['column', 'column', 'column', 'column', 'column', 'column']}
                            gap={["15px", "15px", "15px", "10px", "10px", "10px"]}
                            alignItems={["flex-start"]}
                            margin={["0 auto"]}
                        >
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                                fontFamily='var(--garnett-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                            >
                                After more than a decade in business
                            </Text>
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '20px']}
                                fontFamily='var(--foundersGrotesk-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                                paddingBottom={["20px", "20px", "25px", "30px", "55px", "60px"]}
                            >
                                While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex
                        width={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        maxW={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        direction={['column', 'column', 'row', 'row', 'row', 'row']}
                        gap={["15px", "15px", "15px", "20px", "30px", "35px"]}
                        alignItems={["flex-start"]}
                        margin={["0 auto"]}
                        borderBottom={'1px solid #B5B5B5'}
                    ><Text
                        as="h1"
                        fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                    >02
                        </Text>
                        <Flex
                            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            direction={['column', 'column', 'column', 'column', 'column', 'column']}
                            gap={["15px", "15px", "15px", "10px", "10px", "10px"]}
                            alignItems={["flex-start"]}
                            margin={["0 auto"]}
                        >
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                                fontFamily='var(--garnett-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                            >
                                After more than a decade in business
                            </Text>
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '20px']}
                                fontFamily='var(--foundersGrotesk-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                                paddingBottom={["20px", "20px", "25px", "30px", "55px", "60px"]}
                            >
                                While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises
                            </Text>
                        </Flex>

                    </Flex>

                </Flex>
                <Flex
                    width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    paddingTop={["24px", "24px", "28px", "32px", "32px", "32px"]}
                    gap={["25px", "35px", "45px", "60px", "70px", "78px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                    paddingBottom={["20px", "20px", "40px", "60px", "100px", "150px"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '20px', '20px', '20px', '20px']}
                        fontFamily='var(--foundersGrotesk-medium)'
                        color={["#860038"]}
                        fontWeight={["500"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '25%', '25%', '25%', '25%']} >
                    </Text>
                    <Flex
                        width={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        maxW={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        direction={['column', 'column', 'row', 'row', 'row', 'row']}
                        gap={["15px", "15px", "15px", "20px", "30px", "35px"]}
                        alignItems={["flex-start"]}
                        margin={["0 auto"]}
                        borderBottom={'1px solid #B5B5B5'}
                    ><Text
                        as="h1"
                        fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                    >03
                        </Text>
                        <Flex
                            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            direction={['column', 'column', 'column', 'column', 'column', 'column']}
                            gap={["15px", "15px", "15px", "10px", "10px", "10px"]}
                            alignItems={["flex-start"]}
                            margin={["0 auto"]}
                        >
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                                fontFamily='var(--garnett-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                            >
                                After more than a decade in business
                            </Text>
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '20px']}
                                fontFamily='var(--foundersGrotesk-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                                paddingBottom={["20px", "20px", "25px", "30px", "55px", "60px"]}
                            >
                                While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex
                        width={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        maxW={["100%", "100%", "100%", "70%", "50%", "50%"]}
                        direction={['column', 'column', 'row', 'row', 'row', 'row']}
                        gap={["15px", "15px", "15px", "20px", "30px", "35px"]}
                        alignItems={["flex-start"]}
                        margin={["0 auto"]}
                        borderBottom={'1px solid #B5B5B5'}
                    ><Text
                        as="h1"
                        fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                    >04
                        </Text>
                        <Flex
                            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            direction={['column', 'column', 'column', 'column', 'column', 'column']}
                            gap={["15px", "15px", "15px", "10px", "10px", "10px"]}
                            alignItems={["flex-start"]}
                            margin={["0 auto"]}
                        >
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '28px']}
                                fontFamily='var(--garnett-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                            >
                                After more than a decade in business
                            </Text>
                            <Text
                                as="h1"
                                fontSize={['14px', '16px', '16px', '18px', '20px', '20px']}
                                fontFamily='var(--foundersGrotesk-regular)'
                                color={["#333333"]}
                                fontWeight={["400"]}
                                lineHeight={"normal"}
                                paddingBottom={["20px", "20px", "25px", "30px", "55px", "60px"]}
                            >
                                While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises
                            </Text>
                        </Flex>

                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};

export default checkoutSection;