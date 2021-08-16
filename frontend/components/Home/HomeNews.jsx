import 'aos/dist/aos.css';

import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const HomeNews = () => {

   
    return (
        <div >
            <Flex alignItems="center" justifyContent="center" mt="3rem" overflow="hidden">
                <Box data-aos="fade-up" display="flex" width="fit-content" flexDirection={{ base: 'column', md: "row", lg: "row" }} >
                    <Box display="flex" alignItems="center" pr={{ base: "2", lg: "7" }} justifyContent="flex-end" w={{ base: "22rem", md: "21rem", lg: "26rem" }} h={{ base: "11rem", md: "11rem", lg: "52" }} marginX={{ base: "15px" }} marginY="5" bg="#F1F1F3" bgImg="url(/images/banner.png)" bgSize="contain">
                        <Box w={{ base: "55%", md: "58%", lg: "50%" }}>
                            <Text fontSize="sm">Can't Find what you want?</Text>
                            <Heading fontSize="md" mb="4">USE OUR SEARCH ENGINE TO FILTER YOUR CHOICES</Heading>
                            <Text
                                as={'span'}
                                position={'relative'}
                                fontSize="13"
                                fontWeight="bold"

                                _after={{
                                    content: "''",
                                    width: '100%',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 0.5,
                                    left: 0,
                                    bg: '#ff26004a',
                                }}>
                                Search Now
                            </Text>
                        </Box>
                    </Box>
                    <Box data-aos="fade-up"  display="flex" alignItems="center" pl={{ base: "3", lg: "7" }} justifyContent="flex-start" w={{ base: "22rem", md: "21rem", lg: "26rem" }} h={{ base: "11rem", md: "11rem", lg: "52" }} marginLeft={{ md: '5', base: "15px" }} marginTop={{ md: '5', base: "0" }} bg="#F1F1F3" bgImg="url(/images/banner2.png)" bgSize="contain">
                        <Box w={{ base: "55%", md: "58%", lg: "50%" }}>
                            <Text fontSize="sm">Want a nice haircut?</Text>
                            <Heading fontSize="md" mb="4">FIND THE BEST BARBER WITHIN YOUR AREA</Heading>
                            <Text
                                as={'span'}
                                position={'relative'}
                                fontSize="13"
                                fontWeight="bold"

                                _after={{
                                    content: "''",
                                    width: '100%',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 0.5,
                                    left: 0,
                                    bg: '#ff26004a',
                                }}>
                                Search Now
                            </Text>
                        </Box>
                    </Box>

                </Box>
            </Flex>
        </div>
    )
}

export default HomeNews
