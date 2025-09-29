import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import { SUSE } from "next/font/google";

const suse = SUSE({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-suse",
});

const siteUrl =  process.env.NEXT_PUBLIC_SITE_URL || "https://elitedev-v2.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ashutosh Tiwari - FullStack Developer Portfolio",
    template: "%s | Ashutosh Tiwari - FullStack Developer",
  },
  description:
    "I am a FullStack Developer specializing in Next.js, cloud like AWS, and modern web technologies. Portfolio showcasing projects in AI-powered applications.",
  keywords: [
    "Ashutosh Tiwari",
    "FullStack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "Node.js Developer",
    "Express.js",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP Animation",
    "AWS Developer",
    "Docker",
    "Jenkins",
    "Vercel",
    "CloudFlare",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "React.js",
    "Next.js",
    "TypeScript",
    "C++",
    "Python",
    "Hono",
    "Prisma",
    "Zod",
    "Socket.io",
    "GenAI",
    "GeminiAI",
    "AI Applications",
    "Web Development",
    "Frontend Engineering",
    "UI/UX Development",
    "Responsive Design",
    "Modern Web Technologies",
    "Portfolio Website",
    "Software Engineer",
    "Web Developer India",
    "React Portfolio",
    "Developer Portfolio",
  ],
  authors: [{ name: "Ashutosh Tiwari", url: siteUrl }],
  creator: "Ashutosh Tiwari",
  publisher: "Ashutosh Tiwari",
  applicationName: "Ashutosh Tiwari Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code", // Uncomment and add if needed
    // bing: "your-bing-verification-code", // Uncomment and add if needed
  },
  icons: {
    icon: [
      { url: "/favicon.webp", sizes: "16x16", type: "image/png" },
      { url: "/favicon.webp", sizes: "32x32", type: "image/png" },
      { url: "/favicon.webp", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.webp", sizes: "57x57", type: "image/png" },
      { url: "/favicon.webp", sizes: "60x60", type: "image/png" },
      { url: "/favicon.webp", sizes: "72x72", type: "image/png" },
      { url: "/favicon.webp", sizes: "76x76", type: "image/png" },
      { url: "/favicon.webp", sizes: "114x114", type: "image/png" },
      { url: "/favicon.webp", sizes: "120x120", type: "image/png" },
      { url: "/favicon.webp", sizes: "144x144", type: "image/png" },
      { url: "/favicon.webp", sizes: "152x152", type: "image/png" },
      { url: "/favicon.webp", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.webp",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.webp",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ashutosh Tiwari - FullStack Developer Portfolio",
    description:
      "Experienced FullStack Developer specializing in React.js, Next.js, TypeScript, and modern web technologies. Showcasing innovative projects including AI-powered applications, manga platforms, and full-stack solutions with expertise in AWS, Docker, and cloud deployment.",
    siteName: "Ashutosh Tiwari Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Ashutosh Tiwari - FullStack Developer Portfolio showcasing React, Next.js, and TypeScript projects",
        type: "image/png",
      },
      {
        url: "/favicon.webp",
        width: 512,
        height: 512,
        alt: "Ashutosh Tiwari Portfolio Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Tiwari - FullStack Developer Portfolio",
    description:
      "FullStack Developer specializing in React.js, Next.js, TypeScript. Building innovative web applications with modern technologies and cloud platforms.",
    site: "@ashutosh-tiwari",
    creator: "@ashutosh-tiwari",
    images: [
      {
        url: "/portfolio-preview.png",
        alt: "Ashutosh Tiwari - FullStack Developer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-GB": `${siteUrl}/en-gb`,
      "en-CA": `${siteUrl}/en-ca`,
      "en-AU": `${siteUrl}/en-au`,
      "es-ES": `${siteUrl}/es`,
      "es-MX": `${siteUrl}/es-mx`,
      "fr-FR": `${siteUrl}/fr`,
      "fr-CA": `${siteUrl}/fr-ca`,
      "de-DE": `${siteUrl}/de`,
      "it-IT": `${siteUrl}/it`,
      "pt-BR": `${siteUrl}/pt-br`,
      "pt-PT": `${siteUrl}/pt`,
      "nl-NL": `${siteUrl}/nl`,
      "ja-JP": `${siteUrl}/ja`,
      "ko-KR": `${siteUrl}/ko`,
      "zh-CN": `${siteUrl}/zh-cn`,
      "zh-TW": `${siteUrl}/zh-tw`,
      "ru-RU": `${siteUrl}/ru`,
      "ar-SA": `${siteUrl}/ar`,
      "hi-IN": `${siteUrl}/hi`,
      "x-default": siteUrl,
    },
  },
  category: "Technology",
  classification: "Portfolio & Professional Services",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ashutosh Tiwari",
    "application-name": "Ashutosh Tiwari Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashutosh Tiwari",
  jobTitle: "FullStack Developer",
  description:
    "Experienced FullStack Developer specializing in React.js, Next.js, TypeScript, and modern web technologies. Skilled in building scalable web applications with Node.js, Express.js, and cloud platforms.",
  url: siteUrl,
  email: "ashutosh0tiwari@gmail.com",
  telephone: "+91 8377056538",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "India",
  },
  sameAs: [
    "https://linkedin.com/in/ashutosh-tiwari",
    "https://github.com/AshutoshDM1",
    "https://x.com/ashutosh-tiwari",
    "https://elitedev.tech",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "AWS",
    "Docker",
    "Jenkins",
    "Vercel",
    "CloudFlare",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "C++",
    "Python",
    "Hono",
    "Prisma",
    "Zod",
    "Socket.io",
    "GenAI",
    "GeminiAI",
    "FullStack Development",
    "Full Stack Development",
    "Web Development",
    "Software Engineering",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "FullStack Developer",
      description:
        "Experienced in building modern web applications with React.js, Next.js, and TypeScript",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
    description: "FullStack Development Services",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Educational Institution",
  },
  image: `${siteUrl}/ashutosh-tiwari.jpg`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={`${suse.variable} font-suse scroll-smooth`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
