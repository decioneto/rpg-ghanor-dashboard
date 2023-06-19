'use client';

import { ChangeEvent, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { Icon } from '../Icon';
import { ErrorMessage } from '../Input/ErrorMessage';
import { ViewPassword } from '../ViewPassword';

interface InputPasswordProps {
    hasLabel: boolean;
    labelText?: string;
    id: string;
    placeholder: string;
    width?: number;
    inputIcon?: JSX.Element;
    register?: any;
    errors?: FieldError | undefined;
}

export function InputPassword(props: InputPasswordProps) {
    const [isVisible, setIsVisible] = useState(false);

    function handleVisible() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex flex-col gap-2">
            {props.hasLabel && (
                <label htmlFor={props.id} className="text-yellow-100">
                    {props.labelText}
                </label>
            )}
            <div className="relative">
                <input
                    className="min-w-[400px] py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100"
                    type={isVisible ? 'text' : 'password'}
                    id={props.id}
                    placeholder={props.placeholder}
                    {...props.register}
                />

                <ViewPassword
                    handleVisible={handleVisible}
                    isVisible={isVisible}
                />
            </div>

            {props.errors && props.errors.message && (
                <ErrorMessage message={props.errors.message} />
            )}
        </div>
    );
}
