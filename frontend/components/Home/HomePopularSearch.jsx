import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

import { Button } from '@chakra-ui/button';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const HomePopularSearch = () => {
    const bgColor = useColorModeValue("#F9FAFB", "gray.600");
  return (
    <Flex bg={bgColor} justify="center" py="5">
      <Box w="container.xl">
        <Heading
          px="1"
          py="8"
          lineHeight={1.1}
          fontWeight={500}
          fontSize={{ base: "xl", sm: "3xl", lg: "xl" }}
        >
          Most popular categories nearby
        </Heading>

        <SimpleGrid columns={3} spacingY={5}>
          <CustomButton />
          <CustomButton />
          <CustomButton />
          <CustomButton />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

const CustomButton = () => {
    const bgColor = useColorModeValue("#F9FAFB", "gray.600");
  return (
    <Button
      size="md"
      height="60px"
      width="400px"
      border="1px"
      bg={bgColor}
      fontWeight="normal"
      borderColor="gray.200"
      rightIcon={<FaArrowRight />}
    >
      Hair salons near me
    </Button>
  );
};
export default HomePopularSearch;
