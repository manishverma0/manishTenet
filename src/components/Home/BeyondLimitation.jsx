import { Box, Container, Flex, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import ChatIcon from "../../assets/Home/beyoundLimitation/chatIcon.svg";
import Crop from "../../assets/Home/beyoundLimitation/crop.svg";
import icon1 from "../../assets/Home/beyoundLimitation/1.svg";
import icon2 from "../../assets/Home/beyoundLimitation/2.svg";
import icon3 from "../../assets/Home/beyoundLimitation/3.svg";
import icon4 from "../../assets/Home/beyoundLimitation/4.svg";
import icon5 from "../../assets/Home/beyoundLimitation/5.svg";
import icon6 from "../../assets/Home/beyoundLimitation/6.svg";


const BeyondLimitations = () => {
    return (
        <Box
            background={"linear-gradient(360deg, #F5F5F5 0%, rgba(245, 245, 245, 0) 39.99%)"}
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
                        width={["100%", "100%", "80%", "80%", "80%", "70%"]}
                        marginBottom={["20px", "20px", "20px", "35px", "40px", "45px"]}
                    >
                        <Text
                            fontSize={["32px", "32px", "40px", "50px", "58px", "58px"]}
                            fontFamily={"var(--garnett-regular)"}
                            fontWeight={400}
                            lineHeight={"normal"}
                        >
                            Push beyond the limitations of your current brand.
                        </Text>
                    </Box>
                    <Box
                        maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                        ml={"auto"}
                    >
                        <Box
                            display={["block", "block", "block", "flex", "flex", "flex"]}
                            justifyContent={"space-between"}
                            gap={["197px", "197px", "197px", "197px", "197px", "197px"]}
                        >
                            <Box
                                width={["100%", "100%", "100%", "20%", "18%", "18%"]}
                                marginBottom={["20px", "20px", "20px", 0, 0, 0]}
                            >
                                <Text
                                    fontSize={["25px", "25px", "30px", "36px", "36px", "36px"]}
                                    fontFamily={"var(--garnett-regulat)"}
                                    fontWeight={"400"}
                                    marginRight={["30px", "30px", "30px", "60px", "30px", "30px"]}
                                >
                                    What if?
                                </Text>
                            </Box>
                            <Box
                                width={["100%", "100%", "100%", "80%", "80%", "80%"]}
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
                                            >
                                                <Image src={icon1}
                                                    paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]}
                                                />
                                                <Text
                                                    lineHeight={["normal"]}
                                                    fontSize={["16px", "16px", "20px", "20px", "20px", "24px"]}
                                                    fontFamily="var(--founders-grotesk)"
                                                    fontWeight="400"
                                                    color={"#333333"}
                                                    minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                >
                                                    What if your brand was your most powerful revenue driving tool?
                                                </Text>
                                            </Box>
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
                                            >
                                                <Image src={icon2} paddingBottom={["5px", "5px", "5px", "10px", "15px", "20px"]} />
                                                <Text
                                                    lineHeight={["normal"]}
                                                    fontSize={["16px", "16px", "20px", "20px", "20px", "24px"]}
                                                    fontFamily="var(--founders-grotesk)"
                                                    fontWeight="400"
                                                    color={"#333333"}
                                                    minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                >
                                                    What if you could unlock the full potential of your business through strategic digital solutions?
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Image src={icon3} paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]} />
                                                <Text
                                                    lineHeight={["normal"]}
                                                    fontSize={["16px", "16px", "20px", "20px", "20px", "24px"]}
                                                    fontFamily="var(--founders-grotesk)"
                                                    fontWeight="400"
                                                    color={"#333333"}
                                                    minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                >
                                                    What if you could harness the power of data to drive decision-making, leaving behind the uncertainty of guesswork?
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box w={["100%", "100%", "100%", "45%", "45%", "45%"]}>
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
                                            >
                                                <Image src={icon4} paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]} />
                                                <Text
                                                    lineHeight={["normal"]}
                                                    fontSize={["16px", "16px", "20px", "20px", "20px", "24px"]}
                                                    fontFamily="var(--founders-grotesk)"
                                                    fontWeight="400"
                                                    color={"#333333"}
                                                    minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                >
                                                    What if your brand could become the benchmark for success and innovation in your sector?
                                                </Text>
                                            </Box>
                                            <Box
                                                paddingBottom={["20px", "20px", "30px", "30px", "50px", "60px"]}
                                            >
                                                <Image src={icon5} paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]} />
                                                <Text
                                                    lineHeight={["normal"]}
                                                    fontSize={["16px", "16px", "20px", "20px", "20px", "24px"]}
                                                    fontFamily="var(--founders-grotesk)"
                                                    fontWeight="400"
                                                    color={"#333333"}
                                                    minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                >
                                                    What if you were positioned not just to compete, but to dominate your industry?
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Image src={icon6} paddingBottom={["5px", "5px", "5px", "10px", "15px", "15px"]} />
                                                <Text
                                                    lineHeight={["normal"]}
                                                    fontSize={["16px", "16px", "20px", "20px", "20px", "24px"]}
                                                    fontFamily="var(--founders-grotesk)"
                                                    fontWeight="400"
                                                    color={"#333333"}
                                                    minHeight={["95px", "95px", "95px", "105px", "80px", "95px"]}
                                                >
                                                    What if your websites and mobile apps could provide an unparalleled user experience in increasing engagement and driving growth?
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box
                                    padding={["68px 0 30px", "68px 0 30px", "68px 0 30px", "68px 0 30px", "48px 0 60px", "53px 0 68px"]}
                                >
                                    <Text
                                        fontSize={["18px", "18px", "18px", "20px", "20px", "20px"]}
                                        fontFamily={"var(--foundersGrotesk-regular)"}
                                        fontWeight={"400"}
                                        color={"#333333"}
                                        maxW={["100%", "100%", "100%", "70%", "70%", "70%"]}
                                        lineHeight={["normal"]}
                                        
                                    >
                                        If these brand opportunities could unlock potential in your
                                        business, reach out and tell us your story.
                                    </Text>
                                </Box>
                                <Box>
                                    <Link>
                                        <Text
                                            fontSize={["35px", "35px", "40px", "50px", "60px", "64px"]}
                                            fontWeight={"600"}
                                            color={"#00763D"}
                                            fontFamily={"var(--garnett-semibold);"}
                                            textDecoration={"underline"}
                                        >
                                            Let’s work together!
                                        </Text>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BeyondLimitations;
