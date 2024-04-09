import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import image from "../../../assets/Strategy/fullWidth.svg";

const ceoSection = () => {
    return (
        <Box>
            <Container
                width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                padding={"0"}
                marginTop={["35px", "35px", "48px", "85px", "93px", "113px"]}
                // paddingTop={["35px", "35px", "48px", "55px", "63px", "63px"]}
                marginBottom={["50px", "50px", 0, 0, 0, 0]}
            // paddingBottom={["35px", "35px", "48px", "55px", "63px", "69px"]}
            >
                <Flex
                    width={["100%", "100%", "100%", "94%", "90%", "83%"]}
                    maxW={["100%", "100%", "100%", "94%", "90%", "83%"]}
                    direction={['column', 'column', 'column', 'column', 'column', 'column']}
                    gap={["25px", "30px", "35px", "40px", "50px", "50px"]}
                    margin={["0 auto"]}
                    justifyContent={["center"]}
                    alignItems={["center"]}
                >
                    <Text
                        as="h1"
                        fontSize={['22px', '24px', '24px', '30px', '30px', '36px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#000000"]}
                        fontWeight={["400"]}
                        width={["100%", "100%", "100%", "80%", "80%", "80%"]}
                        fontStyle={["italic"]}
                        textAlign={"center"}
                        lineHeight={"normal"}
                    >
                        <span>
                            I now understand why Focus Lab came so highly recommended. I've never had such super-serving from a vendor in my entire life.
                        </span>
                    </Text>
                    <Text
                        fontSize={['15px', '15px', '15px', '18px', '20px', '20px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        width={["100%", "100%", "100%", "80%", "80%", "80%"]}
                        textAlign={"center"}
                        lineHeight={"normal"}
                    >
                        <span>
                            -Shantanu Pandey, CEO Tenet by Kodeglobe
                        </span>
                    </Text>
                </Flex>
                <Box
                    marginTop={["35px", "35px", "48px", "95px", "123px", "150px"]}
                >
                    <Image src={image} width={["100%"]}/>
                </Box>
            </Container>
        </Box>
    );
};

export default ceoSection;