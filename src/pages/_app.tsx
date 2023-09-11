import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { GridBg } from '../components/GridBg';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
);

export default MyApp;
