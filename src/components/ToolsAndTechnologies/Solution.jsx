import React from 'react'
import {Box ,Container,Text} from '@chakra-ui/react'

const Solution = () => {
  const sectionH2Heading = {
    color:'#fff',
    fontSize:['32px','32px','32px','48px','48px','48px'],
    fontFamily:'var(--garnett-regular)',
    fontWeight:'400',
    lineHeight:'normal',
    pb:'32px',
    maxW:'772px',
    m:'0 auto'
}
const sectionParagraph = {
  color:'#fff',
  fontSize:['14px','14px','14px','20px','20px','20px'],
  fontFamily:'var(--foundersGrotesk-regular)',
  fontWeight:'400',
  lineHeight:'normal',
  maxW:'684px',
  m:'0 auto'
}
const solutionTitleh3 ={
    color:'#fff',
    fontSize:['14px','14px','14px','20px','20px','20px'],
    fontFamily:'var(--foundersGrotesk-regular)',
    fontWeight:'400',
    lineHeight:'normal',
    maxW:'194px',
    m:'0 auto'
}
  return (
    <Box bg={'#000'} p={['105px 0 84px','105px 0 84px','105px 0 84px','105px 0 84px','105px 0 84px','105px 0 84px']}>
          <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
            {/* Section Heading */}
              <Box textAlign={'center'}>
                  <Text as={'h2'} sx={sectionH2Heading}>Tools of trade that provide for all solutions.</Text>    
                  <Text as={'p'} sx={sectionParagraph}>To capture and implement the latest industry trends and research, our expert developers and analysts leave no stone unturned to make sure we deliver the best results for your products. </Text>   
              </Box>
              {/* Icons */}
              <Box pt={'89px'} display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} maxW={'700px'} m={'0 auto'}>
                  <Box>
                    {/* Icon Svg */}
                    <Box display={'flex'} justifyContent={'center'} mb={'20px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                        <g clip-path="url(#clip0_1531_18001)">
                        <path d="M60.0015 61.2449H4.00149C3.75149 61.2449 3.51949 61.1149 3.38949 60.9029C3.25749 60.6909 3.24549 60.4249 3.35749 60.2009L16.1855 34.5469C15.6295 34.0489 15.2815 33.3269 15.2815 32.5249C15.2815 31.0249 16.5015 29.8049 18.0015 29.8049C18.1835 29.8049 18.3595 29.8229 18.5315 29.8569L31.3595 4.2029C31.6015 3.7169 32.4035 3.7149 32.6475 4.2029L38.4755 15.8569C38.6435 15.8229 38.8195 15.8049 39.0015 15.8049C40.5015 15.8049 41.7215 17.0249 41.7215 18.5249C41.7215 19.3269 41.3715 20.0509 40.8175 20.5489L52.4715 43.8569C52.6435 43.8209 52.8195 43.8049 53.0015 43.8049C54.5015 43.8049 55.7215 45.0249 55.7215 46.5249C55.7215 47.3269 55.3715 48.0509 54.8175 48.5489L60.6455 60.2029C60.7575 60.4249 60.7455 60.6909 60.6135 60.9049C60.4815 61.1149 60.2515 61.2449 60.0015 61.2449ZM5.16749 59.8049H58.8375L53.5315 49.1929C52.1775 49.4769 50.7415 48.5649 50.3795 47.2449H11.4455L5.16749 59.8049ZM53.0015 45.2449C52.2955 45.2449 51.7215 45.8189 51.7215 46.5249C51.7215 47.2309 52.2955 47.8049 53.0015 47.8049C53.7075 47.8049 54.2815 47.2309 54.2815 46.5249C54.2815 45.8189 53.7075 45.2449 53.0015 45.2449ZM12.1675 45.8049H50.3795C50.5195 45.2969 50.8035 44.8469 51.1855 44.5029L45.5575 33.2469H20.6255C20.2615 34.5649 18.8175 35.4709 17.4735 35.1949L12.1675 45.8049ZM18.0015 31.2449C17.2955 31.2449 16.7215 31.8189 16.7215 32.5249C16.7215 33.2309 17.2955 33.8049 18.0015 33.8049C18.7075 33.8049 19.2815 33.2309 19.2815 32.5249C19.2815 31.8189 18.7075 31.2449 18.0015 31.2449ZM20.6255 31.8049H44.8355L39.5315 21.1929C38.1775 21.4669 36.7415 20.5649 36.3795 19.2449H25.4475L19.8195 30.5029C20.2015 30.8469 20.4855 31.2949 20.6255 31.8049ZM39.0015 17.2449C38.2955 17.2449 37.7215 17.8189 37.7215 18.5249C37.7215 19.2309 38.2955 19.8049 39.0015 19.8049C39.7075 19.8049 40.2815 19.2309 40.2815 18.5249C40.2815 17.8189 39.7075 17.2449 39.0015 17.2449ZM26.1675 17.8049H36.3795C36.5195 17.2949 36.8035 16.8449 37.1855 16.5009L32.0015 6.1349L26.1675 17.8049Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1531_18001">
                        <rect width="64" height="64" fill="white" transform="translate(0 0.524902)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </Box>
                    {/* Title */}
                    <Box textAlign={'center'}>
                          <Text as={'h3'} sx={solutionTitleh3}>Efficient & Organized</Text>
                    </Box>
                  </Box>
                  <Box>
                    {/* Icon Svg */}
                    <Box display={'flex'} justifyContent={'center'} mb={'20px'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                      <path d="M30.7212 33.1347C31.6392 32.8807 32.3592 32.1627 32.6132 31.2427H58.0013C58.3993 31.2427 58.7213 30.9207 58.7213 30.5227C58.7213 14.6867 45.8372 1.80273 30.0012 1.80273C20.7072 1.80273 12.0293 6.32073 6.63325 13.8847C6.42925 13.8367 6.21925 13.8047 6.00125 13.8047C4.50125 13.8047 3.28125 15.0247 3.28125 16.5247C3.28125 17.2467 3.56925 17.9007 4.02925 18.3867C2.22325 22.2347 1.28125 26.3107 1.28125 30.5247C1.28125 46.3607 14.1652 59.2447 30.0012 59.2447H31.945V57.8047H30.7212V45.2447V43.8047V33.1347ZM18.6112 43.8047C18.3053 42.6987 17.3253 41.8787 16.1372 41.8187C15.2653 38.4467 14.7992 34.8987 14.7432 31.2447H27.3892C27.6432 32.1627 28.3612 32.8827 29.2812 33.1367V43.8047H18.6112ZM13.3913 43.8047H6.19325C4.10125 40.0687 2.87725 35.7947 2.75725 31.2447H13.3053C13.3593 35.0027 13.8393 38.6567 14.7333 42.1327C14.0813 42.4807 13.5913 43.0787 13.3913 43.8047ZM44.0013 17.8047C43.2952 17.8047 42.7213 17.2307 42.7213 16.5247C42.7213 15.8187 43.2952 15.2447 44.0013 15.2447C44.7073 15.2447 45.2812 15.8187 45.2812 16.5247C45.2812 17.2307 44.7073 17.8047 44.0013 17.8047ZM41.3893 15.8047H30.7212V3.32273C35.2872 3.71473 39.5392 7.77674 42.2892 14.4287C41.8592 14.7807 41.5413 15.2547 41.3893 15.8047ZM29.2812 15.8047H17.1573C19.7553 8.60274 24.1952 3.73473 29.2832 3.30873L29.2812 15.8047ZM29.2812 17.2447V27.9147C28.3633 28.1687 27.6432 28.8867 27.3892 29.8067H14.7413C14.8092 25.2567 15.4932 20.9827 16.6652 17.2467H29.2812V17.2447ZM16.0013 43.2447C16.7073 43.2447 17.2812 43.8187 17.2812 44.5247C17.2812 45.2307 16.7073 45.8047 16.0013 45.8047C15.2952 45.8047 14.7213 45.2307 14.7213 44.5247C14.7213 43.8187 15.2952 43.2447 16.0013 43.2447ZM30.0012 31.8047C29.2952 31.8047 28.7212 31.2307 28.7212 30.5247C28.7212 29.8187 29.2952 29.2447 30.0012 29.2447C30.7072 29.2447 31.2812 29.8187 31.2812 30.5247C31.2812 31.2307 30.7072 31.8047 30.0012 31.8047ZM30.7212 27.9147V17.2447H41.3893C41.6953 18.3507 42.6772 19.1707 43.8633 19.2307C44.7353 22.6067 45.2013 26.1547 45.2573 29.8047H32.6112C32.3573 28.8867 31.6392 28.1687 30.7212 27.9147ZM46.6993 29.8047C46.6453 26.0487 46.1632 22.3947 45.2713 18.9147C45.9233 18.5667 46.4132 17.9687 46.6133 17.2427H53.8193C55.9113 20.9787 57.1553 25.2527 57.2733 29.8027H46.6993V29.8047ZM52.9253 15.8047H46.6133C46.2952 14.6547 45.2513 13.8047 44.0013 13.8047C43.8652 13.8047 43.7332 13.8247 43.6012 13.8447C41.7692 9.43074 39.2832 6.07474 36.4412 4.04473C43.3293 5.72073 49.1893 10.0067 52.9253 15.8047ZM23.5632 4.02473C20.2572 6.40474 17.5013 10.5727 15.6713 15.8047H8.61125C8.48325 15.3387 8.24325 14.9187 7.90725 14.5887C11.7553 9.26474 17.3132 5.54673 23.5632 4.02473ZM6.00125 15.2447C6.70725 15.2447 7.28125 15.8187 7.28125 16.5247C7.28125 17.2307 6.70725 17.8047 6.00125 17.8047C5.29525 17.8047 4.72125 17.2307 4.72125 16.5247C4.72125 15.8187 5.29525 15.2447 6.00125 15.2447ZM5.27325 19.1327C5.50525 19.1987 5.74725 19.2447 6.00125 19.2447C7.25125 19.2447 8.29325 18.3947 8.61125 17.2447H15.1892C14.0373 21.0187 13.3673 25.2827 13.3013 29.8047H2.73125C2.82725 26.1067 3.69925 22.5287 5.27325 19.1327ZM7.06925 45.2447H13.3913C13.7093 46.3947 14.7533 47.2447 16.0013 47.2447C16.1372 47.2447 16.2692 47.2247 16.4012 47.2047C18.2313 51.6167 20.7173 54.9727 23.5592 57.0027C16.6712 55.3267 10.8053 51.0447 7.06925 45.2447ZM29.2812 57.7247C24.7153 57.3327 20.4632 53.2707 17.7132 46.6207C18.1412 46.2687 18.4592 45.7947 18.6112 45.2447H29.2812V57.7247Z" fill="white"/>
                      <path d="M62.4075 61.0577H34.4075C34.0095 61.0577 33.6875 60.7357 33.6875 60.3377V40.3377C33.6875 39.9397 34.0095 39.6177 34.4075 39.6177H41.6875V34.3377C41.6875 33.9397 42.0095 33.6177 42.4075 33.6177H54.4075C54.8055 33.6177 55.1275 33.9397 55.1275 34.3377V39.6177H62.4075C62.8055 39.6177 63.1275 39.9397 63.1275 40.3377V60.3377C63.1275 60.7357 62.8055 61.0577 62.4075 61.0577ZM35.1275 59.6177H61.6875V49.0577H53.1275V50.3377C53.1275 50.7357 52.8055 51.0577 52.4075 51.0577H44.4075C44.0095 51.0577 43.6875 50.7357 43.6875 50.3377V49.0577H35.1275V59.6177ZM45.1275 49.6177H51.6855V47.0577H45.1275V49.6177ZM53.1275 47.6177H61.6855V41.0577H35.1275V47.6157H43.6875V46.3377C43.6875 45.9397 44.0095 45.6177 44.4075 45.6177H52.4075C52.8055 45.6177 53.1275 45.9397 53.1275 46.3377V47.6177ZM43.1275 39.6177H53.6855V35.0577H43.1275V39.6177Z" fill="white"/>
                      </svg>
                    </Box>
                    {/* Title */}
                    <Box textAlign={'center'}>
                          <Text as={'h3'} sx={solutionTitleh3}>Professional Grade Products</Text>
                    </Box>
                  </Box>
                  <Box>
                    {/* Icon Svg */}
                    <Box display={'flex'} justifyContent={'center'} mb={'20px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                        <g clip-path="url(#clip0_1531_18031)">
                        <path d="M62.0013 1.80884H2.00125C1.60325 1.80884 1.28125 2.13084 1.28125 2.52884V34.5288C1.28125 34.9268 1.60325 35.2488 2.00125 35.2488H62.0013C62.3993 35.2488 62.7213 34.9268 62.7213 34.5288V2.52884C62.7213 2.13084 62.3993 1.80884 62.0013 1.80884ZM61.2812 9.73284C57.8512 9.38884 55.1413 6.67884 54.7952 3.24884H61.2812V9.73284ZM61.2812 11.1708V25.8768C57.0553 26.2308 53.7053 29.5808 53.3533 33.8088H10.6493C10.2992 29.5808 6.94925 26.2308 2.72125 25.8768V11.1708C6.94525 10.8188 10.2933 7.47084 10.6473 3.24684H53.3533C53.7093 7.47284 57.0573 10.8188 61.2812 11.1708ZM9.20925 3.24884C8.86325 6.67884 6.15325 9.38884 2.72125 9.73284V3.24884H9.20925ZM2.72125 27.3168C6.15525 27.6608 8.86725 30.3748 9.20925 33.8088H2.72125V27.3168ZM54.7952 33.8088C55.1372 30.3748 57.8493 27.6608 61.2812 27.3168V33.8088H54.7952ZM11.0013 14.8048C8.95125 14.8048 7.28125 16.4748 7.28125 18.5248C7.28125 20.5748 8.94925 22.2448 11.0013 22.2448C13.0533 22.2448 14.7213 20.5748 14.7213 18.5248C14.7213 16.4748 13.0513 14.8048 11.0013 14.8048ZM11.0013 20.8048C9.74525 20.8048 8.72125 19.7808 8.72125 18.5248C8.72125 17.2688 9.74525 16.2448 11.0013 16.2448C12.2572 16.2448 13.2812 17.2688 13.2812 18.5248C13.2812 19.7808 12.2572 20.8048 11.0013 20.8048ZM53.0013 14.8048C50.9513 14.8048 49.2812 16.4728 49.2812 18.5248C49.2812 20.5768 50.9513 22.2448 53.0013 22.2448C55.0513 22.2448 56.7213 20.5768 56.7213 18.5248C56.7213 16.4728 55.0513 14.8048 53.0013 14.8048ZM53.0013 20.8048C51.7433 20.8048 50.7213 19.7808 50.7213 18.5248C50.7213 17.2688 51.7433 16.2448 53.0013 16.2448C54.2593 16.2448 55.2812 17.2688 55.2812 18.5248C55.2812 19.7808 54.2593 20.8048 53.0013 20.8048ZM53.6833 40.8468C55.0653 42.2308 55.0633 44.4828 53.6833 45.8668L41.5513 58.0688C40.8112 58.8068 39.8372 59.2828 38.8032 59.4148L24.3372 61.2088L22.5112 63.0348L21.4932 62.0148L23.4932 60.0148C23.6073 59.9008 23.7533 59.8288 23.9132 59.8088L38.6253 57.9828C39.3413 57.8928 40.0193 57.5608 40.5333 57.0488L52.6632 44.8468C53.4852 44.0248 53.4852 42.6868 52.6632 41.8628C51.9173 41.1208 50.7273 40.9828 49.6373 41.9048L37.0653 52.1748L37.0213 52.1208C36.2013 52.8128 35.1553 53.2448 34.0013 53.2448H24.0012V51.8048H34.0013C35.8092 51.8048 37.2812 50.3348 37.2812 48.5248C37.2812 47.8188 36.7073 47.2448 36.0013 47.2448H20.0012C14.8832 47.2448 10.7213 51.4068 10.7213 56.5248C10.7213 56.7168 10.6453 56.9008 10.5113 57.0348L4.51125 63.0348L3.49325 62.0148L9.28525 56.2228C9.44525 50.4508 14.1912 45.8048 20.0012 45.8048H36.0013C37.5013 45.8048 38.7213 47.0248 38.7213 48.5248C38.7213 48.6908 38.6893 48.8468 38.6733 49.0068L48.7173 40.8008C49.2513 40.3488 50.1173 39.8048 51.1733 39.8048C52.1193 39.8048 53.0093 40.1748 53.6833 40.8468Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8594 30.3132C39.168 30.3132 44.2822 25.199 44.2822 18.8904C44.2822 12.5817 39.168 7.46757 32.8594 7.46757C26.5507 7.46757 21.4366 12.5817 21.4366 18.8904C21.4366 25.199 26.5507 30.3132 32.8594 30.3132ZM32.8594 31.7732C39.9744 31.7732 45.7422 26.0054 45.7422 18.8904C45.7422 11.7754 39.9744 6.00757 32.8594 6.00757C25.7444 6.00757 19.9766 11.7754 19.9766 18.8904C19.9766 26.0054 25.7444 31.7732 32.8594 31.7732Z" fill="white"/>
                        <path d="M32.1406 28.8904H33.5806V25.6124H35.8606C37.9106 25.6124 39.5806 23.9424 39.5806 21.8924C39.5806 19.8424 37.9106 18.1724 35.8606 18.1724H29.8586C28.6026 18.1724 27.5806 17.1504 27.5806 15.8924C27.5806 14.6344 28.6026 13.6124 29.8586 13.6124H38.8606V12.1704H33.5826V8.89038H32.1406V12.1704H29.8586C27.8086 12.1704 26.1406 13.8404 26.1406 15.8904C26.1406 17.9404 27.8086 19.6104 29.8586 19.6104H35.8606C37.1186 19.6104 38.1406 20.6324 38.1406 21.8904C38.1406 23.1484 37.1186 24.1704 35.8606 24.1704H26.8606V25.6104H32.1406V28.8904Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1531_18031">
                        <rect width="64" height="64" fill="white" transform="translate(0 0.524902)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </Box>
                    {/* Title */}
                    <Box textAlign={'center'}>
                          <Text as={'h3'} sx={solutionTitleh3}>Cost Effective</Text>
                    </Box>
                  </Box>
              </Box>
          </Container>
    </Box>
  )
}

export default Solution
