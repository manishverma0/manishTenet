import React from 'react'
import {Box, Container, Flex, Input, Link, Select, Text} from '@chakra-ui/react'

const CareerPosts = () => {
    const testimnialsTitle = {
        fontSize:['24px','24px','24px','48px','48px','48px'],
        fontFamily:'var(--garnett-regular)',
        fontWeight:'400',
        lineHeight:'normal',
        pb:['22px','22px','22px','14px','14px','14px'],
        maxW:'510px'
    }
    // Job Post
    const postTitle = {
        fontSize:['24px','24px','24px','24px','24px','24px'],
        fontFamily:'var(--garnett-regular)',
        lineHeight:'normal',
        color:'#333',
        fontWeight:'400'

    }
    const postCatogary ={
        fontSize:['16px','16px','16px','16px','16px','16px'],
        color:'#fff',
        bg:'#B882FF',
        fontFamily:'var(--garnett-regular)',
        p:'5px 10px 5px ',
        display:'inline-block'
    }
    const postLocation ={
        fontSize:['16px','16px','16px','16px','16px','16px'],
        bg:'#7610B5',
        color:'#fff',
        fontFamily:'var(--garnett-regular)',
        p:'5px 10px 5px',
        display:'inline-block'

    }
    // Search And Select
    const selectDesign ={
        fontSize: ['14px', '14px', '14px', '20px', '20px', '20px'],
        color: '#000',
        fontFamily: 'var(--foundersGrotesk-regular)',
        fontWeight: '400',
        p:'11px 14px 7px',
        border:'1px',
        borderColor:'#B882FF',
        borderRadius:'0px',
        minHeight:'52px'
      
        
    }
    const postSearchInput = {
        fontSize: ['14px', '14px', '14px', '20px', '20px', '20px'],
        fontFamily: 'var(--foundersGrotesk-regular)',
        color: '#000',
        bg:'#F5F5F5',
        w:'100%',
        borderRadius:'none',
        ml:'20px',
        pl:'50px',
        minHeight:'52px'
    }
    // Select Options
    const options = ['Web Development', 'App Development', 'Android'];
  return (
    <Box p={['150px 0','150px 0','150px 0','150px 0','150px 0','150px 0']}>
        <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}>
            {/* Title */}
            <Flex justifyContent={'space-between'}>
                <Box mb={'60px'} w={'50%'}>
                    <Text as={'h3'} sx={testimnialsTitle}>Current Openings</Text>
                </Box>
                <Flex w={'50%'}>
                    {/* Select */}
                    <Box w={'40%'}>
                        <Select id="select" placeholder="All Department" sx={selectDesign}>
                            {options.map((option,Index)=>(
                                <option key={Index} value={option} >{option}</option>
                            ))}
                        </Select>
                    </Box>

                    {/* Search */}
                    <Box position="relative" w={'100%'}>
                        <Input type="text" id="search" placeholder="Search" sx={postSearchInput} />
                        <Box
                            position="absolute"
                            top="8%"
                            left="7%"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <g clip-path="url(#clip0_2507_60191)">
                                <path d="M21.7492 20.7775L16.0851 15.1134C17.4462 13.4794 18.1249 11.3836 17.98 9.26201C17.8352 7.14037 16.878 5.15625 15.3075 3.7224C13.737 2.28854 11.6742 1.51535 9.54821 1.56366C7.42218 1.61197 5.39663 2.47807 3.89292 3.98178C2.3892 5.4855 1.5231 7.51105 1.47479 9.63707C1.42648 11.7631 2.19967 13.8259 3.63353 15.3964C5.06738 16.9668 7.05151 17.9241 9.17314 18.0689C11.2948 18.2137 13.3906 17.535 15.0246 16.174L20.6886 21.8381L21.7492 20.7775ZM2.9992 9.83807C2.9992 8.50304 3.39508 7.198 4.13678 6.08797C4.87848 4.97794 5.93269 4.11277 7.16609 3.60188C8.39949 3.09099 9.75669 2.95732 11.0661 3.21777C12.3754 3.47822 13.5782 4.12109 14.5222 5.0651C15.4662 6.0091 16.1091 7.21184 16.3695 8.52121C16.63 9.83058 16.4963 11.1878 15.9854 12.4212C15.4745 13.6546 14.6093 14.7088 13.4993 15.4505C12.3893 16.1922 11.0842 16.5881 9.7492 16.5881C7.9596 16.5861 6.24386 15.8743 4.97842 14.6088C3.71298 13.3434 3.00119 11.6277 2.9992 9.83807Z" fill="#333333"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2507_60191">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.0878906)"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </Box>
                    </Box>
                     
                </Flex>
            </Flex>
            {/* Searching And Shorting Functionality */}
            <Box display={'grid'} gridTemplateColumns={'repeat(2, 1fr)'} columnGap={'16px'} rowGap={'22px'}>
                <Box bg={'#F5F5F5'} p={'20px 22px 30px 30px'}>
                    {/* Title And Link */}
                    <Flex justifyContent={'space-between'} mb={'20px'}>
                        {/* Post Title */}
                        <Box>
                            <Text as={'h4'} sx={postTitle}>Senior Product Designer </Text>
                        </Box>
                        {/* Post Link */}
                        <Box>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <g clip-path="url(#clip0_1531_1381)">
                            <path d="M26 28.4824H6C5.46979 28.4817 4.96149 28.2708 4.58658 27.8958C4.21166 27.5209 4.00071 27.0126 4 26.4824V6.48242C4.00071 5.95221 4.21166 5.44392 4.58658 5.069C4.96149 4.69408 5.46979 4.48314 6 4.48242H16V6.48242H6V26.4824H26V16.4824H28V26.4824C27.9993 27.0126 27.7883 27.5209 27.4134 27.8958C27.0385 28.2708 26.5302 28.4817 26 28.4824Z" fill="#333333"/>
                            <path d="M20 2.48242V4.48242H26.586L18 13.0684L19.414 14.4824L28 5.89642V12.4824H30V2.48242H20Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_1381">
                            <rect width="32" height="32" fill="white" transform="translate(0 0.482422)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        {/* Post Category AND post Location */}
                        {/* Category */}
                        <Box>
                            <Text as={'span'} sx={postCatogary}>Design</Text>
                        </Box>
                        {/* Location */}
                        <Box>
                            <Text as={'span'} sx={postLocation}>New Delhi</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box bg={'#F5F5F5'} p={'20px 22px 30px 30px'}>
                    {/* Title And Link */}
                    <Flex justifyContent={'space-between'} mb={'20px'}>
                        {/* Post Title */}
                        <Box>
                            <Text as={'h4'} sx={postTitle}>Senior Product Designer </Text>
                        </Box>
                        {/* Post Link */}
                        <Box>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <g clip-path="url(#clip0_1531_1381)">
                            <path d="M26 28.4824H6C5.46979 28.4817 4.96149 28.2708 4.58658 27.8958C4.21166 27.5209 4.00071 27.0126 4 26.4824V6.48242C4.00071 5.95221 4.21166 5.44392 4.58658 5.069C4.96149 4.69408 5.46979 4.48314 6 4.48242H16V6.48242H6V26.4824H26V16.4824H28V26.4824C27.9993 27.0126 27.7883 27.5209 27.4134 27.8958C27.0385 28.2708 26.5302 28.4817 26 28.4824Z" fill="#333333"/>
                            <path d="M20 2.48242V4.48242H26.586L18 13.0684L19.414 14.4824L28 5.89642V12.4824H30V2.48242H20Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_1381">
                            <rect width="32" height="32" fill="white" transform="translate(0 0.482422)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        {/* Post Category AND post Location */}
                        {/* Category */}
                        <Box>
                            <Text as={'span'} sx={postCatogary}>Design</Text>
                        </Box>
                        {/* Location */}
                        <Box>
                            <Text as={'span'} sx={postLocation}>New Delhi</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box bg={'#F5F5F5'} p={'20px 22px 30px 30px'}>
                    {/* Title And Link */}
                    <Flex justifyContent={'space-between'} mb={'20px'}>
                        {/* Post Title */}
                        <Box>
                            <Text as={'h4'} sx={postTitle}>Senior Product Designer </Text>
                        </Box>
                        {/* Post Link */}
                        <Box>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <g clip-path="url(#clip0_1531_1381)">
                            <path d="M26 28.4824H6C5.46979 28.4817 4.96149 28.2708 4.58658 27.8958C4.21166 27.5209 4.00071 27.0126 4 26.4824V6.48242C4.00071 5.95221 4.21166 5.44392 4.58658 5.069C4.96149 4.69408 5.46979 4.48314 6 4.48242H16V6.48242H6V26.4824H26V16.4824H28V26.4824C27.9993 27.0126 27.7883 27.5209 27.4134 27.8958C27.0385 28.2708 26.5302 28.4817 26 28.4824Z" fill="#333333"/>
                            <path d="M20 2.48242V4.48242H26.586L18 13.0684L19.414 14.4824L28 5.89642V12.4824H30V2.48242H20Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_1381">
                            <rect width="32" height="32" fill="white" transform="translate(0 0.482422)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        {/* Post Category AND post Location */}
                        {/* Category */}
                        <Box>
                            <Text as={'span'} sx={postCatogary}>Design</Text>
                        </Box>
                        {/* Location */}
                        <Box>
                            <Text as={'span'} sx={postLocation}>New Delhi</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box bg={'#F5F5F5'} p={'20px 22px 30px 30px'}>
                    {/* Title And Link */}
                    <Flex justifyContent={'space-between'} mb={'20px'}>
                        {/* Post Title */}
                        <Box>
                            <Text as={'h4'} sx={postTitle}>Senior Product Designer </Text>
                        </Box>
                        {/* Post Link */}
                        <Box>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <g clip-path="url(#clip0_1531_1381)">
                            <path d="M26 28.4824H6C5.46979 28.4817 4.96149 28.2708 4.58658 27.8958C4.21166 27.5209 4.00071 27.0126 4 26.4824V6.48242C4.00071 5.95221 4.21166 5.44392 4.58658 5.069C4.96149 4.69408 5.46979 4.48314 6 4.48242H16V6.48242H6V26.4824H26V16.4824H28V26.4824C27.9993 27.0126 27.7883 27.5209 27.4134 27.8958C27.0385 28.2708 26.5302 28.4817 26 28.4824Z" fill="#333333"/>
                            <path d="M20 2.48242V4.48242H26.586L18 13.0684L19.414 14.4824L28 5.89642V12.4824H30V2.48242H20Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_1381">
                            <rect width="32" height="32" fill="white" transform="translate(0 0.482422)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        {/* Post Category AND post Location */}
                        {/* Category */}
                        <Box>
                            <Text as={'span'} sx={postCatogary}>Design</Text>
                        </Box>
                        {/* Location */}
                        <Box>
                            <Text as={'span'} sx={postLocation}>New Delhi</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box bg={'#F5F5F5'} p={'20px 22px 30px 30px'}>
                    {/* Title And Link */}
                    <Flex justifyContent={'space-between'} mb={'20px'}>
                        {/* Post Title */}
                        <Box>
                            <Text as={'h4'} sx={postTitle}>Senior Product Designer </Text>
                        </Box>
                        {/* Post Link */}
                        <Box>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <g clip-path="url(#clip0_1531_1381)">
                            <path d="M26 28.4824H6C5.46979 28.4817 4.96149 28.2708 4.58658 27.8958C4.21166 27.5209 4.00071 27.0126 4 26.4824V6.48242C4.00071 5.95221 4.21166 5.44392 4.58658 5.069C4.96149 4.69408 5.46979 4.48314 6 4.48242H16V6.48242H6V26.4824H26V16.4824H28V26.4824C27.9993 27.0126 27.7883 27.5209 27.4134 27.8958C27.0385 28.2708 26.5302 28.4817 26 28.4824Z" fill="#333333"/>
                            <path d="M20 2.48242V4.48242H26.586L18 13.0684L19.414 14.4824L28 5.89642V12.4824H30V2.48242H20Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_1381">
                            <rect width="32" height="32" fill="white" transform="translate(0 0.482422)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        {/* Post Category AND post Location */}
                        {/* Category */}
                        <Box>
                            <Text as={'span'} sx={postCatogary}>Design</Text>
                        </Box>
                        {/* Location */}
                        <Box>
                            <Text as={'span'} sx={postLocation}>New Delhi</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box bg={'#F5F5F5'} p={'20px 22px 30px 30px'}>
                    {/* Title And Link */}
                    <Flex justifyContent={'space-between'} mb={'20px'}>
                        {/* Post Title */}
                        <Box>
                            <Text as={'h4'} sx={postTitle}>Senior Product Designer </Text>
                        </Box>
                        {/* Post Link */}
                        <Box>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <g clip-path="url(#clip0_1531_1381)">
                            <path d="M26 28.4824H6C5.46979 28.4817 4.96149 28.2708 4.58658 27.8958C4.21166 27.5209 4.00071 27.0126 4 26.4824V6.48242C4.00071 5.95221 4.21166 5.44392 4.58658 5.069C4.96149 4.69408 5.46979 4.48314 6 4.48242H16V6.48242H6V26.4824H26V16.4824H28V26.4824C27.9993 27.0126 27.7883 27.5209 27.4134 27.8958C27.0385 28.2708 26.5302 28.4817 26 28.4824Z" fill="#333333"/>
                            <path d="M20 2.48242V4.48242H26.586L18 13.0684L19.414 14.4824L28 5.89642V12.4824H30V2.48242H20Z" fill="#333333"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1531_1381">
                            <rect width="32" height="32" fill="white" transform="translate(0 0.482422)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        {/* Post Category AND post Location */}
                        {/* Category */}
                        <Box>
                            <Text as={'span'} sx={postCatogary}>Design</Text>
                        </Box>
                        {/* Location */}
                        <Box>
                            <Text as={'span'} sx={postLocation}>New Delhi</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            {/* Pagination */}
            <Box>
                
            </Box>
        </Container>

    </Box>
  )
}

export default CareerPosts
