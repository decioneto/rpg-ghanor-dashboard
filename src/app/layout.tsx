import { ReactNode } from 'react';

import '../styles/global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <head />
            <body className="h-screen bg-neutral-200 relative">{children}</body>
        </html>
    );
}
