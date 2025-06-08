import { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/context/AppContext.jsx';

export const metadata = {
  title: 'Loop AI Agent UI',
  description: 'A Next.js application for the Loop AI Agent.',
  keywords: "AI agent, user interface, Loop AI, Next.js, dashboard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loopai.example.com",
    siteName: "Loop AI Agent UI",
    title: "Loop AI Agent UI",
    description: "A Next.js application for the Loop AI Agent.",
    image: "/placeholder-logo.png",
  },
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
