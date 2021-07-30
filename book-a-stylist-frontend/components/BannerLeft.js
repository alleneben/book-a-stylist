import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const BannerLeft = () => {
  return (
    <Flex
      flexDirection="column"
      marginLeft={100}
      alignContent="start"
      alignItems="center"
      justifyContent="center"
    
      w={800}
    >
      <div className="text">
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Find your,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              stylist
            </Text>
          </Heading>
        <Text fontSize="md" color="black">
          The result is a new way to book Stylist
        </Text>
      </div>
    </Flex>
  );
};

export default BannerLeft;
