import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const gelionFont = localFont({
  src: [
    {
      path: '../fonts/Gelion Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gelion Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Vital Time Tech Test',
  description: 'Technical Demonstration for Vital Time Tech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gelionFont.className}>{children}</body>
    </html>
  );
}
