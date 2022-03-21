import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { GlobalStyles, lightTheme, darkTheme } from '../../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(false);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
  );
}

export default MyApp;
