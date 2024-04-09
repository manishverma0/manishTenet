import React from 'react'
import {Box,Text,Container,Flex, Image, useBreakpointValue } from '@chakra-ui/react'
import DesktopImg from '../../assets/About/solutionForEevryone/1.svg'
import MobileImg from '../../assets/About/solutionForEevryone/Mobile/mobile.svg'

const SolutionForEveryone = () => {
    const spanStyle ={
        color:'#fff',
        fontSize:['5.5vw','5.5vw','5.5vw','3.9vw','3.9vw','3.9vw'],
        fontWeight:'600',
        lineHeight:'normal',
        fontFamily:'var(--garnett-semibold)',
        bg:'#0D0E4D',
        display:'table',
        px:['15px','15px','15px','30px','30px','30px'],
        pb:['7px','7px','7px','0px','0px','0px']
    }
    const padding = useBreakpointValue({ base: 0, sm:0 });

  return (
        <Box p={['80px 0 80px 0','80px 0 80px 0','80px 0 80px 0','117px 0 150px 0','117px 0 150px 0','117px 0 150px 0']}>
            <Container maxWidth={["100%", "100%", "100%", "100%", "90%", "90%"]} m={'0 auto'} padding={padding}>
            {/* Heading */}
            <Flex justifyContent={'space-between'} display={['block' ,'block','block','flex','flex','flex']}>
                <Box w={['100%','100%','100%','50%','50%','50%']}>
                    <Text
                    as='h3'
                    m='0px'
                    fontSize={["35px", "35px", "35px", "48px", "48px", "48px"]}
                    fontFamily='var(--garnett-regular)'
                    color={"#000000"}
                    textAlign={['center','center','center','left','left','left']}
                    lineHeight={'normal'}
                    pb={['22px','22px','22px','0','0','0']}
                    maxW={['360px','360px','360px','100%','100%','100%']}
                    margin={'0 auto'}
                    >Solutions for Everyone
                    </Text>
                </Box>
                <Box  w={['100%','100%','100%','50%','50%','50%']}>
                    <Text
                    as='p'
                    lineHeight={'normal'}
                    fontSize={["13px", "13px", "13px", "20px", "20px", "20px"]}
                    maxW={["424px", "424px", "424px", "521px", "521px", "521px"]}
                    color={"#333"}
                    fontFamily="var(--foundersGrotesk-regular)"
                    fontWeight="400"
                    m={['0 auto','0 auto','0 auto','0 0 0 auto','0 0 0 auto','0 0 0 auto']}
                    textAlign={['center','center','center','left','left','left']}
                    >
                    As Indians, and as solution providers, we are hard-wired to embrace and explore diversity. This is reflected in our clientele which includes Individuals, SMEs, and large companies spread across the globe.
                    </Text>
                </Box>
            </Flex>
            {/* Solution Images */}
            <Box bg={'#0057FF'}  mt={['40px','40px','40px','80px','80px','80px']} display={['block' ,'block','block','flex','flex','flex']} p={['40px 0','40px 0','40px 0','0px 0','0px 0','0px 0']}>
                <Box w={['100%','100%','100%','50%','50%','50%']} display={'flex'} alignItems={'center'}>
                    <Box position={['relative','relative','relative','absolute','absolute','absolute']}>
                        <Text as={'span'} sx={spanStyle}>Empowering millions by</Text>
                        <Text as={'span'} sx={spanStyle}>developing personalized</Text>
                        <Text as={'span'} sx={spanStyle}>digital solutions that deliver </Text>
                        <Text as={'span'} sx={spanStyle}>results and inspire.</Text>
                    </Box>
                </Box>
                <Box w={['100%','100%','100%','50%','50%','50%']}>
                    <Image src={DesktopImg} display={['none','none','none','block','block','block']} w={'100%'} height={'100%'} objectFit={'cover'}/>
                    <Image src={MobileImg} display={['block','block','block','none','none','none']} w={'100%'} height={'100%'} objectFit={'cover'} px={'20px'} pt={'28px'}/>
                </Box>
            </Box>
            </Container>
        </Box>
  )
}

export default SolutionForEveryone
