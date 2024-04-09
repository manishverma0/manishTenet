import React from 'react'
import {Box} from '@chakra-ui/react'
import Banner from './Banner'
import AuthorInfoAndShareBtn from './AuthorInfoAndShareBtn'
import ContentLayout from './ContentLayout'
import RelatedArticles from '../../Commen/RelatedArticleBlog'
import LetsWorkTogether from '../../About/LetsWorkTogether'


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
         <RelatedArticles/>
      </Box>
      <Box>
        <LetsWorkTogether/>
      </Box>
    </Box>
  )
}

export default BlogSingle
