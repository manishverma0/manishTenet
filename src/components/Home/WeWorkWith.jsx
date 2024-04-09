import React from "react";
import { Box, Container, Text, Image } from "@chakra-ui/react";

import industries1 from "../../assets/Home/industriesLogo/1.svg";
import industries2 from "../../assets/Home/industriesLogo/2.svg";
import industries3 from "../../assets/Home/industriesLogo/3.svg";
import industries4 from "../../assets/Home/industriesLogo/4.svg";
import industries5 from "../../assets/Home/industriesLogo/5.svg";
import industries6 from "../../assets/Home/industriesLogo/6.svg";
import industries7 from "../../assets/Home/industriesLogo/7.svg";
import industries8 from "../../assets/Home/industriesLogo/8.svg";
import industries9 from "../../assets/Home/industriesLogo/9.svg";
import industries10 from "../../assets/Home/industriesLogo/10.svg";
import industries11 from "../../assets/Home/industriesLogo/11.svg";
import industries12 from "../../assets/Home/industriesLogo/12.svg";
import industries13 from "../../assets/Home/industriesLogo/13.svg";
import industries14 from "../../assets/Home/industriesLogo/14.svg";
import industries15 from "../../assets/Home/industriesLogo/15.svg";

const WeWorkWith = () => {
    return (
        <Box
            width={["100%", "100%", "100%", "100%", "100%", "100%"]}
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            margin={["0 auto"]}
            paddingTop={["20px", "20px", "20px", "45px", "60px", "80px"]}
        >
            <Container
                maxWidth={["90%", "90%", "90%", "90%", "90%", "83%"]}
            >
                <Box mb={["8px", "8px", "8px", "8px", "8px", "8px"]}>
                    <Box
                        display={["block", "block", "block", "flex", "flex", "flex"]}
                        justifyContent="space-between"
                    >
                        <Box pb={22}>
                            <Box display={["block", "block", "flex", "flex", "flex", "flex"]}>
                                <Text
                                    as="p"
                                    fontSize={["32px", "32px", "38px", "40px", "48px", "48px"]}
                                    fontFamily="var(--garnett-regular);"
                                >
                                    <span style={{ color: "#B882FF", fontFamily: "var(--garnett-semibold)" }}>
                                        Industries </span>we are
                                </Text>
                            </Box>
                            <Text
                                as="p"
                                fontSize={["30px", "35px", "40px", "48px", "48px", "48px"]}
                                fontFamily="var(--garnett-regular);"
                            >
                                working with.
                            </Text>
                        </Box>
                        <Text
                            as="p"
                            m="0px"
                            fontSize={["14px", "16px", "18px", "20px", "20px", "20px"]}
                            maxW={["90%", "90%", "50%", "31%", "31%", "31%"]}
                            color="#333333"
                            fontFamily=" var(--foundersGrotesk-regular);"
                            lineHeight={["normal"]}
                        >
                            Explore our carefully curated solutions by outcomes that are
                            tailored for your needs. Explore our carefully curated solutions
                            by outcomes that are tailored for your needs.{" "}
                        </Text>
                    </Box>
                </Box>

                {/* Work With Industries logos */}
                <Box bg="#F5F5F5" p={["43px 5px", "43px 5px", "43px 5px", "77px 10px"]}>
                    {/* Wrapper */}
                    <Box display={["block", "block", "block", "flex"]}>
                        {/* Special Industries */}

                        <Box
                            w={["100%", "100%", "100%", "22%"]}
                            display="grid"
                            gridTemplateColumns={[
                                "repeat(3,1fr)",
                                "repeat(3,1fr)",
                                "repeat(3,1fr)",
                                "repeat(1,1fr)",
                            ]}
                            rowGap={10}
                            pb={["30px", "30px", "30px", "0"]}
                            mb={["30px", "30px", "30px", "0"]}
                            justifyItems="center"
                            borderRight={{
                                base: "none",
                                sm: "none",
                                md: "none",
                                lg: "1px solid #BABABA",
                            }}
                            borderBottom={{
                                base: "1px solid #BABABA",
                                md: "1px solid #BABABA",
                                lg: "none",
                            }}
                            borderColor="#BABABA"
                            position="relative"
                        >
                            <Image
                                h="76px"
                                objectFit="contain"
                                src={industries1}
                                alt="industries 1"
                            />
                            <Image
                                h="76px"
                                objectFit="contain"
                                src={industries2}
                                alt="industries 2"
                            />
                            <Image
                                h="76px"
                                objectFit="contain"
                                src={industries3}
                                alt="industries 3"
                            />
                        </Box>
                        {/* All Industries */}
                        <Box
                            w={["100%", "100%", "100%", "78%"]}
                            display="flex"
                            alignItems="center"
                        >
                            <Box
                                display="grid"
                                gridTemplateColumns={[
                                    "repeat(3,1fr)",
                                    "repeat(3,1fr)",
                                    "repeat(3,1fr)",
                                    "repeat(4,1fr)",
                                ]}
                                rowGap={10}
                                justifyItems="center"
                                w="100%"
                            >
                                {[
                                    industries4,
                                    industries5,
                                    industries6,
                                    industries7,
                                    industries8,
                                    industries9,
                                    industries10,
                                    industries11,
                                    industries12,
                                    industries13,
                                    industries14,
                                    industries15,
                                ].map((src, index) => (
                                    <Image
                                        h="76px"
                                        objectFit="contain"
                                        key={index}
                                        src={src}
                                        alt={`industries ${index + 5}`}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
export default WeWorkWith;
