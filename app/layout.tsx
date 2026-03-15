import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ParticlesCursor } from '@/components/particles-cursor'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GLEM | Desarrollo Web Profesional',
  description: 'Equipo de desarrollo web especializado en crear experiencias digitales excepcionales. Diseño, desarrollo y soluciones tecnológicas a medida.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-glemn.png',
    apple: '/logo-glemn.png',
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
        <Analytics />
      </body>
    </html>
  )
}
