import { AiOutlineMail } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

import {
  Box,
  chakra,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import Logo from '../BrandLogo';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2} textDecoration="underline">
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function HomeFooter() {
    return (
        <Box
            bg="#EFEFEF"
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader><Logo w="6rem" /></ListHeader>
                        <Link href={'#'}><HStack>
                            <GrLocation/>
                            <Text fontSize="sm" >
                                Lagi Road, Kumasi, Ghana.
                            </Text>

                        </HStack></Link>
                        <Link href={'#'}><HStack>
                            <AiOutlineMail/>
                            <Text fontSize="sm" >
                                bookastylist@admin.com
                            </Text>

                        </HStack></Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link fontSize="13" href={'#'}>About Us</Link>
                        <Link fontSize="13" href={'#'}>Blog</Link>
                        <Link fontSize="13" href={'#'}>Careers</Link>
                        <Link fontSize="13" href={'#'}>Contact Us</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link fontSize="13" href={'#'}>Help Center</Link>
                        <Link fontSize="13" href={'#'}>Safety Center</Link>
                        <Link fontSize="13" href={'#'}>Community Guidelines</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link fontSize="13" href={'#'}>Cookies Policy</Link>
                        <Link fontSize="13" href={'#'}>Privacy Policy</Link>
                        <Link fontSize="13" href={'#'}>Terms of Service</Link>
                        <Link fontSize="13" href={'#'}>Law Enforcement</Link>
                    </Stack>


                </SimpleGrid>
            </Container>

            <Box
                bg="white"
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text fontSize="13">Copyright © 2021 BookAStylist all rights reserved.</Text>
                    <Stack direction={'row'} spacing={6}>
                        <MenuItem to="/" className='borderLeftRight' fontWeight="bold" color="black">Home</MenuItem>
                        <MenuItem to="/how" className='borderLeftRight'>Search</MenuItem>
                        <MenuItem to="/faetures" className='borderLeftRight'>Business</MenuItem>
                        <MenuItem to="/how" className='borderLeftRight'>Info</MenuItem>

                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

const MenuItem = ({ children, isLast, to = "/", color, ...rest }) => {
    return (
        <Link
            outlineColor='none'
            outline='none'
            href={to} _hover={{
                color: 'black',
            }}>
            <Text display="block" {...rest} fontWeight='normal' cursor="pointer" fontSize='13px' color={color ?? 'black'} _hover={{
                color: 'pink',

            }}>
                {children}
            </Text>
        </Link>
    );
};
