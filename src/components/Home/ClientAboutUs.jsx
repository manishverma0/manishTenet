import React, { useEffect } from "react";
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import carouselBgImage from "../../assets/Home/clientAbout/carouselBG.svg";
import arrowImage from "../../assets/Home/clientAbout/arrow.svg";
import brandLogo from "../../assets/Home/clientAbout/brandLogo.svg"
import img from "../../assets/Home/clientAbout/img.png";

const ClientAboutUs = () => {
    return (
        <Box
            // padding={["80px 0", "80px 0", "80px 0", "80px 0", "80px 0", "80px 0"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            margin={["0 auto"]}
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
            background={"linear-gradient(180deg, #003E33 0%, #002A22 100%)"}
        >
            <Container
                maxWidth={["100%", "100%", "100%", "100%", "95%", "95%"]}
                margin={["0 auto"]}
                paddingTop={["30px", "30px", "35px", "50px", "70px", "70px"]}
            >
                <Box
                    marginBottom={["58px", "58px", "68px", "48px", "50px", "60px"]}
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    justifyContent={["space-between", "space-between", "space-between", "space-between", "space-between", "space-between"]}
                    alignItems={["flex-start", "flex-start", "flex-start", "center", "center", "center"]}
                    flexDirection={["column", "column", "row", "row", "row", "row"]}
                >

                    <Text
                        as='h3'
                        m='0px'
                        fontSize={["35px", "35px", "40px", "60px", "68px", "68px"]}
                        fontFamily='var(--garnett-semibold)'
                        color={"#ffffff"}
                        fontWeight={"600"}
                        width={["100%", "100%", "100%", "70%", "60%", "60%"]}
                        lineHeight={["normal"]}
                    >What our client’s has to say about us
                    </Text>
                    <Text
                        as='p'
                        m='0px'
                        fontSize={["15px", "15px", "16px", "18px", "18px", "18px"]}
                        maxW={["424px", "424px", "424px", "384px", "384px", "384px"]}
                        color={"#ffffff"}
                        fontFamily="var(--foundersGrotesk-light)"
                        fontWeight="400"
                        lineHeight={["normal"]}
                    >
                        We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.
                        <br /><br />
                        Which work as solutions to the client’s requirements.
                    </Text>
                </Box>
                <Flex
                    direction={["column", "column", "row", "row", "row", "row"]}
                    justifyContent="center"
                    alignItems="flex-start"
                    gap={["20px", "20px", "15px", "15px", "15px", "15px"]}
                    margin="0 auto"
                    maxW="100%"
                >
                    <Box
                        flex={["none", "none", "1", "1", "1", "1"]}
                     //   p={["30px", "30px", "30px", "55px", "55px", "55px"]}
                        maxW="50%"
                    >
                        <Flex
                            alignItems="flex-start"
                            justifyContent="center"
                            flexDirection="column"
                        >
                            <Image
                                src={img}
                                alt="Project 01"
                                maxW="100%"
                            />
                        </Flex>
                    </Box>

                    <Box
                        flex={["none", "none", "1", "1", "1", "1"]}
                        p={["15px", "15px", "25px", "35px", "35px", "35px"]}
                        position="relative"
                        maxW="50%"
                        _hover={{ cursor: `url(${arrowImage}), auto` }}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={2.1}
                        >
                            <SwiperSlide>
                                <Flex flexDirection="column" backgroundImage={carouselBgImage} padding={["20px"]}>
                                    <Flex justifyContent={["end"]}><Image src={brandLogo} alt="Brand Logo" width={["83px"]}
                                        paddingTop={["20px", "30px", "30px", "30px", "30px", "30px"]}
                                        paddingBottom={["20px", "30px", "30px", "30px", "40px", "50px"]}
                                    /></Flex>
                                    <Flex gap={["40px", "45px", "50px", "65px", "80px", "95px"]} flexDirection={["column"]}>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            The end result Tenet has created is bold, brave and very IROS. Mission accomplished.
                                        </Text>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            Client name
                                        </Text>
                                    </Flex>
                                    <Text
                                        color={"#ffffff"}
                                        fontFamily="var(--foundersGrotesk-light)"
                                        fontWeight="400"
                                        lineHeight={["normal"]}
                                        fontSize={["16px", "18px", "16px", "16px", "16px", "16px"]}
                                    >
                                        Designation
                                    </Text>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex flexDirection="column" backgroundImage={carouselBgImage} padding={["20px"]}>
                                    <Flex justifyContent={["end"]}><Image src={brandLogo} alt="Brand Logo" width={["83px"]}
                                        paddingTop={["20px", "30px", "30px", "30px", "30px", "30px"]}
                                        paddingBottom={["20px", "30px", "30px", "30px", "40px", "50px"]}
                                    /></Flex>
                                    <Flex gap={["40px", "45px", "50px", "65px", "80px", "95px"]} flexDirection={["column"]}>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            The end result Tenet has created is bold, brave and very IROS. Mission accomplished.
                                        </Text>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            Client name
                                        </Text>
                                    </Flex>
                                    <Text
                                        color={"#ffffff"}
                                        fontFamily="var(--foundersGrotesk-light)"
                                        fontWeight="400"
                                        lineHeight={["normal"]}
                                        fontSize={["16px", "18px", "16px", "16px", "16px", "16px"]}
                                    >
                                        Designation
                                    </Text>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex flexDirection="column" backgroundImage={carouselBgImage} padding={["20px"]}>
                                    <Flex justifyContent={["end"]}><Image src={brandLogo} alt="Brand Logo" width={["83px"]}
                                        paddingTop={["20px", "30px", "30px", "30px", "30px", "30px"]}
                                        paddingBottom={["20px", "30px", "30px", "30px", "40px", "50px"]}
                                    /></Flex>
                                    <Flex gap={["40px", "45px", "50px", "65px", "80px", "95px"]} flexDirection={["column"]}>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            The end result Tenet has created is bold, brave and very IROS. Mission accomplished.
                                        </Text>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            Client name
                                        </Text>
                                    </Flex>
                                    <Text
                                        color={"#ffffff"}
                                        fontFamily="var(--foundersGrotesk-light)"
                                        fontWeight="400"
                                        lineHeight={["normal"]}
                                        fontSize={["16px", "18px", "16px", "16px", "16px", "16px"]}
                                    >
                                        Designation
                                    </Text>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex flexDirection="column" backgroundImage={carouselBgImage} padding={["20px"]}>
                                    <Flex justifyContent={["end"]}><Image src={brandLogo} alt="Brand Logo" width={["83px"]}
                                        paddingTop={["20px", "30px", "30px", "30px", "30px", "30px"]}
                                        paddingBottom={["20px", "30px", "30px", "30px", "40px", "50px"]}
                                    /></Flex>
                                    <Flex gap={["40px", "45px", "50px", "65px", "80px", "95px"]} flexDirection={["column"]}>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            The end result Tenet has created is bold, brave and very IROS. Mission accomplished.
                                        </Text>
                                        <Text
                                            color={"#ffffff"}
                                            fontFamily="var(--foundersGrotesk-light)"
                                            fontWeight="400"
                                            lineHeight={["normal"]}
                                            fontSize={["16px", "18px", "18px", "18px", "18px", "18px"]}
                                        >
                                            Client name
                                        </Text>
                                    </Flex>
                                    <Text
                                        color={"#ffffff"}
                                        fontFamily="var(--foundersGrotesk-light)"
                                        fontWeight="400"
                                        lineHeight={["normal"]}
                                        fontSize={["16px", "18px", "16px", "16px", "16px", "16px"]}
                                    >
                                        Designation
                                    </Text>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                </Flex>
            </Container >
        </Box >
    )
}
export default ClientAboutUs
