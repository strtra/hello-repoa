import React, { useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import {
  createTheme,
  ThemeProvider,
  styled,
  Stack,
  Box,
  Tab,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import MuiTabPanel from '@mui/lab/TabPanel';
import baseTheme from '../../theme/baseTheme';
import FollowerCard from './FollowerCard';
import FollowerSkeletonCard from './FollowerSkeletonCard';
import { getFollowers, getFollowings } from '../../actions/fetchActions';
import { FollowerTab, Follower } from '../../domain/Follower';

const TabPanel = styled(MuiTabPanel)({
  padding: '32px 16px',
});

const theme = createTheme({
  ...baseTheme,
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#929292',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.15px',
          textTransform: 'none',

          '&.Mui-selected': {
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: '33px',
          minHeight: '33px',

          '& .MuiButtonBase-root': {
            padding: '0px 16px 20px',
          },
        },
        indicator: {
          background: '#FFFFFF',
        },
      },
    },
  },
});

export default function FollowerSection() {
  const [tab, setTab] = useState(FollowerTab.Followers);
  const [currentFollowersPage, setCurrentFollowersPage] = useState(1);
  const [currentFollowingsPage, setCurrentFollowingsPage] = useState(1);
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followings, setFollowings] = useState<Follower[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const scrollRef = useRef<any>();

  useEffect(() => {
    // init followers data
    getFollowers(currentFollowersPage).then((result) => {
      const { page, data } = result;
      setCurrentFollowersPage(page + 1);
      setFollowers(data);
      setIsLoading(false);
    });

    // add scroll event
    if (scrollRef) {
      scrollRef.current.addEventListener('scroll', () => {
        const { clientHeight, scrollTop, scrollHeight } = scrollRef.current;

        // deteck scrolled to bottom
        if (scrollTop + clientHeight >= scrollHeight) {
          setIsLoadingMore(true);
        }
      });
    }
  }, []);

  // scroll to top when tab change
  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [tab]);

  useEffect(() => {
    // init followings data
    if (tab === FollowerTab.Following && followings.length === 0) {
      setIsLoading(true);
      getFollowings(currentFollowingsPage).then((result) => {
        const { page, data } = result;
        setCurrentFollowingsPage(page + 1);
        setFollowings(data);
        setIsLoading(false);
      });
    }

    // load more data
    if (isLoadingMore) {
      if (tab === FollowerTab.Followers) {
        getFollowers(currentFollowersPage).then((result) => {
          const { page, data } = result;
          setCurrentFollowersPage(page + 1);
          setFollowers([...followers, ...data]);
          setIsLoadingMore(false);
        });
      }

      if (tab === FollowerTab.Following) {
        getFollowings(currentFollowingsPage).then((result) => {
          const { page, data } = result;
          setCurrentFollowingsPage(page + 1);
          setFollowings([...followings, ...data]);
          setIsLoadingMore(false);
        });
      }
    }
  }, [tab, isLoadingMore]);

  const onTabChange = (e: React.SyntheticEvent, val: FollowerTab) => {
    setTab(val);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        width="375px"
        height="100%"
        position="fixed"
        right="0px"
        direction="column"
        bgcolor="#1B1B1B"
      >
        <Stack direction="column" overflow="auto" width="100%" ref={scrollRef}>
          <TabContext value={tab}>
            <Box
              sx={{
                borderBottom: 2,
                borderColor: '#1F1F1F',
                background: '#1B1B1B',
                position: 'fixed',
                width: '375px',
                zIndex: 10,
                paddingTop: '32px',
              }}
            >
              <TabList onChange={onTabChange} variant="fullWidth" centered>
                <Tab label="Followers" value={FollowerTab.Followers} />
                <Tab label="Following" value={FollowerTab.Following} />
              </TabList>
            </Box>

            <Box mt="64px">
              <TabPanel value={FollowerTab.Followers}>
                <Stack spacing="16px">
                  {isLoading
                    ? Array.from(new Array(8)).map(() => (
                      <FollowerSkeletonCard key={uuid()} />
                    ))
                    : followers?.map((follower, idx) => (
                      <FollowerCard
                        key={uuid()}
                        follower={follower}
                        fakePhotoId={idx}
                      />
                    ))}
                  {isLoadingMore
                    && Array.from(new Array(6)).map(() => (
                      <FollowerSkeletonCard key={uuid()} />
                    ))}
                </Stack>
              </TabPanel>
              <TabPanel value={FollowerTab.Following}>
                <Stack spacing="16px">
                  {isLoading
                    ? Array.from(new Array(8)).map(() => (
                      <FollowerSkeletonCard key={uuid()} />
                    ))
                    : followings?.map((follower, idx) => (
                      <FollowerCard
                        key={uuid()}
                        follower={follower}
                        fakePhotoId={idx}
                      />
                    ))}
                  {isLoadingMore
                    && Array.from(new Array(6)).map(() => (
                      <FollowerSkeletonCard key={uuid()} />
                    ))}
                </Stack>
              </TabPanel>
            </Box>
          </TabContext>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
