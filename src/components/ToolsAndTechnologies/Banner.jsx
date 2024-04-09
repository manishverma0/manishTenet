import React from 'react'
import {Box,Text,Container,Link,Image} from '@chakra-ui/react'
import Edge from '../../assets/ToolsAndTech/edge.svg'
 

const Banner = () => {
  return (
    <Box minH={['450px','450px','450px','520px','520px','520px']} bg={'#0D0E4D'} padding={['14px 0 50px','14px 0 50px','14px 0 50px','14px 0 50px','14px 0 50px','14px 0 50px']} overflow={'hidden'} display={'flex'} alignItems={'end'} position={'relative'}>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
   
          {/* Text Part */}
        
            <Box  mb={['90px','90px','90px','0px','0px','0px']} maxW={'800px'}>
              <Text
                as='h1'
                fontSize={['35px', '35px', '35px', '58px', '58px', '58px']}
                color={'#fff'}
                fontFamily={'var(--garnett-semibold)'}
                fontWeight={'600'}
                pb={'22px'}
              >
              Handpicked Tools in a Master’s Hands
              </Text>
              <Text
                as='p'
                fontSize={['14px', '14px', '14px', '23px', '23px', '23px']}
                color={'#fff'}
                fontFamily={'var(--foundersGrotesk-regular)'}
                fontWeight={'400'}
                maxW={'580px'}
              >
                At Kodeglobe, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.
              </Text>
            </Box>
      </Container> 
      {/* Edge */}
            <Image src={Edge} alt="Edge Image" position="absolute" bottom="0" right={['-15%','-15%','-15%','0','0','0']}/>
    </Box>
  )
}

export default Banner
