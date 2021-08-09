import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';

const oldlogin = () => {
    return (
        <Box backgroundColor="#F9FAFB" display="flex" justifyContent="center" alignItems="center" h="100vh" w="100vw">
            <Box maxW="2xlg" borderWidth="5" borderRadius="lg" h="60%" w="900px" bg="white" shadow="lg" >
                <Flex>
                    <Image src="/barbar.jpg" w="50%" h="455px" borderLeftRadius="lg" fit="cover" />
                    <Flex  width="50%" align="start" justifyContent="center">
                        <Box px="10">
                            <Box >
                                <Text fontWeight="semibold" fontSize="xl" isTruncated pt="12" pb="10px" >
                                    Login</Text>
                            </Box>
                            <Box textAlign="left" width="50%" pb="5">
                                <form >
                                    <FormControl>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" placeholder="user@gmail.com" width="350px" />
                                    </FormControl>
                                    <FormControl mt={6}>
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password" placeholder="*******" width="350px" />
                                    </FormControl>
                                    <Button width="full" mt={4} type="submit" width="350px" backgroundColor="pink.400" color="white">                                        Sign In
                                    </Button>
                                </form>

                            </Box>
                            <Divider />
                            <Text fontSize="md" color="pink.400">
                                Create an account
                            </Text>
                        </Box>

                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default oldlogin
