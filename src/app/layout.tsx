import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shri Engineering | Industrial Tanks & Filters Manufacturer | ISO 9001:2015',
  description: 'Leading manufacturer of industrial tanks, filters, and filtration systems. ISO 9001:2015 certified. Custom solutions in SS316, SS304, MS, PP, UPVC. Serving chemical, pharmaceutical, and industrial sectors.',
  keywords: 'industrial tanks, industrial filters, pressure vessels, filter housings, stainless steel tanks, filtration systems, ISO certified manufacturer, Gujarat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col w-full">
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
