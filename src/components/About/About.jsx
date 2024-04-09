import React from 'react'
import {Box} from '@chakra-ui/react'
import HeroBanner from './HeroBanner'
import OurTenets from './OurTenets'
import OurValues from './OurValues'
import OurJourney from './OurJourney'
import ClientsLogos from '../About/ClientLogoAbout'
import ClinetsSays from './ClinetsSays'
import SolutionForEveryone from './SolutionForEveryone'
import EndToEndProductTeam from './EndToEndProductTeam'
import Usps from './Usps'
import TeamWorkGallary from './TeamWorkGallary'
import LetsWorkTogether from '../Commen/LetsWorkTogether/LetsWorkTogether'

const About = () => {
  return (
    <Box overflow={'hidden'}>
        <Box>
            <HeroBanner/>
        </Box>
        <Box>
            <OurTenets/>
        </Box>
        <Box>
          <OurValues/>
        </Box>
        <Box>
          <OurJourney/>
        </Box>
        <Box>
          <ClientsLogos/>
        </Box>
        <Box>
          <ClinetsSays/>
        </Box>
        <Box>
            <SolutionForEveryone/>
        </Box>
        <Box>
            <EndToEndProductTeam/>
        </Box>
        <Box>
            <Usps/>
        </Box>
        <Box>
            <TeamWorkGallary/>
        </Box>
        <Box>
          <LetsWorkTogether/>
        </Box>
        </Box>
  )
}

export default About
