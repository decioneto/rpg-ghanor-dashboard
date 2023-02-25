import { ReactNode } from 'react';

interface IconProps {
    children: ReactNode;
    className?: string;
}

export function Icon(props: IconProps) {
    return <div className={props.className}>{props.children}</div>;
}
