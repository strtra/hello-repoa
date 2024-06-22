import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  ThemeProvider,
  styled,
  useMediaQuery,
  GlobalStyles,
} from '@mui/material';
import theme from './theme/baseTheme';
import AppPaths from './AppRoutes';
import NavBar from './components/viewDesktop/NavBar';
import HomePage from './pages/HomePage';
import TagsPage from './pages/TagsPage';

const globalStyles = (
  <GlobalStyles
    styles={{
      html: {
        scrollbarWidth: 'none',

        '::-webkit-scrollbar': {
          display: 'none',
        },
        '& ::-webkit-scrollbar': {
          display: 'none',
        },
      },
      body: {
        color: '#FFFFFF',
        background: '#181818',
        fontFamily: 'Ubuntu',

        '*': {
          fontFamily: 'Ubuntu',
        },
      },
    }}
  />
);

const AppWrap = styled('div')({
  display: 'flex',
  width: '100%',
  maxHeight: '100%',
});

function App() {
  const isMobileView = useMediaQuery(theme.breakpoints.down('mobile'));
  const { pathname } = useLocation();

  // auto scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <AppWrap>
        <Routes>
          <Route path={AppPaths.HOME} element={<HomePage />} />
          <Route path={AppPaths.TAGS} element={<TagsPage />} />
        </Routes>
        {!isMobileView && <NavBar />}
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
