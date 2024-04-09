import { Text, Box, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ImageOne from '../../assets/About/teamworkgallary/1.svg'
import ImageTwo from '../../assets/About/teamworkgallary/2.svg'

const TeamWorkGallary = () => {
  return (
    <Box>
      <Container
        maxWidth={['100%', '100%', '100%', '90%', '90%', '90%']}
        m={'0 auto'}
      >
        {/* Headings */}
        <Box maxW={'1040px'} p={['80px 0 80px 0','80px 0 80px 0','80px 0 80px 0','125px 0 75px 0','125px 0 75px 0','125px 0 75px 0']}>
          <Text
            as={'h2'}
              fontSize={['33px', '33px', '33px', '48px', '48px', '48px']}
            fontFamily={'var(--garnett-regular)'}
            fontWeight={'400'}
            lineHeight={'normal'}
          >
            Our talented and diverse team works together for one purpose—to
            unlock the potential of those around us.
          </Text>
        </Box>
      </Container>
      {/* Gallery */}
      <Box bg={'#000'}>
        <Flex
          direction={['column', 'column', 'column', 'row', 'row', 'row']}
        >
          <Box w={['100%', '100%', '100%', '50%', '50%', '50%']}>
            <Image src={ImageOne} w={'100%'} h={'100%'} />
          </Box>
          <Box w={['100%', '100%', '100%', '50%', '50%', '50%']}>
            <Image src={ImageTwo} w={'100%'} h={'100%'} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TeamWorkGallary;
