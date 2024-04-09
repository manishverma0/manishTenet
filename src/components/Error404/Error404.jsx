import React from 'react';
import { Box, Container, Flex, Image ,Link } from '@chakra-ui/react';
import Col1 from '../../assets/404/col1.svg';
import Col2 from '../../assets/404/Col2.svg';
 

const Error404 = () => {
  const homeReturnLink = {
    background: '#00763D',
    padding: '13px 14px 7px',
    fontSize: ['10px', '10px', '10px', '20px', '20px', '20px'],
    color: '#fff',
    display: 'inline-block',
    fontFamily: 'var(--foundersGrotesk-regular)',
    fontWeight: '400'
  };

  return (
    <Box bg={'#000'} p={['79px 0','79px 0','79px 0','144px 0','144px 0','144px 0']}>
      <Container maxWidth={["85%", "85%", "85%", "85%", "85%", "85%"]} m={'0 auto'}>
        <Flex alignItems={'center'} display={['flex','flex','flex','flex','flex','flex']} flexDirection={['column-reverse','column-reverse','column-reverse','row','row','row']}>
          <Box w={['100%','100%','100%','50%','50%','50%']} mt={['40px','40px','40px','0px','0px','0px']}>
            <Box w={['100%','100%','100%','90%','90%','90%']} >
              <Image src={Col1} />
            </Box>
            {/* Return Button */}
            <Box mt={'37px'}>
              {/* Proper Link setup with "to" attribute */}
              <Link href="/" style={homeReturnLink}>Return to home</Link>
            </Box>
          </Box>
          <Box w={['100%','100%','100%','50%','50%','50%']} display={'flex'} justifyContent={'end'} >
            <Image src={Col2} w={['100%','100%','100%','90%','90%','90%']} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Error404;
