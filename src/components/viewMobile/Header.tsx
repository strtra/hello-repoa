import React from 'react';
import { Stack, styled } from '@mui/material';
import logo from '../../assets/img/logo.svg';
import arrowIcon from '../../assets/img/arrow.svg';

const Title = styled('span')({
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '36px',
  color: '#FFFFFF',
});

type HeaderProps = {
  isShowLogo: boolean;
  onGoBack: () => void;
};

export default function Header(props: HeaderProps) {
  const { isShowLogo, onGoBack } = props;

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      height="70px"
      width="100%"
      position="fixed"
      top="0px"
      padding="17px 19px"
      boxSizing="border-box"
      bgcolor="#1B1B1B"
      zIndex="10"
    >
      {isShowLogo ? (
        <img src={logo} alt="logo" />
      ) : (
        <Stack
          component="div"
          direction="row"
          alignItems="center"
          sx={{ cursor: 'pointer' }}
          onClick={onGoBack}
        >
          <img
            src={arrowIcon}
            alt="arrow"
            width="26px"
            height="26px"
            style={{
              marginRight: '13px',
            }}
          />
          <Title>Home Page</Title>
        </Stack>
      )}
    </Stack>
  );
}
