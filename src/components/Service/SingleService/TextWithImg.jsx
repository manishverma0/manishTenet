import React from 'react'
import {Box, Flex, Container,Text, Image} from '@chakra-ui/react'
import TextWithImage from '../../../assets/Service/SingleService/textwithimg/textwithimg.png'

const TextWithImg = () => {
    const sectionHeading = {
        color:'#000',
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        mb:['22px','22px','22px','40px','40px','40px']
    }
    // Title
    const title = {
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        fontSize:'28px',
        lineHeight:'normal',
        pb:'19px'
    }
    // Paragrph
    const paragraph = {
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        fontSize:'18px',
        lineHeight:'normal',
        mb:'25px'
    }
  return (
    <Box>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        {/* Section Title */}
            <Box maxW={'953px'}>
                <Text as={'h2'} sx={sectionHeading}>Think broad & act deep with our design sprint workshops</Text>
            </Box>
            <Flex>
                {/* Text Box */}
                <Box w={'40%'} display={'flex'} alignItems={'center'}>
                    <Box mr={'75px'}>
                        {/* Subtitle And Descriptrion */}
                        <Text as={'h3'} sx={title}>Experience strategy</Text>
                        <Box>
                            <Text as={'p'} sx={paragraph}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful</Text>
                            <Text as={'p'} sx={paragraph}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful</Text>
                            <Text as={'p'} sx={paragraph}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful</Text>
                        </Box>
                    </Box>
                </Box>
                {/* ImgBox */}
                <Box w={'60%'}>
                    <Image src={TextWithImage} w={'100%'} h={'100%'} objectFit={'cover'}/>
                </Box>
            </Flex>
        </Container>
    </Box>
  )
}

export default TextWithImg
