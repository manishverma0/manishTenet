import React from 'react';
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import bannerGif from '../../assets/Career/Banner/BannerGif.gif';
import BannerImage from '../../assets/Career/Banner/Banner.svg'
import  Breadcrumb from './Breadcrumb'
const Banner = () => {
    const bannerHeading = {
      fontSize: ['35px', '35px', '35px', '58px', '58px', '58px'],
      color: '#fff',
      fontFamily: 'var(--garnett-semibold)',
      fontWeight: '600',
      
    };
    const bannerParagraph = {
      fontSize: ['14px', '14px', '14px', '23px', '23px', '23px'],
      color: '#fff',
      fontFamily: 'var(--foundersGrotesk-regular)',
      fontWeight: '400',
      p:'26px 0',
      maxW:'580px'
    };
  return (
    <Box maxH={['580px','580px','580px','700px','700px','700px']} padding={['14px 0 50px','14px 0 50px','14px 0 50px','34px 0 50px','34px 0 50px','34px 0 50px']} overflow={'hidden'} display={'flex'} alignItems={'center'} position={'relative'}>
      {/* BackGround Video */}
      <Box style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <Image  src={bannerGif} objectFit={['cover','cover','cover','inherit','inherit','inherit']} w={'100%'} h={'100%'}/>
      </Box>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        {/* BreadCrum */}
        <Breadcrumb/>
        {/* BanneR Content */}
        <Flex display={['block','block','block','flex','flex','flex']} alignItems={'center'}>
                {/* Text Part */}
                <Box  w={['100%','100%','100%','60%','60%','60%']}>
                    <Text as='h1' sx={bannerHeading}>We like you already</Text>
                    <Text as='p' sx={bannerParagraph}>Be a part of future shaping teams by exploring career opportunitie at Tenet Today.</Text>
                    <Box>
                        <svg width="175" height="9" viewBox="0 0 175 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.820312" y="0.516357" width="174.18" height="8" fill="#B882FF"/>
                        </svg>
                    </Box>
                </Box>
                {/* Image */}
                <Box w={['100%','100%','100%','40%','40%','40%']}>
                    <Image src={BannerImage} w={'100%'} h={'100%'} objectFit={'cover'}/>
                </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default Banner;