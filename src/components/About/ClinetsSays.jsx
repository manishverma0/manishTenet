import React,{useRef} from 'react'
import {Box,Container,Flex,Text, useBreakpointValue , Image} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import fixIcon from '../../assets/About/clientSays/FixIcon.svg'
import fixLogo from '../../assets/About/clientSays/FixLogo.svg'
import HoverImg from '../../assets/About/commanImage/sliderhover.svg'
import LeftCaret from '../../assets/About/journey/icon/left.svg'
import RightCaret from '../../assets/About/journey/icon/right.svg'
 
const ClinetsSays = () => {
    const sectionHeading = {
    color:'#fff',
    fontSize:['36px','36px','36px','58px','58px','58px'],
    fontWeight: '600',
    lineHeight: 'normal',
    maxW:'618px',
    fontFamily:"var(--garnett-semibold);"
    }
    const sectionParagraphone = {
    color:'#fff',
    fontSize:['14px','14px','14px','20px','20px','20px'],
    fontFamily:' var(--foundersGrotesk-regular);',
    fontWeight:'400',
    lineHeight:'normal',
    mb:['22px','22px','22px','35px','35px','35px'],
    mt:['22px','22px','22px','35px','35px','35px']
    }
    // Slider Slides Design
    const shortparagraph = {
    color: '#fff',
    fontSize: ['14px','14px','14px','20px','20px','20px'],
    lineHeight: 'normal',
    fontWeight: '400',
    fontFamily: 'var(--foundersGrotesk-regular)',
    };
    const clientNameStyle = {
    color: '#fff',
    fontSize: ['13px','13px','13px','20px','20px','20px'],
    fontWeight: '400',
    lineHeight: 'normal',
    fontFamily: 'var(--foundersGrotesk-regular)',
    mb:'6px'
    };
    const designationStyle = {
    color: '#fff',
    fontSize: ['10px','10px','10px','16px','16px','16px'],
    fontWeight: '400',
    lineHeight: 'normal',
    fontFamily: 'var(--foundersGrotesk-regular)',
    };
    // Slider Design
        // Swipper Slider
        const swipperSliderCustomeStyle = {
            transform: useBreakpointValue({
              base: 'translate3d(5%, 0px, 0px)', // No transform for base (xs) screen size
              sm: 'translate3d(5%, 0px, 0px)', // Apply transform for sm screen size
              md: 'translate3d(5%, 0px, 0px)', // Apply transform for md screen size
            }),
          };   
    // Data
    const clintSaysData = [
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
        {
            description:'We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.',
            clintName:'Client name',
            designation:'Designation'
        },
    ];
        // Swipper Indicator
        const swiperRef = useRef(null);
        const goNext = () => {
          if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
          }
          // console.log(swiperRef.current.swiper);
        };
      
        const goPrev = () => {
          if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
          }
        };
  return (
        <Box bg={'#0D0E4D'} p={['80px 0 80px 0','80px 0 80px 0','80px 0 80px 0','110px 0 115px 0','110px 0 115px 0','110px 0 115px 0']}>
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
            {/* Headings And Paragph Section */}
                <Box pb={['10px','10px','10px','100px','100px','100px']}>
                    <Flex justifyContent={'space-between'} display={['block','block','block','flex','flex','flex']}>
                        <Box w={['100%','100%','100%','50%','50%','50%']}>
                            <Text as="h2" sx={sectionHeading}>What our client’s has to say about us</Text>
                        </Box>
                        <Box w={['100%','100%','100%','50%','50%','50%']}>
                            <Box maxW={'424px'} ml={[,'0','0','0','auto','auto','auto']}>
                                <Text as={'p'}  sx={sectionParagraphone}>We’re not just Developers. We’re Solutions Specialists. We create Digital Products, which work as solutions to the client’s requirements.</Text>
                                <Text as={'p'} sx={sectionParagraphone}>Which work as solutions to the client’s requirements.</Text>
                            </Box>
                        </Box>

                    </Flex>
                </Box>
                {/* Slider Slide Count Number */}
                <Box>
                    <Text display={['none','none','none','block','block','block']} as={'span'} fontSize={['20px','20px','20px','20px','20px','20px']} color={'#fff'} fontFamily={'var(--garnett-regular)'} fontWeight={'400'}>01/24</Text>
                </Box>
            </Container>
            {/* Navigation */}
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} display={['block','block','block','none','none','none']}>
                  <Box display={'flex'} justifyContent={'space-between'}>
                      <Box>
                        <Text as={'span'} fontFamily={'var(--garnett-regular)'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>1/3</Text>
                      </Box>
                      <Flex>
                          <Box onClick={()=> goNext()} mr={'20px'}>
                              <Image src={LeftCaret} cursor={'pointer'}/>
                          </Box>
                          <Box onClick={()=> goPrev()}>
                              <Image src={RightCaret} cursor={'pointer'}/>
                          </Box>
                      </Flex>
                  </Box>
            </Container>
            {/* Slider */}
            <Box _hover={{ cursor: `url(${HoverImg}), auto` }}>
            <Swiper
                    ref={swiperRef}
                    observeParents={true}
                    observer={true}
                    modules={[Navigation, FreeMode]}
                    speed={750}
                    slidesPerView={2.7}
                    spaceBetween={24}
                    style={swipperSliderCustomeStyle}
                    
                    breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                        freeMode: false,
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                        freeMode: false,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 24,
                    },
                    992: {
                        slidesPerView: 4.5,
                        spaceBetween: 24,
                    },
                    }}
                >
                   {clintSaysData.map((data,index)=> (
                    <SwiperSlide key={index}>
                        <Box bg={'#0036C2'} p={'20px'} mt={'90px'}>
                            {/* Client Icons */}
                            <Box>
                                <Flex justifyContent={'space-between'} pb={['0px','0px','0px','45px','45px','45px']}>
                                    <Box>
                                        <Box position={'relative'} top={['-44px','-44px','-44px','-50px','-50px','-50px']}>
                                            <Image src={fixIcon} w={['58px','58px','58px','89px','89px','89px']}/>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Image src={fixLogo} w={['54px','54px','54px','83px','83px','83px']}/>
                                    </Box>
                                </Flex>
                                {/* Short Description */}
                                <Box>
                                    <Text as={'p'} sx={shortparagraph}>{data.description}</Text>
                                </Box>
                            </Box>
                            {/* Client Name and Designation */}
                            <Box pt={['50px','50px','50px','100px','100px','100px']}>
                                <Text as={'h4'} sx={clientNameStyle}>{data.clintName}</Text>
                                <Text as={'h5'} sx={designationStyle}>{data.designation}</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            </Box>
        </Box>
  )
}
export default ClinetsSays
