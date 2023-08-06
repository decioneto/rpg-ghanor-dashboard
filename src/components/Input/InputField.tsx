import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';

interface InputFieldProps {
  type: HTMLInputTypeAttribute;
  id: string;
  placeholder: string;
  register: any;
  children?: ReactNode;
}

export function InputField({
  id,
  placeholder,
  register,
  type,
  children,
}: InputFieldProps) {
  return (
    <div className="relative lg:min-w-[350px]">
      <input
        className="flex-inline w-full py-3 px-4 bg-yellow-900 rounded text-black border placeholder:text-neutral-700 outline-none focus:border focus:border-yellow-100"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {children && children}
    </div>
  );
}
