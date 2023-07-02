import { useState } from 'react';
import { Input } from '@/components/Input';
import { ViewPassword } from '@/components/ViewPassword';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FormBodyProps {
  register: UseFormRegister<{
    user: string;
    password: string;
  }>;
  errors: FieldErrors<{
    user: string;
    password: string;
  }>;
}

export function FormBody({ register, errors }: FormBodyProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Input.Root>
        <Input.Label htmlFor="user" text="Usuário" />
        <Input.Field
          id="user"
          type="text"
          placeholder="Digite seu usuário"
          register={{ ...register('user') }}
        />
        <Input.Message message={errors.user} />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="password" text="Senha" />
        <Input.Field
          id="password"
          type={isVisible ? 'text' : 'password'}
          placeholder="Digite sua senha"
          register={{ ...register('password') }}
        >
          <ViewPassword handleVisible={handleVisible} isVisible={isVisible} />
        </Input.Field>
        <Input.Message message={errors.password} />
      </Input.Root>
    </>
  );
}
