import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Curation Company | Bespoke Gifting Solutions",
  description: "To be loved is to be known. Let us curate a gift that speaks the language of your heart. Every gift tells a story — let us help you write yours.",
  keywords: ["gifting", "bespoke", "curated", "custom gifts", "corporate gifting", "birthday gifts", "anniversary gifts"],
  authors: [{ name: "The Curation Company" }],
  openGraph: {
    title: "The Curation Company | Bespoke Gifting Solutions",
    description: "To be loved is to be known. Let us curate a gift that speaks the language of your heart.",
    url: "https://www.thecurationcompany.in/",
    siteName: "The Curation Company",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23c141bc'/><text x='50' y='50' dy='.3em' font-size='40' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'>TCC</text></svg>" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}