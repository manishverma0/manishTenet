import React from 'react'
import {Box,Text,Container,Flex} from '@chakra-ui/react'

const BenifitsOfwwTnt = () => {
    const sectionH2Heading = {
        fontSize:['32px','32px','32px','58px','58px','58px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        pb:['22px','22px','22px','22px','22px','22px'],
        maxW:'686px',
        color:'#333'
    }
    const sectionParagraph = {
        fontSize:['20px','20px','20px','32px','32px','32px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        maxW:'864px', 
        color:'#0057FF'
    }
    const valueNumber ={
      fontSize:['20px','20px','20px','28px','28px','28px'],
      fontFamily:'var(--garnett-regular)',
      fontWeight:'400',
      lineHeight:'normal',
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
        // p:['25px 19px 30px 8px','25px 19px 30px 8px','25px 19px 30px 8px','0px','0px','0px'],
        w:['100%','100%','100%','100%','100%','100%'],
        mb:['18px','18px','18px','0px','0px','0px'],
    }
  
  return (
    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} borderTop={'1px'} borderTopColor={'#B5B5B5'}>
      <Box p={'150px 0 100px'}>
            {/* Section Heading */}
            <Box  pb={['38px','38px','38px','60px','60px','60px']}>
                <Text as={'h2'} sx={sectionH2Heading}>Benefits of working with Tenet.</Text>    
                <Text as={'p'} sx={sectionParagraph}>It’s a mix of these things:</Text>   
            </Box>

            {/* Why Choose As Our Tenet */}
            <Box>
                <Box maxW={['100%', '100%', '100%', '80%', '80%', '80%']} ml={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']}>
                        {/* First Row */}
                        <Box display={['block','block','block','grid','grid','grid']} gridTemplateColumns={'repeat(2,1fr)'} gap={'68px'}>
                            {/*  Value One */}
                            <Flex sx={valueBox}>
                              <Flex maxW={['424px','424px','424px','606px','606px','606px']} ml={'auto'} borderBottom={'1px'} borderBottomColor={'#B5B5B5'} pb={'36px'}>
                                    <Box w={'15%'}>
                                        <Text as={'span'} sx={valueNumber}>01</Text>
                                    </Box>
                                    <Box w={'85%'}>
                                        <Text as={'h3'} sx={valueSubtitle}>After more than a decade in business</Text>
                                        <Text as={'p'} sx={valueSubText}>While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises</Text>
                                    </Box>
                              </Flex>
                            </Flex>
                            {/* Value Two */}
                            <Flex sx={valueBox}>
                              <Flex maxW={['424px','424px','424px','606px','606px','606px']} ml={'auto'} borderBottom={'1px'} borderBottomColor={'#B5B5B5'} pb={'36px'}>
                                    <Box w={'15%'}>
                                        <Text as={'span'} sx={valueNumber}>02</Text>
                                    </Box>
                                    <Box w={'85%'}>
                                        <Text as={'h3'} sx={valueSubtitle}>After more than a decade in business</Text>
                                        <Text as={'p'} sx={valueSubText}>While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises</Text>
                                    </Box>
                              </Flex>
                            </Flex>
                            {/* Value Three */}
                            <Flex sx={valueBox}>
                              <Flex maxW={['424px','424px','424px','606px','606px','606px']} ml={'auto'} borderBottom={'1px'} borderBottomColor={'#B5B5B5'} pb={'36px'}>
                                    <Box w={'15%'}>
                                        <Text as={'span'} sx={valueNumber}>03</Text>
                                    </Box>
                                    <Box w={'85%'}>
                                        <Text as={'h3'} sx={valueSubtitle}>After more than a decade in business</Text>
                                        <Text as={'p'} sx={valueSubText}>While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises</Text>
                                    </Box>
                              </Flex>
                            </Flex>
                            {/* Value four */}
                            <Flex sx={valueBox}>
                              <Flex maxW={['424px','424px','424px','606px','606px','606px']} ml={'auto'} borderBottom={'1px'} borderBottomColor={'#B5B5B5'} pb={'36px'}>
                                    <Box w={'15%'}>
                                        <Text as={'span'} sx={valueNumber}>04</Text>
                                    </Box>
                                    <Box w={'85%'}>
                                        <Text as={'h3'} sx={valueSubtitle}>After more than a decade in business</Text>
                                        <Text as={'p'} sx={valueSubText}>While Zuora achieved global renown — a publicly traded company powering revenue models for some of the world’s largest enterprises</Text>
                                    </Box>
                              </Flex>
                            </Flex>
                        </Box>
                </Box>
            </Box>
    </Box>
  </Container>
  )
}

export default BenifitsOfwwTnt
