import '../public/styles/globals.css';
import type { AppProps } from 'next/app';

import { useMemo } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Sidebar } from '../components/sidebar/Sidebar';
import { MainHeader } from '../components/main-header/mainHeader';
import { useGetBreakpoints } from '../hooks/useGetBreakpoints';
import { ErrorBoundary } from '../components/error-boundary/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  const { isXl } = useGetBreakpoints();

  const sidebarToRender = useMemo(() => isXl && <Sidebar />, [isXl]);

  return (
    <div className="bg-neutral-900 text-neutral-50 font-content flex">
      <ErrorBoundary>
        <Navigation />
        <main data-pw="main" className="flex-grow">
          <MainHeader />
          <div className="p-4">
            <Component {...pageProps} />
          </div>
        </main>
        {sidebarToRender}
      </ErrorBoundary>
    </div>
  );
}

export default MyApp;
