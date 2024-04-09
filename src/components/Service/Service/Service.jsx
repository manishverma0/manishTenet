import React from 'react'
import {Box} from '@chakra-ui/react'
import HeroBanner from '../Service/HeroBanner'
import BriefStrategys from '../Service/BriefStrategys'
import ClientLogoAbout from '../../Home/ClientsLogo'
import LetsWorkTogether from '../../Commen/LetsWorkTogether/LetsWorkTogether'
import ServicesTab from '../../Service/Service/ServicesTab'
import ExploreOtherWork from './ExploreOtherWork'



const Service = () => {
  return (
      <Box overflow={'hidden'}>
        <Box>
          <HeroBanner/>
        </Box>
        <Box>
          <BriefStrategys/>
        </Box>
        <Box>
          <ServicesTab/>
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

export default Service
