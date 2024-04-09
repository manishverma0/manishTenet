import React, {useState}from 'react'
import {Box,Image, Container ,Flex ,Text, Link} from '@chakra-ui/react'
import PanelImg1 from '../../../assets/Service/tabs/panel1.svg'
import PanelImg2 from '../../../assets/Service/tabs/panel2.svg'
import PanelImg3 from '../../../assets/Service/tabs/panel3.svg'
import PanelImg4 from '../../../assets/Service/tabs/panel4.svg'
import CtcIcon1 from '../../../assets/Service/tabs/ctc1.svg'
import CtcIcon2 from '../../../assets/Service/tabs/ctc2.svg'
import CtcIcon3 from '../../../assets/Service/tabs/ctc3.svg'
import CtcIcon4 from '../../../assets/Service/tabs/ctc4.svg'

const ServicesTab = () => {

    const [active,setActive] = useState("Research");

    const handleActive = (linkName) =>{
        setActive(linkName)
    }
    const activLinkColor = {
        background: 'rgba(0, 117, 255, 0.10)',
        color: '#0057ff',
        borderBottom: '5px solid #0057FF',
    }
    const tabLinkWrapper = {
        justifyContent: 'center',
        borderBottom: '1px solid',
        borderBottomColor: '#D9D9D9',
        bg: '#fff',
        boxShadow: '0px 4px 13px 0px rgba(0, 0, 0, 0.08)',
        textAlign:'center'
      };
    const tabsDesign = {
        padding:'8px  16px',
        display:'inline-block',
        fontSize: ['32px', '32px', '32px', '32px', '32px', '32px'],
        fontWeight: '400',
        letterSpacing: '-0.704px',
        fontFamily: 'garnett-regular',
        textDecoration: 'none',
        borderBottom: '5px solid transparent', // Initial border
        
        '&:hover': {
        textDecoration: 'none',
        },
    };
    const boxDesign ={
        bg:'#F5F5F5',
        p:['13px 20px 26px 20px','13px 20px 26px 20px','13px 20px 26px 20px','20px 20px 40px 20px','20px 20px 40px 20px','20px 20px 40px 20px'],
        position:'relative'
    }
    // Typo
    const serviceListNumber ={
        fontSize:['15px','15px','15px','20px','20px','20px'],
        fontWeight:['400','400','400','300','300','300'],
        color:'#0D0E4D',
        fontFamily:['var(--garnett-regular)','var(--garnett-regular)','var(--garnett-light)','var(--garnett-light)','var(--garnett-light)','var(--garnett-light)'],
        mr:['5px','5px','5px','0px','0px','0px'],
        display:'block'
        
    }
    const serviceListTitle ={
        fontSize:['18px','18px','18px','24px','24px','24px'],
        fontWeight:['500','500','500','400','400','400'],
        color:'#0D0E4D',
        fontFamily:['var(--garnett-medium)','var(--garnett-medium)','var(--garnett-medium)','var(--garnett-regular)','var(--garnett-regular)','var(--garnett-regular)'],
        p:['0px 0 0px','0px 0 0px','0px 0 0px','12px 0 15px','12px 0 15px','12px 0 15px']
    }
    const serviceListDescription ={
        fontSize:['14px','14px','14px','18px','18px','18px'],
        fontWeight:'400',
        lineHeight:'normal',
        color:'#000',
        fontFamily:'var(--foundersGrotesk-regular)',
    }
  return (
    <Box mb={'152px'}>
        <Box>
            {/* Tabs Weaper */}
            <Box>
                {/* Tab List Wrapper */}
                <Box sx={tabLinkWrapper}>
                    <Link href='#Research' sx={{ ...tabsDesign, ...(active === "Research" && activLinkColor) }} onClick={() => handleActive("Research")}>Research</Link>
                    <Link href='#Design' sx={{ ...tabsDesign, ...(active === "Design" && activLinkColor) }} onClick={() => handleActive("Design")}>Design</Link>
                    <Link href='#Build' sx={{ ...tabsDesign, ...(active === "Build" && activLinkColor) }} onClick={() => handleActive("Build")}>Build</Link>
                    <Link href='#Growth' sx={{ ...tabsDesign, ...(active === "Growth" && activLinkColor) }} onClick={() => handleActive("Growth")}>Growth</Link>
                </Box>
                {/* Tab Panels Wrapper */}
                <Box>
                    {/* Tab Pannel */}
                    <Box p={'0'} id='Research'>
                        {/* Tabbing Image Related Service */}
                            <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'column', 'column', 'column']}>
                                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} p={['0','0','0','0 16px','0 16px','0 16px']} >
                                    <Box p={['0px 0 50px','0px 0 50px','0px 0 50px','100px 0 50px','100px 0 50px','100px 0 50px']}>
                                        <Image src={PanelImg1} w={'100%'} h={['680px']} objectFit={'cover'}  alt='Pannel Image'/>
                                    </Box>
                                </Container>
                                {/* Service Title And Short Description For Overview */}
                                <Box bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                                        <Flex justifyContent={'space-between'} display={['block' ,'block','block','flex','flex','flex']}  mb={['18px','18px','18px','64px','64px','64px']}>
                                            <Box w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='h3'
                                                m='0px'
                                                fontSize={["58px", "58px", "58px", "48px", "48px", "48px"]}
                                                fontFamily='var(--garnett-regular)'
                                                color={"#000000"}
                                                textAlign={['left','left','left','left','left','left']}
                                                lineHeight={'normal'}
                                                pb={['30px','30px','30px','0','0','0']}
                                                pt={['80px','80px','80px','0','0','0']}
                                                >Research
                                                </Text>
                                            </Box>
                                            <Box  w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='p'
                                                color={'#333'}
                                                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                                                maxW={["424px", "424px", "424px", "521px", "521px", "521px"]}
                                                fontFamily="var(--foundersGrotesk-regular)"
                                                fontWeight="400"
                                                m={['0','0','0','0 0 0 auto','0 0 0 auto','0 0 0 auto']}
                                                textAlign={['left','left','left','left','left','left']}
                                                >
                                                Our Brand Growth & Recognition Solutions present a meticulously curated suite of services designed to expedite desired outcomes with maximum efficiency.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Container>
                                </Box>
                            </Flex>
                        {/* Box Grid */}
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)',]} gap={'20px'}>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                        {/* Ctc */}
                        <Box bg={'#0D0E4D'} p={['23px 0 36px','23px 0 36px','23px 0 36px','61px 0','61px 0','61px 0']} mt={'80px'}>
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Flex display={['block','block','block','flex','flex','flex']}>
                                <Box w={['100%','100%','100%','50%','50%','50%']}>
                                        <Text as={'h2'}
                                        fontSize={['20px','20px','20px','48px','48px','48px']}
                                        color={'#fff'}
                                        fontWeight={'600'}
                                        fontFamily={'var(--garnett-semibold)'}
                                        maxW={'616px'}>Engage with Our Leading User Experience Specialists</Text>
                                </Box>
                                <Box w={['100%','100%','100%','50%','50%','50%']} pt={['58px','58px','58px','0px','0px','0px']}>
                                    <Flex justifyContent={['start','start','start','end','end','end']}>
                                        <Box w={[]} display={'flex'} alignItems={['start','start','start','center','center','center']} mr={'15px'}>
                                            <Image src={CtcIcon1}  pt={['15px','15px','15px','0px','0px','0px']}/>
                                        </Box>
                                        <Box w={['']}>
                                            <Box  maxW={'400px'} ml={'auto'}>
                                                {/* Name And Degination */}
                                                <Box display={'flex'} alignItems={'baseline'} textTransform={'uppercase'}>
                                                    <Text as={'span'} 
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontSize={['16px','16px','16px','24px','24px','24px']}
                                                        fontWeight={'600'}>Anurag Basu,</Text>
                                                    <Text as={'p'} 
                                                        fontSize={['14px','14px','16px','16px','16px','16px']}
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontWeight={'400'}
                                                    >Research Head</Text> 
                                                </Box>
                                                <Box>
                                                {/* Pargagraph */}
                                                    <Text as={'p'}
                                                           
                                                            color={'#fff'}
                                                            fontSize={['14px','14px','14px','20px','20px','20px']}
                                                            fontFamily={'var(--foundersGrotesk-regular)'}
                                                            fontWeight={'400'}
                                                            lineHeight={'normal'}

                                                            pt={['10px','10px','10px','22px','22px','22px']}
                                                            pb={['5px','5px','5px','14px','14px','14px']}>Elevate your service with our exceptional user experience expertise. Reach out to our specialists to enhance your digital solutions today.</Text>
                                                </Box>
                                                {/* Link */}
                                                <Box>
                                                    <Link 
                                                        display={'inline-flex'}
                                                        bg={'#0036C2'}
                                                        p={['9px 28px 5px','9px 28px 5px','9px 28px 5px','14px 28px','14px 28px','14px 28px']}
                                                        lineHeight={'normal'}
                                                        color={'#fff'}
                                                        fontSize={['15px','15px','15px','20px','20px','20px']}
                                                        fontWeight={'400'}
                                                        fontFamily={'var(--foundersGrotesk-regular)'}>Get in Touch</Link>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Container>
                        </Box>
            
                    </Box>
                    <Box p={'0'} id='Design'>
                        {/* Tabbing Image Related Service */}
                            <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'column', 'column', 'column']}>
                                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} p={['0','0','0','0 16px','0 16px','0 16px']} >
                                    <Box p={['0px 0 50px','0px 0 50px','0px 0 50px','100px 0 50px','100px 0 50px','100px 0 50px']}>
                                        <Image src={PanelImg2} w={'100%'} h={['680px']} objectFit={'cover'}   alt='Pannel Image'/>
                                    </Box>
                                </Container>
                                {/* Service Title And Short Description For Overview */}
                                <Box bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                                        <Flex justifyContent={'space-between'} display={['block' ,'block','block','flex','flex','flex']}  mb={['18px','18px','18px','64px','64px','64px']}>
                                            <Box w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='h3'
                                                m='0px'
                                                fontSize={["58px", "58px", "58px", "48px", "48px", "48px"]}
                                                fontFamily='var(--garnett-regular)'
                                                color={"#000000"}
                                                textAlign={['left','left','left','left','left','left']}
                                                lineHeight={'normal'}
                                                pb={['30px','30px','30px','0','0','0']}
                                                pt={['80px','80px','80px','0','0','0']}
                                                >Design
                                                </Text>
                                            </Box>
                                            <Box  w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='p'
                                                color={'#333'}
                                                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                                                maxW={["424px", "424px", "424px", "521px", "521px", "521px"]}
                                                fontFamily="var(--foundersGrotesk-regular)"
                                                fontWeight="400"
                                                m={['0','0','0','0 0 0 auto','0 0 0 auto','0 0 0 auto']}
                                                textAlign={['left','left','left','left','left','left']}
                                                >
                                                Our Brand Growth & Recognition Solutions present a meticulously curated suite of services designed to expedite desired outcomes with maximum efficiency.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Container>
                                </Box>
                            </Flex>
                        {/* Box Grid */}
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)',]} gap={'20px'}>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                        {/* Ctc */}
                        <Box bg={'#30054A'} p={['23px 0 36px','23px 0 36px','23px 0 36px','61px 0','61px 0','61px 0']} mt={'80px'}>
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Flex display={['block','block','block','flex','flex','flex']}>
                                <Box w={['100%','100%','100%','50%','50%','50%']}>
                                        <Text as={'h2'}
                                        fontSize={['20px','20px','20px','48px','48px','48px']}
                                        color={'#fff'}
                                        fontWeight={'600'}
                                        fontFamily={'var(--garnett-semibold)'}
                                        maxW={'616px'}>Engage with Our Leading User Experience Specialists</Text>
                                </Box>
                                <Box w={['100%','100%','100%','50%','50%','50%']} pt={['58px','58px','58px','0px','0px','0px']}>
                                    <Flex justifyContent={['start','start','start','end','end','end']}>
                                        <Box w={[]} display={'flex'} alignItems={['start','start','start','center','center','center']} mr={'15px'}>
                                            <Image src={CtcIcon2}  pt={['15px','15px','15px','0px','0px','0px']}/>
                                        </Box>
                                        <Box w={['']}>
                                            <Box  maxW={'400px'} ml={'auto'}>
                                                {/* Name And Degination */}
                                                <Box display={'flex'} alignItems={'baseline'} textTransform={'uppercase'}>
                                                    <Text as={'span'} 
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontSize={['16px','16px','16px','24px','24px','24px']}
                                                        fontWeight={'600'}>Anurag Basu,</Text>
                                                    <Text as={'p'} 
                                                        fontSize={['14px','14px','16px','16px','16px','16px']}
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontWeight={'400'}
                                                    >Research Head</Text> 
                                                </Box>
                                                <Box>
                                                {/* Pargagraph */}
                                                    <Text as={'p'}
                                                           
                                                            color={'#fff'}
                                                            fontSize={['14px','14px','14px','20px','20px','20px']}
                                                            fontFamily={'var(--foundersGrotesk-regular)'}
                                                            fontWeight={'400'}
                                                            lineHeight={'normal'}

                                                            pt={['10px','10px','10px','22px','22px','22px']}
                                                            pb={['5px','5px','5px','14px','14px','14px']}>Elevate your service with our exceptional user experience expertise. Reach out to our specialists to enhance your digital solutions today.</Text>
                                                </Box>
                                                {/* Link */}
                                                <Box>
                                                    <Link 
                                                        display={'inline-flex'}
                                                        bg={'#7610B5'}
                                                        p={['9px 28px 5px','9px 28px 5px','9px 28px 5px','14px 28px','14px 28px','14px 28px']}
                                                        lineHeight={'normal'}
                                                        color={'#fff'}
                                                        fontSize={['15px','15px','15px','20px','20px','20px']}
                                                        fontWeight={'400'}
                                                        fontFamily={'var(--foundersGrotesk-regular)'}>Get in Touch</Link>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Container>
                        </Box>
            
                    </Box>
                    <Box p={'0'} id='Build'>
                        {/* Tabbing Image Related Service */}
                            <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'column', 'column', 'column']}>
                                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} p={['0','0','0','0 16px','0 16px','0 16px']} >
                                    <Box p={['0px 0 50px','0px 0 50px','0px 0 50px','100px 0 50px','100px 0 50px','100px 0 50px']}>
                                        <Image src={PanelImg3} w={'100%'} h={['680px']} objectFit={'cover'}   alt='Pannel Image'/>
                                    </Box>
                                </Container>
                                {/* Service Title And Short Description For Overview */}
                                <Box bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                                        <Flex justifyContent={'space-between'} display={['block' ,'block','block','flex','flex','flex']}  mb={['18px','18px','18px','64px','64px','64px']}>
                                            <Box w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='h3'
                                                m='0px'
                                                fontSize={["58px", "58px", "58px", "48px", "48px", "48px"]}
                                                fontFamily='var(--garnett-regular)'
                                                color={"#000000"}
                                                textAlign={['left','left','left','left','left','left']}
                                                lineHeight={'normal'}
                                                pb={['30px','30px','30px','0','0','0']}
                                                pt={['80px','80px','80px','0','0','0']}
                                                >Build
                                                </Text>
                                            </Box>
                                            <Box  w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='p'
                                                color={'#333'}
                                                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                                                maxW={["424px", "424px", "424px", "521px", "521px", "521px"]}
                                                fontFamily="var(--foundersGrotesk-regular)"
                                                fontWeight="400"
                                                m={['0','0','0','0 0 0 auto','0 0 0 auto','0 0 0 auto']}
                                                textAlign={['left','left','left','left','left','left']}
                                                >
                                                Our Brand Growth & Recognition Solutions present a meticulously curated suite of services designed to expedite desired outcomes with maximum efficiency.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Container>
                                </Box>
                            </Flex>
                        {/* Box Grid */}
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)',]} gap={'20px'}>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                        {/* Ctc */}
                        <Box bg={'#00342B'} p={['23px 0 36px','23px 0 36px','23px 0 36px','61px 0','61px 0','61px 0']} mt={'80px'}>
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Flex display={['block','block','block','flex','flex','flex']}>
                                <Box w={['100%','100%','100%','50%','50%','50%']}>
                                        <Text as={'h2'}
                                        fontSize={['20px','20px','20px','48px','48px','48px']}
                                        color={'#fff'}
                                        fontWeight={'600'}
                                        fontFamily={'var(--garnett-semibold)'}
                                        maxW={'616px'}>Engage with Our Leading User Experience Specialists</Text>
                                </Box>
                                <Box w={['100%','100%','100%','50%','50%','50%']} pt={['58px','58px','58px','0px','0px','0px']}>
                                    <Flex justifyContent={['start','start','start','end','end','end']}>
                                        <Box w={[]} display={'flex'} alignItems={['start','start','start','center','center','center']} mr={'15px'}>
                                            <Image src={CtcIcon3}  pt={['15px','15px','15px','0px','0px','0px']}/>
                                        </Box>
                                        <Box w={['']}>
                                            <Box  maxW={'400px'} ml={'auto'}>
                                                {/* Name And Degination */}
                                                <Box display={'flex'} alignItems={'baseline'} textTransform={'uppercase'}>
                                                    <Text as={'span'} 
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontSize={['16px','16px','16px','24px','24px','24px']}
                                                        fontWeight={'600'}>Anurag Basu,</Text>
                                                    <Text as={'p'} 
                                                        fontSize={['14px','14px','16px','16px','16px','16px']}
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontWeight={'400'}
                                                    >Research Head</Text> 
                                                </Box>
                                                <Box>
                                                {/* Pargagraph */}
                                                    <Text as={'p'}
                                                           
                                                            color={'#fff'}
                                                            fontSize={['14px','14px','14px','20px','20px','20px']}
                                                            fontFamily={'var(--foundersGrotesk-regular)'}
                                                            fontWeight={'400'}
                                                            lineHeight={'normal'}

                                                            pt={['10px','10px','10px','22px','22px','22px']}
                                                            pb={['5px','5px','5px','14px','14px','14px']}>Elevate your service with our exceptional user experience expertise. Reach out to our specialists to enhance your digital solutions today.</Text>
                                                </Box>
                                                {/* Link */}
                                                <Box>
                                                    <Link 
                                                        display={'inline-flex'}
                                                        bg={'#00BA61'}
                                                        p={['9px 28px 5px','9px 28px 5px','9px 28px 5px','14px 28px','14px 28px','14px 28px']}
                                                        lineHeight={'normal'}
                                                        color={'#fff'}
                                                        fontSize={['15px','15px','15px','20px','20px','20px']}
                                                        fontWeight={'400'}
                                                        fontFamily={'var(--foundersGrotesk-regular)'}>Get in Touch</Link>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Container>
                        </Box>
            
                    </Box>
                    <Box p={'0'} id='Growth'>
                        {/* Tabbing Image Related Service */}
                            <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'column', 'column', 'column']}>
                                <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} p={['0','0','0','0 16px','0 16px','0 16px']} >
                                    <Box p={['0px 0 50px','0px 0 50px','0px 0 50px','100px 0 50px','100px 0 50px','100px 0 50px']}>
                                        <Image src={PanelImg4} w={'100%'} h={['680px']} objectFit={'cover'}   alt='Pannel Image'/>
                                    </Box>
                                </Container>
                                {/* Service Title And Short Description For Overview */}
                                <Box bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                                        <Flex justifyContent={'space-between'} display={['block' ,'block','block','flex','flex','flex']}  mb={['18px','18px','18px','64px','64px','64px']}>
                                            <Box w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='h3'
                                                m='0px'
                                                fontSize={["58px", "58px", "58px", "48px", "48px", "48px"]}
                                                fontFamily='var(--garnett-regular)'
                                                color={"#000000"}
                                                textAlign={['left','left','left','left','left','left']}
                                                lineHeight={'normal'}
                                                pb={['30px','30px','30px','0','0','0']}
                                                pt={['80px','80px','80px','0','0','0']}
                                                >Growth
                                                </Text>
                                            </Box>
                                            <Box  w={['100%','100%','100%','50%','50%','50%']}>
                                                <Text
                                                as='p'
                                                color={'#333'}
                                                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                                                maxW={["424px", "424px", "424px", "521px", "521px", "521px"]}
                                                fontFamily="var(--foundersGrotesk-regular)"
                                                fontWeight="400"
                                                m={['0','0','0','0 0 0 auto','0 0 0 auto','0 0 0 auto']}
                                                textAlign={['left','left','left','left','left','left']}
                                                >
                                                Our Brand Growth & Recognition Solutions present a meticulously curated suite of services designed to expedite desired outcomes with maximum efficiency.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Container>
                                </Box>
                            </Flex>
                        {/* Box Grid */}
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Box display={'grid'} gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)',]} gap={'20px'}>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                                <Box sx={boxDesign}>
                                    {/* Link */}
                                    <Box as='span'>
                                        <Link position={'absolute'} top={'0'} right={'0'}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ background: '#0057FF' }}>
                                            <g clip-path="url(#clip0_2470_13451)">
                                            <path d="M27 13.4053L26.9988 5.40652L19 5.40527" stroke="white" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M17 15.6738L26 6.67383" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            <path d="M23 17.4053V26.4053C23 26.6705 22.8946 26.9248 22.7071 27.1124C22.5196 27.2999 22.2652 27.4053 22 27.4053H6C5.73478 27.4053 5.48043 27.2999 5.29289 27.1124C5.10536 26.9248 5 26.6705 5 26.4053V10.4053C5 10.1401 5.10536 9.8857 5.29289 9.69817C5.48043 9.51063 5.73478 9.40527 6 9.40527H15" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2470_13451">
                                            <rect width="32" height="32" fill="white" transform="translate(0 0.405273)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </Link>
                                    </Box>
                                    {/* Number and Title */}
                                    <Flex pb={['10px','10px','10px','0px','0px','0px']} alignItems={['center','center','center','start','start','start']} flexDirection={['row','row','row','column','column','column']}>
                                        <Box>
                                            <Text as={'span'} sx={serviceListNumber}>01</Text>
                                        </Box>          
                                        <Box>
                                            <Text as={'h4'} sx={serviceListTitle}>Brand strategy</Text>
                                        </Box>
                                    </Flex>
                                    {/* Description */}
                                    <Box>
                                        <Text as={'p'} sx={serviceListDescription}>Define the vision, proposition and roadmap across your brand ecosystem to support people while making your brand memorable and meaningful.</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                        {/* Ctc */}
                        <Box bg={'#3E001A'} p={['23px 0 36px','23px 0 36px','23px 0 36px','61px 0','61px 0','61px 0']} mt={'80px'}>
                        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} >
                            <Flex display={['block','block','block','flex','flex','flex']}>
                                <Box w={['100%','100%','100%','50%','50%','50%']}>
                                        <Text as={'h2'}
                                        fontSize={['20px','20px','20px','48px','48px','48px']}
                                        color={'#fff'}
                                        fontWeight={'600'}
                                        fontFamily={'var(--garnett-semibold)'}
                                        maxW={'616px'}>Engage with Our Leading User Experience Specialists</Text>
                                </Box>
                                <Box w={['100%','100%','100%','50%','50%','50%']} pt={['58px','58px','58px','0px','0px','0px']}>
                                    <Flex justifyContent={['start','start','start','end','end','end']}>
                                        <Box w={[]} display={'flex'} alignItems={['start','start','start','center','center','center']} mr={'15px'}>
                                            <Image src={CtcIcon4}  pt={['15px','15px','15px','0px','0px','0px']}/>
                                        </Box>
                                        <Box w={['']}>
                                            <Box  maxW={'400px'} ml={'auto'}>
                                                {/* Name And Degination */}
                                                <Box display={'flex'} alignItems={'baseline'} textTransform={'uppercase'}>
                                                    <Text as={'span'} 
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontSize={['16px','16px','16px','24px','24px','24px']}
                                                        fontWeight={'600'}>Anurag Basu,</Text>
                                                    <Text as={'p'} 
                                                        fontSize={['14px','14px','16px','16px','16px','16px']}
                                                        color={'#fff'}
                                                        fontStyle={' var(--foundersGrotesk-semibold)'}
                                                        fontWeight={'400'}
                                                    >Research Head</Text> 
                                                </Box>
                                                <Box>
                                                {/* Pargagraph */}
                                                    <Text as={'p'}
                                                           
                                                            color={'#fff'}
                                                            fontSize={['14px','14px','14px','20px','20px','20px']}
                                                            fontFamily={'var(--foundersGrotesk-regular)'}
                                                            fontWeight={'400'}
                                                            lineHeight={'normal'}

                                                            pt={['10px','10px','10px','22px','22px','22px']}
                                                            pb={['5px','5px','5px','14px','14px','14px']}>Elevate your service with our exceptional user experience expertise. Reach out to our specialists to enhance your digital solutions today.</Text>
                                                </Box>
                                                {/* Link */}
                                                <Box>
                                                    <Link 
                                                        display={'inline-flex'}
                                                        bg={'#E0005E'}
                                                        p={['9px 28px 5px','9px 28px 5px','9px 28px 5px','14px 28px','14px 28px','14px 28px']}
                                                        lineHeight={'normal'}
                                                        color={'#fff'}
                                                        fontSize={['15px','15px','15px','20px','20px','20px']}
                                                        fontWeight={'400'}
                                                        fontFamily={'var(--foundersGrotesk-regular)'}>Get in Touch</Link>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Container>
                        </Box>
            
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
export default ServicesTab
