import React from 'react'
import {Box} from '@chakra-ui/react'
import Banner from './Banner'
import LetsWorkTogetherMarquee from './LetsWorkTogetherMarquee'
import ReachOutToUs from './ReachOutToUs'

const ContactUs = () => {
  return (
    <Box>
        <Box>
            <Banner/>
        </Box>
        <Box>
            <ReachOutToUs/>
        </Box>
        <Box>
            <LetsWorkTogetherMarquee/>
        </Box>
      
    </Box>
  )
}

export default ContactUs