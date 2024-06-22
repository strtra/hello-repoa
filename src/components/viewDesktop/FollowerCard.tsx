import React from 'react';
import { styled, Stack } from '@mui/material';
import follower0 from '../../assets/img/follower0.png';
import follower1 from '../../assets/img/follower1.png';
import follower2 from '../../assets/img/follower2.png';
import follower3 from '../../assets/img/follower3.png';
import follower4 from '../../assets/img/follower4.png';
import follower5 from '../../assets/img/follower5.png';
import follower6 from '../../assets/img/follower6.png';
import follower7 from '../../assets/img/follower7.png';
import RoundButton from '../base/RoundButton';
import { Follower } from '../../domain/Follower';

// fake photo mapping
const photoMapping: { [index: string]: string } = {
  0: follower0,
  1: follower1,
  2: follower2,
  3: follower3,
  4: follower4,
  5: follower5,
  6: follower6,
  7: follower7,
};

const Title = styled('div')({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

const Subtitle = styled('div')({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '21px',
  letterSpacing: '0.25px',
  opacity: '50%',
});

type FollowerCardProps = {
  follower: Follower;
  fakePhotoId: number;
};

export default function FollowerCard(props: FollowerCardProps) {
  const { follower, fakePhotoId } = props;
  const { name, username, isFollowing } = follower;

  const getFakeImage = () => photoMapping[fakePhotoId % 8];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: '343px',
        height: '45px',
        img: { width: '40px', height: '40px', marginRight: '15px' },
      }}
    >
      <Stack direction="row" alignItems="center">
        <img src={getFakeImage()} alt="profile" />
        <Stack component="div" alignItems="flex-start">
          <Title>{name}</Title>
          <Subtitle>{`@${username}`}</Subtitle>
        </Stack>
      </Stack>
      {isFollowing ? (
        <RoundButton variant="contained">Following</RoundButton>
      ) : (
        <RoundButton variant="outlined">Follow</RoundButton>
      )}
    </Stack>
  );
}
