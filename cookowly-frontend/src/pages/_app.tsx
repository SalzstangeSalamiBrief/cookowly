import type { AppProps } from 'next/app';
import '../../public/styles/globals.css';

import { ErrorBoundary } from '../components/error-boundary/ErrorBoundary';
import { MainHeader } from '../components/main-header/mainHeader';
import { Navigation } from '../components/navigation/Navigation';
import { Sidebar } from '../components/sidebar/Sidebar';
import { useGetBreakpoints } from '../hooks/useGetBreakpoints';

function MyApp({ Component, pageProps }: AppProps) {
  const { isXl } = useGetBreakpoints();

  return (
    <ErrorBoundary>
      <div className="bg-neutral-900 text-neutral-50 font-content flex">
        <div className="mx-auto flex app-layout">
          <Navigation />
          <main data-pw="main" className="flex-grow">
            <MainHeader />
            <div className="p-4">
              <Component {...pageProps} />
            </div>
          </main>
          {isXl && <Sidebar />}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default MyApp;
