import { useMediaQuery } from '@mui/material';

const BREAK_POINTS = {
  sm: 640,
  md: 920,
  lg: 1200,
  xl: 2000,
};

export const useWindowSize = () => {
  const isMobile = useMediaQuery(`(max-width:${BREAK_POINTS.sm}px)`);

  return { isMobile };
};
