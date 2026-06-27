import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500"],
});

const SITE_URL = "https://cassia-almeida.com";
const DESCRIPTION = "Engineering leader. Builder. Writer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cássia Almeida",
    template: "%s · Cássia Almeida",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Cássia Almeida",
    title: "Cássia Almeida",
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/logos/avatar.jpg", width: 400, height: 400, alt: "Cássia Almeida" }],
  },
  twitter: {
    card: "summary",
    title: "Cássia Almeida",
    description: DESCRIPTION,
    images: ["/logos/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="container">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
