import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import AreaStylist from './AreaStylist';

const AreaStylistSection = () => {
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
                color={useColorModeValue("gray.800", "white")}>Recommended Stylist</Heading>
            <Text fontSize="sm"

                mt={2}
                color={useColorModeValue("gray.800", "white")}>Getting stylist has to be that easy</Text>

            <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
            >
                <AreaStylist />
                <AreaStylist />
                <AreaStylist />
          
            </Flex>
        </Box>


    )
}

export default AreaStylistSection