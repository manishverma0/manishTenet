import React from "react";
import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";

import HoverImg from '../../assets/About/commanImage/sliderhover.svg'

import image1 from '../../assets/Commen/RelatedArticle/1.svg'
import image2 from '../../assets/Commen/RelatedArticle/2.svg'
import image3 from '../../assets/Commen/RelatedArticle/3.svg'
import image4 from '../../assets/Commen/RelatedArticle/4.svg'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 

const Stories = () => {
    // Sample data for slider
    const sliderData = [
        {
            category: "Growth",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: image1,
            bgColor: "#0057FF",
        },
        {
            category: "Build",
            title: "Ask Tenet: How to automate the our everyday task as a tech specialist.",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: image2,
            bgColor: "#9B4DFF",
        },
        {
            category: "Design",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: image3,
            bgColor: "#00763D",
        },
        {
            category: "Research",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: image4,
            bgColor: "#E0005E",
        },
    ];

    return (
        <Box paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]} overflow="hidden">
            <Container maxW={["100%", "100%", "100%", "90%", "90%", "90%"]} m="0 auto">
                <Box>
                    <Flex justifyContent="space-between">
                        <Text as="h3" m="0px" fontSize={["30px", "32px", "32px", "32px", "32px", "32px"]} color={["#333333"]} fontFamily="var(--garnett-regular)" paddingBottom={["30px"]}>
                            Related Articles
                        </Text>
                    </Flex>
                </Box>
            </Container>
            <Box width={["100%", "100%", "100%", "95%", "95%", "95%"]} marginLeft="auto" marginRight="0" _hover={{ cursor: `url(${HoverImg}), auto` }}>
                <Swiper
                    spaceBetween={'1vw'}
                    slidesPerView={3.9}
                >
                    {sliderData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Container maxW="100%">
                                <Box pt="10px">
                                    <Image src={slide.image} alt={slide.category} mb="10px"  w={'100%'}/>
                                    <Text as="span" display="inline-block" p="8px 20px 6px" fontSize="16px" color="#fff" fontFamily="var(--foundersGrotesk-regular)" fontWeight="400" bg={slide.bgColor}>
                                        {slide.category}
                                    </Text>
                                    <Text as="h3" p="10px 0" fontFamily="var(--garnett-medium)" fontSize="20px" fontWeight="500">
                                        {slide.title}
                                    </Text>
                                    {/* <Text as="p" fontSize="18px" fontFamily="var(--foundersGrotesk-regular)" fontWeight="400" lineHeight={["normal"]}>
                                        {slide.description}
                                    </Text> */}
                                </Box>
                            </Container>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default Stories;
