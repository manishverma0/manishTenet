import { Box, Heading, Link ,Text} from '@chakra-ui/react'
import React from 'react'

const Content = () => {
    const blogHeading ={
        fontFamily:'var(--garnett-regular)',
        fontSize:['32px','32px'],
        fontWeight:'normal',
        lineHeight:'normal'
    }
    const DownloadLink ={
        color:'#E0005E',
        fontFamily:'var(--garnett-medium)',
        fontWeight:'normal',
        fontSize:['24px','24px'],
        textDecoration: 'underline',
        pt:'29px',
        pb:'33px',
        display:'inline-block'
    }
    const contentText = {
        fontFamily:'var(--foundersGrotesk-regular)',
        fontSize:['18px','18px'],
        fontWeight:'normal',
        lineHeight:'normal',
        pb:'30px'
    }
  return (
    <Box>
        {/* Display blog Title */}
        <Box>
            <Heading as={'h2'} sx={blogHeading}>After more than a decade in business, Zuora was ready to expand its reach and needed a brand.</Heading>
        </Box>
        {/* DownloAD lINK */}
        <Box textAlign={'center'}>
            <Link sx={DownloadLink}>Download Now: How to build a Brand</Link>
        </Box>
        <Box>
            <Text as="p" sx={contentText}>
                AfLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend, libero sed rhoncus auctor, est dolor viverra ex, eu maximus tortor ligula ac leo. Morbi ut neque non enim volutpat pellentesque. Sed vestibulum, sapien eget facilisis lacinia, augue dolor aliquet felis, vel egestas diam libero sed diam. Sed eu urna a orci ultricies varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in euismod enim, ut egestas libero. Etiam et porttitor est. Suspendisse potenti. Ut non metus purus. Etiam et diam urna. Morbi molestie eros arcu, sit amet scelerisque sapien lobortis varius. Donec et sem velit.
            </Text>
            <Text as="p" sx={contentText}>
                Pellentesque luctus augue quis tellus rhoncus rutrum. Quisque dictum quam non vestibulum rutrum. Suspendisse vitae sagittis sapien, at consequat turpis. Etiam et maximus augue. Aliquam nisi libero, suscipit in viverra et, venenatis eget nibh. Nunc mattis, diam eu egestas tristique, justo ante dignissim ante, nec feugiat quam justo ac eros. Vivamus lacinia erat ac convallis vestibulum. Nulla a nisi aliquet lectus suscipit hendrerit sed eu eros. Curabitur sollicitudin, turpis a posuere feugiat, lectus augue auctor eros, a porttitor neque justo vel nunc. Aenean lacinia elementum ante. Nam tincidunt iaculis metus, nec dignissim nulla blandit et. 
            </Text>
            <Text as="p" sx={contentText}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque laoreet urna volutpat dignissim tristique. Quisque malesuada imperdiet odio eu consectetur. Suspendisse placerat at odio eget tempor.
            </Text>
            <Text as='p' sx={contentText}>
                Phasellus tincidunt, odio sit amet tincidunt porta, mauris nisl dictum libero, non ullamcorper lorem eros vitae diam. Quisque scelerisque lobortis ligula, sed interdum lacus faucibus vel. Sed in sapien tellus. Morbi eget lobortis augue, nec efficitur eros. Nunc nulla augue, congue vel malesuada id, mollis at sem. Morbi rutrum convallis orci, vitae venenatis urna laoreet id. Nullam id justo lacus. Quisque vel porttitor velit. Suspendisse potenti. Duis est ipsum, condimentum quis dictum et, consequat maximus est. 
            </Text>
            <Text as="p" sx={contentText}>
                Donec et metus ut massa congue maximus semper ac ex. Pellentesque posuere ornare tellus sed tristique. Maecenas sit amet diam id ante varius lacinia aliquet ut nibh. Proin condimentum rutrum orci, ut ultrices quam consectetur ac. Morbi auctor diam id eleifend vulputate. Morbi urna nibh, condimentum at varius vel, tempus sagittis est. Maecenas pharetra eget nunc quis iaculis. Proin elementum efficitur sem sed vestibulum. Suspendisse at sollicitudin sapien. Curabitur at diam vitae arcu congue cursus. Suspendisse dapibus sed metus at aliquet. Ut tempor tortor a aliquet finibus.
            </Text>
            <Text as="p" sx={contentText}>
                Ut eu ligula euismod, iaculis dolor id, tincidunt justo. Phasellus a est sed mauris semper ultrices ac ac est. Fusce nulla ligula, commodo et sem vitae, venenatis fringilla lectus. Integer eleifend maximus accumsan. Curabitur porttitor nisl non purus facilisis, sit amet ornare lectus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ornare cursus enim, in pulvinar dolor ultricies ut. Donec hendrerit consequat sapien sed aliquam. Maecenas tempor ex eget massa condimentum consectetur.
            </Text>
        </Box>
    </Box>
  )
}
export default Content
