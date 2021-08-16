import { useEffect } from 'react';

import Link from 'next/link';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Stack,
  Text,
} from '@chakra-ui/react';

import { handleHeader } from '../Animation';

const HomeHeader = () => {

    useEffect(() => {
        handleHeader()
    }, [])
    
    return (
        <>
            <Box position="relative" h="md" overflow="hidden">
                <div className="overlay first"></div>
                <div className="overlay second"></div>
                <div className="overlay third"></div>
                <Box bg="#EFEFEF" h="140%" w="100vw" position="absolute">
                    <HeaderSection />
                    <Box position="relative" top="23%" padding="1" paddingX={{ lg: '8' }} alignItems="center" >
                    <Flex display={{ base: "flex", md: "none", lg: "none" }} pl="1rem" alignItems="center" w="100%" mb="1rem" className="divider"  alignContent="center">
                            <Box display="flex" alignItems="center" justifyContent="center"><Heading as="h6" fontSize="md" fontWeight="bold" textTransform="uppercase" >intro</Heading></Box>
                            <Box width="130px" paddingRight="1rem" paddingLeft="3" >
                                <Divider borderColor="black" paddingLeft="10px" orientation="horizontal" />
                            </Box>
                            <Box alignItems="center" justifyContent="center" display="flex" w="7"><Text color='blackAlpha.400'>01</Text></Box>
                        </Flex>
                        <Flex alignItems="center" justifyContent={{ base: "flex-start", lg: "center" }} w={{ base: "100vw", lg: "60vw" }}>
                            <Flex display={{ base: "none", md: "flex", lg: "flex" }} className="divider" direction="column" alignContent="center">
                                <Box w="7" display="flex" alignItems="center" justifyContent="center"><Heading as="h6" fontSize="md" fontWeight="bold" textTransform="uppercase" style={{ textOrientation: 'mixed', writingMode: "vertical-rl" }}>intro</Heading></Box>
                                <Box height="130px" paddingLeft="3" paddingTop="3" paddingBottom="1">
                                    <Divider borderColor="black" paddingLeft="10px" orientation="vertical" />
                                </Box>
                                <Box alignItems="center" justifyContent="center" display="flex" w="7"><Text color='blackAlpha.400'>01</Text></Box>
                            </Flex>
                            <Flex direction="column" pl={{ base: "1rem", lg: "32" }}>
                                <Heading className="textHeading" size="lg">Book a stylist Now!</Heading>
                                <Box className="subheading" w={{ md: "380px", lg: '500px' }} pb="5" pt="5"> <Text fontSize="sm"> Booking a stylist has to be easy, fast and secure.Let us show you a new way of booking a stylist under 1 minutes.
                                    Get started quickly and make your way!</Text></Box>
                                <Text
                                className="layoutKey"
                                    as={'span'}
                                    position={'relative'}
                                    fontSize="13"
                                    fontWeight="bold"
                                    _after={{
                                        content: "''",
                                        width: '45px',
                                        height: '30%',
                                        position: 'absolute',
                                        bottom: 0.5,
                                        left: 0,
                                        bg: '#ff26004a',

                                    }}>
                                    Search
                                </Text>

                            </Flex>
                        </Flex>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomeHeader


const MenuItem = ({ children, isLast, to = "/", color, ...rest }) => {
    return (
        <Link
            outlineColor='none'
            outline='none'
            href={to} _hover={{
                color: 'black',
            }}>
            <Text display="block" {...rest} fontWeight='normal' cursor="pointer" fontSize='13px' color={color ?? 'blackAlpha.400'} _hover={{
                color: 'pink',

            }}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
          
            display={{ base: "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={4}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/" className='borderLeftRight' fontWeight="bold" color="black">Home</MenuItem>
                <MenuItem to="/how" className='borderLeftRight'>Search</MenuItem>
                <MenuItem to="/faetures" className='borderLeftRight'>Business</MenuItem>
                <MenuItem to="/how" className='borderLeftRight'>Info</MenuItem>
            </Stack>
        </Box>
    );
};

const HeaderSection = () => {
    return (
        <Box h="16" w="100%" bg="#FCFCFC" color="black" display="flex" alignItems="center" paddingX={{ base: '5', lg: '0' }} justifyContent={{ base: "space-between", lg: "center" }} position="absolute">
            <Box className="headerImage" position="absolute" w={{ lg: "40%" }} justifyContent="start" align="center" right={{ md: "-10%", lg: "1%", }} top="0" display={{ base: 'none', md: 'flex', lg: "flex" }}>
                <Image src='/images/header.png' w="500px" alt="Picture of the author" />
            </Box>
            <Flex className="navbar" justifyContent="start" w="60%" alignItems="center" h="16">
                <Box position="relative" display="flex" alignItems="center" justifyContent="center">
                    <div className="content">
                        <div className="content__container">
                            <p className="content__container__text">
                                Book
                            </p>

                            <ul className="content__container__list">
                                <li className="content__container__list__item">stylist !</li>
                                <li className="content__container__list__item">quick !</li>
                                <li className="content__container__list__item">secure !</li>
                                <li className="content__container__list__item">Now !</li>
                            </ul>
                        </div>
                    </div>
                </Box>
                <Box   w="50%" h='16' justifyContent="center" alignItems="center" display={{ base: 'none', md: 'none', lg: "flex" }}>
                    <MenuLinks />
                </Box>

            </Flex>
            <Box display={{ base: 'block', md: 'block', lg: "none" }}> <Menu  ><MenuButton variant="outline" as={IconButton} aria-label="Options" icon={<HamburgerIcon />} /></Menu></Box>
        </Box>
    )
}