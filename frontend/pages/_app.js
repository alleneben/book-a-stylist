import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import { MenuProvider } from '../components/menu/menu_context';
import { AppProvider } from '../api/appcontext';
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <MenuProvider>
        <Component {...pageProps} />
        </MenuProvider>
      </ChakraProvider>
    </AppProvider>
  )
}

export default MyApp
