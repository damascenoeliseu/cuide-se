import React from 'react';
import { AppProps } from 'next/app';
import { SignInProvider } from '../contexts/SignInContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignInProvider>
      <Component {...pageProps} />
    </SignInProvider>
  );
}
export default MyApp;
