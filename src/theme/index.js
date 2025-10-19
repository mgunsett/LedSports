// src/theme/index.js
import { extendTheme } from '@chakra-ui/react';

const Accordion = {
  baseStyle: {
    container: { border: 'none' },
    button: { _focus: { boxShadow: 'none' } },
    panel: { pt: 2 },
  },
  variants: {
    custom: {
      container: {
        bg: 'blackAlpha.700',
        borderRadius: 'md', 
        icon: { color: 'orange.400' },
        w: '550px',
      },
      button: {
        px: 4,
        py: 3,
      },
      panel: {
        textAlign: 'left',
        px: 4,
        pb: 6,
        color: 'rgba(255, 255, 255, 0.75)',
        borderBottom: '1px ',
        borderColor: 'whiteAlpha.600',
        borderRadius: 'sm',
      },
    },
  },
  defaultProps: {
    variant: 'flushed',
  },
};

const Drawer = {
  variants: {
    custom: {
      overlay: {
        bg: 'blackAlpha.800',
        zIndex: '100',
      },
      dialog: {
        bg: 'white',
      },
    },
  },
};

const theme = extendTheme({
  components: { Accordion, Drawer },
});

export default theme;