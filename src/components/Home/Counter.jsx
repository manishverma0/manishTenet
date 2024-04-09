import { Box, Center, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    const counterNumCss = {
        color: 'white',
        marginBottom: '12px',
        fontFamily: 'var(--garnett-semibold);',
        textAlign: 'Center',
    }
    const conterNumTitle = {
        color: '#fff',
        m: '0px',
        textAlign: 'Center',
    }
    const counterNumDescription = {
        color: '#fff',
        textAlign: 'Center',
    }
    const grids = {
        display: 'grid',
        gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(2, 1fr)', ' repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)'],
    }


    return (
        <Box
            bg="#000000"
            padding={["55px 0 84px 0", "55px 0 84px 0", "55px 0 84px 0", "75px 0 84px 0", "75px 0 84px 0", "75px 0 84px 0"]}
        >
            <Box
                marginBottom={['35px', '35px', '35px', '15px', '15px', '15px']}
            >
                <Center>
                    <Text
                        as='h2'
                        fontSize={['24px', '24px', '24px', '28px,', '32px', '32px']}
                        color='#fff'
                        fontFamily="var(--foundersGrotesk-light)"
                        fontWeight="400"
                    >
                        Impact Created in Numbers
                    </Text>
                </Center>
            </Box>
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
            >
                {counterOn &&
                    <Box
                        maxW='990px'
                        m='0 auto'
                        display={["flex"]}
                        flexDirection={["column", "column", "row", "row", "row", "row"]}
                        justifyContent={["space-between", "space-between", "space-between", "space-between", "space-between", "space-between"]} width={["75%", "75%", "75%", "100%", "100%", "100%"]}
                    >
                        <Flex direction={["column", "column", "row", "row", "row", "row"]} gap={["20px", "20px", "20px", "20px", "20px", "20px"]} flexWrap="wrap" alignItems={["flex-start", "flex-start", "baseline", "baseline", "baseline", "baseline"]}>
                            <Box flex="1">
                                <Text
                                    as='h2'
                                    sx={counterNumCss}
                                    fontSize={["32px", "32px", "40px", "52px", "64px", "64px"]}
                                >
                                    <Countup
                                        start={0}
                                        end={150}
                                        duration={2}
                                        delay={0.5}
                                    />
                                    +
                                </Text>
                                <Text
                                    as='h3'
                                    sx={conterNumTitle}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["15px", "18px", "20px", "23px", "23px", "23px"]}
                                >
                                    Solutions Delivered
                                </Text>
                                <Text
                                    as='p'
                                    sx={counterNumDescription}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                                    position={"relative"}
                                    top={"-8px"}
                                >
                                    for our clients & partners
                                </Text>
                            </Box>
                        </Flex>
                        <Flex direction={["column", "column", "row", "row", "row", "row"]} gap={["20px", "20px", "20px", "20px", "20px", "20px"]} flexWrap="wrap" alignItems={["flex-end", "flex-end", "baseline", "baseline", "baseline", "baseline"]}>
                            <Box flex="1">
                                <Text
                                    as='h2'
                                    sx={counterNumCss}
                                    fontSize={["32px", "32px", "40px", "52px", "64px", "64px"]}
                                >
                                    <Countup
                                        start={0}
                                        end={20}
                                        duration={2}
                                        delay={0.5}
                                    />
                                    M+
                                </Text>
                                <Text
                                    as='h3'
                                    sx={conterNumTitle}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["15px", "18px", "20px", "23px", "23px", "23px"]}
                                >
                                    People Impacted
                                </Text>
                                <Text
                                    as='p'
                                    sx={counterNumDescription}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                                    position={"relative"}
                                    top={"-8px"}
                                >
                                    through our solutions
                                </Text>
                            </Box>
                        </Flex>
                        <Flex direction={["column", "column", "row", "row", "row", "row"]} gap={["20px", "20px", "20px", "20px", "20px", "20px"]} flexWrap="wrap" alignItems={["flex-start", "flex-start", "baseline", "baseline", "baseline", "baseline"]}>
                            <Box flex="1">
                                <Text
                                    as='h2'
                                    sx={counterNumCss}
                                    fontSize={["32px", "32px", "40px", "52px", "64px", "64px"]}
                                >
                                    <Countup
                                        start={0}
                                        end={30}
                                        duration={2}
                                        delay={0.5}
                                    />
                                    +
                                </Text>
                                <Text
                                    as='h3'
                                    sx={conterNumTitle}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["15px", "18px", "20px", "23px", "23px", "23px"]}
                                >
                                    Countries Catered
                                </Text>
                                <Text
                                    as='p'
                                    sx={counterNumDescription}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
                                    position={"relative"}
                                    top={"-8px"}
                                >
                                    through our solutions
                                </Text>
                            </Box>
                        </Flex>
                        <Flex direction={["column", "column", "row", "row", "row", "row"]} gap={["20px", "20px", "20px", "20px", "20px", "20px"]} flexWrap="wrap" alignItems={["flex-end", "flex-end", "baseline", "baseline", "baseline", "baseline"]}>
                            <Box flex="1">
                                <Text
                                    as='h2'
                                    sx={counterNumCss}
                                    fontSize={["32px", "32px", "40px", "52px", "64px", "64px"]}
                                >
                                    <Countup
                                        start={0}
                                        end={200}
                                        duration={2}
                                        delay={0.5}
                                    />
                                    %
                                </Text>
                                <Text
                                    as='h3'
                                    sx={conterNumTitle}
                                    fontFamily="var(--foundersGrotesk-light)"
                                    fontWeight="400"
                                    fontSize={["15px", "18px", "20px", "23px", "23px", "23px"]}
                                >
                                    Growth Generated
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                }
            </ScrollTrigger>
        </Box>
    )
}

export default Counter
