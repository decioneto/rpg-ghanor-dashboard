'use client';

import React, { ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'react-feather';
import { RoleNameEnum } from '@/enums/RoleEnum';

interface SelectInputProps {
    hasLabel?: boolean;
    labelText?: string;
    id: string;
    itens: SelectItemsProps[];
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
            <Select.Root>
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
        </div>
    );
}
