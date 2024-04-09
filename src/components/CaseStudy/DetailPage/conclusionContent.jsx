import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

const conclusionContent = () => {
    const backgroundText = [
        {
            title: 'After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working',
        }
    ];
    return (
        <Container
            paddingTop={["60px", "60px", "60px", "80px", "80px", "80px"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
            marginBottom={["50px", "50px", 0, 0, 0, 0]}
            padding={["0"]}
            paddingBottom={["60px", "60px", "60px", "80px", "80px", "80px"]}
        >
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'row', 'row', 'row', 'row']}
                gap={["55px", "55px", "55px", "80px", "140px", "160px"]}
                alignItems={["baseline"]}
                margin={["0 auto"]}
            // paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
            // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
            >
                <Text
                    as="h1"
                    fontSize={['18px', '20px', '20px', '20px', '20px', '20px']}
                    fontFamily='var(--foundersGrotesk-medium)'
                    color={["#860038"]}
                    fontWeight={["500"]}
                    lineHeight={"normal"} >
                    CONCLUSION
                </Text>
                <Text
                    as="h1"
                    fontSize={['18px', '20px', '24px', '24px', '30px', '26px']}
                    fontFamily='var(--garnett-regular)'
                    color={["#333333"]}
                    fontWeight={["400"]}
                    lineHeight={"normal"}
                >
                    {backgroundText[0].title}
                </Text>
            </Flex>
        </Container>
    );
};
export default conclusionContent;