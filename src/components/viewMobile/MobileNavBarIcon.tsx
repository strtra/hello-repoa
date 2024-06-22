import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

type MobileNavBarIconProps = {
  iconUrl: string;
  activeIconUrl: string;
  isActive: boolean;
  linkTo: string;
};

export default function MobileNavBarIcon(props: MobileNavBarIconProps) {
  const {
    iconUrl, activeIconUrl, isActive, linkTo
  } = props;

  return (
    <NavLink to={linkTo}>
      <Stack
        component="div"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          img: { width: '24px', height: '24px' },
        }}
      >
        <img src={isActive ? activeIconUrl : iconUrl} alt="icon" />
      </Stack>
    </NavLink>
  );
}
