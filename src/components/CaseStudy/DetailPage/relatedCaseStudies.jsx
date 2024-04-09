import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

import arrowImage from "../../../assets/Home/clientAbout/arrow.svg";
import image from "../../../assets/CaseStudy/CaseStudyDetail/heroSection.svg";

const relatedCaseStudies = () => {
    const backgroundText = [
        {
            title: 'Full Stack Developement',
            description: "Project Name, Headline with the caption Max 2 lines.",
        }
    ];
    const repetitions = 6;
    return (
        <Container
            paddingTop={["60px", "60px", "60px", "80px", "80px", "80px"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
            marginBottom={["50px", "50px", 0, 0, 0, 0]}
            padding={["0"]}
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "100px"]}
        >
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'row', 'row', 'row', 'row']}
                gap={["55px", "55px", "55px", "80px", "140px", "160px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
                borderTop={["1px solid #B5B5B5"]}
            // paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
            // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
            >
                <Text
                    as="h1"
                    fontSize={['18px', '20px', '20px', '20px', '28px', '32px']}
                    fontFamily='var(--garnett-regular)'
                    color={["#333333"]}
                    paddingTop={["30px", "30px", "30px", "60px", "60px", "60px"]}
                    fontWeight={["400"]}
                    lineHeight={"normal"} >
                    Related Case Studies
                </Text>
            </Flex>
            <Box
                width={["100%", "100%", "100%", "87%", "87%", "87%"]}
                marginLeft="auto"
                marginRight="0"
                marginTop={["10px", "20px", "20px", "20px", "30px"]}
                // paddingTop={["45px", "45px", "65px", "85px", "105px", "115px"]}
                // paddingBottom={["45px", "45px", "65px", "85px", "105px", "85px"]}
                _hover={{ cursor: `url(${arrowImage}), auto` }}
            >
                <Swiper
                    spaceBetween={5}
                    slidesPerView={2.3}
                >
                    {Array.from({ length: repetitions }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Flex flexDirection="column" padding={["20px"]}>
                                <Flex gap={["10px", "10px", "10px", "10px", "10px", "10px"]} flexDirection={["column"]}>
                                    <Image src={image} />
                                    <Text
                                        fontSize={['12px', '14px', '14px', '14px', '16px', '16px']}
                                        fontFamily='var(--garnett-regular)'
                                        color={["#333333"]}
                                        fontWeight={["400"]}
                                    >
                                        {backgroundText[0].title}
                                    </Text>
                                    <Text
                                        fontSize={['12px', '14px', '14px', '16px', '18px', '20px']}
                                        fontFamily='var(--garnett-regular)'
                                        color={["#333333"]}
                                        fontWeight={["400"]}
                                    >
                                        {backgroundText[0].description}
                                    </Text>
                                </Flex>
                            </Flex>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box >
        </Container>
    );
};
export default relatedCaseStudies;