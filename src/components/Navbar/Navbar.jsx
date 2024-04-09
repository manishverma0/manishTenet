import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Image, Link, Flex, useBreakpointValue, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../assets/Logo/header_logo.svg';
import stickyLogo from '../../assets/Logo/sticky_header_logo.svg';

const DesktopNavbar = ({ isHomePage }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Box
            position={isSticky ? "fixed" : "relative"}
            top={0}
            width="100%"
            zIndex={1000}
            backgroundColor={isSticky ? "#ffffff" : isHomePage ? "#0057FF" : "transparent"}
            color={isSticky ? "#000000" : "#000000"}
            boxShadow={isSticky ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none"}
            transition="background-color 0.3s, color 0.3s, box-shadow 0.3s"
            padding={"12px 0"}
        >
            <Container
                maxW={"94%"}
                m={"0 auto"}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Box>
                        <Image src={isSticky ? stickyLogo : logo} />
                    </Box>
                    <Flex
                        alignItems={"center"}
                        flex={1}
                        justifyContent={"center"}
                        gap={["18px", "18px", "20px", "25px", "32px", "32px"]}
                    >
                        <Link
                            fontSize={["13px", "13px", "13px", "18px", "18px", "18px"]}
                            fontWeight={"400"}
                            fontFamily={"var(--foundersGrotesk-regular);"}
                            color={isSticky ? "#333333" : "#fff"}
                        >
                            Abouts
                        </Link>
                        <Link
                            fontSize={["13px", "13px", "13px", "18px", "18px", "18px"]}
                            fontWeight={"400"}
                            fontFamily={"var(--foundersGrotesk-regular);"}
                            color={isSticky ? "#333333" : "#fff"}
                        >
                            Services & Solutions
                        </Link>
                        <Link
                            fontSize={["13px", "13px", "13px", "18px", "18px", "18px"]}
                            fontWeight={"400"}
                            fontFamily={"var(--foundersGrotesk-regular);"}
                            color={isSticky ? "#333333" : "#fff"}
                        >
                            Strategy
                        </Link>
                        <Link
                            fontSize={["13px", "13px", "13px", "18px", "18px", "18px"]}
                            fontWeight={"400"}
                            fontFamily={"var(--foundersGrotesk-regular);"}
                            color={isSticky ? "#333333" : "#fff"}
                        >
                            Work
                        </Link>
                        <Link
                            fontSize={["13px", "13px", "13px", "18px", "18px", "18px"]}
                            fontWeight={"400"}
                            fontFamily={"var(--foundersGrotesk-regular);"}
                            color={isSticky ? "#333333" : "#fff"}
                        >
                            Resources
                        </Link>
                        <Link
                            fontSize={["13px", "13px", "13px", "18px", "18px", "18px"]}
                            fontWeight={"400"}
                            fontFamily={"var(--foundersGrotesk-regular);"}
                            color={isSticky ? "#333333" : "#fff"}
                        >
                            Community
                        </Link>
                    </Flex>
                    <Button bg={isSticky ? "#9B4DFF" : "#000000"} color={"#fff"} borderRadius={"none"}
                        _hover={{ bg: "#000000", color: "#ffffff" }}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0774 3.21745C20.9762 3.1167 20.8483 3.04695 20.7088 3.01639C20.5693 2.98584 20.424 2.99574 20.2899 3.04495L3.78992 9.04495C3.64762 9.09892 3.52511 9.19491 3.43866 9.32016C3.35221 9.44542 3.30591 9.59401 3.30591 9.7462C3.30591 9.89839 3.35221 10.047 3.43866 10.1722C3.52511 10.2975 3.64762 10.3935 3.78992 10.4474L10.9899 13.3274L13.8699 20.5275C13.924 20.6635 14.0168 20.7807 14.1367 20.8647C14.2567 20.9487 14.3986 20.9957 14.5449 20.9999C14.6965 20.9968 14.8436 20.9479 14.9667 20.8595C15.0899 20.7711 15.1834 20.6475 15.2349 20.5049L21.2349 4.00495C21.286 3.87226 21.2983 3.72777 21.2705 3.58834C21.2426 3.44891 21.1756 3.32028 21.0774 3.21745ZM14.5449 18.15L12.4524 12.9L16.0449 9.30745L14.9874 8.24995L11.3649 11.8724L6.14492 9.74995L19.2924 5.00245L14.5449 18.15Z"
                                fill="white"
                            />
                        </svg>
                        Contact us
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

const MobileNavbar = ({ isHomePage }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <Box
            padding={"12px 0"}
            backgroundColor={isHomePage ? "#0057FF" : "transparent"}
        >
            <Container maxW={"100%"} m={"0 auto"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        aria-label="Menu"
                        icon={<HamburgerIcon boxSize={8} />}
                        onClick={toggleDrawer}
                        color={"#fff"}
                        variant={"ghost"}
                    />
                    <Image src={logo} mr={10} />
                    <Button bg={"#000"} color={"#fff"} borderRadius={"none"}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.0774 3.21745C20.9762 3.1167 20.8483 3.04695 20.7088 3.01639C20.5693 2.98584 20.424 2.99574 20.2899 3.04495L3.78992 9.04495C3.64762 9.09892 3.52511 9.19491 3.43866 9.32016C3.35221 9.44542 3.30591 9.59401 3.30591 9.7462C3.30591 9.89839 3.35221 10.047 3.43866 10.1722C3.52511 10.2975 3.64762 10.3935 3.78992 10.4474L10.9899 13.3274L13.8699 20.5275C13.924 20.6635 14.0168 20.7807 14.1367 20.8647C14.2567 20.9487 14.3986 20.9957 14.5449 20.9999C14.6965 20.9968 14.8436 20.9479 14.9667 20.8595C15.0899 20.7711 15.1834 20.6475 15.2349 20.5049L21.2349 4.00495C21.286 3.87226 21.2983 3.72777 21.2705 3.58834C21.2426 3.44891 21.1756 3.32028 21.0774 3.21745ZM14.5449 18.15L12.4524 12.9L16.0449 9.30745L14.9874 8.24995L11.3649 11.8724L6.14492 9.74995L19.2924 5.00245L14.5449 18.15Z"
                                fill="white"
                            />
                        </svg>
                        Contact us
                    </Button>
                </Flex>
            </Container>

            <Drawer placement="left" onClose={toggleDrawer} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        {/* <DrawerHeader>Menu</DrawerHeader> */}
                        <DrawerBody paddingTop={"55px"}>
                            {/* Your menu items here */}
                            <Flex direction="column" gap={4}>
                                <Link fontSize={"18px"} color={"#000"}>
                                    About
                                </Link>
                                <Link fontSize={"18px"} color={"#000"}>
                                    Services & Solutions
                                </Link>
                                <Link fontSize={"18px"} color={"#000"}>
                                    Strategy
                                </Link>
                                <Link fontSize={"18px"} color={"#000"}>
                                    Work
                                </Link>
                                <Link fontSize={"18px"} color={"#000"}>
                                    Resources
                                </Link>
                                <Link fontSize={"18px"} color={"#000"}>
                                    Community
                                </Link>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

const Navbar = ({ isHomePage }) => {
    const displayMobileNavbar = useBreakpointValue({ base: true, md: false });

    return (
        <>
            {displayMobileNavbar ? (
                <MobileNavbar isHomePage={isHomePage} />
            ) : (
                <DesktopNavbar isHomePage={isHomePage} />
            )}
        </>
    );
};

export default Navbar;
