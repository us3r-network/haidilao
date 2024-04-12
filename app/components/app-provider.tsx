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
      appId="cluw5q66900irnkds3p34f0hl"
      config={{
        ...privyConfig,
      }}
    >
      {children}
    </PrivyProvider>
  );
}
