import React from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import BgImage1 from '../../assets/About/letsworktogether/1.svg';
import BgImage2 from '../../assets/About/letsworktogether/2.svg';

const LetsWorkTogether = () => {
  return (
    <Box bg={'#30054A'} p={['80px 0','80px 0','80px 0','80px 0','80px 0','80px 0']} position={'relative'}>
      <Box>
          <Image src={BgImage1} position={'absolute'} top={'0'} left={'0'}/>BgImage1
      </Box>
      <Box maxW={['100%', '780px']} position={'relative'} zIndex={'1'} m={'0 auto'} textAlign={'center'} color={'#fff'}>
        <Text
          as={'h2'}
          fontSize={['24px', '32px', '48px', '48px', '48px', '48px']}
          fontFamily={'var(--garnett-regular)'}
          lineHeight={'normal'}
          maxW={['240px', '340px', '440px', '100%', '100%', '100%']}
          pb={['26px', '26px', '26px', '0', '0', '0']}
          m={'0 auto'}
        >
          Ready to catapult your growth?
        </Text>
        <Text
          as={'p'}
          p={'20px 0'}
          fontSize={['18px', '18px', '20px', '20px', '20px', '20px']}
          maxW={['240px', '340px', '440px', '424px', '424px', '424px']}
          m={'0 auto'}
          fontWeight={'400'}
          lineHeight={'normal'}
          fontFamily={'var(--foundersGrotesk-regular)'}
        >
          Explore our carefully curated solutions by outcomes that are tailored for your needs.
        </Text>
        <Link
          to={'/'}
          fontSize={['18.696px', '18.696px', '18.696px', '66px', '66px', '66px']}
          fontWeight={'600'}
          textDecoration={'underline'}
          fontFamily={'var(--garnett-semibold)'}
          lineHeight={'normal'}
        >
          Let’s work together
        </Link>
      </Box>
      <Box>
        <Image src={BgImage2} position={'absolute'} right={'0'} bottom={'0'}/>
    </Box>
    </Box>
  );
};
export default LetsWorkTogether;
