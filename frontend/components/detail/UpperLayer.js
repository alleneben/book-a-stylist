import 'react-image-gallery/styles/css/image-gallery.css';

import {
  FaAddressCard,
  FaStar,
} from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';

import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

function UpperLayer() {
    var _imageGallery;


    const images = [
        {
            thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            original: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            description: 'Nice hair will make you feel better',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',

        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            original: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            description: 'Nice hair will make you feel better',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
        },

        {
            thumbnail: 'https://images.unsplash.com/photo-1481501940778-c8bb63e376c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            original: 'https://images.unsplash.com/photo-1481501940778-c8bb63e376c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            description: 'You deserve the freshness',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
        },
    ];



    function _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', _imageGallery.getCurrentIndex());
    }

    function _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    function _onSlide(index) {
        _resetVideo();
        console.debug('slid to index', index);
    }

    function _onPause(index) {
        console.debug('paused on index', index);
    }

    function _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }


    return (
        <div className="upper__layer__detail">
            <Flex justifyContent="space-between" alignItems="space-between">
                <ImageGallery
                    ref={i => _imageGallery = i}
                    items={images}
                    thumbnailPosition="left"
                    onClick={(e) => _onImageClick.bind(e)}
                    onImageLoad={_onImageLoad}
                    onSlide={(e) => _onSlide.bind(e)}
                    onPause={(e) => _onPause.bind(e)}
                    onScreenChange={(e) => _onScreenChange.bind(e)}
                    showBullets={false}
                    additionalClass="app-image-gallery"
                />
                <Spacer />
                <Box display="flex" flexDirection="column" w="32%" h='100vh'>
                    <Flex>
                        <Box
                            width="100px"
                            height="100px"
                            backgroundImage="url('https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80')"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            borderRadius="50%"
                            backgroundSize="cover"
                            borderColor="pink.500"
                            borderWidth={5}
                        />
                        <Flex direction="column" marginLeft={3} >
                            <Heading fontSize="md" textTransform="uppercase" color="#001833">Kendahl hawak</Heading>
                            <Flex alignContent="center" marginBottom="8px">
                                <Text fontSize="sm" color="#A0AEC0">lorUt amet do fugiat sunt reprehenderit dolore ea adipisicing sit.</Text>
                            </Flex>

                            <Flex marginBottom={8} align='center' >
                                <FaStar color="#D53F8C" />
                                <Text color="pink.500" marginRight={5}> 200</Text>
                                <FaAddressCard color="#D53F8C" />
                                <Text color="pink.500" > Kumasi Ghana</Text>
                            </Flex>
                            <Button
                                size="md"
                                height="48px"
                                width="300px"
                                border="1px"
                                _hover={{ backgroundColor: "pink.500" }}
                                marginBottom={4}
                                bgColor="#001833"
                                color="white"
                            >
                                Book
                            </Button>

                            <Button
                                size="md"
                                height="48px"
                                width="300px"
                                border="1px"
                                borderColor="pink.500"
                                backgroundColor="transparent"
                                _hover={{ backgroundColor: "pink.500", color: "white" }}
                            >
                                Review
                            </Button>
                        </Flex>
                    </Flex>



                </Box>
            </Flex>

        </div>
    )
}

export default UpperLayer


