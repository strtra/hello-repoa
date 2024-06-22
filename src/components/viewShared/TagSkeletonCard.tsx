import React from 'react';
import { Box, Skeleton } from '@mui/material';

export default function TagSkeletonCard() {
  return (
    <Box
      sx={{
        width: '150px',
        height: '199px',
      }}
    >
      <Skeleton
        variant="rounded"
        height="150px"
        width="150px"
        sx={{ background: 'rgba(255, 255, 255, 0.13)' }}
      />
      <Box sx={{ padding: '10px 0' }}>
        <Skeleton
          variant="text"
          sx={{ fontSize: '14.9px', background: 'rgba(255, 255, 255, 0.13)' }}
        />
        <Skeleton
          variant="text"
          width="60%"
          sx={{
            fontSize: '11.17px',
            background: 'rgba(255, 255, 255, 0.13)',
          }}
        />
      </Box>
    </Box>
  );
}
