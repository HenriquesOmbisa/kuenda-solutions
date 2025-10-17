// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kuenda Solutions - O Seu Parceiro Ideal',
  description: 'Soluções integradas em consumíveis de escritório, equipamentos informáticos, proteção e segurança, e serviços gráficos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <NextTopLoader
  color="#0f172b"
  initialPosition={0.08}
  crawlSpeed={200}
  height={4}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={400}
  shadow="0 0 10px rgba(226, 232, 240, 0.3)"
  zIndex={1600}
  showAtBottom={false}
/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}