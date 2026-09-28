import type { Metadata } from "next";
import { DM_Sans, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pourush Shrestha",
  description:
    "Senior software engineer. Writing about software, systems, and things I'm learning.",
  openGraph: {
    title: "Pourush Shrestha",
    description:
      "Senior software engineer. Writing about software, systems, and things I'm learning.",
    url: "https://pourushshrestha.com",
    siteName: "Pourush Shrestha",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${lora.variable} ${playfair.variable}`}
      >
        <div className="mx-auto max-w-[660px] px-6">
          <Header />
          <main className="pt-14 pb-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
