import React from 'react';
import {
  createTheme,
  ThemeProvider,
  Button as MuiButton,
  ButtonProps,
} from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Ubuntu',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '14px',
        },
        outlined: {
          background: '#FFFFFF',
          color: '#121212',
          border: '1px solid #FFFFFF',
          height: '40px',
          padding: '13px 16px',

          '&:hover': {
            backgroundColor: '#121212',
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
          },
        },
      },
    },
  },
});

export default function Button(props: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...props} />
    </ThemeProvider>
  );
}
