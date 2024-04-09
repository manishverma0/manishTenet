import React from 'react'
import { Box } from '@chakra-ui/react'
import Banner from './Banner'
import PPCService from './PPCService'
import Counter from './Counter'
import Service from './Service'
import Ctc from './Ctc'
import WhyChoosTenetAsWhiteLabel from './WhyChoosTenetAsWhiteLabel'
import OurProcess from './OurProcess'
import IndustriesWeAreWorkingWith from '../Home/WeWorkWith'
import FAQ from './FAQ'
import LetsWorkTogether from '../Commen/LetsWorkTogether/LetsWorkTogether'
import ClientSaysSlider from './ClientSaysSlider'
const WhiteLabel = () => {
  return (
    <>
        <Box>
            <Banner/>
        </Box>
        <Box>
            <PPCService/>
        </Box>
        <Box>
            <Counter/>
        </Box>
        <Box>
            <Service/>
        </Box>
        <Box>
            <Ctc/>
        </Box>
        <Box>
            <WhyChoosTenetAsWhiteLabel/>
        </Box>
        <Box>
            <OurProcess/>
        </Box>
        <Box>
            <IndustriesWeAreWorkingWith/>
        </Box>
        <Box>
            <ClientSaysSlider/>
        </Box>
        <Box>
            <FAQ/>
        </Box>
        <Box>
            <LetsWorkTogether/>
        </Box>

    </>
  )
}

export default WhiteLabel
