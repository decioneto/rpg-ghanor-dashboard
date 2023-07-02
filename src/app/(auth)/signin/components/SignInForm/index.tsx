'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormFooter } from './FormFooter';
import { FormBody } from './FormBody';

const createUserSignInSchema = z.object({
  user: z.string().nonempty('Esse campo é obrigatório'),
  password: z.string().nonempty('Esse campo é obrigatório'),
});

type CreateUserSignInData = z.infer<typeof createUserSignInSchema>;

export function SignInForm() {
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

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormBody register={register} errors={errors} />
      <FormFooter />
    </form>
  );
}
