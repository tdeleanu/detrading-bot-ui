import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
} from 'wagmi/chains';

// IMPORTANT: Replace with your actual project ID from https://cloud.walletconnect.com
// For testing, you can use this temporary ID, but create your own for production
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || '2c9f8e3a0e5d4f3b8a7c6d5e4f3b2a1c';

export const wagmiConfig = getDefaultConfig({
  appName: 'AI Trading Bot',
  projectId: projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base, bsc],
  ssr: false,
});