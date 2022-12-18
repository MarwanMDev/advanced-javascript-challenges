import React from 'react';
import {
  FeaturedProducts,
  HeroSection,
} from './components/organisms';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainLayout>
        <HeroSection />
        <FeaturedProducts />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
