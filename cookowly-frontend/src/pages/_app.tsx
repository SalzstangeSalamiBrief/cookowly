import type { AppProps } from 'next/app';
import '../../public/styles/globals.css';

import { ErrorBoundary } from '../components/error-boundary/ErrorBoundary';
import { MainHeader } from '../components/main-header/mainHeader';
import { Navigation } from '../components/navigation/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <div className="bg-neutral-900 text-neutral-50 font-content flex">
        <div className="mx-auto app-layout">
          <Navigation />
          <main data-pw="main" className="border-r border-neutral-50/alpha-10">
            <MainHeader />
            <div className="p-4">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default MyApp;
