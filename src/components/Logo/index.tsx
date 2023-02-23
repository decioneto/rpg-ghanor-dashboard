import Image from 'next/image';

interface LogoProps {
    size: 'xl' | 'lg' | 'md' | 'sm';
}

export function Logo({ size }: LogoProps) {
    return (
        <Image
            src="/images/logo-xl.png"
            alt="Logo"
            width={
                size === 'xl'
                    ? 240
                    : size === 'lg'
                    ? 170
                    : size === 'md'
                    ? 98
                    : 68
            }
            height={
                size === 'xl'
                    ? 230
                    : size === 'lg'
                    ? 163
                    : size === 'md'
                    ? 94
                    : 65
            }
        />
    );
}
