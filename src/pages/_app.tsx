// import '@/styles/globals.css';
import '@/styles/scss/bootstrap/bootstrap.scss';
import '@/styles/scss/custom/custom.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />;
}
