import { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative">
            <div className="bg-authLeft w-[685px] h-screen bg-no-repeat bg-cover absolute inset-y-0 left-0 -z-10" />
            <div className="flex items-center justify-center h-screen max-w-2xl mx-auto">
                {children}
            </div>
            <div className="bg-authRight w-[685px] h-screen bg-no-repeat bg-cover absolute inset-y-0 right-0 -z-10" />
        </div>
    );
}
