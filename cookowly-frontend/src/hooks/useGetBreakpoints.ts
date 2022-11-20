import { useEffect, useState } from 'react';

type ScreenSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Dimensions = {
  [key in `is${Capitalize<ScreenSizes>}`]: boolean;
};

type Breakpoints = {
  [key in Capitalize<ScreenSizes>]: number;
};

const configuredBreakpoints: Breakpoints = {
  Sm: 640,
  Md: 768,
  Lg: 1024,
  Xl: 1280,
  Xxl: 1536,
};

const screenSizes = Object.keys(configuredBreakpoints).map(
  (breakpoint) => breakpoint[0].toUpperCase() + breakpoint.slice(1),
) as Capitalize<ScreenSizes>[];

export function useGetBreakpoints() {
  const [breakpoints, setBreakpoints] = useState<Dimensions>(
    (Object.keys(configuredBreakpoints) as ScreenSizes[]).reduce(
      (previous, breakpoint) => ({ ...previous, [breakpoint]: false }),
      {} as Dimensions,
    ),
  );

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setBreakpoints((previous) => {
      const newState = { ...previous };
      screenSizes.forEach((size) => {
        newState[`is${size}`] = currentWidth >= configuredBreakpoints[size];
      });
      return newState;
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // execute on first load
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
}
