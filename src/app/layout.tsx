import '../styles/globals.css';
import type { ReactNode } from 'react';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
