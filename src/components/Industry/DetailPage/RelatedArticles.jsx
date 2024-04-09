import React from "react";
import { Box, Container, Flex, Link, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories = () => {
    const settings = {
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint as needed for mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Sample data for slider
    const sliderData = [
        {
            category: "Research",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: "https://s6.imgcdn.dev/tqMYv.png",
            height: 361,
          //  width: 305,
            bgColor: "#0057FF",
        },
        {
            category: "Growth",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: "https://s6.imgcdn.dev/tqMYv.png",
            height: 250,
        //    width: 309,
            bgColor: "#9B4DFF",
        },
        {
            category: "Build",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: "https://s6.imgcdn.dev/tqMYv.png",
            height: 199,
           // width: 315,
            bgColor: "#00763D",
        },
        {
            category: "Design",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: "https://s6.imgcdn.dev/tqMYv.png",
            height: 297,
          //  width: 320,
            bgColor: "#E0005E",
        },
        {
            category: "Research",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: "https://s6.imgcdn.dev/tqMYv.png",
        },
        {
            category: "Research",
            title: "Collaboration Secrets: Design X Engineering",
            description: "There’s something very powerful about working in interdisciplinary teams to build and evolve digital products. This is the way we...",
            image: "https://s6.imgcdn.dev/tqMYv.png",
        },
    ];

    return (
        <Box
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
            overflow={"hidden"}
        >
            <Container maxW={["90%", "90%", "90%", "90%", "92%", "85%"]} m="0 auto">
                <Box>
                    <Flex justifyContent="space-between">
                        <Text as="h3" m="0px" fontSize={["30px", "32px", "32px", "32px", "32px", "32px"]} color={["#333333"]} fontFamily="var(--garnett-regular)" paddingBottom={["30px"]}>
                            Related Articles
                        </Text>
                    </Flex>
                </Box>
            </Container>
            <Box width={["100%", "100%", "100%", "87%", "93%", "93%"]}
                marginLeft="auto"
                marginRight="0">
                <Slider {...settings}>
                    {sliderData.map((slide, index) => (
                        <div key={index} style={{ marginLeft: index === 0 ? "0" : "5%", display: index === 0 ? "none" : "block" }}>
                            <Container maxW="100%">
                                <Box>
                                    <Box pt="10px">
                                        <Image src={slide.image} alt={slide.category} mb="10px" maxW={slide.width} height={slide.height} />
                                        <Text as="span" display="inline-block" p="8px 20px 6px" fontSize="16px" color="#fff" fontFamily="var(--foundersGrotesk-regular)" fontWeight="400" bg={slide.bgColor}>
                                            {slide.category}
                                        </Text>
                                        <Text as="h3" p="10px 0" fontFamily="var(--garnett-medium)" fontSize="20px" fontWeight="500">
                                            {slide.title}
                                        </Text>
                                        <Text as="p" fontSize="18px" fontFamily="var(--foundersGrotesk-regular)" fontWeight="400" lineHeight={["normal"]}>
                                            {slide.description}
                                        </Text>
                                    </Box>
                                </Box>
                            </Container>
                        </div>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default Stories;
