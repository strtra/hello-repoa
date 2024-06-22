import React from 'react';
import { useMediaQuery } from '@mui/material';
import theme from '../theme/baseTheme';
import SearchSection from './viewDesktop/SearchSection';
import MobileSearchSection from './viewMobile/MobileSearchSection';

type SearchContainerProps = {
  keyword: string;
  isKeywordError: boolean;
  pageSize: number;
  onKeywordChange: (val: string) => void;
  onSliderChange: (val: number) => void;
  onSearch: () => void;
};

export default function SearchContainer(props: SearchContainerProps) {
  const {
    keyword,
    isKeywordError,
    pageSize,
    onKeywordChange,
    onSliderChange,
    onSearch,
  } = props;
  const isMobileView = useMediaQuery(theme.breakpoints.down('mobile'));

  return isMobileView ? (
    <MobileSearchSection
      isKeywordError={isKeywordError}
      keyword={keyword}
      pageSize={pageSize}
      onKeywordChange={onKeywordChange}
      onSliderChange={onSliderChange}
      onSearch={onSearch}
    />
  ) : (
    <SearchSection
      isKeywordError={isKeywordError}
      keyword={keyword}
      pageSize={pageSize}
      onKeywordChange={onKeywordChange}
      onSliderChange={onSliderChange}
      onSearch={onSearch}
    />
  );
}
