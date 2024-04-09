import { Box, Container, Flex, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import icon1 from "../../../assets/Industry/technology/icon.svg";

const TechnologySection = () => {
    return (
        <Box
            background={"linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0) 39.99%)"}
          //  paddingTop={["60px", "60px", "60px", "80px", "80px", "80px"]}
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
        >
            <Container
                maxW={["90%", "90%", "90%", "90%", "83%", "83%"]}
                paddingTop={["60px", "60px", "60px", "80px", "80px", "80px"]}
            >
                <Box>
                    <Box
                        marginBottom={["20px", "20px", "20px", "35px", "40px", "45px"]}
                    >
                        <Text
                            fontSize={["32px", "32px", "40px", "50px", "58px", "58px"]}
                            fontFamily={"var(--garnett-regular)"}
                            fontWeight={400}
                            lineHeight={"normal"}
                            width={["100%", "100%", "100%", "70%", "70%", "70%"]}
                        >
                            Advanced technologies we employ in our E-Commerce
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
                                width={["100%", "100%", "100%", "20%", "10%", "10%"]}
                                marginBottom={["20px", "20px", "20px", 0, 0, 0]}
                            >
                                <Text
                                    fontSize={["25px", "25px", "30px", "36px", "36px", "36px"]}
                                    fontFamily={"var(--garnett-regulat)"}
                                    fontWeight={"400"}
                                    marginRight={["30px", "30px", "30px", "60px", "30px", "30px"]}
                                    visibility={["hidden"]}
                                >
                                    What if?
                                </Text>
                            </Box>
                            <Box
                                width={["100%", "100%", "100%", "90%", "90%", "90%"]}
                            >
                                <Box>
                                    <Flex
                                        justifyContent={"space-between"}
                                        gap={["20px", "20px", "20px", 0, 0, 0]}
                                    >
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "45%"]}
                                        >
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
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
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        marginBottom={["15px", "15px", "15px", "20px", "20px", "25px"]}
                                                    >
                                                        AI/ML
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "20px", "20px", "20px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.
                                                    </Text>
                                                </Box>
                                            </Box>

                                        </Box>
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "45%"]}
                                        >
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
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
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        marginBottom={["15px", "15px", "15px", "20px", "20px", "25px"]}
                                                    >
                                                        Metaverse
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "20px", "20px", "20px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Box>
                        <Box
                            display={["block", "block", "block", "flex", "flex", "flex"]}
                            justifyContent={"space-between"}
                            gap={["0"]}
                        >
                            <Box
                                width={["100%", "100%", "100%", "20%", "10%", "10%"]}
                                marginBottom={["20px", "20px", "20px", 0, 0, 0]}
                            >
                                <Text
                                    fontSize={["25px", "25px", "30px", "36px", "36px", "36px"]}
                                    fontFamily={"var(--garnett-regulat)"}
                                    fontWeight={"400"}
                                    marginRight={["30px", "30px", "30px", "60px", "30px", "30px"]}
                                    visibility={["hidden"]}
                                >
                                    What if?
                                </Text>
                            </Box>
                            <Box
                                width={["100%", "100%", "100%", "90%", "90%", "90%"]}
                            >
                                <Box>
                                    <Flex
                                        justifyContent={"space-between"}
                                        gap={["20px", "20px", "20px", 0, 0, 0]}
                                    >
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "45%"]}
                                        >
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
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
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        marginBottom={["15px", "15px", "15px", "20px", "20px", "25px"]}
                                                    >
                                                        Data Analytics
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "20px", "20px", "20px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.
                                                    </Text>
                                                </Box>
                                            </Box>

                                        </Box>
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "45%"]}
                                        >
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
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
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        marginBottom={["15px", "15px", "15px", "20px", "20px", "25px"]}
                                                    >
                                                        Cloud Computing
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "20px", "20px", "20px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Box>
                        <Box
                            display={["block", "block", "block", "flex", "flex", "flex"]}
                            justifyContent={"space-between"}
                            gap={["0"]}
                        >
                            <Box
                                width={["100%", "100%", "100%", "20%", "10%", "10%"]}
                                marginBottom={["20px", "20px", "20px", 0, 0, 0]}
                            >
                                <Text
                                    fontSize={["25px", "25px", "30px", "36px", "36px", "36px"]}
                                    fontFamily={"var(--garnett-regulat)"}
                                    fontWeight={"400"}
                                    marginRight={["30px", "30px", "30px", "60px", "30px", "30px"]}
                                    visibility={["hidden"]}
                                >
                                    What if?
                                </Text>
                            </Box>
                            <Box
                                width={["100%", "100%", "100%", "90%", "90%", "90%"]}
                            >
                                <Box>
                                    <Flex
                                        justifyContent={"space-between"}
                                        gap={["20px", "20px", "20px", 0, 0, 0]}
                                    >
                                        <Box
                                            w={["100%", "100%", "100%", "45%", "45%", "45%"]}
                                        >
                                            <Box
                                              //  paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
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
                                                >
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "25px", "30px", "32px"]}
                                                        fontFamily="var(--garnett-regular)"
                                                        width={["100%", "100%", "100%", "85%", "85%", "75%"]}
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        marginBottom={["15px", "15px", "15px", "20px", "20px", "25px"]}
                                                    >
                                                        Blockchain
                                                    </Text>
                                                    <Text
                                                        lineHeight={["normal"]}
                                                        fontSize={["16px", "16px", "20px", "20px", "20px", "20px"]}
                                                        fontFamily="var(--founders-grotesk)"
                                                        fontWeight="400"
                                                        color={"#333333"}
                                                        minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                    >
                                                        When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.
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

export default TechnologySection;
