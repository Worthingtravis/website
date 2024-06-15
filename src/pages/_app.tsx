import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={'min-h-screen'}>
    <Component {...pageProps} />
    <ToastContainer />
  </div>
);

export default MyApp;
