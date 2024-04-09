import React from 'react'
import {Box, Container, Flex, Heading, Image, Text} from '@chakra-ui/react'
import Image1 from '../../assets/ThankYouPgae/1.svg'
import Image2 from '../../assets/ThankYouPgae/2.svg'
import Image3 from '../../assets/ThankYouPgae/3.svg'

const KnowMore = () => {
    const widthDesign = {
        w:'calc(33.33% - 30px)'
    }
  return (
    <Box p={['40px 0','40px 0','40px 0','90px 0','90px 0','90px 0']}>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        {/* Section Heading */}
            <Box>
                <Flex justify={'space-between'}>
                <Box maxW={'688px'}>
                    <Heading as={'h3'} fontFamily={'var(--garnett-regular)'} fontWeight={'400'} letterSpacing={'-1.056px'} fontSize={['48px']} color={'#333'}>
                        In the meantime, do you want to know more about us?
                    </Heading>
                    </Box>
                    <Box>
                    <Text as={'p'} maxW={'424px'} fontSize={['20px']} fontFamily={'var(--foundersGrotesk-regular)'} fontWeight={'400'}>
                        Explore our carefully curated solutions by outcomes that are tailored for your needs.
                        Explore our carefully curated solutions by outcomes that are tailored for your needs.
                    </Text>
                    </Box>
                </Flex>
            </Box>

        {/* Col 3 Box */}
        <Box mt={'100px'}>
            <Flex>
                <Box m={'1vw'} p={'2vw'} sx={widthDesign} bg={'#F5F5F5'}>
                    <Box>            
                        <Image src={Image1} w={'100%'} h={'100%'} objectFit={'cover'}/>
                    </Box>
                    <Box>
                        <Text as={'h4'} pt={'1vw'} fontFamily={'var(--garnett-regular)'} fontSize={'24px'} fontWeight={'400'}>About us</Text>
                    </Box>
                </Box>
                <Box m={'1vw'} p={'2vw'} sx={widthDesign} bg={'#F5F5F5'}>
                    <Box>            
                        <Image src={Image2} w={'100%'} h={'100%'} objectFit={'cover'}/>
                    </Box>
                    <Box>
                        <Text as={'h4'} pt={'1vw'} fontFamily={'var(--garnett-regular)'} fontSize={'24px'} fontWeight={'400'}>Our Process</Text>
                    </Box>
                </Box>
                <Box m={'1vw'} p={'2vw'} sx={widthDesign} bg={'#F5F5F5'}>
                    <Box>            
                        <Image src={Image3} w={'100%'} h={'100%'} objectFit={'cover'}/>
                    </Box>
                    <Box>
                        <Text as={'h4'} pt={'1vw'} fontFamily={'var(--garnett-regular)'} fontSize={'24px'} fontWeight={'400'}>Our Solutions</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default KnowMore
