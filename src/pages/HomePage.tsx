import React, { useState } from 'react';
import { useMediaQuery, Stack, Box } from '@mui/material';
import theme from '../theme/baseTheme';
import FollowerSection from '../components/viewDesktop/FollowerSection';
import SearchContainer from '../components/SearchContainer';
import ResultContainer from '../components/ResultContainer';
import { searchResultCards } from '../actions/fetchActions';
import { ResultCard } from '../domain/ResultCard';
import Header from '../components/viewMobile/Header';
import MobileNavBar from '../components/viewMobile/MobileNavBar';
import debouncedEffect from '../hooks/debouncedEffect';

enum PageView {
  Search,
  Result,
}

export default function HomePage() {
  const [view, setView] = useState<PageView>(PageView.Search);
  const [keyword, setKeyword] = useState('');
  const [isKeywordError, setIsKeywordError] = useState(false);
  const [pageSize, setPageSize] = useState(30);
  const [cards, setCards] = useState<ResultCard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const isMobileView = useMediaQuery(theme.breakpoints.down('mobile'));
  const isExpandView = useMediaQuery(theme.breakpoints.up('desktop'));

  const getViewWidth = () => {
    if (isMobileView) {
      return '100vw';
    }

    if (isExpandView) {
      return 'calc(100vw - 80px - 375px)';
    }
    return 'calc(100vw - 80px)';
  };

  const onKeywordChange = (val: string) => {
    setKeyword(val);

    if (keyword.trim() !== '') {
      setIsKeywordError(false);
    }
  };

  const onSliderChange = (val: number) => setPageSize(val);

  const onSearch = () => {
    if (keyword.trim() === '') {
      setIsKeywordError(true);
      return;
    }

    setView(PageView.Result);
    setIsLoading(true);
    searchResultCards(keyword, pageSize, currentPage, currentTotal).then(
      (result) => {
        const { data, page, total } = result;
        setCards(data);
        setCurrentPage(page + 1);
        setCurrentTotal(total);
        setIsLoading(false);
      }
    );
  };

  const onLoadMore = debouncedEffect(() => {
    setIsLoadingMore(true);
    searchResultCards(keyword, pageSize, currentPage, currentTotal).then(
      (result) => {
        const { data, page } = result;
        setCards([...cards, ...data]);
        setCurrentPage(page + 1);
        setIsLoadingMore(false);
      }
    );
  }, 1000);

  const onGoBack = () => {
    setView(PageView.Search);
    setKeyword('');
    setCards([]);
    setCurrentPage(1);
    setCurrentTotal(0);
    setPageSize(30);
  };

  return (
    <>
      {isMobileView && (
        <>
          <Header isShowLogo={view === PageView.Search} onGoBack={onGoBack} />
          {view === PageView.Search && <MobileNavBar />}
        </>
      )}
      <Box
        display="block"
        ml={isMobileView ? '0px' : '80px'}
        mt={isMobileView ? '70px' : '0px'}
        width={getViewWidth()}
      >
        <Stack direction="column" alignItems="center" overflow="auto">
          {view === PageView.Search && (
            <SearchContainer
              isKeywordError={isKeywordError}
              keyword={keyword}
              pageSize={pageSize}
              onKeywordChange={onKeywordChange}
              onSliderChange={onSliderChange}
              onSearch={onSearch}
            />
          )}
          {view === PageView.Result && (
            <ResultContainer
              cards={cards}
              isLoading={isLoading}
              isLoadingMore={isLoadingMore}
              onLoadMore={onLoadMore}
              onGoBack={onGoBack}
            />
          )}
        </Stack>
      </Box>
      {isExpandView && <FollowerSection />}
    </>
  );
}
