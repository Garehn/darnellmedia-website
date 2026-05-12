import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL, SITE_NAME, EMAIL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Sydney SEO Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sydney SEO agency specialising in organic growth for trade businesses and home services. AEO, GEO, Local SEO. No lock-in contracts.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_AU",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32" },
      { url: "/favicon-16.png", sizes: "16x16" },
    ],
    apple: "/favicon-180.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
