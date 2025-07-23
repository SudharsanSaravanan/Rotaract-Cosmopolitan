// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>WebCraft - Professional Website Development</title>
        <meta name="description" content="We create stunning, professional websites that help businesses grow and succeed in the digital world." />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

