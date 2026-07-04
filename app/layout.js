import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import StickyCallBar from "@/components/StickyCallBar";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";
import { localBusinessSchema, websiteSchema, personSchema } from "@/data/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "The Royal Paws — Premium Pet Store & Grooming Services in Bathinda",
    template: "%s | The Royal Paws",
  },
  description:
    "The Royal Paws is a premium pet store in Bathinda offering pet food, accessories, grooming, dog boarding, and home delivery. Call 7791901085.",
  keywords: [
    "pet store in Bathinda",
    "pet grooming in Bathinda",
    "dog boarding in Bathinda",
    "dog hostel in Bathinda",
    "pet food in Bathinda",
    "pet products in Bathinda",
    "pet accessories in Bathinda",
    "pet home delivery Bathinda",
    "The Royal Paws Bathinda",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  verification: {
    google: "lCuoYuxOQD_s5ZQ4aigkg-YyEocDMu5jo4n4WmRpxBw",
  },
  openGraph: {
    title: "The Royal Paws — Premium Pet Store & Grooming Services in Bathinda",
    description:
      "Premium pet food, accessories, grooming, boarding, and home delivery for dogs and cats in Bathinda.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.logo,
        width: 2508,
        height: 627,
        alt: "The Royal Paws — For the love of pets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royal Paws — Premium Pet Store & Grooming Services in Bathinda",
    description:
      "Premium pet food, accessories, grooming, boarding, and home delivery for dogs and cats in Bathinda.",
    images: [siteConfig.logo],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body text-royal-dark antialiased">
        <JsonLd data={[localBusinessSchema(), websiteSchema(), personSchema()]} />
        <AnnouncementBar />
        <Header />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-149R9H4TEQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-149R9H4TEQ');
          `}
        </Script>
      </body>
    </html>
  );
}
