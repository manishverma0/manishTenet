import React from 'react'
import {Box,Text,Container,Image, Flex} from '@chakra-ui/react'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/ContactUs/Banner/banner.svg'

 

const Banner = () => {
    const bannerHeading = {
        fontSize: ['35px', '35px', '35px', '58px', '58px', '58px'],
        color: '#fff',
        fontFamily: 'var(--garnett-semibold)',
        fontWeight: '600',
        
    };
    
    const bannerParagraph = {
        fontSize: ['14px', '14px', '14px', '23px', '23px', '23px'],
        color: '#fff',
        fontFamily: 'var(--foundersGrotesk-regular)',
        fontWeight: '400',
        p:'17px 0 38px',
        maxW:'511px'
    };
    const Bcbuttons = {
        fontSize: '20px',
        color: '#fff',
        fontWeight: '400',
        fontFamily: 'var(--foundersGrotesk-regular)',
        padding:'9px 40px 4px',
        display:'inline-block',
        minW:'55px'
    };
    
    
  return (
    <Box  overflow={'hidden'} display={['block','block','block','flex','flex','flex']} alignItems={'start'} position={'relative'}>
        <Box bg={'#000'}  w={['100%','100%','100%','50%','50%','50%']}>
            <Box w={["90%", "90%", "90%", "90%", "90%", "90%"]} ml={'auto'} pt={'90px'} >
                {/* Text Part */}
                <Box>
                    <Text as='h1' sx={bannerHeading}>Drop us a line. We’re great listeners. </Text>
                    <Text as='p' sx={bannerParagraph}>At Kodeglobe, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.</Text>
                </Box>
                <Box>
                    <Link href="#" style={{ ...Bcbuttons, backgroundColor: '#9B4DFF',marginRight:'13px' }}>Business</Link>
                    <Link href="#" style={{ ...Bcbuttons, border: '1px solid', borderColor: '#fff' }}>Careers</Link>
                </Box>
                <Box display={'flex'} justifyContent={'end'} mt={'80px'}>
                    <Image src={BannerImage}   h={'100%'} objectFit={'cover'}/>
                </Box>
            </Box>
        </Box>
        <Box w={['100%','100%','100%','50%','50%','50%']}>
        <ContactForm/>
        </Box>
    </Box>
  )
}
export default Banner
