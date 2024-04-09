import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from './Banner'
import JoinUsMarquee from './JoinUsMarquee'
import Testimonials from './Testimonials'
import Culture from './Culture'
import BenifitsOfwwTnt from './BenifitsOfwwTnt'
import TextStaticsAndSlider from './TextStaticsAndSlider'
import CareerPosts from './CareerPosts'
const Career = () => {
  return (
    <Box>
        <Box>
            <Banner/>
        </Box>
        <Box>
            <JoinUsMarquee/>
        </Box>
        <Box>
            <CareerPosts/>
        </Box>
        <Box>
            <Testimonials/>
        </Box>
        <Box>
            <Culture/>
        </Box>
        <Box>
            <BenifitsOfwwTnt/>
        </Box>
        <Box>
            <TextStaticsAndSlider/>
        </Box>
        
    </Box>
  )
}

export default Career
