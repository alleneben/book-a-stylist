import 'react-multi-carousel/lib/styles.css';

import Link from 'next/link';
import Carousel from 'react-multi-carousel';

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const HomeRecommended = () => {
  const bgColor = useColorModeValue("#F9FAFB", "gray.600");
  return (
    <Flex bg={bgColor} justifyContent="center">
      <Box w="container.xl">
        <Heading
          px="2"
          py="8"
          lineHeight={1.1}
          fontWeight={500}
          fontSize={{ base: "xl", sm: "3xl", lg: "xl" }}
        >
          Recommended
        </Heading>

        <Carousel
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
      
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
        </Carousel>
      </Box>
    </Flex>
  );
};

const RecommendationCard = () => {
  return (
    <Link href="/detail">
      <Flex p={2} w="full" alignItems="center" justifyContent="center">
        <Box w="xs" mx="auto" rounded="lg" overflow="hidden">
          <Box position="relative" h="56">
            <Image
              w="full"
              h={52}
              position="absolute"
              borderRadius="lg"
              fit="cover"
              objectPosition="center"
              src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="avatar"
            />
            <Container
              display="flex"
              position="absolute"
              h="14"
              w="24"
              flexDirection="column"
              align="center"
              justifyContent="center"
              alignItems="center"
              bg="hsl(0deg 0% 0% / 67%)"
              right="0"
              roundedBottomLeft="md"
            >
              <Text color="white">2.2</Text>{" "}
              <Text color="white" fontSize="xs">
                223 review
              </Text>
            </Container>
          </Box>

          {/* <Flex alignItems="flex-end" px={6} py={3} bg="gray.900">
        <Icon h={6} w={6} color="white" />

        <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          Hair Stylist
        </chakra.h1>
      </Flex> */}

          <Box>
            <chakra.h1
              fontSize="md"
              fontWeight="500"
              color={useColorModeValue("gray.800", "white")}
            >
              Styles Barber & Beauty
            </chakra.h1>

            <chakra.p
              py={1}
              fontSize="sm"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              415 N Main St, Euless, TX, 76039
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};


export default HomeRecommended;
