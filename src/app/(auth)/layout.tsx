import { ReactNode } from 'react';
import { Logo } from '@components/Logo';
import { Inknut_Antiqua } from '@next/font/google';

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: '700',
});

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={`relative ${inknutAntiqua.className}`}>
      <div className="bg-authLeft max-w-[685px] w-full h-screen bg-no-repeat bg-contain bg-left absolute inset-y-0 left-0 -z-10 hidden lg:block" />
      <div className="flex items-center justify-center h-screen w-full max-w-[572px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <Logo size="lg" />
          {children}
        </div>
      </div>
      <div className="bg-authRight max-w-[685px] w-full h-screen bg-no-repeat bg-contain bg-right absolute inset-y-0 right-0 -z-10 hidden lg:block" />
    </div>
  );
}
