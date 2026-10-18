import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  title: "Namangan 3-sonli texnikum — Rasmiy veb-sayti",
  description:
    "Namangan 3-sonli texnikumi — zamonaviy kasblar, amaliy ta’lim va yangi imkoniyatlar maskani. 2025/2026 o‘quv yili qabuli va yo‘nalishlar.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://3texnikum.vercel.app"
  ),
  openGraph: {
    title: "Rasmiy veb-sayti — Kelajagingizni biz bilan quring!",
    description:
      "Zamonaviy kasblar, amaliy ta’lim va yangi imkoniyatlar maskani. 2025/2026 o‘quv yili qabuli va yo‘nalishlar.",
    siteName: "Namangan 3-sonli texnikum",
    locale: "uz_UZ",
    type: "website",
    url: "https://3texnikum.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Namangan 3-sonli texnikum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namangan 3-sonli texnikum — Rasmiy veb-sayti",
    description:
      "Zamonaviy kasblar, amaliy ta’lim va yangi imkoniyatlar maskani. 2025/2026 o‘quv yili qabuli va yo‘nalishlar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Namangan",
      addressRegion: "Namangan viloyati",
      addressCountry: "UZ",
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  };

  const themeScript = `
    (function() {
      try {
        var saved = localStorage.getItem('theme');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = saved === 'dark' || ((!saved || saved === 'system') && systemDark);
        if (isDark) {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.setAttribute('data-theme', 'light');
        }
        var savedLang = localStorage.getItem('3tex_lang');
        if (savedLang === 'ru' || savedLang === 'en' || savedLang === 'uz') {
          document.documentElement.lang = savedLang;
        }
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
