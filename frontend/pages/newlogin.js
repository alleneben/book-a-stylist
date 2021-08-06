import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

const newlogin = () => {
    return (
        <Flex>
            <Box w="60%" h="100vh" bg="red.100" position="relative" >
                <Image src='/austin.webp' height="100vh" width="100%" objectFit="cover" />
                <Box position="absolute" w="100%" h="100vh" backgroundColor="black" opacity="0.3" top="0" left="0" />
                <Box position="absolute" w="100%" h="100vh" top="0" left="0">
                    <Text fontSize="2xl">Find The Right Stylist</Text>
                </Box>
            </Box>
            <Box w="40%" h="100vh" bg="green.100">
                Right
            </Box>
        </Flex>
    )
}

export default newlogin
