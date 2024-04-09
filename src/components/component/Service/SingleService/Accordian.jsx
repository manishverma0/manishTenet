import React from 'react'
import {
  Box,Container,Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,} from '@chakra-ui/react'
  import {MinusIcon} from '@chakra-ui/icons'
  import { AddIcon } from '@chakra-ui/icons'

const Accordian = () => {
  const sectionHeading = {
    color:'#000',
    fontSize:['32px','32px','32px','48px','48px','48px'],
    fontFamily:'var(--garnett-regular)',
    lineHeight:'normal',
    fontWeight:'400',
    mb:['22px','22px','22px','35px','35px','35px']
}
   // Paragrph
   const sectionParagraph = {
    fontFamily:'var(--foundersGrotesk-regular)',
    fontWeight:'400',
    fontSize:'18px',
    lineHeight:'normal',
    mb:'25px'
}
// Accordian Styling
const accordianIndex = {
    fontSize:['32px','32px','32px','32px','32px','32px'],
    fontFamily:'var(--garnett-regular)',
    fontWeight:'400',
    color:'#333'
}
const accordianTitle ={
    fontSize:['24px','24px','24px','24px','24px','24px'],
    fontFamily:'var(--garnett-regular)',
    fontWeight:'400',
    color:'#333'
}
const accordianParagraph = {
  fontFamily:'var(--foundersGrotesk-regular)',
  fontWeight:'400',
  fontSize:'18px',
  lineHeight:'normal',
  ml:'90px',
  mt:'24px'
}
const accordianItemBox ={
  p:'8px 0',
  borderTop:'none',
  borderBottom:'1px',
  borderBottomColor:'#B5B5B5'
}
  return (
      <Box p={'150px 0 25px'}>
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                <Box maxW={'1038px'}>
                    <Text as={'h2'} sx={sectionHeading}>(Our Approach) Think broad & act deep with our design sprint workshops</Text>
                    <Text as={'p'} sx={sectionParagraph} maxW={'774px'}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. </Text>
                </Box>
                {/* Accordian */}
                <Box mt={'65px'}> 
                    <Accordion allowMultiple>
                      <AccordionItem  sx={accordianItemBox}>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton> 
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex alignItems={'center'}>
                                        {/* Accordian Index Number */}
                                        <Box mr={'53px'}>
                                            <Text as={'span'} sx={accordianIndex}>01</Text>
                                        </Box>
                                        {/* Accordian Title */}
                                        <Box>
                                            <Text as={'h3'} sx={accordianTitle}>Why choose us reason 1 (Our solution approach)</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                {isExpanded ? (
                                  <MinusIcon fontSize='24px'/>
                                ) : (
                                  <AddIcon fontSize='24px'/>
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text as={'p'} sx={accordianParagraph}>
                                    Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. 
                                </Text>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem sx={accordianItemBox}>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton> 
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex alignItems={'center'}>
                                        {/* Accordian Index Number */}
                                        <Box mr={'53px'}>
                                            <Text as={'span'} sx={accordianIndex}>01</Text>
                                        </Box>
                                        {/* Accordian Title */}
                                        <Box>
                                            <Text as={'h3'} sx={accordianTitle}>Why choose us reason 1 (Our solution approach)</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                {isExpanded ? (
                                  <MinusIcon fontSize='24px'/>
                                ) : (
                                  <AddIcon fontSize='24px'/>
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text as={'p'} sx={accordianParagraph}>
                                    Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. 
                                </Text>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem sx={accordianItemBox}>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton> 
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex alignItems={'center'}>
                                        {/* Accordian Index Number */}
                                        <Box mr={'53px'}>
                                            <Text as={'span'} sx={accordianIndex}>01</Text>
                                        </Box>
                                        {/* Accordian Title */}
                                        <Box>
                                            <Text as={'h3'} sx={accordianTitle}>Why choose us reason 1 (Our solution approach)</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                {isExpanded ? (
                                  <MinusIcon fontSize='24px'/>
                                ) : (
                                  <AddIcon fontSize='24px'/>
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text as={'p'} sx={accordianParagraph}>
                                    Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. 
                                </Text>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem sx={accordianItemBox}>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton> 
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex alignItems={'center'}>
                                        {/* Accordian Index Number */}
                                        <Box mr={'53px'}>
                                            <Text as={'span'} sx={accordianIndex}>01</Text>
                                        </Box>
                                        {/* Accordian Title */}
                                        <Box>
                                            <Text as={'h3'} sx={accordianTitle}>Why choose us reason 1 (Our solution approach)</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                {isExpanded ? (
                                  <MinusIcon fontSize='24px'/>
                                ) : (
                                  <AddIcon fontSize='24px'/>
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text as={'p'} sx={accordianParagraph}>
                                    Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. 
                                </Text>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                      <AccordionItem sx={accordianItemBox}>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton> 
                                <Box as="span" flex='1' textAlign='left'>
                                    <Flex alignItems={'center'}>
                                        {/* Accordian Index Number */}
                                        <Box mr={'53px'}>
                                            <Text as={'span'} sx={accordianIndex}>01</Text>
                                        </Box>
                                        {/* Accordian Title */}
                                        <Box>
                                            <Text as={'h3'} sx={accordianTitle}>Why choose us reason 1 (Our solution approach)</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                {isExpanded ? (
                                  <MinusIcon fontSize='24px'/>
                                ) : (
                                  <AddIcon fontSize='24px'/>
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text as={'p'} sx={accordianParagraph}>
                                    Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful. 
                                </Text>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Accordion>
                </Box>
            </Container>
      </Box>
  )
}

export default Accordian
