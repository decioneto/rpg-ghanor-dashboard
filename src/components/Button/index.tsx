import { ReactNode } from 'react';
import { Icon } from '../Icon';

export enum ButtonEnum {
    PRIMARY = 'btn-primary',
    SECONDARY = 'btn-secondary',
    TERTIARY = 'btn-tertiary',
}

interface ButtonProps {
    children: ReactNode;
    type: ButtonEnum;
    hasIcon?: boolean;
    icon?: JSX.Element;
    disabled?: boolean;
}

export function Button(props: ButtonProps) {
    return (
        <button
            className={`px-6 py-3 flex gap-2 items-center justify-center uppercase rounded text-xs ${props.type} disabled:opacity-50 disabled:bg-none`}
            disabled={props.disabled}
        >
            {props.hasIcon && <Icon className="w-4 h-4">{props.icon}</Icon>}
            {props.children}
        </button>
    );
}
