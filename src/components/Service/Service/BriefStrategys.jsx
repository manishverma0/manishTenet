import React , {useRef} from 'react'
import {Box,Container, Flex, Text} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useBreakpointValue } from '@chakra-ui/react';

const BriefStrategys = () => {
    const isMobile = useBreakpointValue({ base: true, md: true, lg:false});
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
        fontSize:['14px','14px','14px','25px','25px','25px'],
        fontFamily: 'var(--foundersGrotesk-regular)',
        lineHeight:'normal',
        fontWeight:'400',
        maxW:'688px',
        m:'0 auto'
    }
    // Section Styling
    const boxWrapper = {
        display:['block','block','block','flex','flex','flex'],
        flexWrap:'wrap',
        width: '100%',
        pt:'60px'
    }
    const boxDesign ={
        position: 'relative',
        width:['100%','100%','100%','33.33%','33.33%','33.33%',],
    }
    const stratagyNumber = {
        color:'#0057FF',
        fontSize:['48px','48px','48px','64px','64px','64px'],
        fontWeight:'300',
        lineHeight:'normal'
    }
    const stratagyTitle = {
        fontFamily:'var(--garnett-regular)',
        color:'#000',
        fontSize:['20.825px','20.825px','20.825px','28px','28px','28px'],
        fontWeight:'400',
        lineHeight:'normal',
        m:'20px 0'
    }
    const stratagyDescription ={
        fontSize:['15.619px','15.619px','15.619px','20px','20px','20px'],
        color:'#000',
        fontFamily:'var(--foundersGrotesk-regular);',
        fontWeight:'400'
    }
    const sliderSettings = {
        observeParents: true,
        observer: true,
        modules: [Navigation, FreeMode],
        speed: 750,
        slidesPerView: 1.3,
        spaceBetween: 12,
    };
    // Next Slide
    const swiperRef = useRef(null);

    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
  return (
    <Box p={['80px 0','80px 0','80px 0','150px 0','150px 0','150px 0']}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}   position={'relative'}>
            {/* Section Headings */}
            <Box maxW={'864px'} m={'0 auto'} textAlign={'center'} pb={['53px','53px','53px','0px','0px','0px']}>
                <Text as={'h2'} sx={sectionHeading}>We transform abstract ideas into concrete design solutions</Text>
                <Text as={'p'} sx={sectionParagraph}>We address complex problem statements & turn them into holistic experiences.</Text>
            </Box>
        </Container>
            {/* Stratagy */}
            {/* SliderWrapper And Slides */}
            {!isMobile ? (
                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}   position={'relative'}>
                    <Box sx={boxWrapper}>
                        <Box sx={boxDesign} borderBottom={['0px','0px','0px','1px','1px','1px']} borderRight={['0px','0px','0px','1px','1px','1px']}  borderBottomColor={'#D0D5DD!important;'} borderRightColor={'#D0D5DD!important'} pt={'0'} px={'40px'} pb={'60px'}>
                            <Text as='span' sx={stratagyNumber}>01</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </Box>
                        <Box sx={boxDesign} borderBottom={['0px','0px','0px','1px','1px','1px']} borderRight={['0px','0px','0px','1px','1px','1px']}  borderBottomColor={'#D0D5DD!important;'} borderRightColor={'#D0D5DD!important'} pt={'0'} px={'40px'} pb={'60px'}>
                            <Text as='span' sx={stratagyNumber}>02</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </Box>
                        <Box sx={boxDesign} borderBottom={['0px','0px','0px','1px','1px','1px']} borderBottomColor={'#D0D5DD!important;'} pt={'0'} px={'40px'} pb={'60px'}>
                            <Text as='span' sx={stratagyNumber}>03</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </Box>
                        {/*  */}
                        <Box sx={boxDesign} borderRight={['0px','0px','0px','1px','1px','1px']} borderRightColor={'#D0D5DD!important'} pb={'0'} pt={'60px'} px={'40px'}>
                            <Text as='span' sx={stratagyNumber}>04</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </Box>
                        <Box sx={boxDesign} borderRight={['0px','0px','0px','1px','1px','1px']} borderRightColor={'#D0D5DD!important'} pb={'0'} pt={'60px'} px={'40px'}>
                            <Text as='span' sx={stratagyNumber}>05</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </Box>
                        <Box sx={boxDesign} pb={'0'} pt={'60px'} px={'40px'}>
                            <Text as='span' sx={stratagyNumber}>06</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </Box>
                    </Box>
                </Container>
            ):(
                <>
                {/* Slider Navigation */}
                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                              {/* Button */}
                              <Flex justifyContent={'space-between'} mb={'25px'}>
                        <Box>
                            <Text as={'p'}>1/3</Text>
                        </Box>
                        <Flex>
                            <Box mr={'20px'}  onClick={() => goPrev()}>                       
                                <svg cursor={'pointer'} width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2475_28134)">
                                <path d="M13.643 7.82971L14.5842 8.74656L9.59517 13.7533H22.8575V15.0697H9.59517L14.5842 20.0541L13.643 20.9933L7.06117 14.4115L13.643 7.82971Z" fill="#333333"/>
                                </g>
                                <circle cx="14.959" cy="14" r="13.5" stroke="#333333"/>
                                <defs>
                                <clipPath id="clip0_2475_28134">
                                <rect width="21.0618" height="21.0618" fill="white" transform="matrix(-1 0 0 1 25.4902 3.88062)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </Box>
                            <Box  onClick={() => goNext()}>
                                <svg cursor={'pointer'} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2475_28139)">
                                <path d="M15.316 7.82971L14.3748 8.74656L19.3638 13.7533H6.10147V15.0697H19.3638L14.3748 20.0541L15.316 20.9933L21.8978 14.4115L15.316 7.82971Z" fill="#333333"/>
                                </g>
                                <circle cx="14" cy="14" r="13.5" stroke="#333333"/>
                                <defs>
                                <clipPath id="clip0_2475_28139">
                                <rect width="21.0618" height="21.0618" fill="white" transform="translate(3.46875 3.88062)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
                 {/* Slider */}
                <Container maxWidth={["95%"]} mr={'0'} position={'relative'} p={'0'}>
                   
                    <Swiper style={{boxWrapper}} {...sliderSettings} ref={swiperRef}>
                        <SwiperSlide style={{...boxDesign,background:['#F5F5F5'],padding:'38px 18px 90px'}}>
                            <Text as='span' sx={stratagyNumber}>01</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </SwiperSlide>
                        <SwiperSlide style={{...boxDesign,background:['#F5F5F5'],padding:'38px 18px 90px'}}>
                            <Text as='span' sx={stratagyNumber}>02</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </SwiperSlide>
                        <SwiperSlide style={{...boxDesign,background:['#F5F5F5'],padding:'38px 18px 90px'}}>
                            <Text as='span' sx={stratagyNumber}>03</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </SwiperSlide>
                        <SwiperSlide style={{...boxDesign,background:['#F5F5F5'],padding:'38px 18px 90px'}}>
                            <Text as='span' sx={stratagyNumber}>04</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </SwiperSlide>
                        <SwiperSlide style={{...boxDesign,background:['#F5F5F5'],padding:'38px 18px 90px'}}>
                            <Text as='span' sx={stratagyNumber}>05</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </SwiperSlide>
                        <SwiperSlide style={{...boxDesign,background:['#F5F5F5'],padding:'38px 18px 90px'}}>
                            <Text as='span' sx={stratagyNumber}>06</Text>
                            <Text as={'h3'} sx={stratagyTitle}>Experience strategy</Text>
                            <Text as={'p'} sx={stratagyDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                        </SwiperSlide>
                    </Swiper>
                </Container>
                </>
            )}
    </Box>
  )
}
export default BriefStrategys