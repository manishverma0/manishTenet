import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

import img1 from "../../assets/Home/clientAbout/1.svg";
import img2 from "../../assets/Home/clientAbout/2.svg";
import img3 from "../../assets/Home/clientAbout/3.svg";
import logo from "../../assets/Home/clientAbout/logo.svg";

const ClientSay = () => {
    return (
        <Box
            background={"linear-gradient(360deg, #F5F5F5 0%, rgba(245, 245, 245, 0) 100%)"}
            padding={["80px 0", "80px 0", "80px 0", "80px 0", "80px 0", "80px 0"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            flexDirection="column"
            alignItems="center"
            gap={["20px", "20px", "20px", "35px", "35px", "35px"]}
        >
            <Container
                maxWidth={["90%", "90%", "90%", "90%", "90%", "83%"]}
            >
                <Text
                    as='h3'
                    m='0px'
                    fontSize={["24px", "26px", "28px", "30px", "36px", "36px"]}
                    fontFamily='var(--garnett-regular)'
                    color={"#000000"}
                >
                    What are clients has to say about us
                </Text>
            </Container>

            <Flex
                flexDirection={["column", "row"]}
                justify="space-between"
                align={["stretch", "center"]}
                wrap="wrap"
                mt={[8, 0]}
                width={["87%", "87%", "87%", "88%", "88%", '80%']}
                gap={["20px", "20px", "20px", "0", "0", "0"]}
            >
                <Box
                    backgroundImage={img1}
                    flexBasis={["100%", "31%"]}
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    flexDirection={["column", "column", "column", "column", "column", "column"]}
                    padding={"15px"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"cover"}
                >
                    <Flex justifyContent="flex-end" mb={4}
                        marginTop={["2%", "2%", "3%", "5%", "5%", "5%"]}
                        marginRight={["15px", "15px", "15px", "20px", "25px", "40px"]}
                    >
                        <img src={logo} width="20%" />
                    </Flex>
                    <Text
                        marginTop={["20px", "20px", "20px", "40px", "40px", "40px"]}
                        marginBottom={["85px", "85px", "85px", "95px", "100px", "120px"]}
                        fontSize={["18px", "18px", "18px", "20px", "20px", "20px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#30054A"}
                        marginRight={["15px", "15px", "15px", "20px", "20px", "20px"]}
                        marginLeft={["10px"]}
                        lineHeight={'normal'}
                    >
                        The end result Tenet has created is bold, brave and very IROS. Mission accomplished.”
                    </Text>
                    <Text
                        fontSize={["15px", "16px", "16px", "18px", "18px", "18px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#30054A"}
                        marginLeft={["10px"]}
                    >
                        Jason Momoa
                    </Text>
                    <Text
                        fontSize={["16px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#30054A"}
                        marginLeft={["10px"]}
                    >
                        Design Director, Gartner
                    </Text>
                </Box>

                <Box
                    backgroundImage={img2}
                    flexBasis={["100%", "30%"]}
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    flexDirection={["column", "column", "column", "column", "column", "column"]}
                    padding={"15px"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"cover"}
                >
                    <Flex justifyContent="flex-end" mb={4}
                        marginTop={["2%", "2%", "3%", "5%", "5%", "5%"]}
                        marginRight={["15px", "15px", "15px", "20px", "25px", "25px"]}
                    >
                        <img src={logo} width="20%" />
                    </Flex>
                    <Text
                        marginTop={["20px", "20px", "20px", "40px", "40px", "40px"]}
                        marginBottom={["85px", "85px", "85px", "95px", "100px", "120px"]}
                        fontSize={["18px", "18px", "18px", "20px", "20px", "20px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#860038"}
                        marginRight={["15px", "15px", "15px", "10px", "10px", "10px"]}
                        marginLeft={["10px"]}
                        lineHeight={'normal'}
                    >
                        The end result Tenet has created is bold, brave and very IROS. Mission accomplished.”
                    </Text>
                    <Text
                        fontSize={["15px", "16px", "16px", "18px", "18px", "18px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#860038"}
                        marginLeft={["10px"]}
                    >
                        Jason Momoa
                    </Text>
                    <Text
                        fontSize={["16px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#860038"}
                        marginLeft={["10px"]}
                    >
                        Design Director, Gartner
                    </Text>
                </Box>

                <Box
                    backgroundImage={img3}
                    flexBasis={["100%", "32%"]}
                    display={["flex", "flex", "flex", "flex", "flex", "flex"]}
                    flexDirection={["column", "column", "column", "column", "column", "column"]}
                    padding={"15px"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"cover"}
                >
                    <Flex justifyContent="flex-end" mb={4}
                        marginTop={["2%", "2%", "3%", "5%", "5%", "5%"]}
                        marginRight={["15px", "15px", "15px", "20px", "25px", "55px"]}
                    >
                        <img src={logo} width="20%" />
                    </Flex>
                    <Text
                        marginTop={["20px", "20px", "20px", "40px", "40px", "40px"]}
                        marginBottom={["85px", "85px", "85px", "95px", "100px", "120px"]}
                        fontSize={["18px", "18px", "18px", "20px", "20px", "20px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#00342B"}
                        marginRight={["15px", "15px", "15px", "20px", "20px", "35px"]}
                        marginLeft={["10px"]}
                        lineHeight={'normal'}
                    >
                        The end result Tenet has created is bold, brave and very IROS. Mission accomplished.”
                    </Text>
                    <Text
                        fontSize={["15px", "16px", "16px", "18px", "18px", "18px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#00342B"}
                        marginLeft={["10px"]}
                    >
                        Jason Momoa
                    </Text>
                    <Text
                        fontSize={["16px"]}
                        fontFamily='var(--founders-grotesk);'
                        fontWeight={"400"}
                        color={"#00342B"}
                        marginLeft={["10px"]}
                    >
                        Design Director, Gartner
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}
export default ClientSay;
