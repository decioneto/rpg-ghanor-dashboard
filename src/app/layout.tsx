import { ReactNode } from 'react';

import '../styles/global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <head />
            <body>{children}</body>
        </html>
    );
}
