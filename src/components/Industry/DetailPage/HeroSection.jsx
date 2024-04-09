import React from 'react';
import { Box, Container, Flex, Text, Image, Input, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import bannerImg from '../../../assets/Industry/heroSection.svg';

const heroSection = () => {
    const bannerText = [
        {
            title: 'E-commerce Solutions',
            description: "We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.",
        }
    ];
    return (
        <Box bg='#00342B'
            p={['23px 0', '23px 0', '23px 0', '35px 0 53px', '45px 0 53px', '56px 0 53px']}
            height={["auto", "auto", "50vh", "75vh", "80vh", "95vh"]}

        >
            <Container
                width={["100%", "100%", "100%", "94%", "94%", "94%"]}
                maxW={["100%", "100%", "100%", "94%", "94%", "94%"]}
                marginBottom={["50px", "50px", 0, 0, 0, 0]}
            >
                <Breadcrumb spacing="8px" separator=">" color={["#ffffff"]}
                marginBottom={["45px", "45px", "55px", "75px", "80px", "70px"]}
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
                >
                    <Box
                        w={['100%', '100%', '100%', '57%', '57%', '57%']}
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
                                    fontSize={['36px', '36px', '56px', '70px', '85px', '96px']}
                                    m="0 0 23px 0"
                                    fontFamily='var(--garnett-semibold)'
                                    lineHeight={["normal"]}
                                >
                                    {bannerText[0].title}
                                </Text>
                                <Text
                                    fontSize={['14px', '14px', '16px', '18px', '20px', '24px']}
                                    m="0 0 30px 0"
                                    as='p'
                                    fontFamily='var(--foundersGrotesk-light)'
                                    fontWeight={"400"}
                                    lineHeight={["normal"]}
                                >
                                    {bannerText[0].description}
                                </Text>
                            </Box>
                            <Box maxW={['100%', '100%', '100%', '60%', '60%', '60%']}>
                                <Flex direction={['row', 'row', 'row', 'row', 'row', 'row']} alignItems="center">
                                    <Input
                                        bg="#00763D"
                                        w={['100%', '100%', '100%', '288px', '288px', '288px']}
                                        h="42px"
                                        borderBottom="2.4px solid #ffffff"
                                        borderTop="2px #0036C2"
                                        borderLeft="2px #0036C2"
                                        borderRight="2px #0036C2"
                                        borderRadius="0"
                                        placeholder="Email Address"
                                        _placeholder={{ color: "#fff", fontFamily: "var(--foundersGrotesk-light)", fontWeight: "400", fontSize: "20px" }}
                                    />
                                    <Button
                                        w={['100%', '100%', '100%', '146px', '146px', '176px']}
                                        fontSize="16px"
                                        bg="#00342B"
                                        color="#ffffff"
                                        border="2.4px solid #ffffff"
                                        borderRadius="0"
                                        fontFamily="var(--foundersGrotesk-light)"
                                        fontWeight="400"
                                        justifyContent="center"
                                        display="flex"
                                        alignItems="center"
                                        textAlign="center"
                                        height="42px"
                                        _hover={{ bg: "#00342B", color: "#ffffff", border: "2.4px solid #ffffff" }}
                                    >
                                        Request Consultation
                                    </Button>
                                </Flex>

                            </Box>
                        </Box>
                    </Box>
                    <Box
                        w={['100%', '100%', '100%', '43%']}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Image
                            src={bannerImg}
                            w='100%'
                            h="100%"
                            objectFit="cover"
                            alt="Hero Image" />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};
export default heroSection;