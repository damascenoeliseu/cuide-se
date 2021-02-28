import React from 'react';
import { AppProps } from 'next/app';
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChangeThemeProvider>
        <Component {...pageProps} />
      </ChangeThemeProvider>
  );
}

export default MyApp
