import React from 'react';
import {
  ExampleSection,
  FeaturedProducts,
  HeroSection,
} from './components/organisms';
import MainLayout from './layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HeroSection />
              <FeaturedProducts />
            </MainLayout>
          }
        />
        <Route
          path="/example/:id"
          element={
            <MainLayout>
              <ExampleSection />
            </MainLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
