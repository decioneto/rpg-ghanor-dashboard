import { Inter } from '@next/font/google';
import { FieldError } from 'react-hook-form';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

interface InputMessageProps {
  message: FieldError | undefined;
}

export function InputMessage({ message }: InputMessageProps) {
  return (
    <small className={`text-xs normal-case text-status-red ${inter.className}`}>
      {message?.message}
    </small>
  );
}
