import React, { useEffect } from "react";
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

import arrowImage from "../../../assets/Home/clientAbout/arrow.svg";
import image from "../../../assets/CaseStudy/CaseStudyDetail/heroSection.svg";

const slider = () => {
    const repetitions = 6;
    return (
        <Box
            marginTop={["40px", "40px", "60px", "80px", "130px"]}
            paddingTop={["45px", "45px", "65px", "85px", "105px", "115px"]}
            paddingBottom={["45px", "45px", "65px", "85px", "105px", "115px"]}
            _hover={{ cursor: `url(${arrowImage}), auto` }}
            background={["#F5F5F5F5"]}
        >
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
            >
                {Array.from({ length: repetitions }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <Flex flexDirection="column" padding={["20px"]}>
                            <Flex gap={["10px", "10px", "10px", "10px", "10px", "10px"]} flexDirection={["column"]}>
                                <Image src={image} />
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box >
    )
}
export default slider