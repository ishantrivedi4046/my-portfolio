import cx from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan Trivedi",
  description: "Ishan Trivedi's Portfolio Website",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
