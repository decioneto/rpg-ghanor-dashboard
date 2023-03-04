'use client';

import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'react-feather';

interface SelectInputProps {
    hasLabel?: boolean;
    labelText?: string;
    id: string;
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
                <Select.Trigger className="flex items-center justify-between py-3 px-4 bg-yellow-900 rounded text-black border uppercase text-left outline-none">
                    <Select.Value
                        placeholder="Selecione seu papel..."
                        className="uppercase"
                    />
                    <Select.Icon>
                        <ChevronDown size={12} />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content>
                        <Select.Viewport className="bg-yellow-900">
                            <Select.Item value="item 1" className="text-white">
                                Item 1
                            </Select.Item>
                            <Select.Item value="item 2">Item 2</Select.Item>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
