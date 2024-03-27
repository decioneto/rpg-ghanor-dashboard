import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/Input';
import { SelectInput, SelectItemsProps } from '@/components/Select';
import { ViewPassword } from '@/components/ViewPassword';
import { RoleNameEnum } from '@/enums/RoleNameEnum';
import { FormBodyProps } from './types';

const SELECT_ITEMS: SelectItemsProps[] = [
  {
    value: RoleNameEnum.MASTER,
    text: 'Mestre',
  },
  {
    value: RoleNameEnum.PLAYER,
    text: 'Jogador',
  },
];

export function FormBody({ register, errors, control }: FormBodyProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisible() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <Input.Root>
        <Input.Label htmlFor="user-name" text="Nome de usuário" />
        <Input.Field
          id="user-name"
          placeholder="Escolha o nome do seu usuário"
          register={{ ...register('username') }}
          type="text"
        ></Input.Field>
        <Input.Message message={errors.username} />
      </Input.Root>
      <Controller
        control={control}
        name="roleName"
        render={({ field: { onChange } }) => (
          <SelectInput
            id="roleName"
            hasLabel
            labelText="Papel"
            itens={SELECT_ITEMS}
            register={{ ...register('roleName') }}
            onChange={onChange}
            errors={errors.roleName}
          />
        )}
      />
      <Input.Root>
        <Input.Label htmlFor="pass" text="Senha" />
        <Input.Field
          id="pass"
          placeholder="Crie uma senha"
          register={{ ...register('password') }}
          type={isVisible ? 'text' : 'password'}
        >
          <ViewPassword handleVisible={handleVisible} isVisible={isVisible} />
        </Input.Field>
        <Input.Message message={errors.password} />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="confirmPass" text="Confirmar senha" />
        <Input.Field
          id="confirmPass"
          placeholder="Repita a senha"
          register={{ ...register('confirmPass') }}
          type={isVisible ? 'text' : 'password'}
        >
          <ViewPassword handleVisible={handleVisible} isVisible={isVisible} />
        </Input.Field>
        <Input.Message message={errors.confirmPass} />
      </Input.Root>
    </>
  );
}
