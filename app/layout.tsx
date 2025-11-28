import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Asta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const astaSans = Asta_Sans({
  variable: "--font-asta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breeeve",
  description:
    "Simple tools for managing clients, invoices, receipts, and business finances.",
  keywords: ["Breeeve", "Invoice", "Receipt", "Client", "Business", "Finance"],
  authors: [
    { name: "Nwachukwu Justin Jr", url: "https://x.com/thejustinson" },
    { name: "Breeeve", url: "https://breeeve.com" },
  ],
  openGraph: {
    title: "Breeeve",
    images: ["/og-image.png"],
    description:
      "Simple tools for managing clients, invoices, receipts, and business finances.",
    type: "website",
    locale: "en",
    siteName: "Breeeve",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${astaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
