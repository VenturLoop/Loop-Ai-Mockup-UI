// src/app/layout.jsx
import './globals.css'; // Keep global styles
import { AppProvider } from '@/context/AppContext.jsx';
import ThemeHtmlTag from '@/components/layout/theme-html-tag.jsx';

export const metadata = {
  title: "Loop AI: Your Autonomous Startup Advisor",
  description: "Loop AI is your autonomous startup advisor—offering personalized guidance, and smart search for co-founders and investors. Get startup-specific insights, connect faster, and build smarter with AI tailored for founders.",
  keywords: "startup advisor, AI business guidance, co-founder search, investor search, AI for founders, Loop AI, autonomous advisor, startup insights",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loopai.app",
    siteName: "Loop AI",
    title: "Loop AI: Your Autonomous Startup Advisor",
    description: "Loop AI is your autonomous startup advisor—offering personalized guidance, and smart search for co-founders and investors. Get startup-specific insights, connect faster, and build smarter with AI tailored for founders.",
    image: "/loop-avatar.png", // Assuming this image will be in the /public directory
  },
  twitterCard: {
    card: "summary_large_image",
    title: "Loop AI: Your Autonomous Startup Advisor",
    description: "Loop AI is your autonomous startup advisor—offering personalized guidance, and smart search for co-founders and investors.",
    images: ["/loop-avatar.png"], // Assuming this image will be in the /public directory
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <ThemeHtmlTag>
        <meta name="google-site-verification" content="snd-I258bhB6IOfksIhOgqUy-8AiQJU4hS2J5TnvXIE" />
        <body>
          {children}
        </body>
      </ThemeHtmlTag>
    </AppProvider>
  );
}
