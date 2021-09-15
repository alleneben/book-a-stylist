import React from 'react';

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

export default function HowItWorks() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      pt={20}
      w="full"
      justifyContent="center"
      alignItems="center"
    
    >
       <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          w="container.xl"
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
             Become a member in 3 steps
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg={useColorModeValue("gray.200", "gray.700")}
          ></Box>
        </SimpleGrid>

    </Flex>
  );
}