import type { FC } from 'react';
import type { AppProps } from 'next/app';
import ThemeProvider from '@brix-ui/theme';

import { Reset, Fonts } from 'core/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />

        <Reset />
        <Fonts />
      </ThemeProvider>
    </>
  );
};

export default App;
