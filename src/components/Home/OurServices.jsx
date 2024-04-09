import { Flex, Box, Image, Container, Text, chakra, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

import img1 from "../../assets/Home/ourService/1.png";
import img2 from "../../assets/Home/ourService/2.png";
import img3 from "../../assets/Home/ourService/3.png";
import img4 from "../../assets/Home/ourService/4.png";

const BusinessTab = () => {
    return (
        <Container
            paddingTop={["80px"]}
            width={["100%"]}
            maxWidth={["100%"]}
            paddingLeft={"0"}
            paddingRight={"0"}

        >

            <Box
                margin={["0 auto"]}
                width={["67%", "67%", "70%", "100%", "100%", "100%"]}
            >
                <Text
                    as='h2'
                    fontSize={['32px', '32px', '35px', '40px', '48px', '48px']}
                    color='#0057FF'
                    textAlign={"center"}
                    fontFamily="var(--garnett-semibold)"
                    fontWeight="600"
                >
                    Our Services
                    <chakra.span
                        fontFamily="var(--garnett-regular)"
                        fontWeight="400"
                        color="#000000"
                    >
                        &nbsp;& <br />
                    </chakra.span>
                    <chakra.span
                        fontFamily="var(--garnett-regular)"
                        fontWeight="400"
                        color="#000000"
                    >
                        Capabilities Spectrum
                    </chakra.span>

                </Text>
            </Box>
            <Tabs
                marginTop={["40px", "40px", "40px", "25px", "25px", "25px"]}
                background={["#0D0E4D"]}
            >
                <Flex
                    justify="center"
                    alignItems={"center"}
                >
                    <TabList css={{
                        borderBottom: "none",
                        alignItems: "center",
                        marginTop: "15px",
                    }}>
                        <Tab
                            fontSize={["18px", "18px", "18px", "32px", "32px", "32px"]}
                            fontFamily="var(--garneet-semibold)"
                            fontWeight={"600"}
                            paddingLeft={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            paddingRight={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            color={"#0057FF"}
                            _selected={{
                                color: "white",
                                borderBottom: "3px solid white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >
                            Research
                        </Tab>
                        <Box w={["9px", "9px", "9px", "25px", "25px", "25px"]} h={["9px", "9px", "9px", "25px", "25px", "25px"]}>
                            <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1554 16.0073L7.7154 24.5833L3.8754 21.7673L10.2754 13.9593L0.483398 11.3993L1.9554 6.85532L11.4274 10.5673L10.7874 0.455322H15.5874L14.9474 10.5673L24.3554 6.85532L25.8274 11.3993L16.0354 13.9593L22.4994 21.7673L18.6594 24.5833L13.1554 16.0073Z" fill="#0057FF" />
                            </svg>
                        </Box>

                        <Tab
                            fontSize={["18px", "18px", "18px", "32px", "32px", "32px"]}
                            fontFamily="var(--garneet-semibold)"
                            fontWeight={"600"}
                            paddingLeft={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            paddingRight={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            color={"#0057FF"}
                            _selected={{
                                color: "white",
                                borderBottom: "3px solid white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >Design</Tab>
                        <Box w={["9px", "9px", "9px", "25px", "25px", "25px"]} h={["9px", "9px", "9px", "25px", "25px", "25px"]}>
                            <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1554 16.0073L7.7154 24.5833L3.8754 21.7673L10.2754 13.9593L0.483398 11.3993L1.9554 6.85532L11.4274 10.5673L10.7874 0.455322H15.5874L14.9474 10.5673L24.3554 6.85532L25.8274 11.3993L16.0354 13.9593L22.4994 21.7673L18.6594 24.5833L13.1554 16.0073Z" fill="#0057FF" />
                            </svg>
                        </Box>
                        <Tab
                            fontSize={["18px", "18px", "18px", "32px", "32px", "32px"]}
                            fontFamily="var(--garneet-semibold)"
                            fontWeight={"600"}
                            paddingLeft={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            paddingRight={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            color={"#0057FF"}
                            _selected={{
                                color: "white",
                                borderBottom: "3px solid white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >Build</Tab>
                        <Box w={["9px", "9px", "9px", "25px", "25px", "25px"]} h={["9px", "9px", "9px", "25px", "25px", "25px"]}>
                            <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1554 16.0073L7.7154 24.5833L3.8754 21.7673L10.2754 13.9593L0.483398 11.3993L1.9554 6.85532L11.4274 10.5673L10.7874 0.455322H15.5874L14.9474 10.5673L24.3554 6.85532L25.8274 11.3993L16.0354 13.9593L22.4994 21.7673L18.6594 24.5833L13.1554 16.0073Z" fill="#0057FF" />
                            </svg>
                        </Box>
                        <Tab
                            fontSize={["18px", "18px", "18px", "32px", "32px", "32px"]}
                            fontFamily="var(--garneet-semibold)"
                            fontWeight={"600"}
                            paddingLeft={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            paddingRight={["20px", "20px", "20px", "20px", "20px", "20px"]}
                            color={"#0057FF"}
                            _selected={{
                                color: "white",
                                borderBottom: "3px solid white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >Growth</Tab>
                    </TabList>
                </Flex>

                <TabPanels
                    paddingBottom={["35px", "35px", "35px", "55px", "65px", "70px"]}
                >
                    <TabPanel
                        padding={["0", "0", "0", "0", "0", "0"]}
                        marginLeft={["35px", "35px", "35px", "55px", "55px", "55px"]}
                        marginTop={["35px", "35px", "35px", "55px", "65px", "70px"]}
                    >
                        <Swiper
                            slidesPerView={1.07}
                        >
                            <SwiperSlide>
                                <Flex
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                    flexDirection={["column", "column", "column", "column", "row", "row"]}
                                    alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "center", "center"]}
                                >
                                    <Image src={img1} alt="Left Image" flex="1" width={["688px"]} />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    flexDirection={["column", "column", "column", "column", "row", "row"]}
                                    alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "center", "center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src={img2} alt="Left Image" flex="1" width={["688px"]} />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    flexDirection={["column", "column", "column", "column", "row", "row"]}
                                    alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "center", "center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src={img3} alt="Left Image" flex="1" width={["688px"]} />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    flexDirection={["column", "column", "column", "column", "row", "row"]}
                                    alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "center", "center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src={img4} alt="Left Image" flex="1" width={["688px"]} />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>

                    <TabPanel
                        padding={["0", "0", "0", "0", "0", "0"]}
                        marginLeft={["35px", "35px", "35px", "55px", "55px", "55px"]}
                        marginTop={["35px", "35px", "35px", "55px", "65px", "70px"]}
                    >
                        <Swiper
                            slidesPerView={1.07}
                        >
                            <SwiperSlide>
                                <Flex
                                    flexDirection={["column", "column", "column", "column", "row", "row"]}
                                    alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "center", "center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    flexDirection={["column", "column", "column", "column", "row", "row"]}
                                    alignItems={["flex-start", "flex-start", "flex-start", "center", "center", "center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>

                    <TabPanel
                        padding={["0", "0", "0", "0", "0", "0"]}
                        marginLeft={["35px", "35px", "35px", "55px", "55px", "55px"]}
                        marginTop={["35px", "35px", "35px", "55px", "65px", "70px"]}
                    >
                        <Swiper
                            slidesPerView={1.07}
                        >
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>

                    <TabPanel
                        padding={["0", "0", "0", "0", "0", "0"]}
                        marginLeft={["35px", "35px", "35px", "55px", "55px", "55px"]}
                        marginTop={["35px", "35px", "35px", "55px", "65px", "70px"]}
                    >
                        <Swiper
                            slidesPerView={1.07}
                        >
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex
                                    alignItems={["center"]}
                                    gap={["15px", "20px", "20px", "20px", "30px", "35px"]}
                                >
                                    <Image src="https://s6.imgcdn.dev/tHoQ8.png" alt="Left Image" flex="1" />
                                    <Box flex="1" p="4">
                                        <Text
                                            fontSize={["18px", "18px", "18px", "32px", "32px", "36px"]}
                                            fontFamily="var(--garneet-regular)"
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "70%"]}
                                        >Push beyond the limitations of your current brand.</Text>
                                        <Text
                                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                            fontFamily='var(--founders-grotesk)'
                                            fontWeight={"400"}
                                            color={"#ffffff"}
                                            width={["100%", "100%", "80%", "75%", "70%", "80%"]}
                                            marginTop={["10px", "10px", "10px", "15px", "15px", "15"]}
                                        >Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                                    </Box>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Container >
    )
}

export default BusinessTab