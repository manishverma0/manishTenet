import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import AboutHeroImg from '../../assets/About/banner/banner.webp';
import DesktopBg from '../../assets/About/banner/banner.mp4';
import MobileBg from '../../assets/About/banner/mobile.mp4';
import Breadcrumb from './Breadcrumb';

const HeroBanner = () => {
  const bannerTitle = {
    fontSize: ['35px', '35px', '35px', '58px', '58px', '58px'],
    color: '#fff',
    letterSpacing: '-2.2%',
    fontFamily: 'var(--garnett-semibold)',
    fontWeight: 600,
    pb: '22px',
    lineHeight: ['40.79px', '40.79px', '40.79px', '80.79px', '80.79px', '80.79px']
  };

  const bannerParagraph = {
    fontSize: ['18px', '18px', '18px', '23px', '23px', '23px'],
    color: '#fff',
    fontFamily: 'var(--foundersGrotesk-regular)',
    fontWeight: '400',
    letterSpacing: ['-0.352px','-0.352px' ,'-0.352px','-0.506px','-0.506px','-0.506px']
  };
  return (
    <Box padding={['95px 0 170px', '90px 0 170px', '90px 0 170px', '56px 0 222px', '56px 0 222px', '56px 0 222px']} overflow="hidden" position="relative">
      {/* Background Video */}
      <Box style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <video autoPlay playsInline  loop muted  style={{ objectFit: 'fill',height:'100%',width:'100%' }}>
          <source src={DesktopBg} type="video/mp4" media="(min-width: 768px)" />
          <source src={MobileBg} type="video/mp4" media="(max-width: 767px)" />
        </video>
      </Box>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m="0 auto" zIndex={2} position="relative">
        {/* Breadcrumb */}
        <Breadcrumb />
        {/* Banner Content */}
        <Flex display={['block', 'block', 'block', 'flex', 'flex', 'flex']}>
          {/* Text Part */}
          <Box width={['100%', '100%', '100%', '50%', '50%', '50%']} display="flex" alignItems="center">
            <Box pr={['0px', '0px', '0px', '55px', '55px', '55px']} mb={['90px', '90px', '90px', '0px', '0px', '0px']}>
              <Text as="h1" sx={bannerTitle}>We are a strategic design & tech company.</Text>
              <Text as="p" sx={bannerParagraph}>At Kodeglobe, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.</Text>
            </Box>
          </Box>
          {/* Img Part */}
          <Box width={['100%', '100%', '100%', '50%', '50%', '50%']}>
            <Image src={AboutHeroImg} w="100%" h="100%" objectFit="cover" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroBanner;
