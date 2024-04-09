import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react';

// Clients Logo 
import logo1 from "../../../assets/Commen/ClientsLogos/logo1.svg"
import logo2 from "../../../assets/Commen/ClientsLogos/logo2.svg"
import logo3 from "../../../assets/Commen/ClientsLogos/logo3.svg"
import logo4 from "../../../assets/Commen/ClientsLogos/logo4.svg"
import logo5 from "../../../assets/Commen/ClientsLogos/logo5.svg"
import logo6 from "../../../assets/Commen/ClientsLogos/logo6.svg"
import logo7 from "../../../assets/Commen/ClientsLogos/logo7.svg"
import logo8 from "../../../assets/Commen/ClientsLogos/logo8.svg"
import logo9 from "../../../assets/Commen/ClientsLogos/logo9.svg"
import logo10 from "../../../assets/Commen/ClientsLogos/logo10.svg"
import logo11 from "../../../assets/Commen/ClientsLogos/logo11.svg"
import logo12 from "../../../assets/Commen/ClientsLogos/logo12.svg"
import logo13 from "../../../assets/Commen/ClientsLogos/logo13.svg"
import logo14 from "../../../assets/Commen/ClientsLogos/logo14.svg"
import logo15 from "../../../assets/Commen/ClientsLogos/logo15.svg"
import logo16 from "../../../assets/Commen/ClientsLogos/logo16.svg"
import logo17 from "../../../assets/Commen/ClientsLogos/logo17.svg"
import logo18 from "../../../assets/Commen/ClientsLogos/logo18.svg"
import logo19 from "../../../assets/Commen/ClientsLogos/logo19.svg"
import logo20 from "../../../assets/Commen/ClientsLogos/logo20.svg"
 

const ClientsLogo = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20];
    return (
        <Box
            // padding={["80px 0", "80px 0", "80px 0", "80px 0", "80px 0", "80px 0"]}
            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            margin={["0 auto"]}
            p={['50px 0 50px','50px 0 50px','50px 0 50px','80px 0 80px','80px 0 80px','80px 0 80px']}>
            <Container
                maxWidth={["100%", "100%", "100%", "100%", "100%", "100%"]}
                margin={["0 auto"]}
            >
                <Box
                    marginBottom={["58px", "58px", "68px", "48px", "40px", "40px"]}
                    display={["block", "block", "block", "flex", "flex", "flex"]}
                    justifyContent={["center", "center", "center", "space-between", "space-between", "space-between"]}
                    alignItems={["flex-start", "flex-start", "center", "center", "center", "center"]}
                    flexDirection={["column", "column", "row", "row", "row", "row"]}
                    textAlign={['center','center','center','center','center','center']}
                >

                    <Text
                        as='h3'
                        m='0px'
                        fontSize={["35px", "35px", "40px", "48px", "48px", "48px"]}
                        fontFamily='var(--garnett-regular)'
                        color={"#000000"}
                    >Our Clients
                    </Text>
                    <Text
                        as='p'
                        fontSize={["17px", "17px", "20px", "20px", "20px", "20px"]}
                        maxW={["424px", "424px", "424px", "324px", "324px", "324px"]}
                        m={['0 auto','0 auto','0 auto','0','0','0']}
                        color={"#333333"}
                        fontFamily="var(--foundersGrotesk-light)"
                        fontWeight="400"
                        lineHeight={["normal"]}
                        pt={['28px','28px','28px','0px','0px','0px']}
                    >
                        Explore our carefully curated solutions by outcomes that are tailored for your needs.
                    </Text>
                </Box>
                <Flex
                    flexWrap="wrap"
                    justifyContent={["center", "center", "space-around", "space-around", "space-around", "space-around"]} 
                    background={"#F5F5F5"}
                    padding={["0px 0px 0px 0px", "0px 0px 0px 0px", "0px 0px 0px 0px", "80px 150px 80px 150px", "80px 150px 80px 150px", "77px 194px 77px 194px"]}
                    gap={["25px", "30px", "30px", "45px", "45px", "45px"]}
                >
                    {logos.map((logo, index) => (
                        <Box
                            key={index}
                            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                            justifyContent={["center", "center", "center", "center", "center", "center"]}
                            width={["25%", "25%", "25%", "15%", "15%", "15%"]} 
                            marginBottom={["60px", "60px", "60px", "0px", "0px", "0px"]} 
                        >
                            <img src={logo} alt={`Logo ${index + 1}`} />
                        </Box>
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}
export default ClientsLogo
