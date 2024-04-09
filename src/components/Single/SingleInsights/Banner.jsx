import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import BannerImage from '../../../assets/Single/Banner.svg'
import AuthorInfoAndShareBtn from './AuthorInfoAndShareBtn'

const Banner = () => {
  const blogHeading = {
    fontSize:['32px','32px','32px','48px','48px','48px'],
    color:'#fff',
    fontFamily:'var(--garnett-semibold)',
    fontWeight:'600',
    lineHeight:'normal',
    pb:'30px',
    maxW:'1053px'
}
  return (
    <Box position="relative" pt={{ base: '50px', md: '70px', lg: '100px' }}>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height='70%'
        // bgGradient="linear(to-r, #003764, #005DAB, #01AAEC)"
        bg={'#00342B'}
        // bgImage={`url(${BannerImage})`}
        zIndex="0"
      />
    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        <Box  paddingBottom="42px">
          <Heading as="h2" sx={blogHeading} marginBottom={{ base: '20px', md: '0' }}>
                Can Blogs Still Attract an Audience? Their Impact on Brands Today
          </Heading>
  
        </Box>
        <Box maxH="660px" height="100%" overflow="hidden">
          <img src={BannerImage} alt="awards-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box>
          <AuthorInfoAndShareBtn/>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
