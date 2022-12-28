import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Footer, Navbar } from '../components/organisms';

const MainLayout = ({ children }) => {
  const { isMobile } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? <></> : <Navbar />}

      <div className="flex flex-col gap-y-10 min-h-[82vh]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
