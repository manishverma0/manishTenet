import { Flex, Box, Image, Container, Text, chakra, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import React from 'react';

import img from "../../assets/Home/tabSection/img.png";

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
            // width={["100%", "100%", "100%", "58%", "58%", "58%"]}
            >
                <Text
                    as='h2'
                    fontSize={['35px', '35px', '40px', '48px', '48px', '48px']}
                    color='#000000'
                    textAlign={"center"}
                    fontFamily="var(--garnett-regular)"
                    fontWeight="400"
                    lineHeight={["normal"]}
                >
                    We are in the business of <br />
                    <chakra.span
                        fontFamily="var(--garnett-semibold)"
                        fontWeight="600"
                        color="#0057FF"
                    >
                        accelerating
                    </chakra.span>
                    &nbsp;your business through...
                </Text>
            </Box>
            <Tabs
                marginTop={["15px", "15px", "20px", "25px", "25px", "25px"]}
            >
                <Flex justify="center">
                    <TabList css={{
                        borderBottom: "none",
                    }}>
                        <Tab
                            fontSize={["18px", "18px", "18px", "22px", "22px", "22px"]}
                            fontFamily="var(--founders-grotesk)"
                            fontWeight={"400"}
                            paddingLeft={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            paddingRight={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            _selected={{
                                bg: "#0057FF",
                                color: "white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >
                            Strategy
                        </Tab>
                        <Tab
                            fontSize={["18px", "18px", "18px", "22px", "22px", "22px"]}
                            fontFamily="var(--founders-grotesk)"
                            fontWeight={"400"}
                            paddingLeft={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            paddingRight={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            _selected={{
                                bg: "#0057FF",
                                color: "white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >Design</Tab>
                        <Tab
                            fontSize={["18px", "18px", "18px", "22px", "22px", "22px"]}
                            fontFamily="var(--founders-grotesk)"
                            fontWeight={"400"}
                            paddingLeft={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            paddingRight={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            _selected={{
                                bg: "#0057FF",
                                color: "white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >Technology</Tab>
                        <Tab
                            fontSize={["18px", "18px", "18px", "22px", "22px", "22px"]}
                            fontFamily="var(--founders-grotesk)"
                            fontWeight={"400"}
                            paddingLeft={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            paddingRight={["25px", "25px", "35px", "70px", "70px", "70px"]}
                            _selected={{
                                bg: "#0057FF",
                                color: "white",
                            }}
                            colorScheme="blue"
                            variant="solid"
                        >Growth</Tab>
                    </TabList>
                </Flex>

                <TabPanels>
                    <TabPanel
                        padding={"0"}>
                        <Box
                            display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}
                            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap']}
                            justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end', 'flex-end']}
                            gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                            paddingLeft={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            paddingRight={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            backgroundColor={"#F5F5F5"}
                            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
                            margin={["0 auto"]}
                        >
                            <Box
                                display={["flex"]}
                                flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                                width={['100%', '100%', '100%', '100%', '100%', '100%']}
                                maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                                gap={['20px', '20px', '15px', '85px', '85px', '85px']}
                                marginBottom={["0", "0", "68px", "48px", "65px", "65px"]}
                                marginTop={["0", "0", "68px", "48px", "65px", "65px"]}
                            >
                                <Box
                                    flex="1"
                                    marginBottom={["15px", "15px", "25px", "35px", "35px", "35px"]}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                >
                                    <Flex
                                        alignItems="center"
                                        gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                    >
                                        <Text
                                            as='p'
                                            fontSize={["20px", "24px", "24px", "24px", "24px", "24px"]}
                                            fontFamily='var(--founders-grotesksemibold)'
                                            fontWeight="600"
                                            color="#333333"
                                            marginBottom="15px"
                                            lineHeight={["normal"]}
                                        >
                                            Strategy at Tenet transcends mere planning; it's about crafting bespoke blueprints that align with your unique business, design, product, and marketing landscapes.
                                        </Text>
                                    </Flex>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        marginBottom="15px"
                                        lineHeight={["normal"]}
                                    >
                                        Our strategic approach ensures every investment is directly linked to measurable outcomes, blending insight with innovation to navigate complexities.
                                    </Text>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        lineHeight={["normal"]}
                                    >
                                        By understanding your objectives at a granular level, we tailor strategies that not only meet but exceed your goals, ensuring efficient allocation of resources for maximum impact and success.
                                    </Text>
                                </Box>
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
                                            width={"100%"}
                                        />
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel
                        padding={"0"}>
                        <Box
                            display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}
                            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap']}
                            justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end', 'flex-end']}
                            gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                            paddingLeft={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            paddingRight={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            backgroundColor={"#F5F5F5"}
                            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
                            margin={["0 auto"]}
                        >
                            <Box
                                display={["flex"]}
                                flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                                width={['100%', '100%', '100%', '100%', '100%', '100%']}
                                maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                                gap={['20px', '20px', '15px', '85px', '85px', '85px']}
                                marginBottom={["0", "0", "68px", "48px", "65px", "65px"]}
                                marginTop={["0", "0", "68px", "48px", "65px", "65px"]}
                            >
                                <Box
                                    flex="1"
                                    marginBottom={["15px", "15px", "25px", "35px", "35px", "35px"]}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                >
                                    <Flex
                                        alignItems="center"
                                        gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                    >
                                        <Text
                                            as='p'
                                            fontSize={["20px", "24px", "24px", "24px", "24px", "24px"]}
                                            fontFamily='var(--founders-grotesksemibold)'
                                            fontWeight="600"
                                            color="#333333"
                                            marginBottom="15px"
                                            lineHeight={["normal"]}
                                        >
                                            Design at Tenet transcends mere planning; it's about crafting bespoke blueprints that align with your unique business, design, product, and marketing landscapes.
                                        </Text>
                                    </Flex>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        marginBottom="15px"
                                        lineHeight={["normal"]}
                                    >
                                        Our strategic approach ensures every investment is directly linked to measurable outcomes, blending insight with innovation to navigate complexities.
                                    </Text>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        lineHeight={["normal"]}
                                    >
                                        By understanding your objectives at a granular level, we tailor strategies that not only meet but exceed your goals, ensuring efficient allocation of resources for maximum impact and success.
                                    </Text>
                                </Box>
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
                                            width={"100%"}
                                        />
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel
                        padding={"0"}>
                        <Box
                            display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}
                            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap']}
                            justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end', 'flex-end']}
                            gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                            paddingLeft={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            paddingRight={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            backgroundColor={"#F5F5F5"}
                            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
                            margin={["0 auto"]}
                        >
                            <Box
                                display={["flex"]}
                                flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                                width={['100%', '100%', '100%', '100%', '100%', '100%']}
                                maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                                gap={['20px', '20px', '15px', '85px', '85px', '85px']}
                                marginBottom={["0", "0", "68px", "48px", "65px", "65px"]}
                                marginTop={["0", "0", "68px", "48px", "65px", "65px"]}
                            >
                                <Box
                                    flex="1"
                                    marginBottom={["15px", "15px", "25px", "35px", "35px", "35px"]}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                >
                                    <Flex
                                        alignItems="center"
                                        gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                    >
                                        <Text
                                            as='p'
                                            fontSize={["20px", "24px", "24px", "24px", "24px", "24px"]}
                                            fontFamily='var(--founders-grotesksemibold)'
                                            fontWeight="600"
                                            color="#333333"
                                            marginBottom="15px"
                                            lineHeight={["normal"]}
                                        >
                                            Technology at Tenet transcends mere planning; it's about crafting bespoke blueprints that align with your unique business, design, product, and marketing landscapes.
                                        </Text>
                                    </Flex>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        marginBottom="15px"
                                        lineHeight={["normal"]}
                                    >
                                        Our strategic approach ensures every investment is directly linked to measurable outcomes, blending insight with innovation to navigate complexities.
                                    </Text>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        lineHeight={["normal"]}
                                    >
                                        By understanding your objectives at a granular level, we tailor strategies that not only meet but exceed your goals, ensuring efficient allocation of resources for maximum impact and success.
                                    </Text>
                                </Box>
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
                                            width={"100%"}
                                        />
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel
                        padding={"0"}>
                        <Box
                            display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}
                            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap']}
                            justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end', 'flex-end']}
                            gap={['20px', '20px', '15px', '15px', '15px', '15px']}
                            paddingLeft={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            paddingRight={["15px", "15px", "20px", "25px", "55px", "55px"]}
                            backgroundColor={"#F5F5F5"}
                            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
                            margin={["0 auto"]}
                        >
                            <Box
                                display={["flex"]}
                                flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
                                width={['100%', '100%', '100%', '100%', '100%', '100%']}
                                maxWidth={['100%', '100%', '100%', '100%', '100%', '100%']}
                                gap={['20px', '20px', '15px', '85px', '85px', '85px']}
                                marginBottom={["0", "0", "68px", "48px", "65px", "65px"]}
                                marginTop={["0", "0", "68px", "48px", "65px", "65px"]}
                            >
                                <Box
                                    flex="1"
                                    marginBottom={["15px", "15px", "25px", "35px", "35px", "35px"]}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                >
                                    <Flex
                                        alignItems="center"
                                        gap={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                    >
                                        <Text
                                            as='p'
                                            fontSize={["20px", "24px", "24px", "24px", "24px", "24px"]}
                                            fontFamily='var(--founders-grotesksemibold)'
                                            fontWeight="600"
                                            color="#333333"
                                            marginBottom="15px"
                                            lineHeight={["normal"]}
                                        >
                                            Growth at Tenet transcends mere planning; it's about crafting bespoke blueprints that align with your unique business, design, product, and marketing landscapes.
                                        </Text>
                                    </Flex>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        marginBottom="15px"
                                        lineHeight={["normal"]}
                                    >
                                        Our strategic approach ensures every investment is directly linked to measurable outcomes, blending insight with innovation to navigate complexities.
                                    </Text>
                                    <Text
                                        as='p'
                                        fontSize={["15px", "15px", "15px", "16px", "16px", "16px"]}
                                        fontFamily='var(--founders-grotesk)'
                                        fontWeight="400"
                                        color="#333333"
                                        lineHeight={["normal"]}
                                    >
                                        By understanding your objectives at a granular level, we tailor strategies that not only meet but exceed your goals, ensuring efficient allocation of resources for maximum impact and success.
                                    </Text>
                                </Box>
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
                                            width={"100%"}
                                        />
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container >
    )
}

export default BusinessTab