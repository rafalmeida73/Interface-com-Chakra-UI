import { Theme, extendTheme } from '@chakra-ui/react';

const customTheme = {
  styles: {
    global: () => ({
      body: {
        bg: 'whiteAlpha.100',
      },
    }),
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
} as unknown as Theme;

export const theme = extendTheme(customTheme);
