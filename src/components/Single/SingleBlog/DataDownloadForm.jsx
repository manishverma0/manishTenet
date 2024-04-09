import React, { useState } from 'react';
import { Box, Button, Heading, Text, FormControl, Input, Checkbox, Textarea, Flex } from '@chakra-ui/react';

// Define input field styles
const inputStyles = {
  fontFamily: "var(--foundersGrotesk-regular);",
  fontSize:'13px',
  fontWeight: 'normal',
  lineHeight: 'normal',
  bg: "#f5f5f5",
  borderBottom: "1px solid #b5b5b5",
  borderRadius: "0",
  marginBottom: "14px",
  _placeholder: { color: "#333333" }
};

// Define button styles
const buttonStyles = {
  lineHeight: "normal",
  p: "24px 80px",
  borderRadius: "none",
  bg: "#860038",
  fontSize: "20px",
  fontWeight: "400",
  color: "#fff",
  fontFamily: "var(--foundersGrotesk-regular);"
};

const DataDownloadForm = () => {
  const formHeading = {
    color: '#860038',
    fontFamily: 'var(--garnett-regular)',
    fontSize: '32px',
    fontWeight: 'normal',
    lineHeight: 'normal',
    paddingBottom: '50px'
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleReceiveUpdatesChange = (event) => {
    setReceiveUpdates(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box position={'sticky'} top={'10%'}>
      <Box bg={'#FCE8F0'} p={'40px 36px'}>
        {/* Form Heading */}
        <Box><Heading as={'h4'} sx={formHeading}>Expertise Delivered Straight to Your Inbox</Heading></Box>
        {/* Download Form */}
        <Box bg={'#fff'} p={'77px 30px 28px'}>
          <form onSubmit={handleSubmit}>
            <Box bg={"#fff"}>
              {/* First Name And Last Name */}
              <Flex justifyContent={'space-between'}>
                  <FormControl id="FirstName" w={'calc(50% - 4px)'}>
                    <Input
                      placeholder="First Name*"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      color={firstName ? "#000000" : "#333333"}
                      {...inputStyles} // Apply input field styles
                    />
                  </FormControl>
                  <FormControl id="LastName" w={'calc(50% - 4px)'}>
                    <Input
                      placeholder="Last Name*"
                      value={lastName}
                      onChange={handleLastNameChange}
                      color={lastName ? "#000000" : "#333333"}
                      {...inputStyles} // Apply input field styles
                    />
                  </FormControl>
              </Flex>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email Address*"
                  value={email}
                  onChange={handleEmailChange}
                  color={email ? "#000000" : "#333333"}
                  {...inputStyles} // Apply input field styles
                />
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Phone*"
                  value={phone}
                  onChange={handlePhoneChange}
                  color={phone ? "#000000" : "#333333"}
                  {...inputStyles} // Apply input field styles
                />
              </FormControl>
              <FormControl>
                <Input
                  type="Text"
                  placeholder="Job Title*"
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                  color={jobTitle ? "#000000" : "#333333"}
                  {...inputStyles} // Apply input field styles
                />
              </FormControl>
              <FormControl>
                <Input
                  type="Text"
                  placeholder="Company Name*"
                  value={companyName}
                  onChange={handleCompanyNameChange}
                  color={companyName ? "#000000" : "#333333"}
                  {...inputStyles} // Apply input field styles
                />
              </FormControl>
              <FormControl>
                <Input
                  type="Text"
                  placeholder="Country*"
                  value={country}
                  onChange={handleCountryChange}
                  color={country ? "#000000" : "#333333"}
                  {...inputStyles} // Apply input field styles
                />
              </FormControl>
              <Box mb={"24px"}>
                <Box display={"flex"} alignItems={"flex-start"}>
                  <Checkbox
                    checked={receiveUpdates}
                    onChange={handleReceiveUpdatesChange}
                    mr={"12px"}
                  />
                  <Text
                    as="p"
                    color={"#333"}
                    mt={"0px"}
                    fontSize={"14px"}
                    fontFamily="var(--foundersGrotesk-regular)"
                    fontWeight={"400"}
                  >
                    By submitting your information to our website you agree to the terms outlined in our Privacy Policy
                  </Text>
                </Box>
              </Box>
              <Box>
                <Button
                  {...buttonStyles} // Apply button styles
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default DataDownloadForm;
