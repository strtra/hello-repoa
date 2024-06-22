import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import { NAVS } from '../../domain/NavBar';
import NavBarIcon from './NavBarIcon';
import logo from '../../assets/img/logo.svg';

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width="80px"
      height="100%"
      position="fixed"
      left="0px"
      bgcolor="#1B1B1B"
    >
      <Stack direction="column" overflow="auto">
        <Stack
          component="div"
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '80px',
            height: '88px',
            cursor: 'pointer',
          }}
        >
          <img src={logo} alt="logo" />
        </Stack>
        {NAVS?.map((nav) => (
          <NavBarIcon
            key={nav.key}
            label={nav.label}
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
