import React from 'react';
import {
  createTheme,
  ThemeProvider,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          borderRadius: '6px',
          height: '60px',
          width: '100%',
          maxWidth: '725px',

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF9B33',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '3px solid #FF9B33',
          },
          '& ::placeholder': {
            fontFamily: 'Ubuntu',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '21px',
            letterSpacing: '0.25px',
          },
        },
        notchedOutline: {
          border: '3px solid #FFFFFF80',
        },
      },
    },
  },
});

export default function Input(props: OutlinedInputProps) {
  return (
    <ThemeProvider theme={theme}>
      <OutlinedInput {...props} />
    </ThemeProvider>
  );
}
