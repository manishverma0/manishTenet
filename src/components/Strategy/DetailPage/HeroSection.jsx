import React from 'react';
import { Box, Container, Flex, Text, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import image from "../../../assets/Strategy/strategyGIF.gif";
import heroBG from "../../../assets/Strategy/heroBG.svg";

const heroSection = () => {
    return (
        <Box position={["relative"]} height={["auto", "auto", "50vh", "75vh", "120vh", "155vh"]}>
            <Box
                backgroundImage={heroBG}
                backgroundRepeat={["no-repeat"]}
                p={['23px 0', '23px 0', '33px 0', '45px 0 53px', '50px 0 53px', '56px 0 53px']}
                height={["auto", "auto", "50vh", "75vh", "110vh", "120vh"]}

            >
                <Container
                    width={["100%", "100%", "100%", "94%", "90%", "85%"]}
                    maxW={["100%", "100%", "100%", "94%", "90%", "85%"]}
                    marginBottom={["50px", "50px", 0, 0, 0, 0]}
                >
                    <Breadcrumb spacing="8px" separator=">" color={["#ffffff"]}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#"
                                fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                                color={["#ffffff"]}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#"
                                fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                                color={["#ffffff"]}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}>Strategy</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#"
                                fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                                color={["#ffffff"]}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}>Strategy Name</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex
                        direction={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}
                        gap={["55px", "55px", "55px", "0", "0", "0"]}
                        paddingTop={["26px", "30px", "40px", "46px", "56px", "66px"]}
                        marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
                    >
                        <Box
                            w={['100%', '100%', '100%', '83%', '83%', '83%']}
                            color='#FFFFFF'
                            display="flex"
                            flexDirection="column"
                            justifyContent="center">
                            <Box>
                                <Box
                                    maxW={['100%', '100%', '100%', '90%', '90%', '90%']}
                                >
                                    <Text
                                        as="h1"
                                        fontSize={['36px', '36px', '46px', '80px', '100px', '118px']}
                                        m="0 0 23px 0"
                                        fontFamily='var(--garnett-semibold)'
                                        color={["#ffffff"]}
                                        fontWeight={["400"]}
                                        lineHeight={"normal"}
                                    >
                                        <span style={{ display: "flex", alignItems: "center" }}>
                                            A
                                            <span style={{ color: "#E0005E", fontFamily: "var(--garnett-semibold)", marginLeft: "5px", display: "flex", alignItems: "center" }}>
                                                &nbsp;Process
                                                <svg width="18" height="123" viewBox="0 0 18 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 15L17.6603 3.78552e-07L0.339746 -3.78552e-07L7.5 15L10.5 15ZM7.5 108L0.33974 123L17.6602 123L10.5 108L7.5 108ZM7.5 13.5L7.5 109.5L10.5 109.5L10.5 13.5L7.5 13.5Z" fill="#E0005E" />
                                                </svg>

                                            </span>
                                            &nbsp;with
                                        </span>
                                        you in mind.
                                    </Text>
                                    <Text
                                        paddingTop={["10px", "10px", "10px", "15px", "15px", "15px"]}
                                        width={['100%', '100%', '100%', '80%', '50%', '50%']}
                                        fontSize={['14px', '14px', '16px', '18px', '20px', '23px']}
                                        as='p'
                                        fontFamily='var(--foundersGrotesk-light)'
                                        fontWeight={"400"}
                                        lineHeight={"normal"}
                                    >
                                        We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex justifyContent={["center"]}>
                        <Box margin="0 auto" maxWidth="100%">
                            <Image
                                src={image}
                                width={["100vw"]}
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
};
export default heroSection;