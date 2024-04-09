import React from 'react';
import { Box, Container, Flex, Text, Image ,Link } from '@chakra-ui/react';
import bannerGif from '../../../assets/Service/SingleService/banner/banner.gif'
import  Breadcrumb from './Breadcrumb'
const SingleBanner = () => {
  const bannerTitle = {
    fontSize: ['35px', '35px', '35px', '58px', '58px', '58px'],
    color: '#fff',
    letterSpacing: '-2.2%',
    fontFamily: 'var(--garnett-semibold)',
    fontWeight: 600,
    pb: '22px',
    lineHeight:['40.79px','40.79px','40.79px','80.79px','80.79px','80.79px']
  };
  const bannerParaGraph = {
    fontSize: ['18px', '18px', '18px', '23px', '23px', '23px'],
    color: '#fff',
    fontFamily: 'var(--foundersGrotesk-regular)',
    fontWeight: '400',
    letterSpacing: '0.506px',
    maxW:'698px'
  };
  return (
    <Box  minH={'750px'} padding={['14px 0 50px','14px 0 50px','14px 0 50px','55px 0 200px','55px 0 200px','55px 0 200px']} display={'flex'} alignItems={'center'}  overflow={'hidden'} position="relative">
      {/* BackGround Video */}
      <Box style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <Image  src={bannerGif} objectFit={['cover','cover','cover','inherit','inherit','inherit']} w={'100%'} h={'100%'}/>
      </Box>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        {/* BreadCrum */}
        <Box  pb={'135px'}>
          <Breadcrumb/>  
        </Box>
        {/* BanneR Content */}
        <Flex display={['block','block','block','flex','flex','flex']}>
          {/* Text Part */}
          <Box  display={'flex'} alignItems={'center'}>
            <Box pr={['0px','0px','0px','55px','55px','55px']} mb={['90px','90px','90px','0px','0px','0px']}>
              <Text as='h1' sx={bannerTitle} >User Experience Design</Text>
              <Text as='p' sx={bannerParaGraph}>We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.</Text>
              <Link p={'14px'} 
                    fontSize={['20px','20px','20px','20px','20px','20px']}
                    bg={'#9B4DFF'}
                    color={'#fff'}
                    fontWeight={'400'}
                    fontFamily={'var(--foundersGrotesk-regular)'}
                    lineHeight={'normal'}
                    mt={'30px'}
                    display={'inline-block'}
                    
                    >Let’s work together</Link>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default SingleBanner;