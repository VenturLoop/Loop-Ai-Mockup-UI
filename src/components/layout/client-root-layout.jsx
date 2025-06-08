// src/components/layout/client-root-layout.jsx
"use client";

import { useContext } from 'react';
import { AppContext, AppProvider } from '@/context/AppContext.jsx';

export default function ClientRootLayout({ children }) {
  const { isDark } = useContext(AppContext);

  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
