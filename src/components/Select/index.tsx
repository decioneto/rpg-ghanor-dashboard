'use client';

import React, { ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';
import { FieldError } from 'react-hook-form';
import { Check, ChevronDown } from 'react-feather';
import { RoleNameEnum } from '@/enums/RoleEnum';
import { ErrorMessage } from '../Input/ErrorMessage';

interface SelectInputProps {
    hasLabel?: boolean;
    labelText?: string;
    id: string;
    itens: SelectItemsProps[];
    register: any;
    name: string;
    onChange: (...event: any[]) => void;
    errors?: FieldError | undefined;
}

export interface SelectItemsProps {
    value: RoleNameEnum;
    text: string;
}

export function SelectInput(props: SelectInputProps) {
    return (
        <div className="flex flex-col gap-2 relative">
            {props.hasLabel && (
                <label htmlFor={props.id} className="text-yellow-100">
                    {props.labelText}
                </label>
            )}
            <Select.Root onValueChange={props.onChange}>
                <Select.Trigger className="flex items-center justify-between py-3 px-4 bg-yellow-900 rounded text-black border text-left outline-none">
                    <Select.Value placeholder="Selecione seu papel..." />
                    <Select.Icon>
                        <ChevronDown size={12} />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="overflow-hidden">
                        <Select.Viewport className="bg-yellow-900 py-3 px-4 rounded flex flex-col gap-4">
                            {props.itens.map((item) => (
                                <Select.Item
                                    value={item.value}
                                    className="flex items-center justify-between h-8 hover:text-yellow-100 cursor-pointer capitalize outline-none"
                                    key={item.value}
                                >
                                    <Select.ItemText>
                                        {item.text}
                                    </Select.ItemText>
                                    <Select.ItemIndicator>
                                        <Check size={12} />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
            {props.errors && (
                <ErrorMessage message="Este campo é obrigatório" />
            )}
        </div>
    );
}
