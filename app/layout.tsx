import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Nexus Agency - Multi-Agent Automation & AI Solutions',
  description: 'Leading AI agency specializing in designing and deploying multi-agent automation systems, AI video generation, and intelligent solutions across industries.',
  keywords: 'AI agency, multi-agent automation, AI video generation, digital agents, automation solutions',
  authors: [{ name: 'AI Nexus Agency' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

