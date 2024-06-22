import { createTheme } from '@mui/material';
import '@fontsource/ubuntu';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: false;
    laptop: false;
    desktop: true;
  }
}

const baseTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 376,
      desktop: 1440,
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
});

export default baseTheme;
