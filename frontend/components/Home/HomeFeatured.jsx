import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const HomeFeatured = () => {

    return (
        <div >
            <Box position="relative" background="white" mt="20" overflow="hidden">
                <Flex w="100%">
                    <Flex display={{ base: "none", md: "flex", lg: "flex" }} pl={{ md: "20px", lg: "9rem", "2xl": "11%" }} direction="row" pt="12" alignItems="end" justifyContent={{ base: "flex-start", lg: "center" }} >
                        <Flex className="divider" direction="column" alignContent="center">
                            <Box w="7" display="flex" alignItems="center" justifyContent="center"><Heading as="h6" fontSize="md" fontWeight="bold" textTransform="uppercase" style={{ textOrientation: 'mixed', writingMode: "vertical-rl" }}>Featured Product</Heading></Box>
                            <Box height="130px" paddingLeft="3" paddingTop="3" paddingBottom="1">
                                <Divider borderColor="black" paddingLeft="10px" orientation="vertical" />
                            </Box>
                            <Box alignItems="center" justifyContent="center" display="flex" w="7"><Text color='blackAlpha.400'>02</Text></Box>
                        </Flex>
                    </Flex>
                    <Box pl={{ base: "5%", md: "20%",  }} w={{ base: "100vw", md: "800px", lg: "700px" }}>
                        <Flex display={{ base: "flex", md: "none", lg: "none" }} alignItems="center" w="100%" mb="1rem" className="divider"  alignContent="center">
                            <Box display="flex" alignItems="center" justifyContent="center"><Heading as="h6" fontSize="md" fontWeight="bold" textTransform="uppercase" >Featured Product</Heading></Box>
                            <Box width="130px" paddingRight="1rem" paddingLeft="3" >
                                <Divider borderColor="black" paddingLeft="10px" orientation="horizontal" />
                            </Box>
                            <Box alignItems="center" justifyContent="center" display="flex" w="7"><Text color='blackAlpha.400'>02</Text></Box>
                        </Flex>
                        < HomeTabs />
                    </Box>

                </Flex>
            </Box>
        </div>
    )
}

export default HomeFeatured


const HomeTabs = () => {
    return (
        <Box className="tabs">
            <input type="radio" id="tab1" name="tab-control" defaultChecked />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <ul>
                <li title="Barber"><label htmlFor="tab1" role="button"><span>Barber</span></label></li>
                <li title="Haircut"><label htmlFor="tab2" role="button"><span>Haircut</span></label></li>
                <li title="Weaves"><label htmlFor="tab3" role="button"><span>Weaves</span></label></li>
                <li title="Nails"><label htmlFor="tab4" role="button"><span>Nails</span></label></li>
            </ul>
            <Box className="slider">
                <Box className="indicator"></Box>
            </Box>
            <Box className="tab__content">
                <section>

                    {tabData.map((tab, index) => (

                        <Box data-aos="zoom-in" key="index" >
                            <Box flexDirection="column" display="flex" justifyContent="flex-end" h="64" w={{ base: "40", md: "44", lg: "44" }} px={{ base: "2", md: "0" }} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${tab.background})` }} >
                                {/* <Image src="/barbar.jpg" h="64" width="48" fit="cover" /> */}
                                <Badge display="flex" alignItems="center" flexWrap="nowrap" alignContent="center"
                                    justifyContent="center" ml="4" bg="white" h='4' w="12" >
                                    <Text fontSize="13" color="black">Hair</Text>
                                </Badge>
                                <Box bg="#22222273" h="1" >
                                </Box>
                            </Box>
                            <Box pt="3" pl="3" pb="3">
                                <Heading as="h6" fontSize="md" fontWeight="bold" color="black">{tab.label}</Heading>
                                <Text fontSize="13" color="black">Kumasi, Ghana</Text>
                            </Box>
                        </Box>

                    ))}
                </section>
                <section>
                    <Heading>Haircut</Heading>
                    <Text>Tab 1 content goes here</Text>
                </section>
                <section>
                    <Heading>weaves</Heading>
                    <Text>Tab 1 content goes here</Text>
                </section>
                <section>
                    <Heading>Nail</Heading>
                    <Text>Tab 4 content goes here Hhdhdhhdhdh</Text>
                </section>
            </Box>

        </Box>
    )

}


const tabData = [
    {
        label: 'Nice Haircut',
        background: 'https://images.unsplash.com/photo-1616007733346-e1d450e57b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80'
    },
    {
        label: 'Weaves',
        background: 'https://images.unsplash.com/photo-1599387737838-660b75526801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
        label: 'Nice Haircu',
        background: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
        label: 'Nice Haircut',
        background: 'https://images.unsplash.com/photo-1616007733346-e1d450e57b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=308&q=80'
    },
    {
        label: 'Weaves',
        background: 'https://images.unsplash.com/photo-1599387737838-660b75526801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
        label: 'Nice Haircu',
        background: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
]