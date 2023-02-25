import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export function Button(props: ButtonProps) {
    return <button>{props.children}</button>;
}
