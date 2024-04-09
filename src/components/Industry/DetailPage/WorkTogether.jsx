import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import image from "../../../assets/Strategy/workTogether.svg";

const workTogether = () => {
    const backgroundText = [
        {
            title: 'Ready to catapult your growth?',
            description: 'Explore our carefully curated solutions by outcomes that are tailored for your needs.',
            description2: 'Let’s work together',
        }
    ];
    return (
        <Container
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
            marginBottom={["50px", "50px", 0, 0, 0, 0]}
            padding={["0"]}
            backgroundImage={image}
            backgroundRepeat={["no-repeat"]}
            backgroundSize={["contain"]}
        >
            <Flex
                width={["100%", "100%", "100%", "80%", "70%", "72%"]}
                maxW={["100%", "100%", "100%", "80%", "70%", "72%"]}
                direction={['column', 'column', 'column', 'column', 'column', 'column']}
                gap={["10px", "14px", "16px", "10px", "10px", "10px"]}
                alignItems={["center"]}
                paddingTop={["60px", "80px", "90px", "100px", "110px", "120px"]}
                paddingBottom={["60px", "80px", "90px", "100px", "110px", "120px"]}
                margin={["0 auto"]}
            // paddingTop={["16px", "18px", "20px", "26px", "30px", "32px"]}
            // marginBottom={["40px", "40px", "40px", "80px", "80px", "80px"]}
            >
                <Text
                    fontSize={['18px', '20px', '30px', '35px', '40px', '48px']}
                    fontFamily='var(--garnett-regular)'
                    color={["#ffffff"]}
                    fontWeight={"400"}
                    lineHeight={"normal"} >
                    {backgroundText[0].title}
                </Text>
                <Text
                    fontSize={['16px', '16px', '16px', '18px', '18px', '18px']}
                    fontFamily='var(--foundersGrotesk-normal)'
                    color={["#ffffff"]}
                    fontWeight={["400"]}
                    lineHeight={"normal"}
                    width={["80%", "80%", "80%", "40%", "40%", "40%"]}
                    textAlign={["center"]}
                >
                    {backgroundText[0].description}
                </Text>
                <Text
                    fontSize={['20px', '35px', '45px', '54px', '60px', '66px']}
                    fontFamily='var(--garnett-semibold)'
                    color={["#ffffff"]}
                    fontWeight={["600"]}
                    lineHeight={"normal"}
                    textDecoration={["underline"]}
                >
                    {backgroundText[0].description2}
                </Text>
            </Flex>
        </Container>
    );
};
export default workTogether;