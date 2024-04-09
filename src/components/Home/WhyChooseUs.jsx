import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react';
const WhyChooseUs = () => {
    return (
        <Box
            padding={["80px 0", "80px 0", "80px 0", "80px 0", "80px 0", "80px 0"]}
            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            margin={["0 auto"]}
        >
            <Container
                maxWidth={["100%", "100%", "100%", "100%", "100%", "100%"]}
                margin={["0 auto"]}
            >
                <Box
                    marginBottom={["58px", "58px", "68px", "48px", "40px", "40px"]}
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    justifyContent={["space-between", "space-between", "space-between", "space-between", "space-between", "space-between"]}
                    alignItems={["flex-start", "flex-start", "center", "center", "center", "center"]}
                    flexDirection={["column", "column", "row", "row", "row", "row"]}
                >

                    <Text
                        as='h3'
                        m='0px'
                        fontSize={["35px", "35px", "40px", "48px", "48px", "48px"]}
                        fontFamily='var(--garnett-regular)'
                        color={"#000000"}
                    >Why choose us
                    </Text>
                    <Text
                        as='p'
                        m='0px'
                        fontSize={["17px", "17px", "20px", "20px", "20px", "20px"]}
                        maxW={["424px", "424px", "424px", "464px", "464px", "464px"]}
                        color={"#333333"}
                        fontFamily="var(--foundersGrotesk-light)"
                        fontWeight="400"
                        lineHeight={["normal"]}
                    >
                        Explore our carefully curated solutions by outcomes that are tailored for your needs.
                    </Text>
                </Box>
                <Box
                    display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}
                    flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap']}
                    justifyContent={['center', 'center', 'center', 'center', 'center', 'center']}
                    gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                >
                    <Box
                        display={["flex"]}
                        flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                        width={['100%', '100%', '100%', '100%', '100%', '100%']}
                        maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                        gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                    >
                        <Box
                            background={"#EBDBFF"}
                            padding={["30px", "30px", "30px", "55px", "55px", "55px"]}
                            flex="1"
                        >
                            <Flex 
                            alignItems={["flex-start", "flex-start", "center", "center", "center", "center"]}
                            gap={["32px", "32px", "32px", "43px", "43px", "43px"]}
                            flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "68px", "68px", "68px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#000000"}
                                >
                                    01
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["16px", "18px", "18px", "20px", "20px", "20px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color='#333333'
                                    lineHeight={["normal"]}
                                >
                                    Our strategies and solutions are tailored to clients' specific needs and preferences.
                                </Text>
                            </Flex>
                        </Box>
                        <Box
                            background={"#FFE1D8"}
                            padding={["30px", "30px", "30px", "55px", "55px", "55px"]}
                            flex="1"
                        >
                            <Flex 
                            alignItems={["flex-start", "flex-start", "center", "center", "center", "center"]}
                            gap={["32px", "32px", "32px", "43px", "43px", "43px"]}
                            flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "68px", "68px", "68px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#000000"}
                                >
                                    02
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["16px", "18px", "18px", "20px", "20px", "20px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color='#333333'
                                    lineHeight={["normal"]}
                                >
                                    We strongly believe in humanizing experiences by forging meaningful person-to-person connections.
                                </Text>
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        display={["flex"]}
                        flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                        width={['100%', '100%', '100%', '100%', '100%', '100%']}
                        maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                        gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                    >
                        <Box
                            background={"#FFE1D8"}
                            padding={["30px", "30px", "30px", "55px", "55px", "55px"]}
                            flex="1"
                        >
                            <Flex 
                            alignItems={["flex-start", "flex-start", "center", "center", "center", "center"]}
                            gap={["32px", "32px", "32px", "43px", "43px", "43px"]}
                            flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "68px", "68px", "68px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#000000"}
                                >
                                    03
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["16px", "18px", "18px", "20px", "20px", "20px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color='#333333'
                                    lineHeight={["normal"]}
                                >
                                    In addition to delivering mind-blowing solutions, our process is simplified, well-guided, and ensures an exceptionally satisfying service delivery experience.
                                </Text>
                            </Flex>
                        </Box>
                        <Box
                            background={"#EBDBFF"}
                            padding={["30px", "30px", "30px", "55px", "55px", "55px"]}
                            flex="1"
                        >
                            <Flex 
                            alignItems={["flex-start", "flex-start", "center", "center", "center", "center"]}
                            gap={["32px", "32px", "32px", "43px", "43px", "43px"]}
                            flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                            >
                                <Text
                                    as='h3'
                                    fontSize={["36px", "38px", "45px", "68px", "68px", "68px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color={"#000000"}
                                >
                                    04
                                </Text>
                                <Text
                                    as='p'
                                    fontSize={["16px", "18px", "18px", "20px", "20px", "20px"]}
                                    fontFamily='var(--garnett-regular);'
                                    color='#333333'
                                    lineHeight={["normal"]}
                                >
                                    Tenet aims for flawless and seamless experiences, even in dispute resolutions, to ensure client satisfaction.
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default WhyChooseUs
