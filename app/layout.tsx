import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neuro Nurture — The Future of Neurological Care",
  description:
    "Neuro Nurture unifies AI-powered signal capture, cognitive analytics, and care coordination into one platform for the next generation of neurological care.",
  keywords: [
    "neurology",
    "AI healthcare",
    "neurological care",
    "cognitive analytics",
    "brain health",
    "clinical platform",
  ],
  openGraph: {
    title: "Neuro Nurture — The Future of Neurological Care",
    description:
      "AI-powered neurological care platform unifying signal capture, analytics, and care coordination.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Nurture — The Future of Neurological Care",
    description:
      "AI-powered neurological care platform unifying signal capture, analytics, and care coordination.",
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
