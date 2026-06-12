import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sonakshi Bhargava | Mental Health Professional',
  description: 'Counselling Psychologist and PhD Scholar offering therapy services for mental wellness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#f5f1ed]">{children}</body>
    </html>
  )
}
