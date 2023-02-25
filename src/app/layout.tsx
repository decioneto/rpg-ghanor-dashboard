import { ReactNode } from 'react';

import { Inknut_Antiqua } from '@next/font/google';

const inknutAntiqua = Inknut_Antiqua({
    subsets: ['latin'],
    weight: '700',
});

import '../styles/global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ptBR" className={inknutAntiqua.className}>
            <head />
            <body className="h-screen bg-neutral-200 relative text-sm uppercase">
                {children}
            </body>
        </html>
    );
}
