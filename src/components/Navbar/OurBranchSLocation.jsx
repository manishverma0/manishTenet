import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import TimeArrow from '../../assets/Footer/arrow.svg'
import NewYorkIcon from '../../assets/Footer/Ny.svg'
import LondanIcon from '../../assets/Footer/Ldn.svg'
import DxbIcon from '../../assets/Footer/Dxb.svg'
import DelhiIcon from '../../assets/Footer/Dl.svg'
import Sg from '../../assets/Footer/Sg.svg'

const OurBranchSLocation = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const options = { hour12: true, hour: 'numeric', minute: 'numeric' };
            const newYorkTime = now.toLocaleString('en-US', { ...options, timeZone: 'America/New_York' });
            const londonTime = now.toLocaleString('en-GB', { ...options, timeZone: 'Europe/London' });
            const dubaiTime = now.toLocaleString('en-US', { ...options, timeZone: 'Asia/Dubai' });
            const singaporeTime = now.toLocaleString('en-US', { ...options, timeZone: 'Asia/Singapore' });
            const delhiTime = now.toLocaleString('en-IN', { ...options, timeZone: 'Asia/Kolkata' });

            setTime({ newYork: newYorkTime, london: londonTime, dubai: dubaiTime, singapore: singaporeTime, delhi: delhiTime });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // style
    const locationTime = {
        color: '#fff',
        display: 'flex',
        fontSize: ['15px','18px','18px','24px','24px','24px'],
        fontFamily: 'var(--garnett-regular)',
        fontWeight: '400'
    };
    const leftBorder = {
        borderLeft: ['none', 'none', 'none', '1px solid #B5B5B5', '1px solid #B5B5B5', '1px solid #B5B5B5'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
         
    };
    
    
  return (
    <Box bg={'#111111'}
    paddingTop={["45px", "45px", "45px", "45px", "60px", "60px"]}
    paddingBottom={["44px", "44px", "44px", "44px", "60px", "60px"]}
>
    <Container maxWidth={["100%", "100%", "100%", "90%", "90%", "90%"]}>
        <Box display={'flex'} flexWrap={'wrap'}  justifyContent={['center','center','center','space-between','space-between','space-between']}  rowGap={["45px", "45px", "45px", "0", "0", "0"]}>
           
            <Box display={'flex'} w={['50%','50%','50%','20%','20%','20%']} alignItems={'center'} justifyContent={'center'}   flexDirection={'column'}>
                <Box>
                    <Image src={NewYorkIcon} />
                </Box>
                <Box>
                    <Text as={'p'} sx={locationTime}>
                        NY
                        <Image m={'0px 5px'}
                            src={TimeArrow}
                        />
                        {time && time.newYork}
                    </Text>
                </Box>
            </Box>
            <Box sx={leftBorder} w={['50%','50%','50%','20%','20%','20%']}>
                <Box>
                    <Image
                        src={LondanIcon}
                    />
                </Box>
                <Box>
                <Text as={'p'} sx={locationTime}>
                        LDN
                        <Image
                            m={'0px 5px'}
                            src={TimeArrow}
                        />
                         {time && time.london}
                    </Text>
                </Box>
            </Box>
            <Box sx={leftBorder} w={['50%','50%','50%','20%','20%','20%']}>
                <Box>
                    <Image
                        src={DxbIcon}
                    />
                </Box>
                <Box>
                    <Text as={'p'} sx={locationTime}>
                        DXB
                        <Image
                            m={'0px 5px'}
                            src={TimeArrow}
                        />
                        {time && time.dubai}
                    </Text>
                </Box>
            </Box>
            <Box sx={leftBorder} w={['50%','50%','50%','20%','20%','20%']}>
                <Box>
                    <Image
                        src={DelhiIcon}
                    />
                </Box>
                <Box>
                    <Text as={'p'} sx={locationTime}>
                        DL
                        <Image
                            m={'0px 5px'}
                            src={TimeArrow}
                        />
                        {time && time.delhi}
                    </Text>
                </Box>
            </Box>
            <Box sx={leftBorder} w={['100%','100%','100%','20%','20%','20%']}>
                <Box>
                    <Image
                        src={Sg}
                    />
                </Box>
                <Box> 
                <Text as={'p'} sx={locationTime}>
                        SG
                        <Image
                            m={'0px 5px'}
                            src={TimeArrow}
                        />
                        {time && time.singapore}
                    </Text>
                </Box>
            </Box>
        </Box>
    </Container>
</Box>
  )
}

export default OurBranchSLocation
