import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import SentryInit from "@/components/SentryInit";
import FeedbackButton from "@/components/FeedbackButton";

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
