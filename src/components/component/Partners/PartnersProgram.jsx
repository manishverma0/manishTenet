import React from 'react'
import {Box, Container, Flex, Text ,Image} from '@chakra-ui/react'
import Program1 from '../../assets/Partners/PartnersProgram/1.svg'
import Program2 from '../../assets/Partners/PartnersProgram/2.svg'
import Program3 from '../../assets/Partners/PartnersProgram/3.svg'
import Program4 from '../../assets/Partners/PartnersProgram/4.svg'
import Program5 from '../../assets/Partners/PartnersProgram/5.svg'
import Program6 from '../../assets/Partners/PartnersProgram/6.svg'
const PartnerProgram = ()=> {
    const sectionH2Heading = {
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        pb:'30px'
    }
    const sectionParagraph = {
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        maxW:'688px',
        m:'0 auto'
    }
    // Program 
    const programTitle ={
        fontSize:['18px','18px','18px','32px','32px','32px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        letterSpacing:'-0.704px',
        mb:'15px'
     

    }
    const programText ={
        fontSize:['14px','14px','14px','18px','18px','18px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        
    }
    const programmeImg ={
        w:['61px','61px','61px','89px','89px','89px'],
        maxW:['61px','61px','61px','89px','89px','89px'],
    }
    return (
        <Box p={['80px 0','80px 0','80px 0','150px 0','150px 0','150px 0']}>
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}>

                {/* Section Heading */}
                <Box textAlign={'center'} pb={'60px'}>
                    <Text as={'h2'} sx={sectionH2Heading}>The Partner Programme</Text>    
                    <Text as={'p'} sx={sectionParagraph}>Our partners offer a range of tools, services and solutions to help teams reach their productivity potential.</Text>   
                </Box>
                
                {/* parners  programme */}
                <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} gap={'20px'}>
                    <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                        <Flex>
                            <Box>
                                <Image src={Program1}  sx={programmeImg}/>
                            </Box>
                            <Box  m={'21px 18px 19px 19px'}>
                                <Text as={'h3'} sx={programTitle}>Boost your productivity</Text>
                                <Text as={'p'} sx={programText}>Get more done with less distraction by bringing the tools that your teams use daily into Slack. </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                        <Flex>
                            <Box>
                                <Image src={Program1} sx={programmeImg}/>
                            </Box>
                            <Box  m={'21px 18px 19px 19px'}>
                                <Text as={'h3'} sx={programTitle}>Boost your productivity</Text>
                                <Text as={'p'} sx={programText}>Get more done with less distraction by bringing the tools that your teams use daily into Slack. </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                        <Flex>
                            <Box>
                                <Image src={Program1} sx={programmeImg}/>
                            </Box>
                            <Box  m={'21px 18px 19px 19px'}>
                                <Text as={'h3'} sx={programTitle}>Boost your productivity</Text>
                                <Text as={'p'} sx={programText}>Get more done with less distraction by bringing the tools that your teams use daily into Slack. </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                        <Flex>
                            <Box>
                                <Image src={Program1} sx={programmeImg}/>
                            </Box>
                            <Box  m={'21px 18px 19px 19px'}>
                                <Text as={'h3'} sx={programTitle}>Boost your productivity</Text>
                                <Text as={'p'} sx={programText}>Get more done with less distraction by bringing the tools that your teams use daily into Slack. </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                        <Flex>
                            <Box>
                                <Image src={Program1} sx={programmeImg}/>
                            </Box>
                            <Box  m={'21px 18px 19px 19px'}>
                                <Text as={'h3'} sx={programTitle}>Boost your productivity</Text>
                                <Text as={'p'} sx={programText}>Get more done with less distraction by bringing the tools that your teams use daily into Slack. </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box bg={'#F5F5F5'} minHeight={['127px','127px','127px','230px','230px','230px','230px']}>
                        <Flex>
                            <Box>
                                <Image src={Program1} sx={programmeImg}/>
                            </Box>
                            <Box  m={'21px 18px 19px 19px'}>
                                <Text as={'h3'} sx={programTitle}>Boost your productivity</Text>
                                <Text as={'p'} sx={programText}>Get more done with less distraction by bringing the tools that your teams use daily into Slack. </Text>
                            </Box>
                        </Flex>
                    </Box>
               
                </Box>
            </Container> 
        </Box>
    )
}
export default PartnerProgram