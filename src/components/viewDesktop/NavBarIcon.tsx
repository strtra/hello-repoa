import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

type NavBarIconProps = {
  label: string;
  iconUrl: string;
  activeIconUrl: string;
  isActive: boolean;
  linkTo: string;
};

export default function NavBarIcon(props: NavBarIconProps) {
  const {
    label, iconUrl, activeIconUrl, isActive, linkTo
  } = props;

  return (
    <NavLink to={linkTo} style={{ textDecoration: 'none' }}>
      <Stack
        component="div"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: '11px 0',
          cursor: 'pointer',
          img: { width: '24px', height: '24px' },
          span: {
            visibility: isActive ? 'visible' : 'hidden',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
            letterSpacing: '0.4px',
            color: '#FFFFFF',
          },
        }}
      >
        <img src={isActive ? activeIconUrl : iconUrl} alt="icon" />
        <span>{label}</span>
      </Stack>
    </NavLink>
  );
}
