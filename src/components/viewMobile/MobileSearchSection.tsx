import React from 'react';
import { styled, Stack } from '@mui/material';
import Input from '../base/Input';
import Divider from '../base/Divider';
import Slider from '../base/Slider';
import Button from '../base/Button';

const Title = styled('span')({
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '36px',
});

const Count = styled('span')({
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '72px',
  marginRight: '10px',
});

const ResultSubtitle = styled('span')({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
});

type MobileSearchSectionProps = {
  keyword: string;
  isKeywordError: boolean;
  pageSize: number;
  onKeywordChange: (val: string) => void;
  onSliderChange: (val: number) => void;
  onSearch: () => void;
};

export default function MobileSearchSection(props: MobileSearchSectionProps) {
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
      direction="column"
      justifyContent="space-between"
      sx={{
        width: 'calc(100% - 40px)',
        height: 'calc(100vh - 70px - 66px)',
      }}
    >
      <Stack>
        <Title sx={{ marginBottom: '16px' }}>Search</Title>
        <Input
          sx={{ marginBottom: '28px' }}
          placeholder="keyword"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          error={isKeywordError}
        />
        <Title sx={{ marginBottom: '8px' }}># Of Results Per Page</Title>
        <Stack direction="row" alignItems="baseline">
          <Count>{pageSize}</Count>
          <ResultSubtitle>results</ResultSubtitle>
        </Stack>
        <Slider onChange={onSliderChange} />
      </Stack>
      <Stack>
        <Divider />
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            marginTop: '50px',
            marginBottom: '24px',
          }}
          onClick={onSearch}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
}
