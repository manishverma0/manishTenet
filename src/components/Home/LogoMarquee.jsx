import React from 'react';
import { Box } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import marquee1 from '../../assets/Home/logoMarquee/logo1.svg';
import marquee2 from '../../assets/Home/logoMarquee/logo2.svg';
import marquee3 from '../../assets/Home/logoMarquee/logo3.svg';
import marquee4 from '../../assets/Home/logoMarquee/logo4.svg';
import marquee5 from '../../assets/Home/logoMarquee/logo5.svg';
import marquee6 from '../../assets/Home/logoMarquee/logo6.svg';
import marquee7 from '../../assets/Home/logoMarquee/logo7.svg';
import marquee8 from '../../assets/Home/logoMarquee/logo8.svg';
import icon from '../../assets/Home/logoMarquee/icon.svg';

const LogoMarquee = () => {
    return (
        <Box bg="#000000" borderBottom='1px solid #fff' height={["70px", "70px", "70px", "80px", "80px", "80px"]} display={"flex"}> 
            <Marquee style={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee1} alt="Marquee 1" height="100%" /> 
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box> 
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee2} alt="Marquee 2" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%">
                    <img src={marquee3} alt="Marquee 3" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee4} alt="Marquee 4" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee5} alt="Marquee 5" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee6} alt="Marquee 6" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee7} alt="Marquee 7" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" h="100%"> 
                    <img src={marquee8} alt="Marquee 8" height="100%" />
                    <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                </Box>
            </Marquee>
        </Box>
    );
}

export default LogoMarquee;
