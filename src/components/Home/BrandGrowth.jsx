import { Flex, Box, Image, Container, Text } from '@chakra-ui/react';
import React from 'react';
import img from '../../assets/Home/brandGrowth/img.svg';

const BrandGrowth = () => {
    return (
        <Container
            width={["100%"]}
            maxWidth={["100%"]}
            paddingLeft={"0"}
            paddingRight={"0"}
        >
            <Box
                background={"#3E001A"}
                padding='70px 0 0px 0'
            >
                <Box
                    paddingTop={["25px", "25px", "25px", "35px", "35px", "35px"]}
                    margin={["0 auto"]}
                    width={["100%", "100%", "100%", "65%", "65%", "65%"]}
                >
                    <Text
                        as='h2'
                        fontSize={['45px', '45px', '50px', '68px', '72px', '72px']}
                        color='#ffffff'
                        textAlign={"center"}
                        fontFamily="var(--garnett-semibold)"
                        fontWeight="600"
                        lineHeight={"normal"}
                    >
                        You’re unique, and so are your challenges.
                    </Text>
                </Box>
                <Box
                    marginBottom={['15px', '15px', '15px', '15px', '15px', '15px']}
                    margin={["0 auto"]}
                    width={["100%", "100%", "100%", "45%", "45%", "45%"]}
                >
                    <Text
                        as='h2'
                        fontSize={['20px', '22px', '22px', '25px', '25px', '25px']}
                        color='#ffffff'
                        textAlign={"center"}
                        fontFamily="var(--founders-grotesk)"
                        fontWeight="400"
                        lineHeight={"normal"}
                    >
                        Explore our carefully curated solutions by outcomes that are tailored for your needs.
                    </Text>
                </Box>
                <Box
                    display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}
                    flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap']}
                    justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end', 'flex-end']}
                    gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                    paddingTop={["20px", "20px", "30px", "35px", "35px", "35px"]}
                    paddingLeft={["15px", "15px", "20px", "25px", "35px", "35px"]}
                    paddingRight={["15px", "15px", "20px", "25px", "35px", "35px"]}
                >
                    <Box
                        display={["flex"]}
                        flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                        width={['100%', '100%', '100%', '100%', '100%', '100%']}
                        maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                        gap={['20px', '20px', '15px', '65px', '65px', '65px']}
                        marginBottom={["0", "0", "68px", "48px", "40px", "40px"]}
                    >
                        <Box
                            //  padding={["30px", "30px", "30px", "55px", "55px", "55px"]}
                            flex="1"
                        >
                            <Flex
                                alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "flex-start", "flex-start"]}
                                gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                flexDirection={['column', 'column', 'column', 'column', 'column', 'column']}
                            >
                                <Image
                                    src={img}
                                    alt="Project 01"
                                />
                            </Flex>
                        </Box>
                        <Box
                            // padding={["30px", "30px", "30px", "55px", "55px", "55px"]}
                            flex="1"
                            marginBottom={["15px", "15px", "25px", "35px", "35px", "35px"]}
                        >
                            <Flex
                                alignItems={["center", "center", "center", "center", "center", "center"]}
                                gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                flexDirection={['row', 'row', 'row', 'row', 'row', 'row']}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "64px", "64px", "64px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#B882FF"}
                                >
                                    1.
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["20px", "24px", "28px", "36px", "36px", "36px"]}
                                    fontFamily='var(--garnett-semibold);'
                                    fontWeight={"600"}
                                    color={"#B882FF"}
                                >
                                    Brand Growth & Recognition:
                                </Text>
                            </Flex>
                            <Text
                                as='p'
                                fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                fontFamily='var(--founders-grotesk);'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                marginLeft={["72px", "72px", "72px", "65px", "70px", "70px"]}
                                width={["auto", "auto", "80%", "80%", "80%", "80%"]}
                                lineHeight={["normal"]}
                            >
                                Drive brand growth, brand recall, and recognition from research backed design practices.
                            </Text>
                            <Flex
                                alignItems={["center", "center", "center", "center", "center", "center"]}
                                gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                flexDirection={['row', 'row', 'row', 'row', 'row', 'row']}
                                marginTop={["15px", "15px", "20px", "25px", "35px", "35px"]}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "64px", "64px", "64px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#ffffff"}
                                >
                                    2.
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["20px", "24px", "28px", "36px", "36px", "36px"]}
                                    fontFamily='var(--garnett-semibold);'
                                    fontWeight={"600"}
                                    color={"#ffffff"}
                                >
                                    Digital Transformation
                                </Text>
                            </Flex>
                            <Text
                                as='p'
                                fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                fontFamily='var(--founders-grotesk);'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                marginLeft={["72px", "72px", "72px", "85px", "85px", "85px"]}
                                lineHeight={["normal"]}
                                width={["auto", "auto", "80%", "80%", "80%", "80%"]}
                            >
                                Elevate your operations. Transition from legacy systems to a future-ready digital landscape.
                            </Text>
                            <Flex
                                alignItems={["center", "center", "center", "center", "center", "center"]}
                                gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                flexDirection={['row', 'row', 'row', 'row', 'row', 'row']}
                                marginTop={["15px", "15px", "20px", "25px", "35px", "35px"]}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "64px", "64px", "64px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#ffffff"}
                                >
                                    3.
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["20px", "24px", "28px", "36px", "36px", "36px"]}
                                    fontFamily='var(--garnett-semibold);'
                                    fontWeight={"600"}
                                    color={"#ffffff"}
                                >
                                    Mobile App Development
                                </Text>
                            </Flex>
                            <Text
                                as='p'
                                fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                fontFamily='var(--founders-grotesk);'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                marginLeft={["72px", "72px", "72px", "85px", "85px", "85px"]}
                                width={["auto", "auto", "80%", "80%", "80%", "80%"]}
                                lineHeight={["normal"]}
                            >
                                Elevate your operations. Transition from legacy systems to a future-ready digital landscape.
                            </Text>
                            <Flex
                                flexDirection={["column", "column", "column", "column", "column", "column"]}
                                background={["linear-gradient(180deg, #3E001A 0%, rgba(62, 0, 26, 0.00) 100%)"]}
                                boxShadow={["0px 4px 4px 0px rgba(0, 0, 0, 0.25)"]}
                                paddingBottom={["20px", "20px", "20px", "25px", "25px", "50px"]}
                            >
                                <Flex
                                    alignItems={["center", "center", "center", "center", "center", "center"]}
                                    gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                    flexDirection={['row', 'row', 'row', 'row', 'row', 'row']}
                                    marginTop={["15px", "15px", "20px", "25px", "35px", "35px"]}
                                >
                                    <Text
                                        as='h3'
                                        fontSize={["36px", "38px", "45px", "64px", "64px", "64px"]}
                                        fontFamily='var(--garnett-regular);'
                                        color={"#ffffff"}
                                    >
                                        4.
                                    </Text>
                                    <Text
                                        as='p'
                                        fontSize={["20px", "24px", "28px", "36px", "36px", "36px"]}
                                        fontFamily='var(--garnett-semibold);'
                                        fontWeight={"600"}
                                        color={"#ffffff"}
                                    >
                                        Ideation & Design Strategy
                                    </Text>
                                </Flex>
                                <Text
                                    as='p'
                                    fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                    fontFamily='var(--founders-grotesk);'
                                    fontWeight={"400"}
                                    color={"#ffffff"}
                                    marginLeft={["72px", "72px", "72px", "85px", "85px", "85px"]}
                                    width={["auto", "auto", "80%", "80%", "80%", "80%"]}
                                    opacity={["0.5"]}
                                    lineHeight={["normal"]}
                                >
                                    Elevate your operations. Transition from legacy systems to a future-ready digital landscape.
                                </Text>
                            </Flex>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Container >
    )
}

export default BrandGrowth
