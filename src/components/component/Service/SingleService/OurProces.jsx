import { Box , Container , Image, Text } from '@chakra-ui/react'
import React from 'react'
import Img from '../../../assets/Service/SingleService/ourProces/IMG.png'


const OurProces = () => {
    const sectionHeading = {
        color:'#000',
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        mb:['22px','22px','22px','40px','40px','40px']
    }
  return (
    <Box>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
            {/* Section Heading */}
            <Box textAlign={'center'} p={'110px 0'}>
                <Text as={'h2'} sx={sectionHeading}>Our Process</Text>
            </Box>

            {/* Image */}
            <Box bg={'#0D0E4D'} p={'110px'}>
                <Image src={Img} w={'100%'} h={'100%'}/>
            </Box>
        </Container>
    </Box>
  )
}

export default OurProces
