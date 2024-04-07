"use client";

import { privyConfig } from "@/lib/privy-config";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId="cltzfzh4700pb4oq2r2xuaybc"
      config={{
        ...privyConfig,
      }}
    >
      {children}
    </PrivyProvider>
  );
}
