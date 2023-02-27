import { HTMLInputTypeAttribute } from 'react';
import { EyeOff } from 'react-feather';
import { Icon } from '../Icon';

interface InputProps {
    type: HTMLInputTypeAttribute;
    hasLabel: boolean;
    labelText?: string;
    id: string;
    placeholder: string;
    width: number;
    inputIcon?: JSX.Element;
    isPassword?: boolean;
}

export function Input(props: InputProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            {props.hasLabel && (
                <label htmlFor={props.id} className="text-yellow-100">
                    {props.labelText}
                </label>
            )}
            <input
                className="min-w-[400px] py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100 uppercase"
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
            />
            {props.inputIcon && (
                <Icon className="absolute bottom-6 translate-y-1/2 right-4">
                    {props.inputIcon}
                </Icon>
            )}

            {props.isPassword && (
                <button className="absolute bottom-5 translate-y-1/2 right-4">
                    <EyeOff size={16} />
                </button>
            )}
        </div>
    );
}
