// src/app/layout.jsx
import './globals.css'; // Keep global styles
import { AppProvider } from '@/context/AppContext.jsx';
import ThemeHtmlTag from '@/components/layout/theme-html-tag.jsx';

export const metadata = {
  title: 'Home - Loop AI Agent UI',
  description: 'Welcome to the Loop AI Agent dashboard. Manage and interact with your AI agent seamlessly.',
  keywords: "AI agent, user interface, Loop AI, Next.js, dashboard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loopai.example.com",
    siteName: "Loop AI Agent UI",
    title: "Home - Loop AI Agent UI",
    description: "Welcome to the Loop AI Agent dashboard. Manage and interact with your AI agent seamlessly.",
    image: "/placeholder-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <ThemeHtmlTag>
        <body>
          {children}
        </body>
      </ThemeHtmlTag>
    </AppProvider>
  );
}
