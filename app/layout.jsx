// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rotaract Club of Coimbatore Cosmopolitan',
  description:
    'Official website of the Rotaract Club of Coimbatore Cosmopolitan — empowering youth through service, leadership, and community initiatives.',
  keywords:
    'Rotaract Coimbatore, Rotaract Club, Rotary International, Coimbatore Cosmopolitan, youth leadership, community service',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Rotaract Club of Coimbatore Cosmopolitan',
    description:
      'Discover our initiatives, projects, and events at the Rotaract Club of Coimbatore Cosmopolitan.',
    url: 'https://rotaractcosmopolitan.com',
    siteName: 'Rotaract Cosmopolitan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
