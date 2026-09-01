import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '钱森 · WEIWEICurry | Java 后端与 Agent 应用开发',
  description: '钱森（WEIWEICurry）的个人作品集，聚焦 Java 后端、Agent 应用与全栈产品工程。',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '钱森 · WEIWEICurry | Build the System.',
    description: 'Java 后端深度、Agent 原生交付与全栈产品工程。',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'WEIWEICurry - Build the System.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '钱森 · WEIWEICurry | Build the System.',
    description: 'Java 后端深度、Agent 原生交付与全栈产品工程。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
