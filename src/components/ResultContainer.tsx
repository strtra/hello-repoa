import React from 'react';
import { useMediaQuery } from '@mui/material';
import theme from '../theme/baseTheme';
import ResultSection from './viewDesktop/ResultSection';
import MobileResultSection from './viewMobile/MobileResultSection';
import { ResultCard } from '../domain/ResultCard';

type ResultContainerProps = {
  cards: ResultCard[];
  isLoading: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
  onGoBack: () => void;
};

export default function ResultContainer(props: ResultContainerProps) {
  const {
    cards, isLoading, isLoadingMore, onLoadMore, onGoBack
  } = props;
  const isMobileView = useMediaQuery(theme.breakpoints.down('mobile'));

  return isMobileView ? (
    <MobileResultSection
      cards={cards}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      onLoadMore={onLoadMore}
    />
  ) : (
    <ResultSection
      cards={cards}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      onLoadMore={onLoadMore}
      onGoBack={onGoBack}
    />
  );
}
