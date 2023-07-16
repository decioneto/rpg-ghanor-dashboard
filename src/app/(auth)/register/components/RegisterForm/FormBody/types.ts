import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormBody {
  register: UseFormRegister<{
    user: string;
    role: string;
    password: string;
    confirmPass: string;
  }>;
  errors: FieldErrors<{
    user: string;
    role: string;
    password: string;
    confirmPass: string;
  }>;
  control: Control<
    {
      user: string;
      role: string;
      password: string;
      confirmPass: string;
    },
    any
  >;
}
