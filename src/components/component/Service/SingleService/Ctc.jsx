import React from 'react'
import {Box, Container ,Flex ,Text, Link} from '@chakra-ui/react'
const Ctc = () => {
  return (
    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
        <Box bg={'#30054A'} p={'61px 0'} mt={'80px'} px={'90px'}>
                <Flex>
                    <Box w={'50%'}>
                            <Text as={'h2'}
                            fontSize={['48px','48px','48px','48px','48px','48px']}
                            color={'#fff'}
                            fontWeight={'600'}
                            fontFamily={'var(--garnett-semibold)'}
                            maxW={'616px'}>Engage with Our Leading User Experience Specialists</Text>
                    </Box>
                    <Box w={'50%'}>
                        <Flex justifyContent={'end'}>
                            <Box w={[]} display={'flex'} alignItems={'center'} mr={'15px'}>
                                
                            </Box>
                            <Box  >
                                <Box  maxW={'400px'} ml={'auto'}>
                        
                                    <Box>
                                    {/* Pargagraph */}
                                        <Text as={'p'} 
                                                color={'#fff'}
                                                fontSize={['20px','20px','20px','20px','20px','20px']}
                                                fontFamily={'var(--foundersGrotesk-regular)'}
                                                fontWeight={'400'}
                                                pt={'22px'}
                                                pb={'14px'}>Elevate your service with our exceptional user experience expertise. Reach out to our specialists to enhance your digital solutions today.</Text>
                                    </Box>
                                    {/* Link */}
                                    <Box>
                                        <Link 
                                            display={'inline-flex'}
                                            bg={'#7610B5'}
                                            p={'14px 28px 10px'}
                                            lineHeight={'normal'}
                                            color={'#fff'}
                                            fontSize={'20px'}
                                            fontWeight={'400'}
                                            fontFamily={'var(--foundersGrotesk-regular)'}>Get in Touch</Link>

                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
    </Container>
  )
}
export default Ctc
