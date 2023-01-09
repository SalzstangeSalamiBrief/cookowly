import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import '../../public/styles/globals.css';

import { ErrorBoundary } from '../components/error-boundary/ErrorBoundary';
import { LoadingSpinner } from '../components/loading-spinner/LoadingSpinner';
import { MainHeader } from '../components/main-header/mainHeader';
import { Navigation } from '../components/navigation/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ErrorBoundary>
        <div className="bg-neutral-900 text-neutral-50 font-content flex">
          <div className="mx-auto app-layout">
            <Navigation />
            <main data-pw="main" className="border-r border-neutral-50/alpha-10">
              <MainHeader />
              <div className="p-4">
                {isLoading ? <LoadingSpinner text="Your data is being loaded..." /> : <Component {...pageProps} />}
              </div>
            </main>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
