import { ButtonHTMLAttributes, ReactNode } from 'react';

const ButtonStyleType = {
  PRIMARY: 'btn-primary',
  SECONDARY: 'btn-secondary',
  TERTIARY: 'btn-tertiary',
};

type ButtonEnum = keyof typeof ButtonStyleType;

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleType: ButtonEnum;
}

export function ButtonRoot({
  children,
  styleType,
  disabled,
  ...props
}: ButtonRootProps) {
  return (
    <button
      {...props}
      className={`px-6 py-3 flex gap-2 items-center justify-center uppercase rounded text-xs ${ButtonStyleType[styleType]} disabled:opacity-50 disabled:bg-none`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
