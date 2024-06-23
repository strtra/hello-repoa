import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  styled, useMediaQuery, Stack, Box
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '../base/Button';
import ResultCardBox from '../viewShared/ResultCardBox';
import ResultSkeletonCardBox from '../viewShared/ResultSkeletonCardBox';
import arrowIcon from '../../assets/img/arrow.svg';
import { ResultCard } from '../../domain/ResultCard';

const Title = styled('span')({
  fontSize: '30px',
  fontWeight: 400,
  lineHeight: '45px',
  letterSpacing: '0.25px',
});

type ResultSectionProps = {
  cards: ResultCard[];
  isLoading: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
  onGoBack: () => void;
};

export default function ResultSection(props: ResultSectionProps) {
  const {
    cards, isLoading, isLoadingMore, onLoadMore, onGoBack
  } = props;
  const isAdjustArrowPos = useMediaQuery('(min-width:880px)');

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '725px',
        height: '100%',
        paddingTop: '94px',
      }}
    >
      <Stack direction="row" alignItems="center" mb="22px" position="relative">
        <Box
          sx={{
            marginRight: '15px',
            position: isAdjustArrowPos ? 'absolute' : 'relative',
            left: isAdjustArrowPos ? '-42px' : '0',
            cursor: 'pointer',
          }}
          onClick={onGoBack}
        >
          <img src={arrowIcon} alt="arrow" width="26px" height="26px" />
        </Box>
        <Title sx={{ marginLeft: '4px' }}>Results</Title>
      </Stack>
      <Box sx={{ flexGrow: 1, marginBottom: '30px' }}>
        <Grid container spacing="34px" rowSpacing="29px" columns={12}>
          {isLoading
            ? Array.from(new Array(9)).map(() => (
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
            && Array.from(new Array(6)).map(() => (
              <Grid key={uuid()}>
                <ResultSkeletonCardBox />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Button
        variant="outlined"
        sx={{
          width: '343px',
          marginBottom: '20px',
        }}
        onClick={onLoadMore}
      >
        MORE
      </Button>
    </Stack>
  );
}
