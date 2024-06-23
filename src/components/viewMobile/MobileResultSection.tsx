import React from 'react';
import { v4 as uuid } from 'uuid';
import { styled, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '../base/Button';
import ResultCardBox from '../viewShared/ResultCardBox';
import ResultSkeletonCardBox from '../viewShared/ResultSkeletonCardBox';
import { ResultCard } from '../../domain/ResultCard';

const Title = styled('span')({
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '36px',
});

type MobileResultSectionProps = {
  cards: ResultCard[];
  isLoading: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
};

export default function MobileResultSection(props: MobileResultSectionProps) {
  const {
    cards, isLoading, isLoadingMore, onLoadMore
  } = props;

  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        height: '100%',
        minHeight: '100vh',
        padding: '20px 0',
      }}
    >
      <Stack direction="row" alignItems="center" mb="24px" width="100%">
        <Title>Results</Title>
      </Stack>
      <Stack spacing="28px" mb="39px">
        {isLoading
          ? Array.from(new Array(3)).map(() => (
            <Grid key={uuid()}>
              <ResultSkeletonCardBox />
            </Grid>
          ))
          : cards?.map((card, idx) => (
            <Grid key={uuid()}>
              <ResultCardBox card={card} fakePhotoId={idx} />
            </Grid>
          ))}
        {isLoadingMore
          && Array.from(new Array(3)).map(() => (
            <Grid key={uuid()}>
              <ResultSkeletonCardBox />
            </Grid>
          ))}
      </Stack>
      <Button
        variant="outlined"
        sx={{
          width: '343px',
          marginBottom: '86px',
        }}
        onClick={onLoadMore}
      >
        MORE
      </Button>
    </Stack>
  );
}
