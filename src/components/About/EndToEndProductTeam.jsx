import React from 'react'
import {Box, Text ,Container , Image, Flex} from '@chakra-ui/react'
import LeftImg from '../../assets/About/endtoendproject/1.svg'
import RightImg from '../../assets/About/endtoendproject/2.svg'
import Mobile from '../../assets/About/endtoendproject/Mobile/mobile.svg'

const EndToEndProductTeam = () => {
  return (
        <Box bg={'#0057FF'} p={['68px 0 68px 0','68px 0 68px 0','68px 0 68px 0','160px 0 270px 0','160px 0 270px 0','160px 0 270px 0']}>
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
                {/* Texts Heading */}
                <Box>
                    <Text as={'h2'} maxW={['309px','309px','509px','1076px','1076px','1076px']} m={'0 auto'} textAlign={'center'} color={'#fff'} fontSize={['24px','24px','24px','58px','58px','58px']} fontWeight={'600'} lineHeight={'normal'} fontFamily={'var(--garnett-semibold)'}>We’re one of the few agencies in the world that can take a product idea from end to end.</Text>
                </Box>
                <Box>
                    <Text as={'p'}  maxW={['341px','341px','441px','622px','622px','622px']}  pt={['22px','22px','22px','43px','43px','43px']} pb={['30px','30px','30px']} color={'#fff'} m={'0 auto'} textAlign={'center'} fontSize={['13px','13px','13px','20px','20px','20px']} fontWeight={'400'} lineHeight={'normal'} fontFamily={'var(--garnett-regular)'}>From napkin sketch to real shipped product. Have a great new product idea and nobody to start building it? We’re your team.</Text>
                </Box>
                <Box >
                {/* Desktop Image */}
                    <Box display={['none','none','none','block','block','block']}>
                        <Flex display={['block','block','block','flex','flex','flex']} justifyContent={'space-between'} position={['relative','relative','relative','absolute','absolute','absolute']} w={'100%'} bottom={['0px','0px','0px','-180px','-180px','-180px']} left={'0'} right={'0'} m={'auto'}>
                            <Image src={LeftImg} w={'45%'}/>
                            <Image src={RightImg} w={'25%'}/>
                        </Flex>
                    </Box>
                {/* Mobile Image */}
                    <Box display={['block','block','block','none','none','none']}> 
                        <Image src={Mobile} w={'100%'} h={'100%'} objectFit={'cover'}/>
                    </Box>
                </Box>
            </Container>
        </Box>
  )
}
export default EndToEndProductTeam