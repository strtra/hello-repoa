import React from 'react';
import {
  styled,
  useMediaQuery,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import theme from '../../theme/baseTheme';
import result0 from '../../assets/img/result0.png';
import result1 from '../../assets/img/result1.png';
import result2 from '../../assets/img/result2.png';
import { ResultCard } from '../../domain/ResultCard';

// fake photo mapping
const photoMapping: { [index: string]: string } = {
  0: result0,
  1: result1,
  2: result2,
};

const Title = styled('div')({
  fontWeight: 400,
  fontSize: '14.9px',
  lineHeight: '22.35px',
  letterSpacing: '0.14px',
  color: '#FFFFFF',
});

const Subtitle = styled('div')({
  fontWeight: 400,
  fontSize: '11.17px',
  lineHeight: '16.76px',
  letterSpacing: '0.37px',
  color: '#B2B2B2',
});

type ResultCardProps = {
  card: ResultCard;
  fakePhotoId: number;
};

export default function ResultCardBox(props: ResultCardProps) {
  const { card, fakePhotoId } = props;
  const { name, username } = card;
  const isDesktopView = useMediaQuery(theme.breakpoints.up('mobile'));

  const getFakeImage = () => photoMapping[fakePhotoId % 3];

  return (
    <Card
      sx={{
        width: isDesktopView ? '219px' : '335px',
        background: '#181818',
        boxShadow: 'none',
        borderRadius: '0px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={isDesktopView ? '146px' : '222.67px'}
          image={getFakeImage()}
          alt="result"
        />
        <CardContent sx={{ padding: isDesktopView ? '12px 0' : '16px 0' }}>
          <Title>{name}</Title>
          <Subtitle>{username}</Subtitle>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
