import React from 'react';

import Link from 'next/link';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import {
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';

import {
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const AreaStylist = ({ data }) => {

  return (
    <Link href='/detail' >
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={2}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon h={6} w={6} color="white" />
         
            <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              Hair Stylist
            </chakra.h1>
     
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
           DevTow
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
            We take care of all kind hair style. Let us protect your hair for you
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={BsFillBriefcaseFill}
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              $10-$20
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Kumasi
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              abc@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
    </Link>
  );
};

export default AreaStylist;