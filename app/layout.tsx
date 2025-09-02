import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Logo from '@/public/img/logo2.png';
const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Project Oasis',
  description: 'Project Oasis Documentation',
  icons: {
    icon: '/img/logo2.png'
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900"
        style={{
          background:
            'linear-gradient(to right, rgba(200, 200, 200, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
