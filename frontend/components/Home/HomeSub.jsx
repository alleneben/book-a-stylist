import React from 'react';

import {
  Box,
  Button,
  chakra,
  GridItem,
  Input,
  SimpleGrid,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

const HomeSub = () => {

    return (
        <Box   px={4} py={5}  marginX="1rem" overflow="hidden" marginTop="2rem">
            <Box
            data-aos="slide-left"
            overflow="hidden"
                pt="2rem"
                px="5"
                w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                textAlign={{ base: "left", md: "center" }}
                mx="auto"
                height={{ base: "300px", md: ' 250px', lg: "200px" }}
                maxW="7xl"
                bgSize="contain"
                bgRepeat="no-repeat"
                bgColor="#EFEFEF"
                bgImg="url(/images/sub.png)"
                w={{ md: "3xl", lg: "2xl" }}
            >
                <chakra.h1
                    mb={3}
                    fontSize={{ base: "md", md: "md" }}
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    color={useColorModeValue("gray.900", "gray.100")}
                    lineHeight="shorter"
                >
                    SUBSCRIBE NOW
                </chakra.h1>
                <chakra.p
                    mb={6}
                    fontSize={{ base: "13", md: "13" }}
                    color="blackAlpha.900"
                    lineHeight="base"
                >
                    Subscribe to our daily Stylist guide. 

                </chakra.p>
                <SimpleGrid
                    as="form"
                    w={{ base: "full", md: 7 / 12 }}
                    columns={{ base: 1, lg: 6 }}
                    spacing={3}
                    pt={1}
                    mx="auto"
                    mb={8}
                >
                    <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
                        <VisuallyHidden>Your Email</VisuallyHidden>
                        <Input
                            mt={0}
                            size="md"
                            bg="white"
                            type="email"
                            placeholder="Enter your email..."
                            required={true}

                            borderRadius= "0"
                        />
                    </GridItem>
                    <Button
                        as={GridItem}
                        w="full"
                        borderRadius="0"
                        colSpan={{ base: "auto", lg: 2 }}
                        size="md"
                        type="submit"
                        bgColor="black"
                        fontSize="13px"
                        color="white"
                        cursor="pointer"
                    >
                        Subscribe
                    </Button>
                </SimpleGrid>

            </Box>
        </Box >
    );
};

export default HomeSub;