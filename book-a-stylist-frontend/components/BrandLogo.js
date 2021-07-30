import React from 'react';

import {
  Box,
  Image,
} from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        objectFit="fill"
        src="./bas_logo_horizontal.png"
        alt="Bas Long"
      />
    </Box>
  );
}