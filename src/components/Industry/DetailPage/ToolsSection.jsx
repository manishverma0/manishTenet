import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import marquee1 from '../../../assets/Home/logoMarquee/logo1.svg';

const LogoMarquee = () => {
    return (
        <Box bg="#000000" borderBottom='1px solid #fff' height={["70px", "70px", "70px", "80px", "80px", "80px"]} display={"flex"}>
            <Box display="flex" alignItems="center" justifyContent="center" h="100%" width="250px" marginLeft="25px">
                <Text color="#fff" marginRight="10px">Tools & Technology we use:</Text>
            </Box>
            <Marquee style={{ justifyContent: 'space-between', width: 'calc(100% - 270px)' }}>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 1" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 2" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 3" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 4" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 5" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 6" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 7" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 8" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 5" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 6" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 7" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 8" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 5" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 6" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 7" height="100%" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%" marginRight="20px">
                    <img src={marquee1} alt="Marquee 8" height="100%" />
                </Box>
            </Marquee>
        </Box>


    );
}

export default LogoMarquee;
