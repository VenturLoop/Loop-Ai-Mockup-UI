// src/components/layout/theme-html-tag.jsx
"use client";

import { useContext } from 'react';
import { AppContext } from '@/context/AppContext.jsx'; // Assuming AppContext is exported

export default function ThemeHtmlTag({ children }) {
  const context = useContext(AppContext);
  // Guard against context being undefined during initial renders or if provider is missing higher up (though layout.jsx should prevent this)
  const isDark = context ? context.isDark : false;

  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      {/* Children will typically include the <body> tag passed from RootLayout */}
      {children}
    </html>
  );
}
