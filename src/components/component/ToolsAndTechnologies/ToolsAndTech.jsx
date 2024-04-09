import React from 'react'
import {Box} from '@chakra-ui/react'
import Banner from './Banner'
import ToolsTabbing from './ToolsTabbing'
import Solution from './Solution'
import LetsWorkTogether from '../About/LetsWorkTogether'

const ToolsAndTech = () => {
  return (
    <Box>
        <Box>
            <Banner/>
        </Box>
        <Box>
            <Solution/>
        </Box>
        <Box>
            <ToolsTabbing/>
        </Box>
        <Box>
            <LetsWorkTogether/>
        </Box>
        

    </Box>
  )
}

export default ToolsAndTech
