import React from 'react'
import {Box, Container, Text ,Image,Button} from '@chakra-ui/react'
import Logo from '../../assets/Partners/meetOurPartners/logo.svg'
 
const MeetOurPartners = () => {
  const sectionH2Heading = {
    fontSize:['32px','32px','32px','48px','48px','48px'],
    fontFamily:'var(--garnett-regular)',
    fontWeight:'400',
    lineHeight:'normal',
    pb:'30px'
}
const sectionParagraph = {
    fontSize:['14px','14px','14px','20px','20px','20px'],
    fontFamily:'var(--foundersGrotesk-regular)',
    fontWeight:'400',
    lineHeight:'normal',
    maxW:'864px',
    m:'0 auto'
}
// Ex Partners 
const partnerTitle ={
    fontSize:['18px','18px','18px','24px','24px','24px'],
    fontFamily:'var(--garnett-regular)',
    fontWeight:'400',
    lineHeight:'normal',
    p:'20px 0 18px'
    
}
const partnerText ={
    fontSize:['14px','14px','14px','20px','20px','20px'],
    fontFamily:'var(--foundersGrotesk-regular)',
    fontWeight:'400',
    lineHeight:'normal',
 
}
const partnersImage ={
    w:['186px','186px','186px','299px','299px','200px'],
    maxW:['186px','186px','186px','299px','299px','299px'],
    h:['73px','73px','73px','118px','118px','118px']
}
  return (
    <Box>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
            {/* Section Heading */}
            <Box textAlign={'center'}>
                <Text as={'h2'} sx={sectionH2Heading}>Meet our partners</Text>    
                <Text as={'p'} sx={sectionParagraph}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>   
            </Box>
            {/* Meet Partners Grid */}
            <Box p={['40px 0 80px','40px 0 80px','40px 0 80px','60px 0 80px','60px 0 80px','60px 0 80px']}>
                <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} columnGap={'20px'} rowGap={'31px'}>
                    <Box bg={'#F5F5F5'} p={['14px','14px','14px','24px','24px','24px']}>
                        {/* Partners Name And Logo */}
                        <Box bg={'#fff'} p={['26px','26px','26px','21px','21px','21px']}>
                            <Image src={Logo}  sx={partnersImage} alt='partners icon'/> 
                        </Box>
                        {/* About Partners */}
                        <Box pb={['19px','19px','19px','80px','80px','80px']}>
                            <Text as={'h3'} sx={partnerTitle}>Ex my Business </Text>
                            <Text as={'p'} sx={partnerText}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>
                        </Box>
                    </Box>
                    <Box bg={'#F5F5F5'} p={['14px','14px','14px','24px','24px','24px']}>
                        {/* Partners Name And Logo */}
                        <Box bg={'#fff'} p={['26px','26px','26px','21px','21px','21px']}>
                            <Image src={Logo}  sx={partnersImage} alt='partners icon'/> 
                        </Box>
                        {/* About Partners */}
                        <Box pb={['19px','19px','19px','80px','80px','80px']}>
                            <Text as={'h3'} sx={partnerTitle}>Ex my Business </Text>
                            <Text as={'p'} sx={partnerText}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>
                        </Box>
                    </Box>
                    <Box bg={'#F5F5F5'} p={['14px','14px','14px','24px','24px','24px']}>
                        {/* Partners Name And Logo */}
                        <Box bg={'#fff'} p={['26px','26px','26px','21px','21px','21px']}>
                            <Image src={Logo}  sx={partnersImage} alt='partners icon'/> 
                        </Box>
                        {/* About Partners */}
                        <Box pb={['19px','19px','19px','80px','80px','80px']}>
                            <Text as={'h3'} sx={partnerTitle}>Ex my Business </Text>
                            <Text as={'p'} sx={partnerText}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>
                        </Box>
                    </Box>
                    <Box bg={'#F5F5F5'} p={['14px','14px','14px','24px','24px','24px']}>
                        {/* Partners Name And Logo */}
                        <Box bg={'#fff'} p={['26px','26px','26px','21px','21px','21px']}>
                            <Image src={Logo} sx={partnersImage} alt='partners icon'/> 
                        </Box>
                        {/* About Partners */}
                        <Box pb={['19px','19px','19px','80px','80px','80px']}>
                            <Text as={'h3'} sx={partnerTitle}>Ex my Business </Text>
                            <Text as={'p'} sx={partnerText}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>
                        </Box>
                    </Box>
                    <Box bg={'#F5F5F5'} p={['14px','14px','14px','24px','24px','24px']}>
                        {/* Partners Name And Logo */}
                        <Box bg={'#fff'} p={['26px','26px','26px','21px','21px','21px']}>
                            <Image src={Logo}  sx={partnersImage} alt='partners icon'/> 
                        </Box>
                        {/* About Partners */}
                        <Box pb={['19px','19px','19px','80px','80px','80px']}>
                            <Text as={'h3'} sx={partnerTitle}>Ex my Business </Text>
                            <Text as={'p'} sx={partnerText}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>
                        </Box>
                    </Box>
                    <Box bg={'#F5F5F5'} p={['14px','14px','14px','24px','24px','24px']}>
                        {/* Partners Name And Logo */}
                        <Box bg={'#fff'} p={['26px','26px','26px','21px','21px','21px']}>
                            <Image src={Logo}  sx={partnersImage} alt='partners icon'/> 
                        </Box>
                        {/* About Partners */}
                        <Box pb={['19px','19px','19px','80px','80px','80px']}>
                            <Text as={'h3'} sx={partnerTitle}>Ex my Business </Text>
                            <Text as={'p'} sx={partnerText}>Tenet works wonders with the tools that your teams already use. From finance and marketing automation to productivity and video conferencing, start seamlessly streamlining your projects all in one place.</Text>
                        </Box>
                    </Box>
                </Box>
                <Box textAlign={'center'} pt={'75px'}>
                    <Button fontSize={['20px']} p={'10px 20px 3px '} color={'#333'} border={'1px'} borderColor={'#B5B5B5'} bg={'#fff'} borderRadius={'none'} fontFamily={'var(--foundersGrotesk-regular)'} fontWeight={'400'} lineHeight={'normal'}>Load more
                        <Box
                            as="svg"
                            position="relative"
                            top="-3px"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            >
                            <g clip-path="url(#clip0_1531_2712)">
                            <path d="M20 9.09204L12.5 16.592L5 9.09204" stroke="#333333" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_2712">
                            <rect width="24" height="24" fill="white" transform="translate(0.5 0.092041)"/>
                            </clipPath>
                            </defs>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}
export default MeetOurPartners
