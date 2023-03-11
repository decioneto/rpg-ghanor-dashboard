import { HTMLInputTypeAttribute } from 'react';
import { FieldError } from 'react-hook-form';
import { Icon } from '../Icon';
import { ErrorMessage } from './ErrorMessage';

interface InputProps {
    type: HTMLInputTypeAttribute;
    hasLabel?: boolean;
    labelText?: string;
    id: string;
    placeholder: string;
    inputIcon?: JSX.Element;
    isPassword?: boolean;
    register?: any;
    errors?: FieldError | undefined;
}

export function Input(props: InputProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            {props.hasLabel && (
                <label htmlFor={props.id} className="text-yellow-100">
                    {props.labelText}
                </label>
            )}
            <div>
                <input
                    className="flex-inline w-full py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100"
                    type={props.type}
                    id={props.id}
                    placeholder={props.placeholder}
                    {...props.register}
                />
                {props.inputIcon && (
                    <Icon className="absolute top-1/2 -translate-y-1/2 right-4">
                        {props.inputIcon}
                    </Icon>
                )}
            </div>
            {props.errors && (
                <ErrorMessage message="Este campo é obrigatório" />
            )}
        </div>
    );
}
