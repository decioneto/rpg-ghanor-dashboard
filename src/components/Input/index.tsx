import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { Icon } from '../Icon';

interface InputProps {
    type: HTMLInputTypeAttribute;
    hasLabel?: boolean;
    labelText?: string;
    id: string;
    placeholder: string;
    width?: number;
    inputIcon?: JSX.Element;
    isPassword?: boolean;
    register?: UseFormRegister<FieldValues>;
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
                className="min-w-[400px] py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100"
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                {...props.register}
            />
            {props.inputIcon && (
                <Icon className="absolute bottom-6 translate-y-1/2 right-4">
                    {props.inputIcon}
                </Icon>
            )}
        </div>
    );
}
