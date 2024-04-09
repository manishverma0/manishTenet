import { Box, Container, Flex, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import icon1 from "../../../assets/Solution/icon/enterprise.svg";
import icon2 from "../../../assets/Solution/icon/startup.svg";
import icon3 from "../../../assets/Solution/icon/business.svg";

const PoweringSection = () => {
    return (
        <Box
            paddingTop={["60px", "60px", "60px", "80px", "80px", "80px"]}
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
        >
            <Container
                maxW={["90%", "90%", "90%", "90%", "83%", "83%"]}
            >
                <Box>
                    <Box
                        marginBottom={["20px", "20px", "20px", "35px", "40px", "65px"]}
                        display={["flex"]}
                        flexDirection={["column"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                    >
                        <Text
                            fontSize={["32px", "32px", "40px", "40px", "48px", "48px"]}
                            fontFamily={"var(--garnett-regular)"}
                            fontWeight={400}
                            lineHeight={"normal"}
                            width={["100%", "100%", "100%", "70%", "70%", "70%"]}
                            paddingBottom={["10px", "10px", "10px", "15px", "15px", "15px"]}
                            textAlign={["center"]}
                        >
                            Grow faster with our strategies tailored for you.
                        </Text>
                        <Text
                            lineHeight={["normal"]}
                            width={["100%", "100%", "80%", "80%", "80%", "70%"]}
                            fontSize={["16px", "16px", "20px", "20px", "20px", "20px"]}
                            fontFamily="var(--founders-grotesk)"
                            fontWeight="400"
                            color={"#333333"}
                            textAlign={["center"]}
                        >
                            Explore our solutions for Startups, SMBs and Enterprise
                        </Text>
                    </Box>
                    <Box
                        maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                        ml={"auto"}
                    >
                        <Box
                            display={["block", "block", "block", "flex", "flex", "flex"]}
                            justifyContent={"space-between"}
                            gap={["0"]}
                        >
                            <Box
                                width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                            >
                                <Box>
                                    <Flex
                                        // justifyContent={"space-between"}
                                        gap={["20px", "20px", "20px", "15px", "15px", "15px"]}
                                    >
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "35%"]}
                                            background={["#F5F5F5"]}
                                        >
                                            <Box
                                                //   paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
                                                display={["flex"]}
                                                flexDirection={["row", "row", "row", "row", "row", "row"]}
                                                gap={["20px", "20px", "20px", "20px", "25px", "30px"]}
                                                alignItems={["flex-start"]}
                                            >

                                                <Image src={icon1}
                                                    paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]}
                                                />
                                                <Box
                                                    display={["flex"]}
                                                    flexDirection={["row", "row", "row", "column", "column", "column"]}
                                                    gap={["20px"]}
                                                    paddingRight={["5%"]}
                                                    paddingTop={["15px"]}
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                    >
                                                        Enterprises
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#0057FF"}
                                                        minHeight={["45px", "45px", "45px", "45px", "50px", "55px"]}
                                                    >
                                                        Learn more
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "35%"]}
                                            background={["#F5F5F5"]}
                                        >
                                            <Box
                                                // paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
                                                display={["flex"]}
                                                flexDirection={["row", "row", "row", "row", "row", "row"]}
                                                gap={["20px", "20px", "20px", "20px", "25px", "30px"]}
                                                alignItems={["flex-start"]}
                                            >

                                                <Image src={icon2}
                                                    paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]}
                                                />
                                                <Box
                                                    display={["flex"]}
                                                    flexDirection={["row", "row", "row", "column", "column", "column"]}
                                                    gap={["20px"]}
                                                    paddingRight={["5%"]}
                                                    paddingTop={["15px"]}
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                    >
                                                        Startups
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#0057FF"}
                                                        minHeight={["45px", "45px", "45px", "45px", "50px", "55px"]}
                                                    >
                                                        Learn more
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "35%"]}
                                            background={["#F5F5F5"]}
                                        >
                                            <Box
                                                //  paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
                                                display={["flex"]}
                                                flexDirection={["row", "row", "row", "row", "row", "row"]}
                                                gap={["20px", "20px", "20px", "20px", "25px", "30px"]}
                                                alignItems={["flex-start"]}
                                            >

                                                <Image src={icon3}
                                                    paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]}
                                                />
                                                <Box
                                                    display={["flex"]}
                                                    flexDirection={["row", "row", "row", "column", "column", "column"]}
                                                    gap={["20px"]}
                                                    paddingRight={["5%"]}
                                                    paddingTop={["15px"]}
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "95%", "95%", "95%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                    >
                                                        Small, Medium Businesses
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#0057FF"}
                                                        minHeight={["45px", "45px", "45px", "45px", "50px", "55px"]}
                                                    >
                                                        Learn more
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default PoweringSection;
