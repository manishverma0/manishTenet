import React from 'react'
import {Box, Container, Image} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel ,Text} from '@chakra-ui/react'
// Logos
import Logo1 from '../../assets/ToolsAndTech/ToolsIcon/1.svg'
import Logo2 from '../../assets/ToolsAndTech/ToolsIcon/2.svg'
import Logo3 from '../../assets/ToolsAndTech/ToolsIcon/3.svg'
import Logo4 from '../../assets/ToolsAndTech/ToolsIcon/4.svg'
import Logo5 from '../../assets/ToolsAndTech/ToolsIcon/5.svg'
import Logo6 from '../../assets/ToolsAndTech/ToolsIcon/6.svg'
import Logo7 from '../../assets/ToolsAndTech/ToolsIcon/7.svg'
import Logo8 from '../../assets/ToolsAndTech/ToolsIcon/8.svg'
import Logo9 from '../../assets/ToolsAndTech/ToolsIcon/9.svg'
import Logo10 from '../../assets/ToolsAndTech/ToolsIcon/10.svg'
import Logo11 from '../../assets/ToolsAndTech/ToolsIcon/11.svg'
import Logo12 from '../../assets/ToolsAndTech/ToolsIcon/12.svg'
import Logo13 from '../../assets/ToolsAndTech/ToolsIcon/13.svg'
import Logo14 from '../../assets/ToolsAndTech/ToolsIcon/14.svg'
import Logo15 from '../../assets/ToolsAndTech/ToolsIcon/15.svg'
import Logo16 from '../../assets/ToolsAndTech/ToolsIcon/16.svg'
import Logo17 from '../../assets/ToolsAndTech/ToolsIcon/17.svg'
import Logo18 from '../../assets/ToolsAndTech/ToolsIcon/18.svg'
import Logo19 from '../../assets/ToolsAndTech/ToolsIcon/19.svg'
import Logo20 from '../../assets/ToolsAndTech/ToolsIcon/20.svg'
import Logo21 from '../../assets/ToolsAndTech/ToolsIcon/21.svg'
import Logo22 from '../../assets/ToolsAndTech/ToolsIcon/22.svg'
import Logo23 from '../../assets/ToolsAndTech/ToolsIcon/23.svg'


// Cloud
// import Cloud1 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/AmazonAWS.svg'
// import Cloud2 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/Ansible.svg'
// import Cloud3 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/Azure.svg'
// import Cloud4 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/DigitalOcean.svg'
// import Cloud5 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/Firebase.svg'
// import Cloud6 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/GoogleCloud.svg'
// import Cloud7 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/IBM.svg'
// import Cloud8 from '../../assets/ToolsAndTech/ToolsIcon/Cloud/Parse.svg'


const ToolsTabbing = () => {
  const TabsBoxDesign = {
    borderBottom: '1px solid #D9D9D9',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 13px 0px rgba(0, 0, 0, 0.08)',
    
  };
  const tabsDesign ={
    fontSize:['16px','16px','16px','16px','16px','16px'],
    fontWeight:'400',
    letterSpacing:'-0.704px',
    fontFamily:'garnett-regular',
    p:'25px 20px 20px 20px'
}
const TabTitle ={
  fontSize:['16px','16px','16px','48px','48px','48px'],
  fontWeight:'400',
  lineHeight:'normal',
  fontFamily:'garnett-regular',
}
const iconTitle ={
  fontFamily:'var(--foundersGrotesk-regular)',
  fontSize:['14px','14px','14px','18px','18px','18px'],
  fontWeight:'400',
  lineHeight:'normal',
  letterSpacing:'-0.396px',
  pt:'19px'
}
  
  return ( 
    <Box>
        <Tabs>
            <TabList justifyContent={'center'} sx={TabsBoxDesign} >
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>All</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Web</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Mobile</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Virtual Reality</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Data Bases</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Cloud</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Design</Tab>
                <Tab sx={{...tabsDesign,_selected: {bg:'rgba(0, 186, 97, 0.10)',color: '#00763D',borderBottom: '5px solid #00763D',},}}>Testing</Tab>
            </TabList>
            <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]} m={'0 auto'}>
              <TabPanels>
                  {/* All */}
                  <TabPanel p={'90px 0 150px'}>
                      {/*  tab Title */}
                          <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>All Tools</Text>
                          </Box>
                          {/* Icons */}
                          <Box>
                              <Box display={'grid'} gridTemplateColumns={'repeat(6,1fr)'} columnGap={'16px'} rowGap={'60px'}>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo1} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>HTML 5</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo2} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>css</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo3} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Angular</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo4} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Ionic</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo5} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Node JS</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo6} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>PHP</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo7} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Python</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo8} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>React JS</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo9} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>CodeIgniter</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo10} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Django</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo11} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Droopal</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo12} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Joomla</Text>
                                      </Box>
                                  </Box>
                                  {/* Next 12 */}
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo13} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Laravel</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo14} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Shopify</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo15} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Ruby on Rails</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo16} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Presto</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo17} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>WooCommerce</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo18} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Yii</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo19} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Wordpress</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo20} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Zend</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo21} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>CakePHP</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo22} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>Symfony</Text>
                                      </Box>
                                  </Box>
                                  <Box>
                                      <Box bg={'#F5F5F5'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'117px'}>
                                          <Image src={Logo23} alt='Html Icon'/>
                                      </Box>
                                      <Box textAlign={'center'}>
                                          <Text as={'h4'} sx={iconTitle}>VueJS</Text>
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                  </TabPanel>
                  {/* Web */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Web</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
                  {/* Mobile */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Mobile</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
                  {/* Virtal Reality */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Virtual Reality</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
                  {/* Data Base */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Data Bases</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
                  {/* Cloud */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Cloud</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
                  {/* Design */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Design</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
                  {/* Testing */}
                  <TabPanel p={'90px 0 150px'}>
                        {/*  tab Title */}
                        <Box pb={'35px'}>
                              <Text as={'h3'} sx={TabTitle}>Testing</Text>
                        </Box>
                          {/* Icons */}
                  </TabPanel>
   
              </TabPanels>
            </Container>
        </Tabs>
    </Box>
  )
}

export default ToolsTabbing
