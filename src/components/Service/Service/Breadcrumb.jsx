import { Box, Link } from '@chakra-ui/react'
import React from 'react'
const Breadcrumb = () => {
    const breadCrumb ={
        fontSize: ['14px', '14px', '14px', '16px', '16px', '16px'],
        fontFamily: 'var(--foundersGrotesk-regular)',
        fontWeight: '400',
        lineHeight: 'normal',
        color: '#fff',
        display:'inline-flex',
        letterSpacing:'-0.352px'
      }
  return (
        <Box display={['none','none','none','Flex','Flex','Flex']}>
            <Link sx={breadCrumb}>Home</Link>
                <Box mx={'6px'} pb={'4px'}>
                    <svg mx={'6px'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="white" stroke-linecap="square"/></svg>
                </Box>
            <Link sx={breadCrumb}>Services</Link>
        </Box>
  )
}
export default Breadcrumb
