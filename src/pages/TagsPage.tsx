import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, Stack, Box } from '@mui/material';
import theme from '../theme/baseTheme';
import TagSection from '../components/viewDesktop/TagSection';
import MobileTagSection from '../components/viewMobile/MobileTagSection';
import { getTags } from '../actions/fetchActions';
import { Tag } from '../domain/Tag';
import Header from '../components/viewMobile/Header';
import AppPaths from '../AppRoutes';
import debouncedEffect from '../hooks/debouncedEffect';

export default function TagsPage() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const isMobileView = useMediaQuery(theme.breakpoints.down('mobile'));
  const navigate = useNavigate();

  useEffect(() => {
    getTags().then((result) => {
      setTags(result);
      setIsLoading(false);
    });
  }, []);

  const onLoadMore = debouncedEffect(() => {
    setIsLoadingMore(true);
    getTags().then((result) => {
      setTags([...tags, ...result]);
      setIsLoadingMore(false);
    });
  }, 1000);

  const onGoBack = () => navigate(AppPaths.HOME);

  return (
    <Box
      display="block"
      ml={isMobileView ? '0px' : '80px'}
      width={isMobileView ? '100vw' : 'calc(100vw - 80px)'}
    >
      <Stack direction="column" alignItems="center" overflow="auto">
        {isMobileView ? (
          <>
            <Header isShowLogo={false} onGoBack={onGoBack} />
            <MobileTagSection
              tags={tags}
              isLoading={isLoading}
              isLoadingMore={isLoadingMore}
              onLoadMore={onLoadMore}
            />
          </>
        ) : (
          <TagSection
            tags={tags}
            isLoading={isLoading}
            isLoadingMore={isLoadingMore}
            onLoadMore={onLoadMore}
          />
        )}
      </Stack>
    </Box>
  );
}
