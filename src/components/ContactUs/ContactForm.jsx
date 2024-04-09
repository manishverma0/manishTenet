import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  FormControl,
  Input,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ContactForm = () => {
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
    <Box w={["90%", "90%", "90%", "90%", "90%", "90%"]} bg={["#0D0E4D", "#0D0E4D", "#0D0E4D", "#fff"]} display={["flex", "flex", "flex", "flex", "flex", "flex"]} alignItems={["center", "center", "center", "center", "center", "center"]} justifyContent={["center", "center", "center", "center", "center", "center"]} margin={["0 auto"]} marginTop={["45px", "45px", "45px", 0, 0, 0]}>
    <Box width={["100%", "100%", "100%", "80%", "80%", "80%"]}>
        <form onSubmit={handleSubmit}>
            <Box bg={"#fff"}>
                <Box mb={["26px", "26px", "26px", "26px", "26px", "26px"]} display={["none", "none", "none", "block", "block", "block"]}>
                    <Text as={"p"} mb={'20px'} letterSpacing={'-0.506px'} fontSize={["14px", "16px", "16px", "23px", "23px", "23px"]} fontWeight={"400"} fontFamily={"var(--foundersGrotesk-regular);"} color={"#333"}>We're excited to work with you soon!</Text>
                    <Text as={"p"}  letterSpacing={'-0.506px'}  fontSize={["14px", "16px", "16px", "23px", "23px", "23px"]} fontWeight={"400"} fontFamily={"var(--foundersGrotesk-regular);"} color={"#333"}>Please drop an email with your details & requirements to 
                        <Link href="mailto:hello@wearetenet.com" style={{ color: "#9B4DFF",margin:'0px 5px' }}>
                            hello@wearetenet.com.
                        </Link>
                         You can also fill this form & we'll get back in 2 business days.
                    </Text>
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
  )
}

export default ContactForm
