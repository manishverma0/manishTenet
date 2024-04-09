import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import arrowImage from "../../../assets/Home/clientAbout/arrow.svg";
import image1 from "../../../assets/Service/ExploreOtherWork/1.svg";
import image2 from "../../../assets/Service/ExploreOtherWork/2.svg";
import image3 from "../../../assets/Service/ExploreOtherWork/3.svg";
import { Link } from 'react-router-dom';

const ExploreOtherWork = () => {
    const eowData = [
        {
            image: image1,
            title: 'Full Stack Development',
            description: "Project Name, Headline with the caption Max 2 lines.",
        },
        {
            image: image2,
            title: 'Full Stack Development',
            description: "Project Name, Headline with the caption Max 2 lines.",
        },
        {
            image: image3,
            title: 'Full Stack Development',
            description: "Project Name, Headline with the caption Max 2 lines.",
        },
    ];

    const sectionHeading = {
        fontSize: ['18px', '20px', '20px', '32px', '32px', '32px'],
        fontFamily: 'var(--garnett-regular)',
        color: ['#333'],
        fontWeight: ['400'],
        lineHeight: 'normal'
    };

    const viewLink = {
        background: '#00763D',
        color: '#fff',
        fontSize: ['20px', '20px', '20px', '20px', '20px', '20px'],
        padding: ['5px 25px 8px'],
        fontFamily: 'var(--foundersGrotesk-regular);',
        display: 'inline-block',
    };

    return (
        <Box paddingBottom={["60px", "60px", "60px", "80px", "80px", "100px"]}>
            {/* Section Heading */}
            <Container maxW={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}>
                <Flex justifyContent={'space-between'} alignItems={'center'} borderTop={["1px solid #B5B5B5"]} p={['60px 0 32px']}>
                    <Box>
                        <Text as="h1" sx={sectionHeading}>Explore other works</Text>
                    </Box>
                    <Box>
                        <Link style={viewLink}>View All</Link>
                    </Box>
                </Flex>
            </Container>
            <Container maxW={["100%", "100%", "100%", "95%", "95%", "95%"]} mr={'0'}>
                {/* Slider */}
                <Box _hover={{ cursor: `url(${arrowImage}), auto` }}>
                    <Swiper
                        spaceBetween={17}
                        slidesPerView={2.6}
                    >
                        {eowData.map((data, index) => (
                            <SwiperSlide key={index}>
                              
                                        <Box>
                                            <Image src={data.image} w={'100%'} h={'318px'} minH={'318px'} objectFit={'cover'} />
                                        </Box>
                                        <Text
                                            fontSize={['12px', '14px', '14px', '14px', '16px', '16px']}
                                            fontFamily='var(--garnett-regular)'
                                            color={["#333"]}
                                            fontWeight={["400"]}
                                            lineHeight={'normal'}
                                            p={'29px 0 16px'}
                                        >
                                            {data.title}
                                        </Text>
                                        <Text
                                            fontSize={['12px', '14px', '14px', '16px', '18px', '20px']}
                                            fontFamily='var(--garnett-regular)'
                                            color={["#333"]}
                                            fontWeight={["400"]}
                                            lineHeight={'normal'}
                                        >
                                            {data.description}
                                        </Text>
                             
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
};

export default ExploreOtherWork;
