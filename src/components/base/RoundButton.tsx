import React from 'react';
import {
  createTheme,
  ThemeProvider,
  Button as MuiButton,
  ButtonOwnProps,
} from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid #FFFFFF',
          borderRadius: '20px',
          height: '29px',
          padding: '8px 10px',
          width: 'fit-content',
          textTransform: 'none',

          '&:hover': {
            border: '1px solid #FFFFFF',
          },
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: '#121212',
            color: '#FFFFFF',

            '&:hover': {
              background: '#FFFFFF',
              color: '#121212',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            background: '#FFFFFF',
            color: '#121212',

            '&:hover': {
              backgroundColor: '#121212',
              color: '#FFFFFF',
            },
          },
        },
      ],
    },
  },
});

export default function RoundButton(props: ButtonOwnProps) {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...props} />
    </ThemeProvider>
  );
}
