'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormBody } from '../FormBody';
import { PasswordTips } from '../PasswordTips';
import { createUserRegisterSchema } from './userSchema';
import { useState } from 'react';

type CreateUserRegisterData = z.infer<typeof createUserRegisterSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserRegisterData>({
    resolver: zodResolver(createUserRegisterSchema),
  });
  const [password, setPassword] = useState('');

  function handleFormSubmit(data: CreateUserRegisterData) {
    console.log(data);
  }
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h3 className="h3 text-yellow-900 flex-1">Criar novo cadastro</h3>
      <FormBody register={register} errors={errors} control={control} />
      <div className="flex items-center justify-between">
        <PasswordTips />
        <Button.Root styleType="SECONDARY" type="submit">
          <Button.Text>Criar conta</Button.Text>
        </Button.Root>
      </div>
    </form>
  );
}
