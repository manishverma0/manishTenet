import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

const SolutionParagraph = () => {
    const paragraphText = [
        {
            title: 'Our solutions are trusted by companies all over the world resulted in delivering impact to more than 2.M users',
            description: "We address complex problem statements & turn them into holistic experiences.",
        }
    ];
    return (
        <Container
            background={["#000000"]}
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
            paddingTop={["35px", "45px", "55px", "75px", "95px", "128px"]}
            paddingBottom={["35px", "45px", "55px", "75px", "95px", "128px"]}
        >
            <Flex
                direction={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}
                justifyContent={["center"]}
            >
                <Box
                    w={['100%', '100%', '100%', '57%', '67%', '70%']}
                    color='#FFFFFF'
                    display="flex"
                    flexDirection="column"
                    justifyContent="center">
                    <Box>
                        <Text
                            fontSize={['25px', '30px', '35px', '35px', '40px', '48px']}
                            fontFamily='var(--garnett-regular)'
                            fontWeight={["400"]}
                            lineHeight={["normal"]}
                            textAlign={["center"]}
                            marginBottom={["10px", "15px", "15px", "20px", "25px", "30px"]}
                        >
                            {paragraphText[0].title}
                        </Text>
                        <Text
                            fontSize={['14px', '16px', '18px', '22px', '25px', '32px']}
                            w={['100%', '100%', '100%', '57%', '67%', '65%']}
                            fontFamily='var(--foundersGrotesk-light)'
                            fontWeight={"400"}
                            lineHeight={["normal"]}
                            textAlign={["center"]}
                            margin={["0 auto"]}
                        >
                            {paragraphText[0].description}
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
};
export default SolutionParagraph;