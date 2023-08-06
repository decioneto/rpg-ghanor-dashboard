import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormBodyProps {
  register: UseFormRegister<{
    username: string;
    roleName: string;
    password: string;
    confirmPass: string;
  }>;
  errors: FieldErrors<{
    username: string;
    roleName: string;
    password: string;
    confirmPass: string;
  }>;
  control: Control<{
    username: string;
    roleName: string;
    password: string;
    confirmPass: string;
  }>;
}
