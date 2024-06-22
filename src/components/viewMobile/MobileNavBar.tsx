import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import { MOBILE_NAVS } from '../../domain/NavBar';
import MobileNavBarIcon from './MobileNavBarIcon';
import AppPaths from '../../AppRoutes';

export default function MobileNavBar() {
  const { pathname } = useLocation();

  if (pathname !== AppPaths.HOME) {
    return null;
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="66px"
      width="100%"
      position="fixed"
      bottom="0px"
      bgcolor="#1B1B1B"
      zIndex="10"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="98px"
      >
        {MOBILE_NAVS?.map((nav) => (
          <MobileNavBarIcon
            key={nav.key}
            iconUrl={nav.iconUrl}
            activeIconUrl={nav.activeIconUrl}
            isActive={nav.linkTo === pathname}
            linkTo={nav.linkTo}
          />
        ))}
      </Stack>
    </Stack>
  );
}
