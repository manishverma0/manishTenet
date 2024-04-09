import React, { useState } from 'react';
import {
    Box,
    Container,
    Flex,
    Image,
    Text,
    Button,
    FormControl,
    Input,
    Textarea,
    Checkbox,
} from "@chakra-ui/react";
import topHand from "../../assets/Home/contactForm/topHand.svg";
import bottomHand from "../../assets/Home/contactForm/bottomHand.svg";

const HomePageForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sendNDA, setSendNDA] = useState(false);
    const [receiveUpdates, setReceiveUpdates] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendNDAChange = (e) => {
        setSendNDA(e.target.checked);
    };

    const handleReceiveUpdatesChange = (e) => {
        setReceiveUpdates(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data here
    };

    return (
        <Box color={["#0D0E4D", "#0D0E4D", "#0D0E4D", "#ffffff", "#ffffff", "#ffffff"]}>
            <Container maxW={"100%"} padding={"0"}>
                <Flex display={["block", "block", "block", "flex", "flex", "flex"]} gap={["35px", "35px", "35px", "85px", "85px", "85px"]}>
                    {/* Left Section */}
                    <Box w={["100%", "100%", "100%", "50%", "50%", "50%"]} bg={"#0D0E4D"}>
                        {/* Top Hand Image */}
                        <Box display={["none", "none", "none", "block", "block", "block"]}>
                            <Image src={topHand} alt="hand one img" />
                        </Box>
                        {/* Content */}
                        <Box maxW={["90%", "90%", "90%", "80%", "80%", "80%"]} m={"0 auto"} p={["30px 0", "30px 0", "30px 0", "80px 0"]}>
                            <Text as="h2" mb={["22px", "22px", "22px", "33px", "33px", "33px"]} color={"#ffffff"} fontSize={["36px", "36px", "36px", "48px", "48px", "48px"]} fontFamily={"var(--garnett-semibold);"} lineHeight={["normal"]}>
                                Ready to catapult your growth?
                            </Text>
                            <Text as="p" color={"#fff"} fontSize={["14px", "14px", "14px", "24px", "24px", "24px"]} maxW={["100%", "100%", "100%", "85%", "85%", "85%"]} fontFamily={"var(--foundersGrotesk-regular);"} lineHeight={["normal"]}>
                                We’d love to hear about your brand and business challenges, even if you’re not sure what your next step is. No pitch, no strings attached.
                            </Text>
                        </Box>
                        {/* Bottom Hand Image */}
                        <Box display={["none", "none", "none", "flex", "flex", "flex"]} justifyContent={"end"}>
                            <Image src={bottomHand} alt="hand one img" />
                        </Box>
                    </Box>
                    {/* Right Section */}
                    <Box w={["90%", "90%", "90%", "50%", "40%", "40%"]} bg={["#0D0E4D", "#0D0E4D", "#0D0E4D", "#fff"]} display={["flex", "flex", "flex", "flex", "flex", "flex"]} alignItems={["center", "center", "center", "center", "center", "center"]} justifyContent={["center", "center", "center", "center", "center", "center"]} margin={["0 auto"]} marginTop={["45px", "45px", "45px", 0, 0, 0]}>
                        <Box width={["100%", "100%", "100%", "80%", "80%", "80%"]}>
                            <form onSubmit={handleSubmit}>
                                <Box bg={"#fff"}>
                                    <Box mb={["26px", "26px", "26px", "26px", "26px", "26px"]} display={["none", "none", "none", "block", "block", "block"]}>
                                        <Button fontFamily={"var(--foundersGrotesk-regular)"} fontSize={["20px", "20px", "20px", "20px", "20px", "20px"]} border={"0"} borderRadius={"none"} bg={"#0C65C2"} color={"#fff"} display={"flex"} alignItems={"center"} marginBottom={["10px", "15px", "15px", "15px", "15px", "15px"]}>
                                            <Text fontWeight={"400"} position={["relative"]} top={["5px"]}>Sign in with LinkedIn</Text>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "5px" }}>
                                                <path d="M24.3686 4.25488H5.88729C4.98135 4.25488 4.25659 4.97964 4.25659 5.79499V24.3669C4.25659 25.1822 4.98135 25.907 5.88729 25.907H24.3686C25.2745 25.907 25.9993 25.1822 25.9993 24.3669V5.79499C25.9993 4.97964 25.2745 4.25488 24.3686 4.25488ZM10.6888 22.7362H7.51799V12.4084H10.6888V22.7362ZM9.14869 10.9589C8.15215 10.9589 7.24621 10.1435 7.24621 9.05639C7.24621 7.96926 8.06156 7.15391 9.14869 7.15391C10.1452 7.15391 11.0512 7.96926 11.0512 9.05639C11.0512 10.1435 10.1452 10.9589 9.14869 10.9589ZM22.8285 22.6456H19.6577V17.5723C19.6577 16.3945 19.6577 14.7638 17.9364 14.7638C16.2151 14.7638 16.0339 16.1228 16.0339 17.3911V22.555H12.8631V12.4084H15.8527V13.7673H15.9433C16.3963 12.952 17.4834 12.046 19.0235 12.046C22.2849 12.046 22.9191 14.2203 22.9191 17.0287V22.6456H22.8285Z" fill="white" />
                                            </svg>
                                        </Button>
                                        <Text as={"p"} fontSize={["14px", "16px", "16px", "16px", "16px", "16px"]} fontWeight={"400"} fontFamily={"var(--foundersGrotesk-regular);"} color={"#333"}>Auto Fill with LinkedIn</Text>
                                    </Box>
                                    <Box display={"flex"} justifyContent={"space-between"}>
                                        <Box w={"49%"}>
                                            <FormControl id="FirstName">
                                                <Input
                                                    placeholder="First Name"
                                                    bg="#f5f5f5"
                                                    borderBottom="1px solid #b5b5b5"
                                                    borderRadius="0"
                                                    marginBottom="20px"
                                                    _placeholder={{ color: "#333333" }}
                                                    value={firstName}
                                                    onChange={handleFirstNameChange}
                                                    color={firstName ? "#000000" : "#333333"}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box w={"49%"}>
                                            <FormControl id="LastName">
                                                <Input
                                                    placeholder="Last Name"
                                                    bg="#f5f5f5"
                                                    borderBottom="1px solid #b5b5b5"
                                                    borderRadius="0"
                                                    marginBottom="20px"
                                                    _placeholder={{ color: "#333333" }}
                                                    value={lastName}
                                                    onChange={handleLastNameChange}
                                                    color={lastName ? "#000000" : "#333333"}
                                                />
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email Address"
                                                bg="#f5f5f5"
                                                borderBottom="1px solid #b5b5b5"
                                                borderRadius="0"
                                                marginBottom="20px"
                                                _placeholder={{ color: "#333333" }}
                                                value={email}
                                                onChange={handleEmailChange}
                                                color={email ? "#000000" : "#333333"}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Phone"
                                                bg="#f5f5f5"
                                                borderBottom="1px solid #b5b5b5"
                                                borderRadius="0"
                                                marginBottom="20px"
                                                _placeholder={{ color: "#333333" }}
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                color={phone ? "#000000" : "#333333"}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <Input
                                                type="Text"
                                                placeholder="Subject"
                                                bg="#f5f5f5"
                                                borderBottom="1px solid #b5b5b5"
                                                borderRadius="0"
                                                marginBottom="20px"
                                                _placeholder={{ color: "#333333" }}
                                                value={subject}
                                                onChange={handleSubjectChange}
                                                color={subject ? "#000000" : "#333333"}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <Textarea
                                                rows={"5"}
                                                cols={"40"}
                                                placeholder="Message"
                                                bg="#f5f5f5"
                                                borderBottom="1px solid #b5b5b5"
                                                borderRadius="0"
                                                marginBottom="20px"
                                                _placeholder={{ color: "#333333" }}
                                                value={message}
                                                onChange={handleMessageChange}
                                                color={message ? "#000000" : "#333333"}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box mb={"24px"}>
                                        <Box display={"flex"} alignItems={"flex-start"} mb={"20px"}>
                                            <Checkbox checked={sendNDA} onChange={handleSendNDAChange} mr={"12px"} />
                                            <Text as="p" color={"#333"} mt={"2px"} fontSize={"14px"} fontFamily="var(--foundersGrotesk-regular)" fontWeight={"400"}>
                                                Send me a Non-Disclosure Agreement
                                            </Text>
                                        </Box>
                                        <Box display={"flex"} alignItems={"flex-start"}>
                                            <Checkbox checked={receiveUpdates} onChange={handleReceiveUpdatesChange} mr={"12px"} />
                                            <Text as="p" color={"#333"} mt={"0px"} fontSize={"14px"} fontFamily="var(--foundersGrotesk-regular)" fontWeight={"400"}>
                                                Please check the box to receive our marketing communications and stay up-to-date with our latest updates. Thank you!
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button
                                            lineHeight={"normal"}
                                            p={"24px 80px"}
                                            borderRadius={"none"}
                                            bg={"#0C65C2"}
                                            fontSize={"20px"}
                                            fontWeight={"400"}
                                            color={"#fff"}
                                            fontFamily="var(--foundersGrotesk-regular);"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};
export default HomePageForm;
