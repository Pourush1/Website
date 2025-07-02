import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FeedbackButton from "@/components/FeedbackButton";
import SentryInit from "@/components/SentryInit";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pourush Portfolio",
  description: "Modern Portfolio made by Pourush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className}`}>
        <SentryInit />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <FeedbackButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
