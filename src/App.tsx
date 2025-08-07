import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LandingPage from './components/LandingPage';
import GradientOrbs from './components/GradientOrbs';
import Header from './components/Header';
import t3rnTheme from './theme/t3rnTheme';

// Web3 imports
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { wagmiConfig } from './config/wagmiConfig';
import { t3rnRainbowTheme } from './theme/rainbowKitTheme';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={t3rnRainbowTheme}>
            <ThemeProvider theme={t3rnTheme}>
              <CssBaseline />
              <GradientOrbs />
              <Header />
              <LandingPage />
            </ThemeProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}

export default App;