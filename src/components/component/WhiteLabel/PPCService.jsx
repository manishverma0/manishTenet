import React from 'react'
import { Box, Text , Container } from '@chakra-ui/react'

const PPCService = () => {
    const sectionH2Heading = {
        fontSize:['24px','24px','24px','36px','36px','36px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        pb:['22px','22px','22px','40px','40px','40px'],
        
    }
    const sectionParagraph = {
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        maxW:['100%','100%','100%','50%','50%','50%'],
        ml:'auto' 
    }
  return (
    <Box p={['80px 0','80px 0','80px 0','100px 0','100px 0','100px 0']}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>

        {/* Section Heading */}
        <Box>
            <Text as={'h2'} sx={sectionH2Heading}>Tenet provides distinguished white label PPC services, remaining 100% hidden from your clients yet committed to managing Google ads accounts with transparent management.</Text>
            <Text as={'p'} sx={sectionParagraph}>Our team of certified professionals excels in leveraging the potential of PPC advertising to help clients maximise their ROI and boost brand visibility. With extensive experience and a comprehensive understanding of the marketing sphere, we design and execute white label PPC strategies that produce tangible results, allowing agencies to make profits consistently.</Text>
        </Box>

        </Container>

    </Box>
  )
}

export default PPCService
