import '../styles/globals.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';

import { ChakraProvider } from '@chakra-ui/react';

import { AppProvider } from '../api/appcontext';
import { MenuProvider } from '../components/menu/menu_context';
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <AppProvider>
      <ChakraProvider theme={theme} >
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ChakraProvider>
    </AppProvider>
  )
}

export default MyApp
