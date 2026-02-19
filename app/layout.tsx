import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neuro Nurture — Game-based Autism Support, Guided by AI",
  description:
    "Neuro Nurture turns play into developmental insight — capturing behavioral signals, surfacing AI-powered patterns, and guiding support across home, school, and clinic.",
  keywords: [
    "autism support",
    "developmental screening",
    "AI-powered insights",
    "game-based therapy",
    "child development",
    "behavioral signals",
  ],
  openGraph: {
    title: "Neuro Nurture — Game-based Autism Support, Guided by AI",
    description:
      "Continuous monitoring, early screening support, and evidence-informed guidance — across home, school, and clinic.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Nurture — Game-based Autism Support, Guided by AI",
    description:
      "Continuous monitoring, early screening support, and evidence-informed guidance — across home, school, and clinic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
