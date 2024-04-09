import React from 'react';
import { Box, Container, Flex, Text, Image, Input, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import bannerImg from '../../../assets/Solution/heroSection.svg';
import heroBg from '../../../assets/Solution/heroBG.svg';

const heroSection = () => {
    const bannerText = [
        {
            title: 'Our Growth Booster Solutions',
            description: "At Kodeglobe, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.",
        }
    ];
    return (
        <Box backgroundImage={heroBg}
            backgroundSize={["cover"]}
            backgroundRepeat={["no-repeat"]}
            p={['23px 0', '23px 0', '23px 0', '35px 0 53px', '45px 0 53px', '56px 0 53px']}
            height={["auto", "auto", "50vh", "75vh", "80vh", "95vh"]}

        >
            <Container
                width={["100%", "100%", "100%", "94%", "94%", "94%"]}
                maxW={["100%", "100%", "100%", "94%", "94%", "94%"]}
                marginBottom={["50px", "50px", 0, 0, 0, 0]}
            >
                <Breadcrumb spacing="8px" separator=">" color={["#ffffff"]}
                // marginBottom={["45px", "45px", "55px", "75px", "80px", "70px"]}
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
                            fontWeight={"400"}>Solution</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#"
                            fontSize={['14px', '14px', '16px', '16px', '16px', '16px']}
                            color={["#ffffff"]}
                            as='p'
                            fontFamily='var(--foundersGrotesk-light)'
                            fontWeight={"400"}>Solution Detail Page</BreadcrumbLink>
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
                                    fontSize={['26px', '30px', '36px', '40px', '50px', '58px']}
                                    m="0 0 23px 0"
                                    fontFamily='var(--garnett-semibold)'
                                    lineHeight={["normal"]}
                                >
                                    {bannerText[0].title}
                                </Text>
                                <Text
                                    fontSize={['14px', '14px', '16px', '18px', '20px', '23px']}
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
                                    <Button
                                        w={['100%', '100%', '100%', '146px', '146px', '146px']}
                                        fontSize="16px"
                                        bg="#0057FF"
                                        color="#ffffff"
                                        borderRadius="0"
                                        fontFamily="var(--foundersGrotesk-light)"
                                        fontWeight="400"
                                        justifyContent="center"
                                        display="flex"
                                        alignItems="center"
                                        textAlign="center"
                                        height="42px"
                                        _hover={{ bg: "#0057FF", color: "#ffffff" }}
                                    >
                                        Let's work together
                                    </Button>
                                </Flex>

                            </Box>
                        </Box>
                    </Box>
                    <Box
                        w={['100%', '100%', '100%', '35%']}
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