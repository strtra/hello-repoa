import React from 'react';
import { v4 as uuid } from 'uuid';
import { styled, Stack, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '../base/Button';
import TagCard from '../viewShared/TagCard';
import TagSkeletonCard from '../viewShared/TagSkeletonCard';
import { Tag } from '../../domain/Tag';

const Title = styled('span')({
  fontSize: '30px',
  fontWeight: 400,
  lineHeight: '45px',
  letterSpacing: '0.25px',
  marginBottom: '24px',
});

type TagSectionProps = {
  tags: Tag[];
  isLoading: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
};

export default function TagSection(props: TagSectionProps) {
  const {
    tags, isLoading, isLoadingMore, onLoadMore
  } = props;

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '846px',
        height: '100%',
        minHeight: '100vh',
        paddingTop: '80px',
      }}
    >
      <Title>Tags</Title>
      <Box bgcolor="#181818" sx={{ flexGrow: 1, marginBottom: '39px' }}>
        <Grid container spacing="24px" rowSpacing="36px" columns={12}>
          {isLoading
            ? Array.from(new Array(15)).map(() => (
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
            && Array.from(new Array(5)).map(() => (
              <Grid key={uuid()}>
                <TagSkeletonCard />
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
