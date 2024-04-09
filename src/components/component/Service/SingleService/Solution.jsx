import React from 'react'
import { Box , Text,Container } from '@chakra-ui/react'

const Solution = () => {
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
        fontSize:['14px','14px','14px','32px','32px','32px'],
        fontFamily: 'var(--foundersGrotesk-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        maxW:'688px',
        m:'0 auto'
    }
    // Title
    const title = {
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        fontSize:'24px',
        lineHeight:'normal',
        pb:'19px'
    }
    // Paragrph
    const paragraph = {
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        fontSize:'18px',
        lineHeight:'normal'
    }
    const grid = {
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gap:'17px'
    }
  return (
    <Box p={'100px 0 150px'}>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>

            <Box maxW={'864px'} m={'0 auto'} textAlign={'center'} pb={['53px','53px','53px','0px','0px','0px']}>
                <Text as={'h2'} sx={sectionHeading}>We transform abstract ideas into concrete design solutions</Text>
                <Text as={'p'} sx={sectionParagraph}>We address complex problem statements & turn them into holistic experiences.</Text>
            </Box>

            {/* Boxs */}
            <Box sx={grid} pt={'60px'}>
                <Box bg={'#F5F5F5'}  p={'70px 17px'}  >
                    {/* Blue Icon */}
                        <Box pb={'52px'} display={'flex'} justifyContent={'center'}>
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="88" height="88" rx="1" fill="#0057FF"/>
                            </svg>
                        </Box>
                        {/* Title And Paragaraph */}
                        <Box>
                            {/* Title */}
                            <Text as={'h4'} sx={title}>Headline statementmax 3-4 words.</Text>
                            <Text as={'p'} sx={paragraph}>We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.</Text>
                        </Box>
                </Box>
                <Box bg={'#F5F5F5'}  p={'70px 17px'}  >
                    {/* Blue Icon */}
                        <Box pb={'52px'} display={'flex'} justifyContent={'center'}>
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="88" height="88" rx="1" fill="#0057FF"/>
                            </svg>
                        </Box>
                        {/* Title And Paragaraph */}
                        <Box>
                            {/* Title */}
                            <Text as={'h4'} sx={title}>Headline statementmax 3-4 words.</Text>
                            <Text as={'p'} sx={paragraph}>We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.</Text>
                        </Box>
                </Box>
                <Box bg={'#F5F5F5'}  p={'70px 17px'}  >
                    {/* Blue Icon */}
                        <Box pb={'52px'} display={'flex'} justifyContent={'center'}>
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="88" height="88" rx="1" fill="#0057FF"/>
                            </svg>
                        </Box>
                        {/* Title And Paragaraph */}
                        <Box>
                            {/* Title */}
                            <Text as={'h4'} sx={title}>Headline statementmax 3-4 words.</Text>
                            <Text as={'p'} sx={paragraph}>We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.</Text>
                        </Box>
                </Box>
                <Box bg={'#F5F5F5'}  p={'70px 17px'}  >
                    {/* Blue Icon */}
                        <Box pb={'52px'} display={'flex'} justifyContent={'center'}>
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="88" height="88" rx="1" fill="#0057FF"/>
                            </svg>
                        </Box>
                        {/* Title And Paragaraph */}
                        <Box>
                            {/* Title */}
                            <Text as={'h4'} sx={title}>Headline statementmax 3-4 words.</Text>
                            <Text as={'p'} sx={paragraph}>We understand the overwhelming changes in the industry. No worries, we are here to help you navigate through.</Text>
                        </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Solution
