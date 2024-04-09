import React from 'react'
import {Box , Text ,Container,Image} from '@chakra-ui/react'
import ProcessImg from '../../assets//WhiteLabel/OurProcess/process.svg'

const OurProcess = () => {
  const sectionH2Heading = {
    fontSize:['24px','24px','24px','36px','36px','36px'],
    fontFamily:'var(--garnett-regular)',
    fontWeight:'400',
    lineHeight:'normal',
    pb:['22px','22px','22px','40px','40px','40px'],
    
}
  return (
      <Box p={['80px 0','80px 0','80px 0','0px 0','0px 0','0px 0']}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
          {/* Section Heading */}
          <Box>
              <Text as={'h2'} sx={sectionH2Heading}>Our Process</Text>
          </Box>

    
          {/* Process */}
          <Box bg={'#0D0E4D'} p={'174px 73px 190px;'}>
              <Image src={ProcessImg} w={'100%'} h={'100%'} objectFit={'cover'}/>
          </Box>

        </Container>
    </Box>
  
  )
}

export default OurProcess
