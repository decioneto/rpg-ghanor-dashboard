import { ReactNode } from 'react';
import { Logo } from '@/components/Logo';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative">
            <div className="bg-authLeft max-w-[685px] w-full h-screen bg-no-repeat bg-contain bg-left absolute inset-y-0 left-0 -z-10 hidden lg:block" />
            <div className="flex items-center justify-center h-screen max-w-2xl mx-auto">
                <div className="flex flex-col items-center justify-center gap-8">
                    <Logo size="lg" />
                    {children}
                </div>
            </div>
            <div className="bg-authRight max-w-[685px] w-full h-screen bg-no-repeat bg-contain bg-right absolute inset-y-0 right-0 -z-10 hidden lg:block" />
        </div>
    );
}
