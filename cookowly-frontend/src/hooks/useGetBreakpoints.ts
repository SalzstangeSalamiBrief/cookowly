import { useEffect, useState } from 'react';

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Dimensions = {
  [key in `is${Capitalize<ScreenSizes>}`]: boolean;
};

type Breakpoints = {
  [key in Capitalize<ScreenSizes>]: number;
};

const configuredBreakpoints: Breakpoints = {
  Xs: 480,
  Sm: 640,
  Md: 768,
  Lg: 1024,
  Xl: 1280,
  Xxl: 1536,
};

const screenSizes = Object.keys(configuredBreakpoints).map(
  (breakpoint) => breakpoint[0].toUpperCase() + breakpoint.slice(1),
) as Capitalize<ScreenSizes>[];

/**
 * Hook that tells if some breakpoint gets hit or not.
 * This hook adds a event listener to the resize event of the dom
 * and on each event the breakpoints will be calculated anew
 *
 * Supported breakpoints are:
 *  0. xs: 480px
 *  1. sm: 640px
 *  2. md: 768px
 *  3. md: 1024px
 *  4. xl: 1280px
 *  5. xxl: 1536px
 *
 */
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
