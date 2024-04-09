import React from 'react'
import {Box} from '@chakra-ui/react'
import ServiceBannerSingle from '../SingleService/SingleBanner'
import Solution from './Solution'
import TextWithImgs from './TextWithImg'
import OurProces from './OurProces'
import Accordian from './Accordian'
import Ctc from './Ctc'
import Workshop from './workshop'
import ClientLogoAbout from '../../Home/ClientsLogo'
import ExploreOtherWork from '../Service/ExploreOtherWork'
import LetsWorkTogether from './LetsWorkTogether'

const SingleService = () => {
  return (
    <Box>
        <Box>
            <ServiceBannerSingle/>
        </Box>
        <Box>
          <Solution/>
        </Box>
        <Box>
            <TextWithImgs/>
        </Box>
        <Box>
            <OurProces/>
        </Box>
        <Box>
          <Accordian/>
        </Box>
        <Box>
          <Ctc/>
        </Box>
        <Box>
          <Workshop/>
        </Box>
        <Box>
          <ClientLogoAbout/>
        </Box>
        <Box>
          <ExploreOtherWork/>
        </Box>
        <Box>
           <LetsWorkTogether/>
        </Box>

    </Box>
  )
}

export default SingleService
