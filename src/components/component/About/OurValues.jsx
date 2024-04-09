import React from 'react'
import {Box, Container ,Text ,Image, Flex} from '@chakra-ui/react'
import OurValuesImg from '../../assets/About/ourvalues/ourvalue.webp'

const OurValues = () => {
    // Section Headings
    const heading = {
        fontFamily:'var(--garnett-regular)',
        fontSize:['32px','32px','32px','48px','48px','48px'],
        fontWeight:'400',
        lineHeight:'normal',
        mb:['22px','22px','22px','40px','40px','40px']
    }
    const paragraph ={
        fontSize:['14px','14px','14px','20px','20px','20px'],
        fontWeight:'400',
        fontFamily:' var(--foundersGrotesk-regular)',
        mb:['40px','40px','40px','60px','60px','60px'],
        lineHeight:'normal',
    }

    // Values
    const valueSubtitle = {
        color:'#000',
        fontSize:['18px', '18px', '18px', '32px', '36px', '40px'],
        fontFamily:['var(--garnett-regular)'],
        lineHeight:'normal',
        fontWeight:['600','600','600','400','400','400'],
        mb:'20px'
    }
    const valueSubText ={
        fontSize:['14px', '14px', '14px', '20px', '20px', '20px'],
        fontWeight:'400',
        color:'#333',
        lineHeight:'normal',
        fontFamily:'var(--foundersGrotesk-regular)'
    }
  return (
        <Box marginBottom={['80px','80px','80px','130px','130px','130px']}>
            <Container maxWidth={["100%", "100%", "100%", "100%", "90%", "90%"]} m={'0 auto'} >
            {/* Value Titles  And Image  */}
                 <Box>
                    {/* hEAdings */}
                    <Box>
                    <Box maxW={'676px'}>
                    <Text as={'h2'} sx={heading}>Our Values </Text>
                    <Text as={'p'} sx={paragraph}>We believe in the transformative power of design and technology, and our mission is to be the catalyst that propels businesses forward. By partnering with us, brands not only grow but also contribute to shaping a progressive tomorrow.</Text>
                </Box>
                    </Box>
                    {/* Image */}
                    <Box>
                        <Image src={OurValuesImg} w={'100%'} h={'100%'} objectFit={'cover'}/>
                    </Box>
                 </Box>
            {/* Values Short Desccription With tITLE  */}
                <Box maxW={['100%', '100%', '100%', '75%', '75%', '75%']} ml={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']} pt={['20px', '20px', '20px', '100px']}>
                        {/* First Row */}
                        <Box display={['block','block','block','grid','grid','grid']} rowGap={'104px'} columnGap={'40px'} gridTemplateColumns={'repeat(2,1fr)'}>
                            {/*  Value One */}
                            <Flex  mb={['12px','12px','12px','0px','0px','0px']} padding={['22px 16px 18px','22px 16px 18px','22px 16px 18px','0px','0px','0px']} bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Box mr={'26px'} pt={'10px'}>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                        <g clip-path="url(#clip0_1873_15096)">
                                        <path d="M36.26 35.8437H35.4275C35.4275 28.4067 29.9041 21.7005 22.2936 19.8967C22.1202 19.8551 21.9919 19.7083 21.9757 19.5302C21.9583 19.3533 22.0578 19.1845 22.2208 19.1116C25.5288 17.6397 27.6667 14.3525 27.6667 10.7392C27.6667 5.68527 23.5551 1.57365 18.5011 1.57365C13.446 1.57365 9.3344 5.68527 9.3344 10.7392C9.3344 14.3525 11.4723 17.6397 14.7815 19.1116C14.9445 19.1845 15.0428 19.3533 15.0266 19.5302C15.0104 19.7083 14.8821 19.8551 14.7086 19.8967C7.0959 21.7005 1.57249 28.4067 1.57249 35.8437H0.73999C0.73999 28.3744 6.02868 21.608 13.4611 19.3695C10.4155 17.59 8.49958 14.3109 8.49958 10.7381C8.49958 5.22508 12.9847 0.73999 18.4988 0.73999C24.0118 0.73999 28.4969 5.22508 28.4969 10.7381C28.4969 14.3109 26.5822 17.59 23.5366 19.3695C30.9713 21.608 36.26 28.3744 36.26 35.8437ZM18.5 35.1037C18.3936 35.1037 18.2872 35.0633 18.2063 34.9823L13.6252 30.4013C13.0332 29.8093 12.706 29.0242 12.7026 28.1871C12.6991 27.3418 13.0263 26.5452 13.6241 25.9462C14.2207 25.3508 15.0093 25.0236 15.8452 25.0212H15.8499C16.6893 25.0212 17.4802 25.3496 18.0768 25.9462L18.5 26.3683L18.922 25.9462C20.1164 24.7541 22.185 24.7553 23.3759 25.9462C23.9852 26.5556 24.3136 27.3673 24.2986 28.231C24.2824 29.0519 23.9552 29.822 23.3759 30.4024L18.7948 34.9835C18.7127 35.0633 18.6064 35.1037 18.5 35.1037ZM15.851 25.8537H15.8476C15.2324 25.8549 14.652 26.0966 14.2138 26.5348C13.7732 26.9753 13.5327 27.5615 13.5351 28.1836C13.5374 28.7987 13.779 29.3768 14.2138 29.8116L18.5 34.099L22.7862 29.8116C23.2129 29.3849 23.4545 28.8184 23.4649 28.2148C23.4765 27.58 23.236 26.9834 22.7862 26.5348C21.9086 25.656 20.3916 25.6549 19.5106 26.5348L18.7948 27.2505C18.6318 27.4135 18.3693 27.4135 18.2063 27.2505L17.4906 26.5348C17.0501 26.0954 16.4685 25.8537 15.851 25.8537Z" fill="#0057FF"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1873_15096">
                                        <rect width="37" height="37" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg> 
                                    </Box>
                                    <Box>
                                        <Text as={'h3'} sx={valueSubtitle}>Empathy</Text>
                                        <Text as={'p'} sx={valueSubText}>We value empathy, ensuring our solutions are delivered with understanding and a personal touch.</Text>
                                    </Box>
                            </Flex>
                            {/* Value Two */}
                            <Flex  mb={['12px','12px','12px','0px','0px','0px']} padding={['22px 16px 18px','22px 16px 18px','22px 16px 18px','0px','0px','0px']} bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Box mr={'26px'} pt={'10px'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                        <g clip-path="url(#clip0_1873_15093)">
                                        <path d="M12.3719 36.0738L7.87058 29.3167H3.46874C1.96446 29.3167 0.73999 28.0922 0.73999 26.588V15.0255C0.73999 13.5212 1.96446 12.2967 3.46874 12.2967H16.9275V3.46874C16.9275 1.96446 18.152 0.73999 19.6562 0.73999H33.5312C35.0367 0.73999 36.26 1.96446 36.26 3.46874V12.7187C36.26 14.223 35.0355 15.4475 33.5312 15.4475H30.3203L28.1235 19.8424L27.3777 19.4701L29.6902 14.8451C29.7619 14.704 29.9052 14.615 30.0625 14.615H33.5312C34.5765 14.615 35.4275 13.764 35.4275 12.7187V3.46874C35.4275 2.42349 34.5776 1.57249 33.5312 1.57249H19.6562C18.611 1.57249 17.76 2.42349 17.76 3.46874V12.2967H20.8125C22.178 12.2967 23.3111 13.3038 23.51 14.615H26.5937V15.4475H23.5412V26.588C23.5412 28.0934 22.3168 29.3167 20.8125 29.3167H12.7187V28.4831H20.8125C21.8577 28.4831 22.7087 27.6332 22.7087 26.5868V15.0243C22.7087 13.9791 21.8589 13.1281 20.8125 13.1281H3.46874C2.42349 13.1281 1.57249 13.9791 1.57249 15.0243V26.5868C1.57249 27.6321 2.42349 28.4831 3.46874 28.4831H8.09374C8.23365 28.4831 8.36315 28.5536 8.44062 28.6692L13.0656 35.6125L12.3719 36.0738ZM27.0308 9.82233H26.1971C26.1971 8.41287 26.4481 7.8833 27.3626 7.36068C28.0044 6.99415 28.2645 6.59062 28.2645 5.9674C28.2645 4.85508 27.3673 4.4608 26.5984 4.4608C25.6595 4.4608 24.923 5.12333 24.923 5.9674H24.0893C24.0893 4.65621 25.1912 3.6283 26.5984 3.6283C28.0691 3.6283 29.0982 4.5903 29.0982 5.9674C29.0982 7.18724 28.3431 7.75843 27.7754 8.08333C27.1719 8.42905 27.0308 8.63024 27.0308 9.82233ZM13.2969 20.8125C13.2969 21.4507 12.7789 21.9687 12.1406 21.9687C11.5024 21.9687 10.9844 21.4507 10.9844 20.8125C10.9844 20.1742 11.5024 19.6562 12.1406 19.6562C12.7789 19.6562 13.2969 20.1742 13.2969 20.8125ZM17.9219 19.6562C17.2836 19.6562 16.7656 20.1742 16.7656 20.8125C16.7656 21.4507 17.2836 21.9687 17.9219 21.9687C18.5601 21.9687 19.0781 21.4507 19.0781 20.8125C19.0781 20.1742 18.5601 19.6562 17.9219 19.6562ZM6.35937 19.6562C5.72112 19.6562 5.20312 20.1742 5.20312 20.8125C5.20312 21.4507 5.72112 21.9687 6.35937 21.9687C6.99762 21.9687 7.51562 21.4507 7.51562 20.8125C7.51562 20.1742 6.99762 19.6562 6.35937 19.6562ZM26.5937 12.2851C26.9926 12.2851 27.3164 11.9614 27.3164 11.5625C27.3164 11.1636 26.9926 10.8398 26.5937 10.8398C26.1948 10.8398 25.8711 11.1636 25.8711 11.5625C25.8711 11.9614 26.1948 12.2851 26.5937 12.2851Z" fill="#0057FF"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1873_15093">
                                        <rect width="37" height="37" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </Box>
                                    <Box>
                                        <Text as={'h3'} sx={valueSubtitle}>Communication</Text>
                                        <Text as={'p'} sx={valueSubText}>We place a high value on communication, ensuring enhanced engagement and interaction for outstanding service</Text>
                                    </Box>
                            </Flex>
                            {/*  Value Three */}
                            <Flex  mb={['12px','12px','12px','0px','0px','0px']} padding={['22px 16px 18px','22px 16px 18px','22px 16px 18px','0px','0px','0px']} bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Box mr={'26px'} pt={'10px'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                        <g clip-path="url(#clip0_1885_17220)">
                                        <path d="M14.1641 34.9823L13.5767 34.3926L14.7376 33.2364C14.8035 33.1705 14.8879 33.1289 14.9793 33.1173L23.443 32.0593C23.8593 32.0073 24.2512 31.8165 24.5461 31.5205L31.6015 24.4639C32.0767 23.9899 32.0767 23.2163 31.6015 22.74C31.1263 22.2647 30.3516 22.2659 29.8787 22.7411L22.6672 28.6033C22.1815 29.0496 21.5352 29.3213 20.8253 29.3213H15.0429V28.49H20.8253C21.2797 28.49 21.6959 28.3293 22.0231 28.0633L22.0197 28.0587L22.126 27.972C22.4903 27.6263 22.7192 27.1372 22.7192 26.5972C22.7192 26.1879 22.3874 25.8549 21.9792 25.8549H13.0183C9.99582 25.8549 7.51567 28.2171 7.36998 31.2326C7.36536 31.3355 7.32142 31.4338 7.24858 31.5066L3.76248 34.9823L3.17395 34.3926L6.54789 31.0291C6.79417 27.6471 9.60501 25.0212 13.0171 25.0212H21.978C22.8452 25.0212 23.5505 25.7266 23.5505 26.5937C23.5505 26.6701 23.5471 26.7464 23.5401 26.8204L29.3202 22.1237C30.0868 21.3536 31.3899 21.3525 32.1877 22.1514C32.9879 22.9516 32.9867 24.2535 32.1889 25.0536L25.1335 32.1091C24.708 32.5346 24.1437 32.8109 23.5436 32.8861L15.2221 33.9255L14.1641 34.9823ZM21.9688 22.385C21.1016 22.385 20.3963 21.6797 20.3963 20.8125C20.3963 20.0898 20.8877 19.4793 21.5525 19.2955V15.4475H8.09379V14.615H14.615V9.66624H8.09379V8.83374H14.615V4.98574C13.949 4.80305 13.4588 4.19255 13.4588 3.46874C13.4588 2.60155 14.1641 1.89624 15.0313 1.89624C15.8985 1.89624 16.6038 2.60155 16.6038 3.46874C16.6038 4.1914 16.1135 4.8019 15.4475 4.98574V8.83374H28.9063V9.66624H22.385V14.615H26.233C26.4157 13.949 27.0274 13.4587 27.75 13.4587C28.6172 13.4587 29.3225 14.1641 29.3225 15.0312C29.3225 15.8984 28.6172 16.6037 27.75 16.6037C27.0274 16.6037 26.4169 16.1135 26.233 15.4475H22.385V19.2966C23.0499 19.4793 23.5413 20.091 23.5413 20.8136C23.5413 21.6797 22.836 22.385 21.9688 22.385ZM21.9688 20.0725C21.5606 20.0725 21.2288 20.4043 21.2288 20.8125C21.2288 21.2206 21.5606 21.5525 21.9688 21.5525C22.377 21.5525 22.7088 21.2206 22.7088 20.8125C22.7088 20.4043 22.377 20.0725 21.9688 20.0725ZM27.75 14.2912C27.3419 14.2912 27.01 14.6231 27.01 15.0312C27.01 15.4394 27.3419 15.7712 27.75 15.7712C28.1582 15.7712 28.49 15.4394 28.49 15.0312C28.49 14.6231 28.1582 14.2912 27.75 14.2912ZM15.4475 14.615H21.5525V9.66624H15.4475V14.615ZM15.0313 2.72874C14.6231 2.72874 14.2913 3.06058 14.2913 3.46874C14.2913 3.8769 14.6231 4.20874 15.0313 4.20874C15.4395 4.20874 15.7713 3.8769 15.7713 3.46874C15.7713 3.06058 15.4395 2.72874 15.0313 2.72874Z" fill="#0057FF"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1885_17220">
                                        <rect width="37" height="37" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </Box>
                                    <Box>
                                        <Text as={'h3'} sx={valueSubtitle}>Innovation</Text>
                                        <Text as={'p'} sx={valueSubText}>We value empathy, ensuring our solutions are delivered with understanding and a personal touch.</Text>
                                    </Box>
                            </Flex>
                            {/* Value Four */}
                            <Flex  mb={['12px','12px','12px','0px','0px','0px']} padding={['22px 16px 18px','22px 16px 18px','22px 16px 18px','0px','0px','0px']} bg={['#F5F5F5','#F5F5F5','#F5F5F5','#fff','#fff','#fff']}>
                                    <Box mr={'26px'} pt={'10px'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                        <g clip-path="url(#clip0_1876_15102)">
                                        <path d="M35.8437 11.9787H25.0212V1.15624H25.8549V10.5577L35.5501 0.862553L36.1397 1.45108L26.4423 11.1462H35.8437V11.9787ZM24.6975 18.5C24.6975 15.0821 21.9167 12.3025 18.5 12.3025C15.0821 12.3025 12.3025 15.0821 12.3025 18.5C12.3025 21.9167 15.0821 24.6975 18.5 24.6975C21.9167 24.6975 24.6975 21.9167 24.6975 18.5ZM23.865 18.5C23.865 21.4588 21.4588 23.865 18.5 23.865C15.5411 23.865 13.135 21.4588 13.135 18.5C13.135 15.5411 15.5423 13.135 18.5 13.135C21.4577 13.135 23.865 15.5411 23.865 18.5ZM36.26 18.5C36.26 16.9356 36.0391 15.3423 35.6021 13.764L34.8008 13.9848C35.2159 15.4914 35.4275 17.0096 35.4275 18.4988C35.4275 27.8321 27.8344 35.4263 18.5 35.4263C9.16558 35.4275 1.57249 27.8332 1.57249 18.5C1.57249 9.16558 9.16558 1.57249 18.5 1.57249C19.9881 1.57249 21.5074 1.78408 23.014 2.20033L23.2348 1.3979C21.6554 0.96199 20.0632 0.73999 18.5 0.73999C8.70655 0.73999 0.73999 8.70655 0.73999 18.5C0.73999 28.2934 8.70655 36.26 18.5 36.26C28.2934 36.26 36.26 28.2934 36.26 18.5ZM30.4787 18.5C30.4787 16.8431 30.1411 15.2301 29.4751 13.7085L28.712 14.0415C29.3317 15.4591 29.6462 16.9587 29.6462 18.5C29.6462 24.6455 24.6466 29.6462 18.5 29.6462C12.3534 29.6462 7.35374 24.6455 7.35374 18.5C7.35374 12.3545 12.3545 7.35374 18.5 7.35374C20.0413 7.35374 21.5421 7.66824 22.9573 8.28799L23.2915 7.52602C21.7687 6.85887 20.1581 6.52124 18.5 6.52124C11.8955 6.52124 6.52124 11.8955 6.52124 18.5C6.52124 25.1056 11.8943 30.4787 18.5 30.4787C25.1056 30.4787 30.4787 25.1056 30.4787 18.5ZM18.5 17.3437C17.8617 17.3437 17.3437 17.8617 17.3437 18.5C17.3437 19.1382 17.8617 19.6562 18.5 19.6562C19.1382 19.6562 19.6562 19.1382 19.6562 18.5C19.6562 17.8617 19.1382 17.3437 18.5 17.3437Z" fill="#0057FF"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1876_15102">
                                        <rect width="37" height="37" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg> 
                                    </Box>
                                    <Box>
                                        <Text as={'h3'} sx={valueSubtitle}>Mastery</Text>
                                        <Text as={'p'} sx={valueSubText}>We uphold the value of expertise, consistently delivering high-quality work and insights through seasoned industry professionals</Text>
                                    </Box>
                            </Flex>
                        </Box>
                       
                </Box>
            </Container>
        </Box>
  )
}
export default OurValues
