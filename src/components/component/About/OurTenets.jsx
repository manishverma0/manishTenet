import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Stair from '../../assets/About/ourtenet/stair.png'

const OurTenets = () => {
  // Column one
  const headingTitle = {
    fontFamily:'var(--garnett-regular)',
    fontSize:['32px','32px','32px','48px','48px','48px'],
    fontWeight:'400',
    mb:['22px','22px','22px','35px','35px','35px'],
    textAlign:['center','center','center','left','left','left']
  }
  const paragraph = {
    color:'#333',
    lineHeight:'normal',
    fontSize:['14px','14px','14px','20px','20px','20px'],
    fontWeight:'400',
    fontFamily:' var(--foundersGrotesk-regular)',
    textAlign:['center','center','center','left','left','left']
  }
  // Column Two
  const coltwoText = {
    fontSize:['24px','24px','24px','40px','40px','40px','40px'],
    fontFamily:'var(--garnett-semibold)',
    fontWeight:'600',
    color:'#fff',
    lineHeight:'normal',
    bg:'#0D0E4D',
    textAlign:['center','center','center','left','left','left']
  }

  return (
    <Box p={['63px 0 94px','60px 0 94px','63px 0 94px','96px 0 150px','96px 0 150px','96px 0 150px']}>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
        <Flex display={['block','block','block','flex','flex','flex']}>
            {/* Text Column */}
            <Box w={['100%','100%','100%','50%','50%','50%']} pr={['0px','0px','0px','106px','106px','106px']} display={'flex'} alignItems={'center'} justifyContent={['center','center','center','left','left','left']}>
                <Box>
                    <Text as={'h2'} sx={headingTitle}>Our Tenets</Text>
                    <Text as={'p'} sx={paragraph}>We believe in the transformative power of design and technology, and our mission is to be the catalyst that propels businesses forward. By partnering with us, brands not only grow but also contribute to shaping a progressive tomorrow.</Text>
                </Box>
            </Box>
            {/* Image Column */}
            <Box w={['100%','100%','100%','50%','50%','50%']} pt={['54px','54px','54px','0px','0px','0px']}>
            {/* Stair Shadow */}
                <Box>
                    <Image w={'100%'} h={'100%'} src={Stair}/>
                </Box>
            {/* Text Bg Blue */}
                <Box bg={'#0057FF'} p={['59px 46px 44px 46px','59px 46px 44px 46px','59px 46px 44px 46px','99px 124px','99px 124px','99px 124px']} textAlign={'center'} >
                    <Text as={'span'} sx={coltwoText}>Our approach is created with you at the center.</Text>
                </Box>
            </Box>
        </Flex> 
      </Container>
    </Box>
  )
}
export default OurTenets
