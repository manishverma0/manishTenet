import React from 'react'
import { Box } from '@chakra-ui/react'
import HeroBanner from './HeroBanner'
import PartnershipMarquee from './PartnershipMarquee'
import PartnersProgram from './PartnersProgram'
import MeetOurPartners from './MeetOurPartners'
import LetsWorkTogether from '../About/LetsWorkTogether'
import WhyChooseTenet from './WhyChooseTenet'
import RelatedArticle from '../Commen/RelatedArticle'

const Partners = () => {
  return (
    <Box>
      <Box>
          <HeroBanner/>
      </Box>
      <Box>
          <PartnershipMarquee/>
      </Box>
      <Box>
          <PartnersProgram/>
      </Box>
      <Box>
          <MeetOurPartners/>
      </Box>
      <Box>
          <WhyChooseTenet/>
      </Box>
      <Box>
          <RelatedArticle/>
      </Box>
      <Box>
          <LetsWorkTogether/>
      </Box>

    </Box>
  )
}

export default Partners
