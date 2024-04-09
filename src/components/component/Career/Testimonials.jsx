import React from 'react'
import {Box, Flex, Image, Text ,Container} from '@chakra-ui/react'
import TestImg from '../../assets/Career/Testimonials/1.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HoverImg from '../../assets/Career/Testimonials/cursor.svg'

const Testimonials = () => {
    const testimnialsTitle = {
        fontSize:['24px','24px','24px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        pb:['22px','22px','22px','14px','14px','14px'],
        maxW:'510px'
    }
    const testimnialsParagraph = {
        fontSize:['14px','14px','14px','32px','32px','32px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        color:'#000',
        pt:'24px'

    }
    const testimnialsName = {
        fontSize:['14px','14px','14px','32px','32px','32px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        color:'#111'
    }
    const testimnialsDesignation = {
        fontSize:['14px','14px','14px','24px','24px','24px'],
        fontFamily:'var(--foundersGrotesk-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        color:'#111'

    }
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '" style="border-radius: 0; width: 11px; height: 11px; margin: 0px 5px;"></span>';
        },
      };
      
      
      
  return (
    <Box bg={'#F5F5F5'} p={['50px 0','50px 0','50px 0','100px 0 20px','100px 0 20px','100px 0 20px']}>
      <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        <Box  _hover={{ cursor: `url(${HoverImg}), auto` }}>
            <Swiper
                observeParents={true}
                observer={true}
                pagination={pagination}
                modules={[Pagination]}
                speed={750}
                slidesPerView={4.2}
                spaceBetween={30}
                 
            
            
                
                breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    freeMode: false,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    freeMode: false,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                }}
                >
                <SwiperSlide>
                    <Flex alignItems={'center'} mb={'80px'}>
                        {/* Text Part */}
                        <Box w={['60%']}>
                            <Box>
                                <Text as={'h3'} sx={testimnialsTitle}>What it’s like to work with Tenet?</Text>
                                {/* Paragraph */}
                                <Box maxW={'600px'}>
                                    <Box>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="58" viewBox="0 0 90 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.899 0.000976562H31.0725L30.1111 4.53809H25.4099L22.5488 17.9377H36.7111L37.7265 13.1821H42.1057L44.899 0.000976562ZM37.7265 13.1821L39.5722 4.53809H30.1111L28.2793 13.1821H37.7265Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0513 13.1672H14.2249L13.2635 17.7041H8.56224L5.70117 31.1037H19.8635L20.8788 26.3484H25.2581L28.0513 13.1672ZM20.8788 26.3484L22.7246 17.7041H13.2635L11.4316 26.3484H20.8788Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3501 39.5283H22.5237L21.5622 44.0654H16.8611L14 57.465H28.1623L29.1777 52.7094H33.5569L36.3501 39.5283ZM29.1777 52.7094L31.0234 44.0654H21.5622L19.7305 52.7094H29.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.1958 26.3486H25.3694L24.4079 30.8857H19.7068L16.8457 44.2853H31.008L32.0234 39.5297H36.4026L39.1958 26.3486ZM32.0234 39.5297L33.8691 30.8857H24.4079L22.5762 39.5297H32.0234Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4087 26.3486H11.5823L10.6208 30.8857H5.91967L3.05859 44.2853H17.2209L18.2363 39.5297H22.6155L25.4087 26.3486ZM18.2363 39.5297L20.082 30.8857H10.6208L8.78906 39.5297H18.2363Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3501 39.5518H8.52369L7.56223 44.0889H2.86107L0 57.4885H14.1623L15.1777 52.7329H19.5569L22.3501 39.5518ZM15.1777 52.7329L17.0234 44.0889H7.56223L5.73047 52.7329H15.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.899 0.000976562H76.0725L75.1111 4.53809H70.4099L67.5488 17.9377H81.7111L82.7265 13.1821H87.1057L89.899 0.000976562ZM82.7265 13.1821L84.5722 4.53809H75.1111L73.2793 13.1821H82.7265Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.0513 13.1672H59.2249L58.2635 17.7041H53.5622L50.7012 31.1037H64.8635L65.8788 26.3484H70.2581L73.0513 13.1672ZM65.8788 26.3484L67.7246 17.7041H58.2635L56.4316 26.3484H65.8788Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81.3501 39.5283H67.5237L66.5622 44.0654H61.8611L59 57.465H73.1623L74.1777 52.7094H78.5569L81.3501 39.5283ZM74.1777 52.7094L76.0234 44.0654H66.5622L64.7305 52.7094H74.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M84.1958 26.3486H70.3694L69.4079 30.8857H64.7068L61.8457 44.2853H76.008L77.0234 39.5297H81.4026L84.1958 26.3486ZM77.0234 39.5297L78.8691 30.8857H69.4079L67.5762 39.5297H77.0234Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.4087 26.3486H56.5823L55.6208 30.8857H50.9197L48.0586 44.2853H62.2209L63.2363 39.5297H67.6155L70.4087 26.3486ZM63.2363 39.5297L65.082 30.8857H55.6208L53.7891 39.5297H63.2363Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.3501 39.5518H53.5237L52.5622 44.0889H47.8611L45 57.4885H59.1623L60.1777 52.7329H64.5569L67.3501 39.5518ZM60.1777 52.7329L62.0234 44.0889H52.5622L50.7305 52.7329H60.1777Z" fill="#B882FF"/>
                                        </svg>
                                    </Box>
                                    <Text as={'p'} sx={testimnialsParagraph}>This is a place where people want more. People want to be surrounded by really good energy. You want to join something like this!</Text>
                                    <Box display={'flex'} justifyContent={'end'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="58" viewBox="0 0 91 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2397 57.5024H59.0662L60.0276 52.9653H64.7288L67.5898 39.5657H53.4275L52.4121 44.3213H48.0329L45.2397 57.5024ZM52.4121 44.3213L50.5665 52.9653H60.0276L61.8594 44.3213H52.4121Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0874 44.3362H75.9138L76.8752 39.7993H81.5764L84.4375 26.3997H70.2752L69.2598 31.1551H64.8806L62.0874 44.3362ZM69.2598 31.1551L67.4141 39.7993H76.8752L78.707 31.1551H69.2598Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7885 17.9751H67.615L68.5764 13.438H73.2776L76.1387 0.0384007H61.9764L60.961 4.79398H56.5818L53.7885 17.9751ZM60.961 4.79398L59.1153 13.438H68.5764L70.4082 4.79398H60.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9428 31.1548H64.7693L65.7307 26.6177H70.4319L73.293 13.2181H59.1307L58.1153 17.9737H53.7361L50.9428 31.1548ZM58.1153 17.9737L56.2696 26.6177H65.7307L67.5625 17.9737H58.1153Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7299 31.1548H78.5564L79.5179 26.6177H84.219L87.0801 13.2181H72.9178L71.9024 17.9737H67.5232L64.7299 31.1548ZM71.9024 17.9737L70.0567 26.6177H79.5179L81.3496 17.9737H71.9024Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7885 17.9517H81.615L82.5764 13.4146H87.2776L90.1387 0.0149632H75.9764L74.961 4.77054H70.5818L67.7885 17.9517ZM74.961 4.77054L73.1153 13.4146H82.5764L84.4082 4.77054H74.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.239708 57.5024H14.0662L15.0276 52.9653H19.7288L22.5898 39.5657H8.42754L7.41213 44.3213H3.03293L0.239708 57.5024ZM7.41213 44.3213L5.56647 52.9653H15.0276L16.8594 44.3213H7.41213Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0874 44.3362H30.9138L31.8752 39.7993H36.5764L39.4375 26.3997H25.2752L24.2598 31.1551H19.8806L17.0874 44.3362ZM24.2598 31.1551L22.4141 39.7993H31.8752L33.707 31.1551H24.2598Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.78854 17.9751H22.615L23.5764 13.438H28.2776L31.1387 0.0384007H16.9764L15.961 4.79398H11.5818L8.78854 17.9751ZM15.961 4.79398L14.1153 13.438H23.5764L25.4082 4.79398H15.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94283 31.1548H19.7693L20.7307 26.6177H25.4319L28.293 13.2181H14.1307L13.1153 17.9737H8.73605L5.94283 31.1548ZM13.1153 17.9737L11.2696 26.6177H20.7307L22.5625 17.9737H13.1153Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7299 31.1548H33.5564L34.5179 26.6177H39.219L42.0801 13.2181H27.9178L26.9024 17.9737H22.5232L19.7299 31.1548ZM26.9024 17.9737L25.0567 26.6177H34.5179L36.3496 17.9737H26.9024Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7885 17.9517H36.615L37.5764 13.4146H42.2776L45.1387 0.0149632H30.9764L29.961 4.77054H25.5818L22.7885 17.9517ZM29.961 4.77054L28.1153 13.4146H37.5764L39.4082 4.77054H29.961Z" fill="#B882FF"/>
                                        </svg>
                                    </Box>
                                </Box>
                                {/* Designation And Title */}
                                <Box>
                                    <Text as={'h4'} sx={testimnialsName}>Employee Name</Text>
                                    <Text as={'p'} sx={testimnialsDesignation}>Designation</Text>
                                </Box>
                            </Box>
                        </Box>
                        {/* Image Part */}
                        <Box w={['40%']}>
                            <Image src={TestImg} w={'100%'} h={'100%'} objectFit={'cover'}/>
                        </Box>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex alignItems={'center'}>
                        {/* Text Part */}
                        <Box w={['60%']}>
                            <Box>
                                <Text as={'h3'} sx={testimnialsTitle}>What it’s like to work with Tenet?</Text>
                                {/* Paragraph */}
                                <Box maxW={'600px'}>
                                    <Box>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="58" viewBox="0 0 90 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.899 0.000976562H31.0725L30.1111 4.53809H25.4099L22.5488 17.9377H36.7111L37.7265 13.1821H42.1057L44.899 0.000976562ZM37.7265 13.1821L39.5722 4.53809H30.1111L28.2793 13.1821H37.7265Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0513 13.1672H14.2249L13.2635 17.7041H8.56224L5.70117 31.1037H19.8635L20.8788 26.3484H25.2581L28.0513 13.1672ZM20.8788 26.3484L22.7246 17.7041H13.2635L11.4316 26.3484H20.8788Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3501 39.5283H22.5237L21.5622 44.0654H16.8611L14 57.465H28.1623L29.1777 52.7094H33.5569L36.3501 39.5283ZM29.1777 52.7094L31.0234 44.0654H21.5622L19.7305 52.7094H29.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.1958 26.3486H25.3694L24.4079 30.8857H19.7068L16.8457 44.2853H31.008L32.0234 39.5297H36.4026L39.1958 26.3486ZM32.0234 39.5297L33.8691 30.8857H24.4079L22.5762 39.5297H32.0234Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4087 26.3486H11.5823L10.6208 30.8857H5.91967L3.05859 44.2853H17.2209L18.2363 39.5297H22.6155L25.4087 26.3486ZM18.2363 39.5297L20.082 30.8857H10.6208L8.78906 39.5297H18.2363Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3501 39.5518H8.52369L7.56223 44.0889H2.86107L0 57.4885H14.1623L15.1777 52.7329H19.5569L22.3501 39.5518ZM15.1777 52.7329L17.0234 44.0889H7.56223L5.73047 52.7329H15.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.899 0.000976562H76.0725L75.1111 4.53809H70.4099L67.5488 17.9377H81.7111L82.7265 13.1821H87.1057L89.899 0.000976562ZM82.7265 13.1821L84.5722 4.53809H75.1111L73.2793 13.1821H82.7265Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.0513 13.1672H59.2249L58.2635 17.7041H53.5622L50.7012 31.1037H64.8635L65.8788 26.3484H70.2581L73.0513 13.1672ZM65.8788 26.3484L67.7246 17.7041H58.2635L56.4316 26.3484H65.8788Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81.3501 39.5283H67.5237L66.5622 44.0654H61.8611L59 57.465H73.1623L74.1777 52.7094H78.5569L81.3501 39.5283ZM74.1777 52.7094L76.0234 44.0654H66.5622L64.7305 52.7094H74.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M84.1958 26.3486H70.3694L69.4079 30.8857H64.7068L61.8457 44.2853H76.008L77.0234 39.5297H81.4026L84.1958 26.3486ZM77.0234 39.5297L78.8691 30.8857H69.4079L67.5762 39.5297H77.0234Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.4087 26.3486H56.5823L55.6208 30.8857H50.9197L48.0586 44.2853H62.2209L63.2363 39.5297H67.6155L70.4087 26.3486ZM63.2363 39.5297L65.082 30.8857H55.6208L53.7891 39.5297H63.2363Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.3501 39.5518H53.5237L52.5622 44.0889H47.8611L45 57.4885H59.1623L60.1777 52.7329H64.5569L67.3501 39.5518ZM60.1777 52.7329L62.0234 44.0889H52.5622L50.7305 52.7329H60.1777Z" fill="#B882FF"/>
                                        </svg>
                                    </Box>
                                    <Text as={'p'} sx={testimnialsParagraph}>This is a place where people want more. People want to be surrounded by really good energy. You want to join something like this!</Text>
                                    <Box display={'flex'} justifyContent={'end'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="58" viewBox="0 0 91 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2397 57.5024H59.0662L60.0276 52.9653H64.7288L67.5898 39.5657H53.4275L52.4121 44.3213H48.0329L45.2397 57.5024ZM52.4121 44.3213L50.5665 52.9653H60.0276L61.8594 44.3213H52.4121Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0874 44.3362H75.9138L76.8752 39.7993H81.5764L84.4375 26.3997H70.2752L69.2598 31.1551H64.8806L62.0874 44.3362ZM69.2598 31.1551L67.4141 39.7993H76.8752L78.707 31.1551H69.2598Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7885 17.9751H67.615L68.5764 13.438H73.2776L76.1387 0.0384007H61.9764L60.961 4.79398H56.5818L53.7885 17.9751ZM60.961 4.79398L59.1153 13.438H68.5764L70.4082 4.79398H60.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9428 31.1548H64.7693L65.7307 26.6177H70.4319L73.293 13.2181H59.1307L58.1153 17.9737H53.7361L50.9428 31.1548ZM58.1153 17.9737L56.2696 26.6177H65.7307L67.5625 17.9737H58.1153Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7299 31.1548H78.5564L79.5179 26.6177H84.219L87.0801 13.2181H72.9178L71.9024 17.9737H67.5232L64.7299 31.1548ZM71.9024 17.9737L70.0567 26.6177H79.5179L81.3496 17.9737H71.9024Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7885 17.9517H81.615L82.5764 13.4146H87.2776L90.1387 0.0149632H75.9764L74.961 4.77054H70.5818L67.7885 17.9517ZM74.961 4.77054L73.1153 13.4146H82.5764L84.4082 4.77054H74.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.239708 57.5024H14.0662L15.0276 52.9653H19.7288L22.5898 39.5657H8.42754L7.41213 44.3213H3.03293L0.239708 57.5024ZM7.41213 44.3213L5.56647 52.9653H15.0276L16.8594 44.3213H7.41213Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0874 44.3362H30.9138L31.8752 39.7993H36.5764L39.4375 26.3997H25.2752L24.2598 31.1551H19.8806L17.0874 44.3362ZM24.2598 31.1551L22.4141 39.7993H31.8752L33.707 31.1551H24.2598Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.78854 17.9751H22.615L23.5764 13.438H28.2776L31.1387 0.0384007H16.9764L15.961 4.79398H11.5818L8.78854 17.9751ZM15.961 4.79398L14.1153 13.438H23.5764L25.4082 4.79398H15.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94283 31.1548H19.7693L20.7307 26.6177H25.4319L28.293 13.2181H14.1307L13.1153 17.9737H8.73605L5.94283 31.1548ZM13.1153 17.9737L11.2696 26.6177H20.7307L22.5625 17.9737H13.1153Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7299 31.1548H33.5564L34.5179 26.6177H39.219L42.0801 13.2181H27.9178L26.9024 17.9737H22.5232L19.7299 31.1548ZM26.9024 17.9737L25.0567 26.6177H34.5179L36.3496 17.9737H26.9024Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7885 17.9517H36.615L37.5764 13.4146H42.2776L45.1387 0.0149632H30.9764L29.961 4.77054H25.5818L22.7885 17.9517ZM29.961 4.77054L28.1153 13.4146H37.5764L39.4082 4.77054H29.961Z" fill="#B882FF"/>
                                        </svg>
                                    </Box>
                                </Box>
                                {/* Designation And Title */}
                                <Box>
                                    <Text as={'h4'} sx={testimnialsName}>Employee Name</Text>
                                    <Text as={'p'} sx={testimnialsDesignation}>Designation</Text>
                                </Box>
                            </Box>
                        </Box>
                        {/* Image Part */}
                        <Box w={['40%']}>
                            <Image src={TestImg} w={'100%'} h={'100%'} objectFit={'cover'}/>
                        </Box>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex alignItems={'center'}>
                        {/* Text Part */}
                        <Box w={['60%']}>
                            <Box>
                                <Text as={'h3'} sx={testimnialsTitle}>What it’s like to work with Tenet?</Text>
                                {/* Paragraph */}
                                <Box maxW={'600px'}>
                                    <Box>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="58" viewBox="0 0 90 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.899 0.000976562H31.0725L30.1111 4.53809H25.4099L22.5488 17.9377H36.7111L37.7265 13.1821H42.1057L44.899 0.000976562ZM37.7265 13.1821L39.5722 4.53809H30.1111L28.2793 13.1821H37.7265Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0513 13.1672H14.2249L13.2635 17.7041H8.56224L5.70117 31.1037H19.8635L20.8788 26.3484H25.2581L28.0513 13.1672ZM20.8788 26.3484L22.7246 17.7041H13.2635L11.4316 26.3484H20.8788Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3501 39.5283H22.5237L21.5622 44.0654H16.8611L14 57.465H28.1623L29.1777 52.7094H33.5569L36.3501 39.5283ZM29.1777 52.7094L31.0234 44.0654H21.5622L19.7305 52.7094H29.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.1958 26.3486H25.3694L24.4079 30.8857H19.7068L16.8457 44.2853H31.008L32.0234 39.5297H36.4026L39.1958 26.3486ZM32.0234 39.5297L33.8691 30.8857H24.4079L22.5762 39.5297H32.0234Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4087 26.3486H11.5823L10.6208 30.8857H5.91967L3.05859 44.2853H17.2209L18.2363 39.5297H22.6155L25.4087 26.3486ZM18.2363 39.5297L20.082 30.8857H10.6208L8.78906 39.5297H18.2363Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3501 39.5518H8.52369L7.56223 44.0889H2.86107L0 57.4885H14.1623L15.1777 52.7329H19.5569L22.3501 39.5518ZM15.1777 52.7329L17.0234 44.0889H7.56223L5.73047 52.7329H15.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.899 0.000976562H76.0725L75.1111 4.53809H70.4099L67.5488 17.9377H81.7111L82.7265 13.1821H87.1057L89.899 0.000976562ZM82.7265 13.1821L84.5722 4.53809H75.1111L73.2793 13.1821H82.7265Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.0513 13.1672H59.2249L58.2635 17.7041H53.5622L50.7012 31.1037H64.8635L65.8788 26.3484H70.2581L73.0513 13.1672ZM65.8788 26.3484L67.7246 17.7041H58.2635L56.4316 26.3484H65.8788Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81.3501 39.5283H67.5237L66.5622 44.0654H61.8611L59 57.465H73.1623L74.1777 52.7094H78.5569L81.3501 39.5283ZM74.1777 52.7094L76.0234 44.0654H66.5622L64.7305 52.7094H74.1777Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M84.1958 26.3486H70.3694L69.4079 30.8857H64.7068L61.8457 44.2853H76.008L77.0234 39.5297H81.4026L84.1958 26.3486ZM77.0234 39.5297L78.8691 30.8857H69.4079L67.5762 39.5297H77.0234Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.4087 26.3486H56.5823L55.6208 30.8857H50.9197L48.0586 44.2853H62.2209L63.2363 39.5297H67.6155L70.4087 26.3486ZM63.2363 39.5297L65.082 30.8857H55.6208L53.7891 39.5297H63.2363Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.3501 39.5518H53.5237L52.5622 44.0889H47.8611L45 57.4885H59.1623L60.1777 52.7329H64.5569L67.3501 39.5518ZM60.1777 52.7329L62.0234 44.0889H52.5622L50.7305 52.7329H60.1777Z" fill="#B882FF"/>
                                        </svg>
                                    </Box>
                                    <Text as={'p'} sx={testimnialsParagraph}>This is a place where people want more. People want to be surrounded by really good energy. You want to join something like this!</Text>
                                    <Box display={'flex'} justifyContent={'end'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="58" viewBox="0 0 91 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2397 57.5024H59.0662L60.0276 52.9653H64.7288L67.5898 39.5657H53.4275L52.4121 44.3213H48.0329L45.2397 57.5024ZM52.4121 44.3213L50.5665 52.9653H60.0276L61.8594 44.3213H52.4121Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0874 44.3362H75.9138L76.8752 39.7993H81.5764L84.4375 26.3997H70.2752L69.2598 31.1551H64.8806L62.0874 44.3362ZM69.2598 31.1551L67.4141 39.7993H76.8752L78.707 31.1551H69.2598Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7885 17.9751H67.615L68.5764 13.438H73.2776L76.1387 0.0384007H61.9764L60.961 4.79398H56.5818L53.7885 17.9751ZM60.961 4.79398L59.1153 13.438H68.5764L70.4082 4.79398H60.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9428 31.1548H64.7693L65.7307 26.6177H70.4319L73.293 13.2181H59.1307L58.1153 17.9737H53.7361L50.9428 31.1548ZM58.1153 17.9737L56.2696 26.6177H65.7307L67.5625 17.9737H58.1153Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7299 31.1548H78.5564L79.5179 26.6177H84.219L87.0801 13.2181H72.9178L71.9024 17.9737H67.5232L64.7299 31.1548ZM71.9024 17.9737L70.0567 26.6177H79.5179L81.3496 17.9737H71.9024Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7885 17.9517H81.615L82.5764 13.4146H87.2776L90.1387 0.0149632H75.9764L74.961 4.77054H70.5818L67.7885 17.9517ZM74.961 4.77054L73.1153 13.4146H82.5764L84.4082 4.77054H74.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.239708 57.5024H14.0662L15.0276 52.9653H19.7288L22.5898 39.5657H8.42754L7.41213 44.3213H3.03293L0.239708 57.5024ZM7.41213 44.3213L5.56647 52.9653H15.0276L16.8594 44.3213H7.41213Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0874 44.3362H30.9138L31.8752 39.7993H36.5764L39.4375 26.3997H25.2752L24.2598 31.1551H19.8806L17.0874 44.3362ZM24.2598 31.1551L22.4141 39.7993H31.8752L33.707 31.1551H24.2598Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.78854 17.9751H22.615L23.5764 13.438H28.2776L31.1387 0.0384007H16.9764L15.961 4.79398H11.5818L8.78854 17.9751ZM15.961 4.79398L14.1153 13.438H23.5764L25.4082 4.79398H15.961Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94283 31.1548H19.7693L20.7307 26.6177H25.4319L28.293 13.2181H14.1307L13.1153 17.9737H8.73605L5.94283 31.1548ZM13.1153 17.9737L11.2696 26.6177H20.7307L22.5625 17.9737H13.1153Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7299 31.1548H33.5564L34.5179 26.6177H39.219L42.0801 13.2181H27.9178L26.9024 17.9737H22.5232L19.7299 31.1548ZM26.9024 17.9737L25.0567 26.6177H34.5179L36.3496 17.9737H26.9024Z" fill="#B882FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7885 17.9517H36.615L37.5764 13.4146H42.2776L45.1387 0.0149632H30.9764L29.961 4.77054H25.5818L22.7885 17.9517ZM29.961 4.77054L28.1153 13.4146H37.5764L39.4082 4.77054H29.961Z" fill="#B882FF"/>
                                        </svg>
                                    </Box>
                                </Box>
                                {/* Designation And Title */}
                                <Box>
                                    <Text as={'h4'} sx={testimnialsName}>Employee Name</Text>
                                    <Text as={'p'} sx={testimnialsDesignation}>Designation</Text>
                                </Box>
                            </Box>
                        </Box>
                        {/* Image Part */}
                        <Box w={['40%']}>
                            <Image src={TestImg} w={'100%'} h={'100%'} objectFit={'cover'}/>
                        </Box>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Box>
       </Container>
    </Box>
  )
}

export default Testimonials
