import { Box , Container, Text , Image,Flex} from '@chakra-ui/react'
import React , {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { useBreakpointValue } from '@chakra-ui/react';
import HoverImg from '../../assets/About/commanImage/sliderhover.svg'
import LeftCaret from '../../assets/About/journey/icon/left.svg'
import RightCaret from '../../assets/About/journey/icon/right.svg'

const OurJourney = () => {
    // Journey Section Headings
    const heading ={
        pb:['22px','22px','22px','26px','26px','26px'],
        textAlign:'center',
        lineHeight:'normal',
        fontSize:['31px','31px','31px','72px','72px','72px'],
        color:'#fff',
        fontFamily:'var(--garnett-semibold)',
        fontWeight:'600'
    }
    const paragraph = {
        color: '#fff',
        fontSize: ['15px', '15px', '15px', '28px', '28px', '28px'],
        fontWeight: '400',
        fontFamily: 'var(--foundersGrotesk-regular)',
        maxW: '688px',
        textAlign: 'center',
        margin: '0 auto',
        lineHeight: 'normal'
      };
    // Slider Styling
    const journeyImage = {
        mt:['12px','12px','12px','40px','40px','40px'],
        mb:['19px','19px','19px','24px','24px','24px'],
        w:'100%',
        h:'100%',
        objectFit:'cover'
    }
    const journeyYear = {
        color:'#fff',
        fontSize:['18px','18px','18px','48px','48px','48px'],
        fontFamily:'var(--garnett-light)',
        fontWeight: '300',
        lineHeight: 'normal',
        letterSpacing: '-0.912px'
    }
    const journeyTitle = {
        color:'#fff',
        fontSize:['18px','18px','18px','32px','32px','32px'],
        letterSpacing: '-0.704px',
        fontWeight:['600','600','600','400','400','400'],
        lineHeight: 'normal',
        fontFamily:['var(--garnett-semibold)',' var(--garnett-semibold)',' var(--garnett-semibold)','var(--garnett-regular)','var(--garnett-regular)','var(--garnett-regular)','var(--garnett-regular)'],
        mb:['22px','22px','22px','30px','30px','30px']
    }
    const journeyDescription = {
        color:'#fff',
        fontSize:['11px','11px','12px','20px','20px','20px'],
        lineHeight:'normal',
        fontWeight:'400',
        fontFamily:'var(--foundersGrotesk-regular)'
       
    }
    // Your styling and other configurations...
    // Swipper Slider
    const swipperSliderCustomeStyle = {
      transform: useBreakpointValue({
        base: 'translate3d(3.5%, 0px, 0px)', // No transform for base (xs) screen size
        sm: 'translate3d(3.5%, 0px, 0px)', // Apply transform for sm screen size
        md: 'translate3d(5%, 0px, 0px)', // Apply transform for md screen size
      }),
    };

    // Dynamic JSON data
    const journeyData = [
      {
        year: "2024",
        image: require('../../assets/About/journey/1.svg'),
        title: "The New Chapter",
        description: "KodeGlobe is rebranded and shall now be known as Tenet. Tenet is more than a name, it is a new chapter in our growth journey and symbol of our vision to focus on creating even greater impact and client delight in the future."
      },
      {
        year: "2023",
        image: require('../../assets/About/journey/2.svg'),
        title: "Strategic Partnerships",
        description: "Increased our team to 40+ individuals, partnering with several companies as dedicated solution partners and further broadening our service capabilities."
      },
      {
        year: "2022",
        image: require('../../assets/About/journey/3.svg'),
        title: "Strengthening Impact in MENA",
        description: "Consolidated our impact and client satisfaction in the MENA region through strategic engagements and high-quality deliverables."
      },
      {
        year: "2022",
        image: require('../../assets/About/journey/4.svg'),
        title: "Corporate Partnerships",
        description: "Our team expanded to more than 30+ members, beginning collaborations with large international corporations and undertaking government projects. Also significantly enhancing our presence in the MENA region."
      },
      {
        year: "2021",
        image: require('../../assets/About/journey/5.svg'),
        title: "Team Expansion for Bespoke Experiences:",
        description: "Team grew to 20+ talented individuals, focusing on tailored client experiences."
      },
      {
        year: "2021",
        image: require('../../assets/About/journey/6.svg'),
        title: "Exponential Growth Amid Challenges:",
        description: "In response to the surge in digital transformation needs due to COVID-19, we excelled in our execution, leading to unprecedented company growth."
      },
      {
        year: "2020",
        image: require('../../assets/About/journey/7.svg'),
        title: "Widening Our Reach:",
        description: "Extended our clientele to encompass over 15+ countries, marking a year of robust project delivery and geographic expansion."
      },
      {
        year: "2019",
        image: require('../../assets/About/journey/8.svg'),
        title: "Project Milestone:",
        description: "Delivered 100+ projects in this year, demonstrating service versatility across different areas."
      },
      {
        year: "2019",
        image: require('../../assets/About/journey/9.svg'),
        title: "Building the Team:",
        description: "Welcomed our first employee and continued hiring, significantly enhancing our capabilities."
      },
      {
        year: "2018",
        image: require('../../assets/About/journey/10.svg'),
        title: "Expanding Client Base:",
        description: "Catered to a diverse range of clients including SMBs, funded startups, and enterprise clients, broadening our service portfolio."
      },
      {
        year: "2018",
        image: require('../../assets/About/journey/11.svg'),
        title: "Establishment and Expansion:",
        description: "Officially registered as KodeGlobe Technologies in India. Delivered 50+ projects across 8+ countries, expanding beyond expanding beyond initial services."
      },
      {
        year: "2017",
        image: require('../../assets/About/journey/12.svg'),
        title: "foundation and Recognition:",
        description: "Began freelancing with a team of 3, quickly reaching #2 rank among 1 million+ freelancers for exceptional service quality."
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
        <Box bg={'#00342B'} p={['76px 0 80px 0','76px 0 80px 0','76px 0 80px 0','142px 0 122px 0','142px 0 122px 0','142px 0 122px 0']} position={'relative'} overflow={'hidden'}>
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                {/* Section Heading */}
                <Box maxW={'1000px'} m={'0 auto'} pb={['50px','50px','50px','100px','100px','100px']}>
                    <Text as={'h2'} sx={heading}>How we arrived at where we are. <Text as={'span'} color={'#00BA61'}>Our Journey</Text></Text>
                    <Text as={'p'} sx={paragraph}>Explore our carefully curated solutions by outcomes that are tailored for your needs.</Text>
                </Box>
            </Container>
                {/* Journey Slider */}
                {/* Navigation */}
                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} display={['block','block','none','none','none']} mb={'30px'}>
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
                {/* Card Design For Slider */}
                <Box  _hover={{ cursor: `url(${HoverImg}), auto` }}>
                <Swiper
                    ref={swiperRef}
                    observeParents={true}
                    observer={true}
                    modules={[Navigation, FreeMode]}
                    speed={750}
                    slidesPerView={4.2}
                    spaceBetween={50}
                    style={swipperSliderCustomeStyle}
                    breakpoints={{
                    120: { slidesPerView: 1.4, spaceBetween: 20, freeMode: false },
                    320: { slidesPerView: 1.4, spaceBetween: 20, freeMode: false },
                    480: { slidesPerView: 1.7, spaceBetween: 30, freeMode: false },
                    768: { slidesPerView: 2.5, spaceBetween: 40 },
                    992: { slidesPerView: 2.7, spaceBetween: 50 },
                    }}
                >
      
                    {journeyData.map((journey, index) => (
                        <SwiperSlide key={index}>
                            <Box>
                                {/* Journey Year */}
                                <Text as={'h3'} sx={journeyYear}>{journey.year}</Text>
                                <Image src={journey.image.default} sx={journeyImage}/>
                                {/* Journey title and short description */}
                                <Box>
                                    <Text as={'h4'} sx={journeyTitle}>{journey.title}</Text>
                                    <Text as={'p'} sx={journeyDescription}>{journey.description}</Text>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </Box>
        </Box>
    );
}
export default OurJourney
