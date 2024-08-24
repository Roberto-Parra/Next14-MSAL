import './globals.css';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';

const ClientProvider = dynamic(() => import('@/components/ClientProvider'), { ssr: false });

export const metadata = {
  title: 'Mi Aplicación',
  description: 'Aplicación usando Next.js 14 con MSAL',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>
      <ErrorBoundary>
        <ClientProvider>
          {children}
        </ClientProvider>
      </ErrorBoundary>
      </body>
    </html>
  );
}
