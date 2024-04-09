import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Icon1 from '../../assets/ContactUs/icon1.svg'
import Icon2 from '../../assets/ContactUs/icon2.svg'
import Icon3 from '../../assets/ContactUs/icon3.svg'

const ReachOutToUs = () => {
  const sectionHeading = {
    color:'#000',
    fontSize:['32px','32px','32px','48px','48px','48px'],
    fontFamily:'var(--garnett-regular)',
    lineHeight:'normal',
    fontWeight:'400',
    mb:['22px','22px','22px','40px','40px','40px']
}
const sectionParagraph ={
    color:'#000',
    fontSize:['14px','14px','14px','20px','20px','20px'],
    fontFamily: 'var(--foundersGrotesk-regular)',
    lineHeight:'normal',
    letterSpacing:'-0.44px',
    fontWeight:'400',
    maxW:'872px',
    m:'0 auto',
    pb:['0px','0px','0px','40px','40px','40px']
}

const programTitle ={
  fontSize:['20px','20px','20px','32px','32px','32px'],
  fontFamily:'var(--garnett-regular)',
  fontWeight:'400',
  lineHeight:'normal',
  letterSpacing:'-0.704px',
  mb:['28px','28px','28px','24px','24px','24px'],
  color:'#333'


}
const programText ={
  fontSize:['14px','14px','14px','18px','18px','18px'],
  fontFamily:'var(--foundersGrotesk-regular)',
  fontWeight:'400',
  lineHeight:'normal'

}
const addresText = {
  fontSize:['14px','14px','14px','20px','20px','20px'],
  fontFamily:'var(--foundersGrotesk-regular)',
  fontWeight:'400',
  lineHeight:'normal',
  maxW:'266px'
}
const countryTextName = {
  fontSize:['18px','18px','18px','20px','20px','20px'],
  fontFamily:'var(--foundersGrotesk-regular)',
  fontWeight:'400',
  lineHeight:'normal',
  maxW:'266px',
  mb:['10px','10px','10px','5px','5px','5px']
}
const boldText ={
  fontSize:['18px','18px','18px','22px','22px','22px'],
  fontFamily:'var(--garnett-semibold);',
  fontWeight:'500',

}
  return (
    <Box p={['80px 0','80px 0','80px 0','150px 0','150px 0','150px 0']}>
          <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
            {/* Section Headings*/}
            <Box maxW={'864px'} m={'0 auto'} textAlign={'center'} pb={['40px','40px','40px','0px','0px','0px']}>
                <Text as={'h2'} sx={sectionHeading}>We are there to answer all your questions reach out to us at...</Text>
                <Text as={'p'} sx={sectionParagraph}>Explore our solutions for Startups, SMBs and Enterprise</Text>
            </Box>

            {/* The Partner Programm */}
            <Box>
              <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} gap={'20px'}>
                      {/* Address */}
                      <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']} pb={'30px'}>
                          <Flex>
                              <Box w={'20%'}>
                                  <Image src={Icon1}/>
                              </Box>
                              <Box w={'80%'}  m={'21px 18px 19px 19px'}>
                                  <Text as={'h3'} sx={programTitle}>Our Office</Text>
                                  <Text as={'p'} sx={addresText} mb={['16px','16px','16px','22px','22px','22px']}>2072, Beverly Hills, Block-5, Geeta Colony, Delhi, India -110031</Text>
                                  <Text as={'p'} sx={addresText}>2072, Beverly Hills, Block-5, Geeta Colony, Delhi, India -110031</Text>
                              </Box>
                          </Flex>
                      </Box>
                      {/* Email */}
                      <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']} pb={'30px'}>
                          <Flex>
                              <Box w={'20%'}>
                                  <Image src={Icon2}/>
                              </Box>
                              <Box w={'80%'}  m={'21px 18px 19px 19px'}>
                                  <Text as={'h3'} sx={programTitle}>Email us </Text>
                                  <Text as={'p'} sx={addresText} mb={'22px'}>2072, Beverly Hills, Block-5, Geeta Colony, Delhi, India -110031</Text>
                                  {/* Email Box */}
                                  <Box> 
                                    <Box mb={'20px'}>
                                        <Text as={'p'} sx={programText} m={'0'}>For all business:</Text>
                                        <Link sx={boldText} textDecoration={'underline'}>Hello@wearetenet.com</Link>
                                    </Box>
                                    <Box>
                                        <Text as={'p'} sx={programText} m={'0'}>For media:</Text>
                                        <Link sx={boldText} textDecoration={'underline'}>Hello@wearetenet.com</Link>
                                    </Box>

                                  </Box>
                              </Box>
                          </Flex>
                      </Box>
                      {/* Contact */}
                      <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                          <Flex>
                              <Box w={'20%'}>
                                  <Image src={Icon3}/>
                              </Box>
                              <Box w={'80%'}  m={'21px 18px 19px 19px'}>
                                  <Text as={'h3'} sx={programTitle}>Our Office</Text>
                                  <Text as={'p'} display={'flex'} alignItems={'end'} sx={countryTextName}>India:<Text sx={boldText}>+91-8318136998</Text></Text>
                                  <Text as={'p'} display={'flex'} alignItems={'end'} sx={countryTextName}>UK:<Text sx={boldText}>+91-8318136998</Text></Text>
                                  <Text as={'p'} display={'flex'} alignItems={'end'} sx={countryTextName}>USA:<Text sx={boldText}>+91-8318136998</Text></Text>
                          
                              </Box>
                          </Flex>
                      </Box>
              </Box>
            </Box>
          </Container>
    </Box>
  )
}

export default ReachOutToUs
