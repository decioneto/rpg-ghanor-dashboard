import { ReactNode } from 'react';

interface ButtonTextProps {
  children: ReactNode;
}

export function ButtonText({ children }: ButtonTextProps) {
  return <div>{children}</div>;
}
