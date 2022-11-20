import '../public/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral-900 text-neutral-50 font-content">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
