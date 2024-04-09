import React from 'react'
import {Box, Container, Flex, Image, Text} from '@chakra-ui/react'
import Image1 from '../../assets/Career/TextStaticAndSlider/icon1.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TextStaticsAndSlider = () => {
    const sectionHeading = {
        fontSize:['32px','32px','32px','36px','36px','36px'],
        // fontSize:['32px','32px','32px','3vw','3vw','3vwpx'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        color:'#333',
        lineHeight:'normal',
        pb:['22px','22px','22px','22px','22px','22px'],
        maxW:'600px',
    }
    const sectionParagraph = {
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontFamily:'var(--foundersGrotesk-regular);',
        fontWeight:'400',
        lineHeight:'normal',
        maxW:'560px', 
    }
    // Statics
    const staticNumber ={
        fontSize:['32px','32px','32px','40px','40px','40px'],
        fontFamily:'var(--garnett-semibold)',
        fontWeight:'600',
        color:'#333',
        lineHeight:'normal',
        pb:'5px',
        display:'inline-block'
    }
    const staticNumberParagraph ={
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontFamily:'var(--foundersGrotesk-regular);',
        fontWeight:'400',
        lineHeight:'normal',
        color:'#333'

    }
  return (
    <Box p={['120px 0 0px']} bg={'linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0.00) 100%)'}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
            <Flex>

                <Box w={'50%'}>
                    <Text h={'h3'} sx={sectionHeading}>Tenet earns the distinction of being recognized as a great workplace for four consecutive years.</Text>
                    <Text p={'p'} sx={sectionParagraph}>But don’t just take our word for it. More than 4,000 customers gave Gong a five-star rating.</Text>
                </Box>
                {/* Statics */}
                <Box w={'20%'} >
                    <Box textAlign={'center'}  pb={'43px'}>
                        <Text as={'span'} sx={staticNumber}>150+</Text>
                        <Text as={'p'} sx={staticNumberParagraph}>Solutions Delivered</Text>
                    </Box>
                    <Box textAlign={'center'}  pb={'43px'}>
                        <Text as={'span'} sx={staticNumber}>150+</Text>
                        <Text as={'p'} sx={staticNumberParagraph}>Solutions Delivered</Text>
                    </Box>
                    <Box textAlign={'center'}>
                        <Text as={'span'} sx={staticNumber}>150+</Text>
                        <Text as={'p'} sx={staticNumberParagraph}>Solutions Delivered</Text>
                    </Box>
                </Box>
                {/* Slider */}
                <Box w={'30%'}>
                <Swiper
                    observeParents={true}
                    observer={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]} 
                    speed={400}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <Box bg={'#fff'} boxShadow={'0px 4px 42px 0px rgba(0, 0, 0, 0.08)'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'40px 0 40px'} mb={'60px'}>
                            <Image src={Image1}/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box bg={'#fff'} boxShadow={'0px 4px 42px 0px rgba(0, 0, 0, 0.08)'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'40px 0'}>
                            <Image src={Image1}/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box bg={'#fff'} boxShadow={'0px 4px 42px 0px rgba(0, 0, 0, 0.08)'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'40px 0'}>
                            <Image src={Image1}/>
                        </Box>
                    </SwiperSlide>
                </Swiper>
                </Box>

            </Flex>
        </Container>
      
    </Box>
  )
}

export default TextStaticsAndSlider
