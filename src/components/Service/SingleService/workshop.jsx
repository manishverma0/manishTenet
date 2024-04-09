import React from 'react'
import { Box,Text ,Container, Image} from '@chakra-ui/react'
import Img from '../../../assets/Service/SingleService/workshop/workshop.png'

const Workshop = () => {
    const sectionHeading = {
        color:'#000',
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        mb:['30px','30px','30px','60px','60px','60px']
    }
    // Paragrph
    const paragraph = {
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        fontSize:'18px',
        lineHeight:'normal',
        mb:'20px'
    }
  return (
    <Box p={'100px 0'}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>

         {/* Heading */}
            <Box maxW={'953px'} m={'0 auto'} textAlign={'center'}>
                    <Text as={'h2'} sx={sectionHeading}>(Our Custom tailored approach) Think broad & act deep with our design sprint workshops</Text>
                    <Text as={'p'} sx={paragraph} maxW={'1000px'} m={'0 auto'}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. </Text>
            </Box>
            <Box>
                <Image src={Img} w={'100%'} h={'100%'}/>
            </Box>
        </Container>
    </Box>
  )
}

export default Workshop
