import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import { MenuProvider } from '../components/menu/menu_context';
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuProvider>
        <Component {...pageProps} key={router.route} />
      </MenuProvider>
    </ChakraProvider>

  )
}

export default MyApp
