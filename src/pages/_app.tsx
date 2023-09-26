import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/* @ts-ignore */}
    <Component {...pageProps} />
    <ToastContainer />
  </>
);

export default MyApp;
