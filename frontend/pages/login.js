import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';

import {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { FcGoogle } from 'react-icons/fc';

import {
  EmailIcon,
  LockIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';

import PageTransition from '../components/Hoc/withTransition';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const login = () => {
    // This is all the state use for managing the app, mainly userInfo
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        formErrors: { email: "", password: "" },
        emailValid: false,
        passwordValid: false,
        formValid: false,
        fieldNameEmail: "email",
        fieldNamePassword: "password"
    });

    // This allow us to show the user password or hide, respectively
    const [show, setShow] = useState(false);
    // This is the handler to maintain it
    const handleClick = () => setShow(!show);

    // This handler manages all our value on change. We uses the target name and pass the it cureent value to the state
    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({
            ...userInfo,
            [e.target.name]: value
        });
    };

    // Sample validator function. You can add more here if you find them useful
    const validateField = (fieldName, value) => {
        // We set our variable to current userInfo
        let fieldValidationErrors = userInfo.formErrors;
        let emailValid = userInfo.emailValid;
        let passwordValid = userInfo.passwordValid;

        // This switch allow us to target the current active field to parse the validation as needed
        switch (fieldName) {
            case "email":
                emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
                fieldValidationErrors.email = emailValid ? "" : " is invalid";
                break;
            case "password":
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? "" : " is too short";
                break;
            default:
                break;
        }
        // This set the values gotten from the switch statement
        setUserInfo({
            ...userInfo,
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            formValid: userInfo.emailValid && userInfo.passwordValid
        });
    };

    // effect to update the state when ever the email validation is in progress
    useEffect(() => {
        validateField(userInfo.fieldNameEmail, userInfo.email);
    }, [userInfo.email, userInfo.emailValid]);

    // effect to update the state when ever the password validation is in progress
    useEffect(() => {
        validateField(userInfo.fieldNamePassword, userInfo.password);
    }, [userInfo.password, userInfo.passwordValid]);

    return (
        <PageTransition>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="preload"
                    href="/fonts/Tisa/TisaSansPro-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Tisa/TisaSansPro-Medium.ttf"
                    as="font"
                    crossOrigin=""
                />
                <meta charSet="utf-8" />
                <title>BasFrontEnd</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex>
                <Box w="60%" h="100vh" bg="white" position="relative">
                    <AutoplaySlider
                        play={true}
                        bullets={false}
                        animation="openAnimation"
                        organicArrows={false}
                        fillParent={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={7000} >
                        <div>
                            <Image
                                src="/post.jpg"
                                height="100vh"
                                width="100%"
                                objectFit="cover"
                            />
                        </div>

                        <div>
                            <Image
                                src="/post.jpg"
                                height="100vh"
                                width="100%"
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <Image
                                src="/banner.jpeg"
                                height="100vh"
                                width="100%"
                                objectFit="cover"
                            />
                        </div>
                        
                    </AutoplaySlider>
                    <Box
                        position="absolute"
                        w="100%"
                        h="100vh"
                        backgroundColor="#0000084f"
                        top="0"
                        left="0"
                    />
                    <Box
                        position="absolute"

                        height="40%"
                        bottom="0"
                        paddingLeft="16"
                        justifyContent="center"
                    >
                        <Image src="./bas_logo_horizontal.png" width="28" paddingBottom="5" />

                        <Text fontSize="25px" color="white" fontWeight="500">
                            Find The Right And Amazing Stylist
                        </Text>
                        <Text fontSize="25px" color="white" paddingBottom="10" fontWeight="500">
                            Anywhere, Anytime.
                        </Text>

                        <Box className="editor" textAlign="center" color="white">
                            Sign up
                        </Box>


                    </Box>
                </Box>
                <Box w="40%" h="100vh" bg="white" >
                    <Flex flexDirection="column" alignItems="center" align="start" h="100vh">
                        <Image src="./bas_logo_horizontal.png" width="28" paddingBottom="5" pt="7" />

                        <Text fontWeight="300" fontSize="2xl" isTruncated pt="7" >
                            Login to your account</Text>
                        <Stack spacing={7} pt="7" >
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<EmailIcon color="gray.300" pt={2} boxSize="7" />}
                                />
                                <Input
                                    value={userInfo.email}
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    width={380}
                                    height="48px"
                                    errorBorderColor="red.300"
                                    _disabled={{ borderColor: "grey.500" }}
                                    onChange={(event) => handleChange(event)}
                                />
                            </InputGroup>

                            <InputGroup width={380} height="48px"  >
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<LockIcon color="gray.300" pt={2} boxSize="7" />}
                                />
                                <Input
                                    value={userInfo.password}
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder="Password"
                                    width={380}
                                    _disabled={{ borderColor: "gray.500" }}
                                    errorBorderColor="red.300"
                                    name="password"
                                    height="48px"
                                    ringColor="gray.50"


                                    onChange={(event) => handleChange(event)}
                                />
                                <InputRightElement width="4.5rem" pt={2}>
                                    <Button h="2.35rem" size="sm" onClick={handleClick} >
                                        {show ? "Hides" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button
                                size="md"
                                height="48px"
                                color="white"
                                width={380}
                                _hover={{ backgroundColor: "blue.300", borderColor: "blue.300" }}
                                border="2px"
                                borderColor="blue.500"
                                bg="blue.500"
                                ringColor="gray.50"

                            >
                                Login
                            </Button>
                        </Stack>
                        <Text color="gray.500" pt="7">OR</Text>
                        <Button
                            size="md"
                            height="48px"
                            fontWeight="400"
                            color="black"
                            width={380}
                            border="2px"
                            pl="5"
                            borderColor="gray.50"
                            bg="transparent"
                            ringColor="gray.50"

                            mt="7"
                            leftIcon={<FcGoogle size={25} />}

                        >
                            Continue with Google
                        </Button>
                        <Text pt="7" color="blue.500">Don't have an account? Sign up</Text>
                        <Spacer />
                        <Box bg="#fdfbfb" w='100%' h="80px" >
                            <Flex justifyContent="center" alignItems="center" h="80px" >
                                <LockIcon color="gray.300" boxSize="5" />
                                <Text color="blue" pt='1' pl="3">Privacy Policy</Text>
                                <Text color="blue" pt='1' pl='3'>Terms of use</Text>

                            </Flex>
                        </Box>
                    </Flex>

                </Box>
               
            </Flex>
        </PageTransition>

    );
};

export default login;

