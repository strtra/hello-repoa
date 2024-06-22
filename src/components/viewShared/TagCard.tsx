import React from 'react';
import {
  styled,
  CardActionArea,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { Tag } from '../../domain/Tag';

const TagBox = styled('span')({
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '36px',
  border: '4px solid #FFFFFF',
  borderRadius: '8px',
  padding: '3px 10px',
  color: '#FFFFFF',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: 'fit-content',
  maxWidth: '100px',
});

const Title = styled('div')({
  fontWeight: 400,
  fontSize: '14.9px',
  lineHeight: '22.35px',
  letterSpacing: '0.14px',
  color: '#FFFFFF',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '150px',
});

const Subtitle = styled('div')({
  fontWeight: 400,
  fontSize: '11.17px',
  lineHeight: '16.76px',
  letterSpacing: '0.37px',
  color: '#B2B2B2',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '150px',
});

type TagCardProps = {
  tag: Tag;
};

export default function TagCard(props: TagCardProps) {
  const { tag } = props;
  const { name, count } = tag;

  return (
    <Card
      sx={{
        width: '150px',
        height: '199px',
        background: '#181818',
        boxShadow: 'none',
        borderRadius: '8px',
      }}
    >
      <CardActionArea>
        <Stack
          justifyContent="flex-end"
          sx={{
            width: '150px',
            height: '150px',
            padding: '14px 10px',
            borderRadius: '8px',
            background: 'rgba(38,38,38,255)',
            boxSizing: 'border-box',
          }}
        >
          <TagBox>{name}</TagBox>
        </Stack>
        <CardContent sx={{ padding: '10px 0' }}>
          <Title>{name}</Title>
          <Subtitle>{`${count} Results`}</Subtitle>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
