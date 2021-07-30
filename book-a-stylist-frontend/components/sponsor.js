import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const CardDesign = () => {
    return (
        <Box
            w="full"
            h = {170}
            mx="auto"
            w={290}
            px={4}
            py={3}
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            marginRight={{ md: 5, lg: 5 }}
            marginTop={{ base: 5 }}
        >
            <Box>
                <Box display="flex" flexDirection="row" alignItems="center"  >
                    <Box w={100} h={70} rounded="lg" bg="pink.50" marginRight={5} display="flex" justifyContent="center" alignItems="center">
                        <Image src='/ton.svg' alt="Feature Image" height={58} />
                    </Box>
                    <Heading
                        fontSize="lg"
                        fontWeight="bold"
                        mt={2}
                        color={useColorModeValue("gray.800", "white")}
                    >
                        Book A Stylist
              </Heading>
                </Box>
                <Text
                    fontSize="sm"
                    mt={2}
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </Text>
            </Box>
            <Box>
            </Box>
        </Box>
    )
}

const Sponsor = () => {
    return (
        <Box bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={50}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="full">
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }}
                color={useColorModeValue("gray.800", "white")}>What we do</Heading>
            <Text fontSize="sm"

                mt={2}
                color={useColorModeValue("gray.800", "white")}>Getting stylist has to be that easy</Text>

            <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
            >

                <CardDesign />
                <CardDesign />
                <CardDesign />
            </Flex>
        </Box>


    )
}

export default Sponsor


