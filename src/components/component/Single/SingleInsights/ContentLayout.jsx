import React from 'react'
import {Box, Container, Flex} from '@chakra-ui/react'
import Content from './Content'
import DataDownloadForm from './DataDownloadForm'

const ContentLayout = () => {
  return (
    <Box pt={'116px'} pb={'100px'}>
    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'} zIndex={2} position={'relative'}>
        <Flex display={['block','block','block','flex','flex','flex']}>
            <Box w={['100%','100%','100%','65%','65%','65%']} pr={[,'0px','0px','0px','75px','75px','75px']}>
                <Content/>
            </Box>
            <Box w={["100%", "100%", "100%",'35%','35%','35%']}>
                <DataDownloadForm/>
            </Box>
        </Flex>
    </Container>

    </Box>
  )
}

export default ContentLayout
