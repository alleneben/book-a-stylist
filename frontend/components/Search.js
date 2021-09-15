import { Button } from '@chakra-ui/button';
import { SearchIcon } from '@chakra-ui/icons';

const Search = () => {
  return (
    <Button
      rounded={"full"}
      size={"lg"}
      fontWeight={"normal"}
      px={6}
      color="white"
      bg="red.500"
      leftIcon={<SearchIcon h={4} w={4} color={"red.300"} />}
    >
      Book Now
    </Button>
  );
};
// const Search = () => {
//     const [email, setEmail] = useState('');
//     const [state, setState] = useState(
//         'initial'
//     );
//     const [error, setError] = useState(false);

//     return (
//         <Flex
//             minH={'10'}
//             align={'center'}
//             justify={'center'}
//             bg={useColorModeValue('gray.50', 'gray.800')}>
//             <Container
//                 maxW={'lg'}
//                 bg={useColorModeValue('white', 'whiteAlpha.100')}
//                 boxShadow={'xl'}
//                 rounded={'lg'}
//                 p={6}

//                 direction={'column'}>
//                 <Heading
//                     as={'h2'}
//                     fontSize={{ base: 'xl', sm: '2xl' }}
//                     textAlign={'center'}
//                     mb={5}>
//                     Find the professional you need in 1 minute
//         </Heading>
//                 <Stack
//                     direction={{ base: 'column', md: 'row' }}
//                     as={'form'}
//                     spacing={'12px'}
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         setError(false);
//                         setState('submitting');
//                         setTimeout(() => {
//                             if (email === 'fail@example.com') {
//                                 setError(true);
//                                 setState('initial');
//                                 return;
//                             }

//                             setState('success');
//                         }, 1000);
//                     }}>
//                     <FormControl>
//                         <Input
//                             variant={'solid'}
//                             borderWidth={1}
//                             color={'gray.800'}
//                             _placeholder={{
//                                 color: 'gray.400',
//                             }}
//                             borderColor={useColorModeValue('gray.300', 'gray.700')}
//                             id={'email'}
//                             type={'text'}
//                             required
//                             placeholder={'Your Location'}
//                             aria-label={'Your Location'}
//                             value={email}
//                             disabled={state !== 'initial'}
//                             onChange={(e) =>
//                                 setEmail(e.target.value)
//                             }
//                         />
//                     </FormControl>
//                     <FormControl>
//                         <Input
//                             variant={'solid'}
//                             borderWidth={1}
//                             color={'gray.800'}
//                             _placeholder={{
//                                 color: 'gray.400',
//                             }}
//                             borderColor={useColorModeValue('gray.300', 'gray.700')}
//                             // id={'email'}
//                             type={'time'}
//                             required
//                             placeholder={'Time'}
//                             aria-label={'Time'}
//                             // value={email}
//                             disabled={state !== 'initial'}
//                         // onChange={(e) =>
//                         //     setEmail(e.target.value)
//                         // }
//                         />
//                     </FormControl>
//                     <FormControl w={{ base: '100%', md: '40%' }}>
//                         <Button
//                             colorScheme={state === 'success' ? 'green' : 'blue'}
//                             isLoading={state === 'submitting'}
//                             w="100%"
//                             type={state === 'success' ? 'button' : 'submit'}>
//                             {state === 'success' ? <CheckIcon /> : 'Find'}
//                         </Button>
//                     </FormControl>
//                 </Stack>

//             </Container>
//         </Flex>
//     )
// }

export default Search;
