import React from 'react'
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Our Work Images
import work5 from '../../assets/Home/ourWork/1.svg';
import work6 from '../../assets/Home/ourWork/2.svg';
import work3 from '../../assets/Home/ourWork/3.svg';
import work4 from '../../assets/Home/ourWork/4.svg';
import work1 from '../../assets/Home/ourWork/5.svg';
import work2 from '../../assets/Home/ourWork/6.svg';
import work7 from '../../assets/Home/ourWork/7.svg';

const OurWork = () => {
    return (
        <Box
            padding={["80px 0 0 0", "80px 0 0 0", "80px 0 0 0", "80px 0 0 0", "80px 0 0 0", "80px 0 0 0"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            margin={["0 auto"]}
        //  paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
        >
            <Container
                maxWidth={["100%", "100%", "100%", "100%", "100%", "100%"]}
                margin={["0 auto"]}
                padding={[0]}
            >
                <Box
                    width={["90%", "90%", "90%", "90%", "83%", "83%"]}
                    margin={["0 auto"]}
                    marginBottom={["58px", "58px", "68px", "48px", "40px", "40px"]}
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    justifyContent={["space-between", "space-between", "space-between", "space-between", "space-between", "space-between"]}
                    alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "flex-start", "flex-start"]}
                    flexDirection={["column", "column", "row", "row", "row", "row"]}
                >

                    <Text
                        as='h3'
                        m='0px'
                        fontSize={["35px", "35px", "40px", "48px", "48px", "48px"]}
                        fontFamily='var(--garnett-regular)'
                        color={"#000000"}
                    >Our Work
                    </Text>
                    <Box
                        display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                        flexDirection={["column", "column", "column", "column", "column", "column"]}
                    >
                        <Text
                            as='p'
                            m='0px'
                            fontSize={["17px", "17px", "20px", "20px", "20px", "20px"]}
                            maxW={["424px", "424px", "424px", "324px", "450px", "504px"]}
                            color={"#333333"}
                            fontFamily="var(--foundersGrotesk-light)"
                            fontWeight="400"
                            lineHeight={["normal"]}
                            marginBottom={["15px", "20px", "20px", "25px", "30px", "30px"]}
                        >
                            Explore our carefully curated solutions by outcomes that are tailored for your needs. Explore our carefully curated solutions by outcomes that are tailored for your needs.
                        </Text>
                        <Text
                            as='p'
                            m='0px'
                            fontSize={["25px", "30px", "30px", "40px", "48px", "48px"]}
                            // maxW={["424px", "424px", "424px", "324px", "574px", "49.5%"]}
                            color={"#333333"}
                            fontFamily="var(--garnett-semibold)"
                            fontWeight="600"
                            textDecoration={"underline"}
                        >
                            See all Projects
                        </Text>
                    </Box>
                </Box>
                <Box
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    justifyContent={["space-between", "space-between", "space-between", "space-between", "space-between", "space-between"]}
                    alignItems={["flex-start", "flex-start", "flex-start", "center", "center", "center"]}
                    flexDirection={["column", "column", "row", "row", "row", "row"]}
                    background={["linear-gradient(180deg, #E2F8F3 0%, #E2F8F3 100%)"]}
                    padding={["50px 30px 40px 40px", "50px 30px 40px 40px", "50px 30px 40px 40px", "70px 40px 60px 40px", "100px 50px 70px 50px", "100px 50px 70px 70px"]}
                    gap={["30px", "35px", "40px", "55px", "80px", "120px"]}
                >
                    <img src={work7} />
                    <Box
                        display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                        flexDirection={["column", "column", "column", "column", "column", "column"]}
                        gap={["20px", "25px", "30px", "40px", "40px", "40px"]}
                    >
                        <Text
                            as='p'
                            m='0px'
                            fontSize={["18px", "20px", "20px", "24px", "26px", "28px"]}
                            color={"#1a1a1a"}
                            fontFamily="var(--garnett-regular)"
                            fontWeight="400"
                            width={["100%", "100%", "100%", "80%", "80%", "80%"]}
                            lineHeight={["normal"]}
                        >
                            Digital Presence Revamp and Transformation for <Text
                                as='span'
                                fontFamily='var(--garnett-semibold)'
                                fontWeight='600'
                            >
                                G42 Healthcare An M42 Company,
                            </Text> a leading healthcare giant in the UAE.
                        </Text>

                        <Text
                            as='p'
                            m='0px'
                            fontSize={["14px", "16px", "16px", "18px", "19px", "20px"]}
                            color={"#1a1a1a"}
                            fontFamily="var(--founders-grotesk)"
                            fontWeight="400"
                            width={["100%", "100%", "100%", "80%", "80%", "80%"]}
                            lineHeight={["normal"]}
                        >
                            M42 has recently acquired G42, solidifying its position as one of the foremost healthcare giants in the MENA region.
                        </Text>
                        <Box
                            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                            flexDirection={["column", "column", "column", "row", "row", "row"]}
                            gap={["10px", "10px", "10px", "10px", "10px", "10px"]}
                        >
                            <Text
                                borderRadius={["37px"]}
                                background={["#BDF9EC"]}
                                border={["1px solid #00D2AA"]}
                                padding={["10px"]}
                                color={["#333333"]}
                                fontSize={["16px"]}
                                fontWeight={["400"]}
                                fontFamily="var(--founders-grotesk)"
                            >
                                Visual Identity
                            </Text>
                            <Text
                                borderRadius={["37px"]}
                                background={["#BDF9EC"]}
                                border={["1px solid #00D2AA"]}
                                padding={["10px"]}
                                color={["#333333"]}
                                fontSize={["16px"]}
                                fontWeight={["400"]}
                                fontFamily="var(--founders-grotesk)"
                            >
                                Logo
                            </Text>
                            <Text
                                borderRadius={["37px"]}
                                background={["#BDF9EC"]}
                                border={["1px solid #00D2AA"]}
                                padding={["10px"]}
                                color={["#333333"]}
                                fontSize={["16px"]}
                                fontWeight={["400"]}
                                fontFamily="var(--founders-grotesk)"
                            >
                                Web Design
                            </Text>
                            <Text
                                borderRadius={["37px"]}
                                background={["#BDF9EC"]}
                                border={["1px solid #00D2AA"]}
                                padding={["10px"]}
                                color={["#333333"]}
                                fontSize={["16px"]}
                                fontWeight={["400"]}
                                fontFamily="var(--founders-grotesk)"
                            >
                                Web Development
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default OurWork