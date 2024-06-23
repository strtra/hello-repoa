import React from 'react';
import { v4 as uuid } from 'uuid';
import { styled, Stack, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '../base/Button';
import TagCard from '../viewShared/TagCard';
import TagSkeletonCard from '../viewShared/TagSkeletonCard';
import { Tag } from '../../domain/Tag';

const Title = styled('span')({
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '36px',
  margin: '20px 0',
});

type MobileTagSectionProps = {
  tags: Tag[];
  isLoading: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
};

export default function MobileTagSection(props: MobileTagSectionProps) {
  const {
    tags, isLoading, isLoadingMore, onLoadMore
  } = props;

  return (
    <Stack
      sx={{
        width: 'calc(100% - 40px)',
        height: 'calc(100vh - 70px)',
        marginTop: '70px',
      }}
    >
      <Title>Tags</Title>
      <Box bgcolor="#181818" sx={{ flexGrow: 1, marginBottom: '39px' }}>
        <Grid container spacing="24px" columns={2} justifyContent="center">
          {isLoading
            ? Array.from(new Array(6)).map(() => (
              <Grid key={uuid()}>
                <TagSkeletonCard />
              </Grid>
            ))
            : tags?.map((tag) => (
              <Grid key={uuid()}>
                <TagCard tag={tag} />
              </Grid>
            ))}
          {isLoadingMore
            && Array.from(new Array(2)).map(() => (
              <Grid key={uuid()}>
                <TagSkeletonCard />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Stack alignItems="center" padding="20px 0px">
        <Button
          variant="outlined"
          sx={{
            width: '343px',
          }}
          onClick={onLoadMore}
        >
          MORE
        </Button>
      </Stack>
    </Stack>
  );
}
