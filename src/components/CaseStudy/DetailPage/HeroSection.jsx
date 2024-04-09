import React from 'react';
import { Box, Container, Flex, Text, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import image from "../../../assets/CaseStudy/CaseStudyDetail/heroSection.svg";

const heroSection = () => {
    const bannerText = [
        {
            title: 'We are a strategic design & tech company championing hearts  through world-class deliveries.',
            description: "At Kodeglobe, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.",
        }
    ];
    return (
        <Box position={["relative"]} height={["auto", "auto", "50vh", "75vh", "120vh", "155vh"]}>
            <Box bg='#3E001A'
                p={['23px 0', '23px 0', '33px 0', '45px 0 53px', '50px 0 53px', '56px 0 53px']}
                height={["auto", "auto", "50vh", "75vh", "110vh", "120vh"]}
                
            >
                <Container
                    width={["100%", "100%", "100%", "94%", "94%", "94%"]}
                    maxW={["100%", "100%", "100%", "94%", "94%", "94%"]}
                    marginBottom={["50px", "50px", 0, 0, 0, 0]}
                >
                    <Breadcrumb spacing="8px" separator=">" color={["#ffffff"]}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#"
                                fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                                color={["#ffffff"]}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#"
                                fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                                color={["#ffffff"]}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}>Case Studies</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#"
                                fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                                color={["#ffffff"]}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}>Case Study Name</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex
                        direction={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}
                        gap={["55px", "55px", "55px", "0", "0", "0"]}
                        paddingTop={["26px", "30px", "40px", "46px", "56px", "66px"]}
                        marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
                    >
                        <Box
                            w={['100%', '100%', '100%', '83%', '83%', '83%']}
                            color='#FFFFFF'
                            display="flex"
                            flexDirection="column"
                            justifyContent="center">
                            <Box>
                                <Box
                                    maxW={['100%', '100%', '100%', '90%', '90%', '90%']}
                                >
                                    <Text
                                        as="h1"
                                        fontSize={['36px', '36px', '36px', '50px', '54px', '58px']}
                                        m="0 0 23px 0"
                                        fontFamily='var(--garnett-semibold)'
                                        color={["#ffffff"]}
                                        fontWeight={["400"]}
                                        lineHeight={"normal"}
                                    >
                                        {bannerText[0].title}
                                    </Text>
                                    <Text
                                        width={['100%', '100%', '100%', '90%', '80%', '75%']}
                                        fontSize={['14px', '14px', '16px', '18px', '20px', '23px']}
                                        m="0 0 30px 0"
                                        as='p'
                                        fontFamily='var(--foundersGrotesk-light)'
                                        fontWeight={"400"}
                                        lineHeight={"normal"}
                                    >
                                        {bannerText[0].description}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Text
                                fontSize={['14px', '14px', '16px', '18px', '20px', '20px']}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                marginBottom={["8px"]}
                            >
                                Industry
                            </Text>
                            <Text
                                fontSize={['10px', '12px', '12px', '12px', '12px', '14px']}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                background={["#860038"]}
                                border={["1px solid #E0005E"]}
                                width={["fit-content"]}
                                padding={["8px"]}
                                marginBottom={["20px", "20px", "20px", "30px", "34px", "34px"]}
                            >
                                Industry Name
                            </Text>
                            <Text
                                fontSize={['14px', '14px', '16px', '18px', '20px', '20px']}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                marginBottom={["8px"]}
                            >
                                Services Provided
                            </Text>
                            <Flex
                                gap={["12px"]}>
                                <Text
                                    fontSize={['10px', '12px', '12px', '12px', '12px', '14px']}
                                    as='p'
                                    fontFamily='var(--foundersGrotesk-light)'
                                    fontWeight={"400"}
                                    color={"#ffffff"}
                                    // background={["#860038"]}
                                    border={["1px solid #E0005E"]}
                                    width={["fit-content"]}
                                    padding={["8px"]}
                                    marginBottom={["20px", "20px", "20px", "30px", "34px", "34px"]}
                                >
                                    Packaging
                                </Text>
                                <Text
                                    fontSize={['10px', '12px', '12px', '12px', '12px', '14px']}
                                    as='p'
                                    fontFamily='var(--foundersGrotesk-light)'
                                    fontWeight={"400"}
                                    color={"#ffffff"}
                                    background={["#860038"]}
                                    border={["1px solid #E0005E"]}
                                    width={["fit-content"]}
                                    padding={["8px"]}
                                    marginBottom={["20px", "20px", "20px", "30px", "34px", "34px"]}
                                >
                                    Packaging 2
                                </Text>
                            </Flex>
                            <Text
                                fontSize={['10px', '12px', '12px', '12px', '12px', '14px']}
                                as='p'
                                fontFamily='var(--foundersGrotesk-light)'
                                fontWeight={"400"}
                                color={"#ffffff"}
                                // background={["#860038"]}
                                border={["1px solid #E0005E"]}
                                width={["fit-content"]}
                                padding={["8px"]}
                                marginBottom={["20px", "20px", "20px", "30px", "34px", "34px"]}
                            >
                                Mobile App Development
                            </Text>
                            <Flex
                                gap={["12px"]}>
                                <Text
                                    fontSize={['10px', '12px', '12px', '12px', '12px', '14px']}
                                    as='p'
                                    fontFamily='var(--foundersGrotesk-light)'
                                    fontWeight={"400"}
                                    color={"#ffffff"}
                                    // background={["#860038"]}
                                    border={["1px solid #E0005E"]}
                                    width={["fit-content"]}
                                    padding={["8px"]}
                                //  marginBottom={["20px", "20px", "20px", "30px", "34px", "34px"]}
                                >
                                    Service 1
                                </Text>
                                <Text
                                    fontSize={['10px', '12px', '12px', '12px', '12px', '14px']}
                                    as='p'
                                    fontFamily='var(--foundersGrotesk-light)'
                                    fontWeight={"400"}
                                    color={"#ffffff"}
                                    // background={["#860038"]}
                                    border={["1px solid #E0005E"]}
                                    width={["fit-content"]}
                                    padding={["8px"]}
                                // marginBottom={["20px", "20px", "20px", "30px", "34px", "34px"]}
                                >
                                    Service 2
                                </Text>
                            </Flex>
                        </Box>

                    </Flex>
                    <Flex justifyContent={["center"]}>
                        <Box position="absolute">
                        <Image
                            src={image}
                        />
                    </Box>
                    </Flex>
                    
                </Container>
            </Box>
        </Box>
    );
};
export default heroSection;