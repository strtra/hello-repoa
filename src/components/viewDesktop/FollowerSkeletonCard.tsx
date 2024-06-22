import React from 'react';
import { Stack, Skeleton } from '@mui/material';

export default function FollowerSkeletonCard() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: '343px',
        height: '45px',
      }}
    >
      <Skeleton
        variant="rounded"
        height="40px"
        width="40px"
        sx={{ background: 'rgba(255, 255, 255, 0.13)', marginRight: '15px' }}
      />
      <Stack component="div" alignItems="flex-start" width="288px">
        <Skeleton
          width="100%"
          variant="text"
          sx={{ fontSize: '16px', background: 'rgba(255, 255, 255, 0.13)' }}
        />
        <Skeleton
          variant="text"
          width="60%"
          sx={{
            fontSize: '14px',
            background: 'rgba(255, 255, 255, 0.13)',
          }}
        />
      </Stack>
    </Stack>
  );
}
