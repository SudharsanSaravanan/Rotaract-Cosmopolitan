import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rotaract Club of Coimbatore Cosmopolitan',
  description:
    'Official website of the Rotaract Club of Coimbatore Cosmopolitan — empowering youth through service, leadership, and community initiatives.',
  keywords:
    'Rotaract Coimbatore, Rotaract Club, Rotary International, Coimbatore Cosmopolitan, youth leadership, community service, Rotaract CBE, Rotaract Cosmopolitan Coimbatore',
  metadataBase: new URL('https://www.rotaractcbecosmopolitan.in'),

  alternates: {
    canonical: 'https://www.rotaractcbecosmopolitan.in',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    title: 'Rotaract Club of Coimbatore Cosmopolitan',
    description:
      'Discover our initiatives, projects, and events at the Rotaract Club of Coimbatore Cosmopolitan.',
    url: 'https://www.rotaractcbecosmopolitan.in',
    siteName: 'Rotaract Cosmopolitan',
    images: [
      {
        url: '/og-image.jpg',
        width: 967,
        height: 967,
        alt: 'Rotaract Cosmopolitan - Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rotaract Club of Coimbatore Cosmopolitan',
    description:
      'Empowering youth through service, leadership, and impactful community projects.',
    images: ['/og-image.jpg'],
  },

  other: {
    humans: '/humans.txt',
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rotaract Club of Coimbatore Cosmopolitan",
    url: "https://www.rotaractcbecosmopolitan.in",
    logo: "https://www.rotaractcbecosmopolitan.in/favicon.ico",
    sameAs: [
      "https://www.instagram.com/rac_cbe_cosmopolitan/",
      "https://www.linkedin.com/company/rotaract-club-of-coimbatore-cosmopolitan/",
      "https://www.facebook.com/coimbatorecosmopolitan.coimbatorecosmopolitan.9/",
    ],
    description:
      "Official website of the Rotaract Club of Coimbatore Cosmopolitan — empowering youth through service, leadership, and community initiatives.",
  }

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="ORJp0cjDc2NeVI4gEETkwtzGDafh2N6dYaxHkgwTkfE"
        />

        {/* ✅ JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* ✅ Backup robots meta tag */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* ✅ Sitemap and Robots for discoverability */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />

        {/* ✅ Humans.txt reference */}
        <link rel="author" href="/humans.txt" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}