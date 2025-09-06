import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface ConnectWalletProps {
  className?: string;
  mobileClassName?: string;
  isMobile?: boolean;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
  className = "bg-pkl-green text-sm rounded-xl text-white px-6 h-12 py-2 hover:bg-green-600 transition-colors font-fredoka font-bold tracking-widest",
  mobileClassName = "w-full bg-pkl-green rounded-xl text-white px-6 h-12 py-2 hover:bg-green-600 transition-colors font-fredoka font-bold tracking-widest",
  isMobile = false,
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={isMobile ? mobileClassName : className}
                    data-testid={
                      isMobile
                        ? "mobile-button-connect-wallet"
                        : "button-connect-wallet"
                    }
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className={
                      isMobile
                        ? "w-full bg-red-500 rounded-xl text-white px-6 h-12 py-2 hover:bg-red-600 transition-colors font-fredoka font-bold tracking-widest"
                        : "bg-red-500 rounded-xl text-white px-6 h-12 py-2 hover:bg-red-600 transition-colors font-fredoka font-bold tracking-widest"
                    }
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <button
                  onClick={openAccountModal}
                  type="button"
                  className={isMobile ? mobileClassName : className}
                >
                  {account.displayName}
                  {account.displayBalance ? ` (${account.displayBalance})` : ""}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
