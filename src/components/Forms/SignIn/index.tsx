'use client';

import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ViewPassword } from '@/components/ViewPassword';
import { SwordIcon } from '@/CustomIcons/SwordIcon';

const createUserSignInSchema = z.object({
  user: z.string().nonempty('Esse campo é obrigatório'),
  password: z.string().nonempty('Esse campo é obrigatório'),
});

type CreateUserSignInData = z.infer<typeof createUserSignInSchema>;

export function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSignInData>({
    resolver: zodResolver(createUserSignInSchema),
  });

  function handleFormSubmit(data: CreateUserSignInData) {
    console.log(data);
  }

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
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
      <div className="flex gap-4 ml-auto">
        <Link href="register" className="py-4 px-2 btn-tertiary text-xs">
          Criar conta
        </Link>
        <Button.Root styleType="SECONDARY">
          <Button.Icon icon={SwordIcon} />
          <Button.Text>Login</Button.Text>
        </Button.Root>
      </div>
    </form>
  );
}
