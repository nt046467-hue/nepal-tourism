import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Discover Nepal — Where the World Meets the Sky",
  description:
    "Explore Nepal's majestic Himalayas, ancient temples, and thrilling adventures. Plan your trip to the land of 8 peaks above 8,000m, 3,000+ trekking trails, and 10 UNESCO Heritage Sites.",
  keywords: [
    "Nepal",
    "Tourism",
    "Himalayas",
    "Trekking",
    "Everest",
    "Travel",
    "Adventure",
    "Pokhara",
    "Kathmandu",
  ],
  authors: [{ name: "Nabin" }],
  openGraph: {
    title: "Discover Nepal — Where the World Meets the Sky",
    description:
      "Trek. Explore. Experience Nepal. Discover majestic mountains, ancient culture, and unforgettable adventures.",
    type: "website",
    locale: "en_US",
    siteName: "Discover Nepal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Nepal — Where the World Meets the Sky",
    description:
      "Trek. Explore. Experience Nepal. Discover majestic mountains, ancient culture, and unforgettable adventures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
