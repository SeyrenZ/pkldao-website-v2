import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "PKL.CLUB",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

const customTheme = {
  blurs: {
    modalOverlay: "blur(0px)",
  },
  colors: {
    accentColor: "#00a86b",
    accentColorForeground: "#ffffff",
    actionButtonBorder: "#00a86b",
    actionButtonBorderMobile: "#00a86b",
    actionButtonSecondaryBackground: "#00a86b",
    closeButton: "#00a86b",
    closeButtonBackground: "#ffffff",
    connectButtonBackground: "#00a86b",
    connectButtonBackgroundError: "#ff533e",
    connectButtonInnerBackground: "#00a86b",
    connectButtonText: "#ffffff",
    connectButtonTextError: "#ffffff",
    connectionIndicator: "#00a86b",
    downloadBottomCardBackground: "#ffffff",
    downloadTopCardBackground: "#ffffff",
    error: "#ff533e",
    menuItemBackground: "rgba(0, 168, 107, 0.1)",
    modalBackdrop: "rgba(0, 0, 0, 0.3)",
    modalBackground: "#ffffff",
    modalBorder: "#00a86b",
    modalText: "#000000",

    modalTextDim: "#666666",
    modalTextSecondary: "#888888",
    profileAction: "#00a86b",
    profileActionHover: "rgba(0, 168, 107, 0.8)",
    profileForeground: "#ffffff",
    selectedOptionBorder: "#00a86b",
    standby: "#c4f000",
  },
  fonts: {
    body: "Fredoka, sans-serif",
  },
  radii: {
    actionButton: "12px",
    connectButton: "12px",
    menuButton: "12px",
    modal: "16px",
    modalMobile: "16px",
  },
  shadows: {
    connectButton: "0px 4px 12px rgba(0, 168, 107, 0.15)",
    dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
    profileDetailsAction: "0px 2px 6px rgba(0, 168, 107, 0.15)",
    selectedOption: "0px 2px 6px rgba(0, 168, 107, 0.24)",
    selectedWallet: "0px 2px 6px rgba(0, 168, 107, 0.24)",
    walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
  },
};

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={{
            ...customTheme,
            colors: {
              ...customTheme.colors,
              generalBorder: "",
              generalBorderDim: "",
            },
          }}
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
