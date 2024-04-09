import React from 'react';
import { Box, Container, Image, Text, Flex, Link, Input, Button, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Footer/newsLetter/logo.svg';

const Footer = () => {
    return (
        <Box
            paddingTop={["40px", "40px", "40px", "45px", "60px", "80px"]}
            paddingBottom={["80px", "80px", "80px", "80px", "80px", "80px"]}
        >
            <Container maxWidth={["90%", "90%", "90%", "85%", "85%", "85%"]} borderTop={'1px'} borderTopColor={'#D0D5DD'} padding={0}>
                <Flex
                    flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
                    paddingTop={["40px", "40px", "40x", "45px", "70px", "73px"]}
                    justifyContent={['flex-start', 'flex-start', 'flex-start', 'space-between', 'space-between', 'space-between']}
                >
                    <Box
                        w={['100%', '100%', '100%', '50%', '50%', '50%']}
                        justifyContent={["flex-start"]}
                    >
                        <Box>
                            <Image
                                src={logo}
                            />
                            <Text
                                width={["100%", "100%", "100%", "80%", "60%", "60%"]}
                                fontFamily={'var(--garnett-regular);'}
                                fontWeight={400}
                                paddingTop={["25px", "25px", "25px", "30px", "30px", "30px"]}
                                paddingBottom={["20px", "25px", "25px", "30px", "30px", "30px"]}
                                fontSize={['16px', '16px', '16px', '18px', '20px', '20px']}
                                lineHeight={["normal"]}
                            >
                                Brands, Experiences & Creative Collaborations
                            </Text>
                        </Box>
                        <Flex
                            gap={["15px", "20px", "24px", "24px", "24px", "24px"]}
                        >
                            <Link><Icon as={FaFacebook} boxSize={6} /></Link>
                            <Link><Icon as={FaInstagram} boxSize={6} /></Link>
                            <Link><Icon as={FaLinkedin} boxSize={6} /></Link>
                            <Link><Icon as={FaYoutube} boxSize={6} /></Link>
                        </Flex>
                    </Box>
                    <Box
                        w={['100%', '100%', '100%', '50%', '40%', '35%']}
                        justifyContent={["flex-start"]}
                    >
                        <Box>
                            <Text
                                as='h2'
                                fontFamily={'var(--garnett-regular);'}
                                fontWeight={400}
                                fontSize={['18px', '20px', '25px', '30px', '32px']}
                                lineHeight={["normal"]}
                                pt={['40px','40px','40px','0px','0px','0px']}
                                pb={['17px','17px','17px','20px','20px','20px']}
                            >
                                Sign up for our newsletter — all fam, no spam
                            </Text>
                            <Text
                                as='p'
                                fontSize={['14px', '14px', '14px', '14px', '14px', '14px']}
                                lineHeight={["normal"]}
                                fontFamily={'var(--foundersGrotesk-regular)'}
                                fontWeight={400}
                            >
                                We promise to share only 1-2 emails a week no more unless we have something super exciting to share that we can’t just keep it in ourselves.
                            </Text>
                        </Box>
                        <Box
                            display={'flex'}
                            mt={'30px'}
                            justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-end', 'flex-end', 'flex-end']}
                        >
                            <Input
                                type='text'
                                placeholder='Email Address'
                                borderRadius='none'
                                bg="#F5F5F5"
                                color="#000"
                                border="none"
                                borderBottom="1px solid #B5B5B5"
                                _placeholder={{ color: "#B5B5B5" }}
                            />

                            <Button
                                type='submit'
                                fontFamily={'var(--foundersGrotesk-regular)'}
                                fontWeight={'400'}
                                borderRadius='none'
                                bg="#0057FF"
                                color="#FFF"
                                _hover={{ bg: "#0057FF", color: "#ffffff" }}
                            >
                                Submit
                            </Button>

                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
