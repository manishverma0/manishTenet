import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react';

// Clients Logo 
import logo1 from "../../assets/Home/clientsLogo/logo1.svg"
import logo2 from "../../assets/Home/clientsLogo/logo2.svg"
import logo3 from "../../assets/Home/clientsLogo/logo3.svg"
import logo4 from "../../assets/Home/clientsLogo/logo4.svg"
import logo5 from "../../assets/Home/clientsLogo/logo5.svg"
import logo6 from "../../assets/Home/clientsLogo/logo6.svg"
import logo7 from "../../assets/Home/clientsLogo/logo7.svg"
import logo8 from "../../assets/Home/clientsLogo/logo8.svg"
import logo9 from "../../assets/Home/clientsLogo/logo9.svg"
import logo10 from "../../assets/Home/clientsLogo/logo10.svg"
import logo11 from "../../assets/Home/clientsLogo/logo11.svg"
import logo12 from "../../assets/Home/clientsLogo/logo12.svg"
import logo13 from "../../assets/Home/clientsLogo/logo13.svg"
import logo14 from "../../assets/Home/clientsLogo/logo14.svg"
import logo15 from "../../assets/Home/clientsLogo/logo15.svg"
import logo16 from "../../assets/Home/clientsLogo/logo16.svg"
import logo17 from "../../assets/Home/clientsLogo/logo17.svg"
import logo18 from "../../assets/Home/clientsLogo/logo18.svg"
import logo19 from "../../assets/Home/clientsLogo/logo19.svg"
import logo20 from "../../assets/Home/clientsLogo/logo20.svg"

const ClientsLogo = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20];
    return (
        <Box
            // padding={["80px 0", "80px 0", "80px 0", "80px 0", "80px 0", "80px 0"]}
            width={["90%", "90%", "90%", "90%", "90%", "83%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            margin={["0 auto"]}
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
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
                    >Our Clients
                    </Text>
                    <Text
                        as='p'
                        m='0px'
                        fontSize={["17px", "17px", "20px", "20px", "20px", "20px"]}
                        maxW={["424px", "424px", "424px", "324px", "324px", "324px"]}
                        color={"#333333"}
                        fontFamily="var(--foundersGrotesk-light)"
                        fontWeight="400"
                        lineHeight={["normal"]}
                    >
                        Explore our carefully curated solutions by outcomes that are tailored for your needs.
                    </Text>
                </Box>
                <Flex
                    flexWrap="wrap"
                    justifyContent={["center", "center", "space-between", "space-between", "space-between", "space-between"]} 
                    background={"#F5F5F5"}
                    padding={["60px 40px 60px 40px", "60px 40px 60px 40px", "80px 150px 80px 150px", "80px 150px 80px 150px", "80px 150px 80px 150px", "77px 194px 77px 194px"]}
                    gap={["25px", "30px", "30px", "45px", "45px", "45px"]}
                >
                    {logos.map((logo, index) => (
                        <Box
                            key={index}
                            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                            justifyContent={["center", "center", "center", "center", "center", "center"]}
                            width={["35%", "35%", "15%", "15%", "15%", "15%"]} 
                            marginBottom={["20px", "20px", "0px", "0px", "0px", "0px"]} 
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
