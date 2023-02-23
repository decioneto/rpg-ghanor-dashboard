import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
    type: HTMLInputTypeAttribute;
    hasLabel: boolean;
    labelText?: string;
    id: string;
    placeholder: string;
    width: number;
}

export function Input({
    type,
    hasLabel,
    labelText,
    id,
    placeholder,
    width,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            {hasLabel && (
                <label htmlFor={id} className="text-yellow-100">
                    {labelText}
                </label>
            )}
            <input
                className={`min-w-[${width}px] py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100`}
                type={type}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
}
