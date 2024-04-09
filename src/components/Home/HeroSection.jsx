import React from 'react';
import { Box, Container, Flex, Text, Image, Input, Button } from '@chakra-ui/react';
import bannerImg from '../../assets/Home/Images/heroSection.svg';
const heroSection = () => {
  const bannerText = [
    {
      title: 'Empowering Your Business, Simplifying Your Journey.',
      description: "At Tenet, we blend empathy with expertise to deliver exceptional service and innovative solutions, ensuring your brand thrives in today's dynamic world.",
    }
  ];
  return (
    <Box bg='#0057FF'
      p={['23px 0', '23px 0', '23px 0', '25px 0 53px', '25px 0 53px', '25px 0 53px']}
      height={["auto", "auto", "50vh", "75vh", "80vh", "95vh"]}
      
    >
      <Container
        width={["100%", "100%", "100%", "94%", "94%", "94%"]}
        maxW={["100%", "100%", "100%", "94%", "94%", "94%"]}
        marginBottom={["50px", "50px", 0, 0, 0, 0]}
      >
        <Flex
          direction={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}
          gap={["55px", "55px", "55px", "0", "0", "0"]}
        >
          <Box
            w={['100%', '100%', '100%', '45%', '45%', '45%']}
            color='#FFFFFF'
            display="flex"
            flexDirection="column"
            justifyContent="center">
            <Box>
              <Box
                maxW={['100%', '100%', '100%', '90%', '90%', '90%']}
              >
                <Text
                  as="h1"
                  fontSize={['36px', '36px', '36px', '50px', '58px', '62px']}
                  m="0 0 23px 0"
                  fontFamily='var(--garnett-semibold)'
                >
                  {bannerText[0].title}
                </Text>
                <Text
                  fontSize={['14px', '14px', '14px', '18px', '18px', '18px']}
                  m="0 0 30px 0"
                  as='p'
                  fontFamily='var(--foundersGrotesk-light)'
                  fontWeight={"400"}
                >
                  {bannerText[0].description}
                </Text>
              </Box>
              <Box maxW={['100%', '100%', '100%', '60%', '60%', '60%']}>
                <Flex direction={['row', 'row', 'row', 'row', 'row', 'row']} alignItems="center">
                  <Input
                    bg="#0036C2"
                    w={['100%', '100%', '100%', '288px', '288px', '288px']}
                    h="42px"
                    borderBottom="2.4px solid #ffffff"
                    borderTop="2px #0036C2"
                    borderLeft="2px #0036C2"
                    borderRight="2px #0036C2"
                    borderRadius="0"
                    placeholder="Email Address"
                    _placeholder={{ color: "#fff", fontFamily: "var(--foundersGrotesk-light)", fontWeight: "400", fontSize: "20px" }}
                  />
                  <Button
                    w={['100%', '100%', '100%', '146px', '106px', '106px']}
                    fontSize="16px"
                    bg="#0D0E4D"
                    color="#ffffff"
                    border="2.4px solid #ffffff"
                    borderRadius="0"
                    fontFamily="var(--foundersGrotesk-light)"
                    fontWeight="400"
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                    textAlign="center"
                    height="42px"
                    _hover={{ bg: "#0D0E4D", color: "#ffffff", border: "2.4px solid #ffffff" }}
                  >
                    Get Started
                  </Button>
                </Flex>

              </Box>
            </Box>
          </Box>
          <Box
            w={['100%', '100%', '100%', '55%']}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Image
              src={bannerImg}
              w='100%'
              h="100%"
              objectFit="cover"
              alt="Hero Image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default heroSection;