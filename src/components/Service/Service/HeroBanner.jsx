import React from 'react';
import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react';
import BannerImg from '../../../assets/Service/HeroBanner/banner.png';
import Breadcrumb from './Breadcrumb';

const HeroBanner = () => {
  const bannerHeading = {
    fontSize: ['35px', '35px', '35px', '35px', '58px', '58px'],
    color: '#fff',
    letterSpacing: '1.276px',
    fontFamily: 'var(--garnett-semibold)',
    fontWeight: '600',
    pt:['65px','65px','65px','0px','0px','0px']
  }
  const bannerParagraph = {
    fontSize: ['14px', '14px', '14px', '14px', '23px', '23px'],
    color: '#fff',
    fontFamily: 'var(--foundersGrotesk-regular)',
    fontWeight: '400',
    letterSpacing: '0.506px',
    p:['22px 0']
  }
  const bannerButtonLink = {
    fontSize: ['20px', '20px', '20px', '20px', '20px', '20px'],
    fontFamily: 'var(--foundersGrotesk-regular)',
    fontWeight: '400',
    lineHeight: 'normal',
    color: '#fff',
    bg: '#0057FF',
    mt: '30px',
    display: 'inline-block',
    p: '14px' 
  }
 
  return (
    <Box bg={'#0D0E4D'} padding={['66px 0 100px','66px 0 100px','66px 0 100px','14px 0 50px','14px 0 50px','14px 0 50px']} overflow={'hidden'}>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}>
        {/* BreadCrum */}
        <Breadcrumb/>
        
        <Flex display={['flex','flex','flex','flex','flex','flex']} flexDirection={['column-reverse','column-reverse','row','row','row','row']}>
          {/* Text Part */}
          <Box width={['100%', '100%', '100%', '50%', '50%', '50%']} display={'flex'} alignItems={'center'}>
            <Box pr={['0px','0px','0px','55px','55px','55px']}>
              <Text as={'h1'} sx={bannerHeading}>Research, Design, Build & Growth</Text>
              <Text as={'p'} sx={bannerParagraph}>At Kodeglobe, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.</Text>
              <Link sx={bannerButtonLink}>Let’s work together</Link>
            </Box>
          </Box>
          {/* Img Part */}
          <Box width={['100%', '100%', '100%', '60%', '60%', '60%']}>
            <Image src={BannerImg} w={'100%'} h={'100%'} objectFit={'fill'} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HeroBanner;
