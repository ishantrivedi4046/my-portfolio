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
  intro,
  work,
}: Readonly<{
  children: React.ReactNode;
  intro: React.ReactNode;
  work: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cx(
          inter.className,
          "flex flex-col items-center overflow-x-clip"
        )}
      >
        <Header />
        <div className="w-100% lg4:max-w-[60%] lg2:max-w-[70%] max-w-[82%] flex flex-col justify-center items-stretch">
          {intro}
          {work}
          {children}
        </div>
      </body>
    </html>
  );
}
