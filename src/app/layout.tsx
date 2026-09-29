import type { Metadata, Viewport } from "next";
import { Syne, Manrope, Oxanium } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { WhatsAppChatbot } from "@/components/ui/WhatsAppChatbot";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "AERRO EV | India's Next Generation Electric Mobility",
    template: "%s | AERRO EV",
  },
  description: SITE.description,
  keywords: [
    "AERRO EV",
    "Electric Scooter India",
    "EV India",
    "Electric Vehicle",
    "Made in India EV",
    "Electric Mobility",
    "Commercial EV India",
    "Electric Bike India",
    "Smart Clean Future",
  ],
  authors: [{ name: "AERRO Electric Vehicles Pvt. Ltd." }],
  creator: "AERRO EV",
  publisher: "AERRO EV",
  applicationName: "AERRO EV",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "AERRO EV | India's Next Generation Electric Mobility",
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "AERRO EV — India's Next Generation Electric Mobility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AERRO EV | India's Next Generation Electric Mobility",
    description: SITE.description,
    images: [SITE.ogImage],
    creator: "@aerroev",
  },
  icons: {
    icon: [
      { url: "/favicon.jpeg", type: "image/jpeg" },
      { url: "/icon.jpeg", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-icon.jpeg", type: "image/jpeg" }],
    shortcut: ["/favicon.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.jpeg" />
      </head>
      <body
        className={`${syne.variable} ${manrope.variable} ${oxanium.variable} font-sans bg-background text-foreground antialiased min-h-screen selection:bg-primary/20 selection:text-white`}
      >
        {children}
        <WhatsAppChatbot />
      </body>
    </html>
  );
}
