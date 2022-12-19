import type { AppProps } from 'next/app';
import '../../public/styles/globals.css';

import { MainHeader } from '../components/main-header/mainHeader';
import { Navigation } from '../components/navigation/Navigation';
import { Sidebar } from '../components/sidebar/Sidebar';
import { useGetBreakpoints } from '../hooks/useGetBreakpoints';

function MyApp({ Component, pageProps }: AppProps) {
  const { isXl } = useGetBreakpoints();

  return (
    <div className="bg-neutral-900 text-neutral-50 font-content flex ">
      <Navigation />
      <main data-pw="main" className="flex-grow">
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
