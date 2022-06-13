import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';

import '@/styles/globals.scss';
import '@/styles/colors.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
