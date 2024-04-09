import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

const OurRole = () => {
    return (
        <Box>
            <Container
                width={["100%", "100%", "100%", "94%", "90%", "83%"]}
                maxW={["100%", "100%", "100%", "94%", "90%", "83%"]}
                paddingTop={["35px", "35px", "48px", "55px", "63px", "63px"]}
                marginBottom={["50px", "50px", 0, 0, 0, 0]}
                background={["#F5F5F5"]}
                paddingLeft={["25px", "35px", "35px", "40px", "45px", "49px"]}
                paddingRight={["25px", "35px", "35px", "40px", "45px", "49px"]}
                position={["relative"]}
                paddingBottom={["35px", "35px", "48px", "55px", "63px", "69px"]}
            >
                <Flex
                    width={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
                    direction={['column', 'column', 'row', 'row', 'row', 'row']}
                    gap={["15px", "15px", "15px", "20px", "20px", "20px"]}
                    alignItems={["flex-start"]}
                    margin={["0 auto"]}
                >
                    <Text
                        as="h1"
                        fontSize={['18px', '20px', '30px', '40px', '40px', '40px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#860038"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '50%', '50%', '50%', '50%']} >
                        Our Role as your trusted partner
                    </Text>
                    <Text
                        as="h1"
                        fontSize={['14px', '16px', '16px', '18px', '18px', '18px']}
                        fontFamily='var(--garnett-regular)'
                        color={["#333333"]}
                        fontWeight={["400"]}
                        lineHeight={"normal"}
                        width={['100%', '100%', '50%', '50%', '50%', '50%']}
                    >
                        Position statement with the description<br /><br />
                        We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through. We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through. We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through. We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.
                    </Text>
                </Flex>
            </Container >
        </Box>
    );
};

export default OurRole;
