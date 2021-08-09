import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import AreaStylist from './AreaStylist';

import  useAppContext from '../api/appcontext'

const AreaStylistSection = () => {
    const bgColor = useColorModeValue("#F9FAFB", "gray.600");
    const headingColor = useColorModeValue("gray.800", "white");
    const textColor = useColorModeValue("gray.800", "white");

    const { state } = useAppContext();
    
    if(state.error) return <h1>{ (state.error.message).toString() }</h1>
    if(state.loading) return <h1>Loading....</h1>

    const { providers } = state.data;

    return (
        <Box bg={bgColor}
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
                color={headingColor}>Recommended Stylist</Heading>
            <Text fontSize="sm"

                mt={2}
                color={textColor}>Getting stylist has to be that easy</Text>

            <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
            >
                {
                   providers.map((data, idx) => <AreaStylist key={`area-section-${idx}`} data={data}/> ) 
                }
          
            </Flex>
        </Box>


    )
}

export default AreaStylistSection