import { RiStarSFill } from 'react-icons/ri';

import {
  Box,
  chakra,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function HomeShop() {
    return (
        <>
            <Box  position="relative" background="white" mt="20" overflow="hidden">
                <Flex justifyContent="center">
                    <Flex
                    display={{ base: "none", md: "flex", lg: "flex" }}
                        pl={{ md: "20px", lg: "9rem", "2xl": "11%" }}
                        direction="row"
                        pt="12"
                        alignItems="end"
                        justifyContent={{ base: "flex-start", lg: "center" }}
                    >
                        <Flex className="divider" direction="column" alignContent="center">
                            <Box
                                w="7"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Heading
                                    as="h6"
                                    fontSize="md"
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    style={{
                                        textOrientation: "mixed",
                                        writingMode: "vertical-rl",
                                    }}
                                >
                                    Featured Shop
                                </Heading>
                            </Box>
                            <Box
                                height="130px"
                                paddingLeft="3"
                                paddingTop="3"
                                paddingBottom="1"
                            >
                                <Divider
                                    borderColor="black"
                                    paddingLeft="10px"
                                    orientation="vertical"
                                />
                            </Box>
                            <Box
                                alignItems="center"
                                justifyContent="center"
                                display="flex"
                                w="7"
                            >
                                <Text color="blackAlpha.400">03</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Box
                        pl={{ base: "0", md: "7%" , lg:"9%"}}
                        
                    >
                        <Flex display={{ base: "flex", md: "none", lg: "none" }} alignItems="center" w="100%" mb="1rem" className="divider"  alignContent="center">
                            <Box display="flex" alignItems="center" justifyContent="center"><Heading as="h6" fontSize="md" fontWeight="bold" textTransform="uppercase" >Featured Shop</Heading></Box>
                            <Box width="130px" paddingRight="1rem" paddingLeft="3" >
                                <Divider borderColor="black" paddingLeft="10px" orientation="horizontal" />
                            </Box>
                            <Box alignItems="center" justifyContent="center" display="flex" w="7"><Text color='blackAlpha.400'>03</Text></Box>
                        </Flex>
                        <Cards />
                    </Box>

                </Flex>
            </Box>
        </>
    );
}

const Cards = () => {
    return (
        <section className="shops">
            {tabData.map((tab, index) => (
                <Box
                data-aos="zoom-in"
                    maxW={{base:"80", md:"60",lg:"60"}}
                    mx="auto"
                    bg={useColorModeValue("white", "gray.800")}
                    shadow="sm"
                    rounded="lg"
                    key="index"
                    
                >
                    <Box px={4} py={2}>
                        <Heading as="h6" fontSize="md" fontWeight="bold" color="black">
                            {tab.label}
                        </Heading>
                        <Text
                            mt={1}
                            fontSize="13"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
                            quidem sequi illum facere recusandae voluptatibus
                        </Text>
                    </Box>

                    <Image
                        h={40}
                        w="full"
                        fit="cover"
                        mt={2}
                        src={`${tab.background}`}
                        alt={`${tab.label}`}
                    />

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        px={4}
                        py={2}
                        bg="#efefef38"
                        roundedBottom="lg"
                    >
                        <Flex alignItems="center">
                            <RiStarSFill color="yellow" />
                            <chakra.p color="black"  fontSize="sm">
                                12
                            </chakra.p>
                        </Flex>

                        <chakra.button
                            px={2}
                            py={1}
                           
                            fontSize="xs"
                            color="black"
                            fontWeight="bold"
                            
                            textTransform="uppercase"
                            
                        >
                            View Shop
                        </chakra.button>
                    </Flex>
                </Box>
            ))}
        </section>
    );
};

export default HomeShop;

const tabData = [
    {
        label: "Nice Haircut",
        background:
            "https://images.unsplash.com/photo-1616007733346-e1d450e57b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80",
    },
    {
        label: "Weaves",
        background:
            "https://images.unsplash.com/photo-1599387737838-660b75526801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        label: "Nice Haircu",
        background:
            "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        label: "Nice Haircut",
        background:
            "https://images.unsplash.com/photo-1616007733346-e1d450e57b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80",
    },
    {
        label: "Weaves",
        background:
            "https://images.unsplash.com/photo-1599387737838-660b75526801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        label: "Nice Haircu",
        background:
            "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
];
