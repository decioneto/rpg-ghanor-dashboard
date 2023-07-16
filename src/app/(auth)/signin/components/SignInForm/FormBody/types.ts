import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormBodyProps {
  register: UseFormRegister<{
    user: string;
    password: string;
  }>;
  errors: FieldErrors<{
    user: string;
    password: string;
  }>;
}
