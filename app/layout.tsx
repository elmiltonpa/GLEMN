import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ParticlesCursor } from '@/components/particles-cursor'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GLEMN | Desarrollo Web Profesional',
  description: 'Equipo de desarrollo web especializado en crear experiencias digitales excepcionales. Diseño, desarrollo y soluciones tecnológicas a medida.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-glemn.png',
    apple: '/logo-glemn.png',
  },
  verification: {
    google: 'cyhjRkYU-BTDi7jrXHPDeob1KazD8W3iZpUk8yDOP20',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ParticlesCursor />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
