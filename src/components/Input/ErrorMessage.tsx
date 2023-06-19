import { Inter } from '@next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: '400',
});

interface ErrorMessageProps {
    message: string | undefined;
}

export function ErrorMessage(props: ErrorMessageProps) {
    return (
        <small
            className={`text-xs normal-case text-status-red ${inter.className}`}
        >
            {props.message}
        </small>
    );
}
