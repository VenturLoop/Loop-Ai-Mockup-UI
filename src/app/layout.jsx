// src/app/layout.jsx
import './globals.css';
import ClientRootLayout from '@/components/layout/client-root-layout.jsx';

export const metadata = {
  title: 'Home - Loop AI Agent UI', // Updated
  description: 'Welcome to the Loop AI Agent dashboard. Manage and interact with your AI agent seamlessly.', // Updated
  keywords: "AI agent, user interface, Loop AI, Next.js, dashboard", // Keep existing
  openGraph: {
    type: "website", // Keep existing
    locale: "en_US", // Keep existing
    url: "https://loopai.example.com", // Keep existing
    siteName: "Loop AI Agent UI", // Keep existing
    title: "Home - Loop AI Agent UI", // Updated
    description: "Welcome to the Loop AI Agent dashboard. Manage and interact with your AI agent seamlessly.", // Updated
    image: "/placeholder-logo.png", // Keep existing
  },
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
