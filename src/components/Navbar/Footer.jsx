import React from 'react';
import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'

import SiteLogo from '../../assets/Footer/site-logo.svg'
import OurBranchSLocation from './OurBranchSLocation';

const Footer = () => {


    return (
        <Box
            bg={'#000000'}
        >
            <OurBranchSLocation/>

            <Container
                maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]}
                paddingTop={["60px", "60px", "60px", "60px", "60px", "60px"]}
                paddingBottom={['35px','35px','35px','35px','35px','35px']}
            >
                <Box
                    display={["block", "block", "block", "flex", "flex", "flex"]}
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Box
                            maxW={["100%", "100%", "60%", "60%", "45%", "45%"]}
                            display={["flex"]}
                            flexDirection={["column"]}
                            gap={["25px", "25px", "25px", "18px", "20px", "20px"]}
                        >
                            <Text
                                as='h3'
                                fontFamily={'var(--foundersGrotesk-regular)'}
                                fontWeight={'400'}
                                fontSize={["24px", "24px", "24px", "24px", "24px", "24px"]}
                                color={'#fff'}
                            >
                                Tenet by Kodeglobe
                            </Text>
                            <Text
                                as='p'
                                fontSize={["16px", "16px", "16px", "14px", "14px", "14px"]}
                                color={'#fff'}
                                fontFamily={'var(--foundersGrotesk-regular)'}
                                fontWeight={'400'}
                                marginBottom={["24px", "24px", "24px", "18px", "20px", "20px"]}
                            >
                                A private limited company incorporated in England and Wales under company number 10063271. Registered at 1st Floor, 12-16 Clerkenwell Road,
                            </Text>
                        </Box>
                        <Box
                            display={["flex"]}
                            flexDirection={["column"]}
                            gap={["0px","0px","0px","13px","13px","13px"]}
                        >
                            <Text
                                as='p'
                                fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                fontFamily={'var(--foundersGrotesk-regular)'}
                                fontWeight={'400'}
                                color={'#fff'}
                                
                            >
                                Call us at:
                            </Text>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={["5px","5px","5px","16px","16px","16px"]}
                            >
                                <Link
                                    color={'#fff'}
                                    fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                    fontWeight={'400'}
                                    fontFamily={'var(--foundersGrotesk-regular)'}
                                    to='tel:+918318136998'
                                >
                                    India: +91-8318136998
                                </Link>
                                <Link
                                    color={'#fff'}
                                    fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                    fontWeight={'400'}
                                    fontFamily={'var(--foundersGrotesk-regular)'}
                                    to='tel:+91-8318136998'
                                >
                                    UK: +91-8318136998
                                </Link>
                                <Link
                                    color={'#fff'}
                                    fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                                    fontWeight={'400'}
                                    fontFamily={'var(--foundersGrotesk-regular)'}
                                    to='tel:+91-8318136998'
                                >
                                    USA: +91-8318136998
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        gap={["20px", "25px", "25px", "30px", "45px", "65px"]}
                        width={["100%", "100%", "100%", "35%", "35%", "35%"]}
                        marginTop={["15%", "15%", "15%", 0, 0, 0]}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            w={'100%'}
                            gap={['20px']}
                            fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                            fontFamily={'var(--foundersGrotesk-regular)'}
                            fontWeight={'400'}
                        >
                            <Link
                                color={'#ffffff'}
                            >
                                About
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Services & Solutions
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Work
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Case Studies
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Resources
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Community
                            </Link>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            w={'100%'}
                            gap={['20px']}
                            fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                            fontFamily={'var(--foundersGrotesk-regular)'}
                            fontWeight={'400'}
                        >
                            <Link
                                color={'#ffffff'}
                            >
                                Career
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Tools & Technologies
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Partner with us
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                White Label Agency
                            </Link>
                            <Link
                                color={'#ffffff'}
                            >
                                Contact us
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Flex
                    justifyContent={'space-between'}
                    marginTop={["57px", "57px", "57px", "70px", "85px", "85px"]}
                    marginBottom={["43px", "43px", "43px", "15px", "15px", "18px"]}
                    display={["block", "block", "block", "flex", "flex", "flex"]}
                >
                    <Box mb={['42px','42px','42px','0px','0px','0px']}>
                        <Text
                            as='p'
                            color={'#fff'}
                            fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
                            fontWeight={'400'}
                            fontFamily={' var(--foundersGrotesk-regular);'}
                        >
                            For any queries, reach out to us at:
                            <Link
                                href='mailto:hello@tenet.com'
                                textDecoration={'underline'}
                                fontWeight={'600'}
                            >
                                &nbsp;hello@tenet.com
                            </Link>
                        </Text>
                    </Box>
                    <Box
                        display={["block", "block", "block", "flex", "flex", "flex"]}
                        alignItems={'baseline'}
                    >
                        <Box
                            gap={["12px", "12px", "12px", "14px", "14px", "14px"]}
                            display={["block", "block", "block", "flex", "flex", "flex"]}
                            flexDirection={["row"]}
                            mb={['19px','19px','19px','0px','0px','0px']}
                        >
                            <Link
                                color={'#fff'}
                                fontSize={["14px", "14px", "14px", "14px", "14px", "14px"]}
                                fontWeight={'400'}
                                fontFamily={' var(--foundersGrotesk-regular);'}
                                marginRight={['14px']}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                color={'#fff'}
                                fontSize={["14px", "14px", "14px", "14px", "14px", "14px"]}
                                fontWeight={'400'}
                                fontFamily={' var(--foundersGrotesk-regular);'}
                                marginRight={['14px']}
                            >
                                Cookie Policy
                            </Link>
                            <Link
                                color={'#fff'}
                                fontSize={["14px", "14px", "14px", "14px", "14px", "14px"]}
                                fontWeight={'400'}
                                fontFamily={' var(--foundersGrotesk-regular);'}
                                marginRight={['14px']}
                            >
                                Terms & Conditions
                            </Link>
                        </Box>
                        <Box>
                            <Text
                                as={'p'}
                                marginLeft={["0px", "0px", "0px", "58px", "95px", "95px"]}
                                fontSize={["14px", "14px", "14px", "16px", "16px", "16px"]}
                                fontWeight={'400'}
                                color={'#fff'}
                                fontFamily={' var(--foundersGrotesk-regular);'}
                            >
                                {new Date().getFullYear()} © tenet by kodeglobe
                            </Text>
                        </Box>
                    </Box>
                </Flex>
                <Box
                    border={'1px solid'}
                    borderColor={'#fff'}
                    marginBottom={["15px", "15px", "15px", "20px", "30px", "30px"]}
                >
                </Box>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={"center"}
                >
                    <Box>
                        <Image
                            src={SiteLogo} w={['124px','124px','124px','236px','236px','236px']} h={['48px','48px','48px','91px','91px','91px']}
                        />
                    </Box>
                    <Box>
                        <Text
                            as={'h3'}
                            color={'#fff'}
                            fontSize={["36px", "36px", "36px", "36px", "71px", "71px"]}
                            fontFamily={'var(--garnett-regular);'}
                            fontWeight={'400'}
                        >
                            ©{new Date().getFullYear()}
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer
