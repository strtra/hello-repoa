import React from 'react';
import { Divider as MuiDivider, DividerOwnProps } from '@mui/material';

export default function Divider(props: DividerOwnProps) {
  return (
    <MuiDivider
      sx={{
        width: '100%',
        border: '1px solid #FFFFFF',
        margin: '30px 0',
        opacity: '10%',
      }}
      {...props}
    />
  );
}
