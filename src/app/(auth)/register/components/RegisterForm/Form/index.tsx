'use client';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button } from '@/components/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormBody } from '../FormBody';
import { PasswordTips } from '../PasswordTips';
import { createUserRegisterSchema } from './userSchema';
import { api } from '@/services/api';

type CreateUserRegisterData = z.infer<typeof createUserRegisterSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CreateUserRegisterData>({
    resolver: zodResolver(createUserRegisterSchema),
  });

  const passwordWatch = watch('password', '');

  async function handleFormSubmit({
    username,
    roleName,
    password,
  }: CreateUserRegisterData) {
    await api
      .post('users/create', {
        username,
        roleName,
        password,
      })
      .then(() => {
        toast.success('Usuário criado com sucesso');
      })
      .catch((err) => {
        toast.error(`Erro ao tentar criar o usuário, ${err}`);
      });
  }

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h3 className="h3 text-yellow-900 flex-1">Criar novo cadastro</h3>
      <FormBody register={register} errors={errors} control={control} />
      <div className="flex items-center justify-between">
        <PasswordTips password={passwordWatch} />
        <Button.Root styleType="SECONDARY" type="submit">
          <Button.Text>Criar conta</Button.Text>
        </Button.Root>
      </div>
    </form>
  );
}
