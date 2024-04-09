import React from 'react'
import {Box,Text,Container,Flex, Link} from '@chakra-ui/react'

const Service = () => {
    const sectionH2Heading = {
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        pb:['22px','22px','22px','30px','30px','30px'],
        maxW:'686px',
    }
    const sectionParagraph = {
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        maxW:'864px', 
    }
    const valueSubtitle = {
        color:'#000',
        fontSize:['18px','18px','18px','32px','32px','32px'],
        fontFamily:'var(--garnett-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        mb:'20px'
    }
    const valueSubText ={
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontWeight:'400',
        color:'#333',
        lineHeight:'normal',
        fontFamily:'var(--foundersGrotesk-regular)'
    }
    const valueBox ={
        bg:['#E9F0FF','#E9F0FF','#E9F0FF','#FFF','FFF','#FFF'],
        p:['25px 19px 30px 8px','25px 19px 30px 8px','25px 19px 30px 8px','0px','0px','0px'],
        mb:['18px','18px','18px','0px','0px','0px'],
    }
  
  return (
    <Box p={'150px 0'}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}>
            {/* Section Heading */}
            <Box  pb={['38px','38px','38px','60px','60px','60px']}>
                <Text as={'h2'} sx={sectionH2Heading}>Zero Hassle White Label Service</Text>    
                <Text as={'p'} sx={sectionParagraph}>When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.</Text>   
            </Box>

            {/* Why Choose As Our Tenet */}
            <Box>
                <Box maxW={['100%', '100%', '100%', '80%', '80%', '80%']} ml={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']} p={['0px 0px 60px','0px 0px 60px','0px 0px 60px','60px 0px 0px','60px 0px 0px',]}>
                        {/* First Row */}
                        <Box display={['block','block','block','grid','grid','grid']}  rowGap={'50px'} columnGap={'100px'} gridTemplateColumns={'repeat(2,1fr)'} pb={['0px','0px','0px','60px','60px','60px']}>
                            {/*  Value One */}
                            <Flex sx={valueBox}>
                             
                                    <Box >
                                        <Text as={'h3'} sx={valueSubtitle}>Research</Text>
                                        <Text as={'p'} sx={valueSubText}>When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.</Text>
                                    </Box>
                            </Flex>
                            {/* Value Two */}
                            <Flex sx={valueBox}>
                            
                                    <Box >
                                        <Text as={'h3'} sx={valueSubtitle}>Design</Text>
                                        <Text as={'p'} sx={valueSubText}>When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.</Text>
                                    </Box>
                            </Flex>
                            {/*  Value three */}
                            <Flex sx={valueBox}>
                             
                             <Box >
                                 <Text as={'h3'} sx={valueSubtitle}>Build</Text>
                                 <Text as={'p'} sx={valueSubText}>When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.</Text>
                             </Box>
                            </Flex>
                            {/* Value Two */}
                            <Flex sx={valueBox}>
                            
                                    <Box >
                                        <Text as={'h3'} sx={valueSubtitle}>Growth</Text>
                                        <Text as={'p'} sx={valueSubText}>When it comes to E-commerce Solutions, KodeGlobe Technologies creates incredibly effective and actionable strategies to maximize your brand visibility. We also offer our best end-to-end consulting from market research to business model to marketing strategies.</Text>
                                    </Box>
                            </Flex>
                        </Box>
                        {/* Second Row */}
                      
                        {/* All Service Page Link */}
                        <Box pt={'66px'}>
                            <Text as={'p'} sx={valueSubText} pb={'28px'}>For more detailed service offerings checkout our service spectrum.</Text>
                            <Link color={'#fff'} bg={'#0057FF'} p={['4px 14px']} display={'inline-block'} fontSize={['14px','14px','14px','20px','20px','20px']}fontFamily={'var(--foundersGrotesk-regular)'}fontWeight={'400'}lineHeigh={'normal'}>Our Services</Link>
                        </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Service
