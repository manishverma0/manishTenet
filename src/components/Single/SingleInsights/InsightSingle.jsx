import React from 'react'
import {Box} from '@chakra-ui/react'
import Banner from './Banner'
import ContentLayout from './ContentLayout'
import RelatedArticleInsight from '../../Commen/RelatedArticleInsights'
import LetsWorkTogether from '../../Commen/LetsWorkTogether/LetsWorkTogether'

const BlogSingle = () => {
  return (
    <Box>
      <Box>
          <Banner/>
      </Box>
      <Box>
        <ContentLayout/>
      </Box>
      <Box>
        <RelatedArticleInsight/>
      </Box>
      <Box>
         <LetsWorkTogether/>
      </Box>
    </Box>
  )
}

export default BlogSingle
