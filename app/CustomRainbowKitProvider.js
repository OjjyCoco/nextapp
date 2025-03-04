'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'cb7bf1e05ed7ffe8cff2a7eced87bc93',
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

// Tanstack :
const queryClient = new QueryClient();

const CustomRainbowKitProvider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default CustomRainbowKitProvider