import { z } from 'zod';

export const createUserRegisterSchema = z
  .object({
    username: z
      .string()
      .nonempty('Este campo é obrigatório')
      .min(2, 'Seu nome de usuário deve conter pelo menos 2 caracteres'),
    roleName: z.string().nonempty('Este campo é obrigatório'),
    password: z
      .string()
      .nonempty('Este campo é obrigatório')
      .min(8, { message: 'A senha deve conter no mínimo 8 caracteres' })
      .regex(/(?=.*?[A-Z])/, {
        message: 'A senha deve conter pelo menos 1 letra maíscula',
      })
      .regex(/(?=.*?[a-z])/, {
        message: 'A senha deve conter pelo menos 1 letra minúscula',
      })
      .regex(/(?=.*?[0-9])/, {
        message: 'A senha deve conter pelo menos 1 número',
      })
      .regex(/(?=.*?[#?!@$%^&*-])/, {
        message: 'A senha deve conter pelo menos 1 caractere especial',
      }),
    confirmPass: z.string().nonempty('Este campo é obrigatório'),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPass'],
  });
