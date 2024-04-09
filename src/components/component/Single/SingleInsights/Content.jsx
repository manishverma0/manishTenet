import { Box, Heading, Link ,Text} from '@chakra-ui/react'
import React from 'react'

const Content = () => {
    const blogHeading ={
        fontFamily:'var(--garnett-regular)',
        fontSize:['32px','32px'],
        fontWeight:'normal',
        lineHeight:'normal',
        pb:'32px'
    }
 
    const contentText = {
        fontFamily:'var(--foundersGrotesk-regular)',
        fontSize:['18px','18px'],
        fontWeight:'normal',
        lineHeight:'normal',
        pb:'30px'
    }
  return (
    <Box>
        {/* Display blog Title */}
        <Box>
            <Heading as={'h2'} sx={blogHeading}>After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.</Heading>
        </Box>
        {/* DownloAD lINK */}
        <Box>
            <Text as="p" sx={contentText}>
                    After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.
            </Text>
            <Text as="p" sx={contentText}>
                    After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.
            </Text>
            <Text as="p" sx={contentText}>
                    After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.
            </Text>
            <Text as="p" sx={contentText}>
                    After more than a decade in business, Zuora was ready to expand its reach and needed a brand that would position it as the only choice for enterprises working to build, run, or grow a subscription solution in its industry.
            </Text>
 
        </Box>
    </Box>
  )
}
export default Content
