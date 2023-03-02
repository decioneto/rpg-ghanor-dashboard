'use client';

import { useState } from 'react';
import { Icon } from '../Icon';
import { ViewPassword } from '../ViewPassword';

interface InputPasswordProps {
    hasLabel: boolean;
    labelText?: string;
    id: string;
    placeholder: string;
    width?: number;
    inputIcon?: JSX.Element;
}

export function InputPassword(props: InputPasswordProps) {
    const [isVisible, setIsVisible] = useState(false);

    function handleVisible() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex flex-col gap-2 relative">
            {props.hasLabel && (
                <label htmlFor={props.id} className="text-yellow-100">
                    {props.labelText}
                </label>
            )}
            <input
                className="min-w-[400px] py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100 uppercase"
                type={isVisible ? 'text' : 'password'}
                id={props.id}
                placeholder={props.placeholder}
            />
            {props.inputIcon && (
                <Icon className="absolute bottom-6 translate-y-1/2 right-4">
                    {props.inputIcon}
                </Icon>
            )}

            <ViewPassword handleVisible={handleVisible} isVisible={isVisible} />
        </div>
    );
}
