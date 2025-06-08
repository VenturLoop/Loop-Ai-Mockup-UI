import { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/context/AppContext.jsx';

export const metadata = {
  title: 'Loop AI Agent UI',
  description: 'A Next.js application for the Loop AI Agent.',
  // Add other relevant SEO metadata like keywords, openGraph, etc.
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
