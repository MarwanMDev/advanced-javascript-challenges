import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Navbar } from '../components/organisms';

const MainLayout = ({ children }) => {
  const { isMobile } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? <></> : <Navbar />}

      <div className="flex flex-col gap-y-10">{children}</div>
    </div>
  );
};

export default MainLayout;
