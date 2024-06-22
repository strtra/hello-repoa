import React from 'react';
import { useMediaQuery, Box, Skeleton } from '@mui/material';
import theme from '../../theme/baseTheme';

export default function ResultSkeletonCardBox() {
  const isDesktopView = useMediaQuery(theme.breakpoints.up('mobile'));

  return (
    <Box
      sx={{
        width: isDesktopView ? '219px' : '335px',
      }}
    >
      <Box height="200px">
        <Skeleton
          variant="rounded"
          height={isDesktopView ? '146px' : '222.67px'}
          sx={{ background: 'rgba(255, 255, 255, 0.13)' }}
        />
        <Box sx={{ padding: '12px 0' }}>
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
    </Box>
  );
}
