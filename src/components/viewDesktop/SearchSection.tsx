import React from 'react';
import { styled, Stack, Box } from '@mui/material';
import Input from '../base/Input';
import Divider from '../base/Divider';
import Slider from '../base/Slider';
import Button from '../base/Button';

const Title = styled('span')({
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '36px',
});

const Count = styled('span')({
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '72px',
  marginRight: '10px',
});

const ResultSubtitle = styled('span')({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

type SearchSectionProps = {
  keyword: string;
  isKeywordError: boolean;
  pageSize: number;
  onKeywordChange: (val: string) => void;
  onSliderChange: (val: number) => void;
  onSearch: () => void;
};

export default function SearchSection(props: SearchSectionProps) {
  const {
    keyword,
    isKeywordError,
    pageSize,
    onKeywordChange,
    onSliderChange,
    onSearch,
  } = props;

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '725px',
        height: 'calc(100vh - 54px)',
        paddingTop: '54px',
      }}
      justifyContent="space-between"
    >
      <Stack>
        <Title sx={{ marginBottom: '20px' }}>Search</Title>
        <Input
          placeholder="keyword"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          error={isKeywordError}
        />
        <Divider />
        <Title sx={{ marginBottom: '12px' }}># Of Results Per Page</Title>
        <Stack direction="row" alignItems="baseline">
          <Count>{pageSize}</Count>
          <ResultSubtitle>results</ResultSubtitle>
        </Stack>
        <Slider onChange={onSliderChange} />
        <Divider />
      </Stack>
      <Box>
        <Button
          variant="outlined"
          sx={{
            width: '343px',
            marginBottom: '14px',
          }}
          onClick={onSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}
