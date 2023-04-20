// import '@/styles/globals.css';
import '@/assets/scss/bootstrap/bootstrap.scss';
import '@/assets/scss/custom/custom.scss';
import type { AppProps } from 'next/app';
import LayoutMain from '@/components/LayoutMain/LayoutMain';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <LayoutMain>
         <Component {...pageProps} />
      </LayoutMain>
   );
}
