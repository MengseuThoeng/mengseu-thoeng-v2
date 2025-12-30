import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.author} - Software Engineer & Full Stack Developer`,
    template: `%s | ${siteConfig.titlePrefix}`,
  },
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.baseUrl }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    title: `${siteConfig.author} - Software Engineer & Full Stack Developer`,
    description: siteConfig.metadata.description,
    siteName: siteConfig.author,
    images: [
      {
        url: siteConfig.profile_image,
        width: 1200,
        height: 630,
        alt: siteConfig.author,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.author} - Software Engineer & Full Stack Developer`,
    description: siteConfig.metadata.description,
    images: [siteConfig.profile_image],
    creator: '@Mengseu_Thoeng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
