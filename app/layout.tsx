import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "./components/app-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haidilao Hot Pot",
  description: "Degen Haidilao Hot Pot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style></style>
      </head>
      <body
        className={inter.className}
        style={{
          fontFamily: "upheavtt",
        }}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
