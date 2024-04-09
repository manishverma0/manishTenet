import React from 'react';
import { Box } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import image1 from '../../assets/Home/Icon/letWork.svg';
import icon from '../../assets/Home/Icon/shakingHand.svg';

const LogoMarquee = () => {
    return (
        <Box bg="#000000" borderBottom='1px solid #fff' height={["70px", "70px", "70px", "80px", "80px", "80px"]} display={"flex"}>
            <Marquee style={{ justifyContent: 'space-between' }}>
                {[...Array(4)].map((_, index) => (
                    <Box key={index} display="flex" alignItems="center" justifyContent="center" h="100%">
                        <img src={image1} alt={`Marquee ${index + 1}`} height="100%" />
                        <Box ml={45} mr={45}><img src={icon} alt="Icon" height="100%" /></Box>
                    </Box>
                ))}
            </Marquee>
        </Box>
    );
}

export default LogoMarquee;