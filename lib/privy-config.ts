import type { PrivyClientConfig } from "@privy-io/react-auth";

// Replace this with your Privy config
export const privyConfig: PrivyClientConfig = {
  // Customize Privy's appearance in your app
  appearance: {
    accentColor: "#676FFF",
    logo: "/logo.png",
  },
  // Create embedded wallets for users who don't have a wallet
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
  fiatOnRamp: {
    useSandbox: true,
  },
  loginMethodsAndOrder: {
    primary: [
      "farcaster",
      // "detected_wallets",
      "metamask",
      // "coinbase_wallet",
      // "rainbow",
    ],
  },
};
