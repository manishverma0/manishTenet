import React from 'react'
import {Box,Container, Text} from '@chakra-ui/react'

const Culture = () => {
    const sectionHeading = {
        color:'#000',
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        mb:['22px','22px','22px','40px','40px','40px']
    }
    const sectionParagraph ={
        color:'#000',
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontFamily: 'var(--foundersGrotesk-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        maxW:'872px',
        m:'0 auto'
    }

    // Section Styling
    const boxDesign ={
        p:['38px 19px 94px','38px 19px 94px','38px 19px 94px','60px 40px','60px 40px','60px 40px'],
        bg:['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff'],
        maxW:['100%','100%','100%','490px','490px','490px'],
        m:['0','0','0','0 auto','0 auto','0 auto']
    }
    const boxWrapperGrid = {
        display:['block','block','block','grid','grid','grid'],
        gridTemplateColumns:'repeat(3,1fr)'
    }
    const stratagyNumber = {
        color:'#00BA61',
        fontSize:['48px','48px','48px','60px','60px','60px'],
        fontWeight:'300',
        lineHeight:'normal',
        fontFamily:' var(--garnett-light);',
        display:'inline-block',
        mb:'10px'
    }
    const stratagyTitle = {
        bg:'#00BA61',
        color:'#fff',
        fontFamily:'var(--garnett-regular)',
        fontSize:['20.825px','20.825px','48px','48px','48px','48px'],
        fontWeight:'400',
        lineHeight:'52.8px',
        display:'inline'
    }
    const stratagyDescription ={
        fontSize:['15.619px','15.619px','15.619px','20px','20px','20px'],
        color:'#000',
        fontFamily:'var(--foundersGrotesk-regular);',
        fontWeight:'400',
        mt:'24px',
    }
  return (
    <Box p={['80px 0','80px 0','80px 0','150px 0','150px 0','150px 0']}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
            {/*  */}
            <Box maxW={'864px'} m={'0 auto'} textAlign={'center'} pb={['53px','53px','53px','0px','0px','0px']}>
                <Text as={'h2'} sx={sectionHeading}>Our Culture</Text>
                <Text as={'p'} sx={sectionParagraph}>Our team of certified professionals excels in leveraging the potential of PPC advertising to help clients maximise their ROI and boost brand visibility. With extensive experience and a comprehensive understanding of the marketing sphere, we design and execute white label PPC strategies that produce tangible results, allowing agencies to make profits consistently.</Text>
            </Box>

            {/* Stratagy */}
            {/* SliderWrapper And Slides */}
            <Box sx={boxWrapperGrid}>
                <Box sx={boxDesign}>
                    <Text as='h4' sx={stratagyNumber}>01</Text>
                    <Box>
                        <Text as={'span'} sx={stratagyTitle}>Innovation at the Core.</Text>
                    </Box>
                    <Text as={'p'} sx={stratagyDescription}>Foster continuous learning and creativity within our team, empowering them to explore new ideas, take calculated risks, and embrace change. This culture of innovation propels us to stay ahead of industry trends, delivering cutting-edge solutions to our clients.</Text>
                </Box>
                <Box sx={boxDesign}>
                    <Text as='h4' sx={stratagyNumber}>01</Text>
                    <Box>
                        <Text as={'span'} sx={stratagyTitle}>Empathy in Every Interaction</Text>
                    </Box>
                    <Text as={'p'} sx={stratagyDescription}>Foster continuous learning and creativity within our team, empowering them to explore new ideas, take calculated risks, and embrace change. This culture of innovation propels us to stay ahead of industry trends, delivering cutting-edge solutions to our clients.</Text>
                </Box>
                <Box sx={boxDesign}>
                    <Text as='h4' sx={stratagyNumber}>01</Text>
                    <Box>
                        <Text as={'span'} sx={stratagyTitle}>Growth & Development</Text>
                    </Box>
                    <Text as={'p'} sx={stratagyDescription}>Foster continuous learning and creativity within our team, empowering them to explore new ideas, take calculated risks, and embrace change. This culture of innovation propels us to stay ahead of industry trends, delivering cutting-edge solutions to our clients.</Text>
                </Box>
                <Box sx={boxDesign}>
                    <Text as='h4' sx={stratagyNumber}>01</Text>
                    <Box>
                        <Text as={'span'} sx={stratagyTitle}>Collaboration & Teamwork</Text>
                    </Box>
                    <Text as={'p'} sx={stratagyDescription}>Foster continuous learning and creativity within our team, empowering them to explore new ideas, take calculated risks, and embrace change. This culture of innovation propels us to stay ahead of industry trends, delivering cutting-edge solutions to our clients.</Text>
                </Box>
                <Box sx={boxDesign}>
                    <Text as='h4' sx={stratagyNumber}>01</Text>
                    <Box>
                        <Text as={'span'} sx={stratagyTitle}>Positive work Environment</Text>
                    </Box>
                    <Text as={'p'} sx={stratagyDescription}>Foster continuous learning and creativity within our team, empowering them to explore new ideas, take calculated risks, and embrace change. This culture of innovation propels us to stay ahead of industry trends, delivering cutting-edge solutions to our clients.</Text>
                </Box>
                <Box sx={boxDesign}>
                    <Text as='h4' sx={stratagyNumber}>01</Text>
                    <Box>
                        <Text as={'span'} sx={stratagyTitle}>Client centric Approach</Text>
                    </Box>
                    <Text as={'p'} sx={stratagyDescription}>Foster continuous learning and creativity within our team, empowering them to explore new ideas, take calculated risks, and embrace change. This culture of innovation propels us to stay ahead of industry trends, delivering cutting-edge solutions to our clients.</Text>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}
export default Culture
