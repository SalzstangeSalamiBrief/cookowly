import '../public/styles/globals.css';
import type { AppProps } from 'next/app';

import { Navigation } from '../components/navigation/Navigation';
import { Sidebar } from '../components/sidebar/Sidebar';
import { MainHeader } from '../components/mainContent/mainHeader';
import { useGetBreakpoints } from '../hooks/useGetBreakpoints';

function MyApp({ Component, pageProps }: AppProps) {
  const { isXl } = useGetBreakpoints();
  return (
    <div className="bg-neutral-900 text-neutral-50 font-content flex">
      <Navigation />
      <main className="grow">
        <MainHeader />
        <div className="p-4">
          <Component {...pageProps} />
        </div>
      </main>
      {isXl && <Sidebar />}
    </div>
  );
}

export default MyApp;
