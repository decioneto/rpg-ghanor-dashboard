'use client';

import { ReactNode } from 'react';
import { Inknut_Antiqua } from 'next/font/google';
import { AuthContextProvider } from '@/contexts/AuthContext';

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: '700',
});

import '../styles/global.css';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ptBR" className={inknutAntiqua.className}>
      <head />
      <body className="h-screen bg-neutral-200 relative text-sm uppercase">
        <AuthContextProvider>
          {children}
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 3000,
            }}
            containerStyle={{
              textTransform: 'capitalize',
              fontFamily: 'sans-serif',
              fontWeight: 'normal',
            }}
          />
        </AuthContextProvider>
      </body>
    </html>
  );
}
