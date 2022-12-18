import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Navbar } from '../components/organisms';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '../theme';

const MainLayout = ({ children }) => {
  const { isMobile } = useWindowSize();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col">
        {isMobile ? <></> : <Navbar />}

        <div className="flex flex-col gap-y-10">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
