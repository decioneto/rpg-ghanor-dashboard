'use client';

import Link from 'next/link';
import { useForm, FieldValues, Controller } from 'react-hook-form';
import { Button, ButtonEnum } from '@/components/Button';
import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';
import { SelectInput, SelectItemsProps } from '@/components/Select';
import { RoleNameEnum } from '@/enums/RoleEnum';
import { useEffect } from 'react';
import { ValidatePassword } from '@/utils/validatePassword';

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

export interface SubmitResponse {
    user: string;
    role: string;
    password: string;
    confirmPass: string;
}

export default function Register() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<SubmitResponse>({
        defaultValues: {
            user: '',
            password: '',
            role: '',
        },
    });

    function handleFormSubmit({ user, role, password }: SubmitResponse) {
        if (!ValidatePassword.execute(password)) return;

        console.log(user, role, password);
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <form
                className="flex flex-col gap-8"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <h3 className="h3 text-yellow-900 flex-1">
                    Criar novo cadastro
                </h3>

                <Input
                    type="text"
                    id="username"
                    placeholder="Usuário"
                    hasLabel={true}
                    labelText="Nome do usuário"
                    register={{
                        ...register('user', { required: true }),
                    }}
                    errors={errors.user}
                />
                <Controller
                    control={control}
                    name="role"
                    rules={{ required: true }}
                    render={({
                        field: { onChange },
                        formState: { errors },
                    }) => (
                        <SelectInput
                            id="role"
                            hasLabel
                            labelText="Papel"
                            itens={SELECT_ITEMS}
                            register={register}
                            name="role"
                            onChange={onChange}
                            errors={errors.role}
                        />
                    )}
                />
                <InputPassword
                    id="password"
                    placeholder="Senha"
                    hasLabel={true}
                    labelText="Crie uma senha"
                    register={{
                        ...register('password', {
                            required: {
                                value: true,
                                message: 'Este campo é obrigatório',
                            },
                        }),
                    }}
                    errors={errors.password}
                />
                <InputPassword
                    id="confirm-password"
                    placeholder="Confirme sua senha"
                    hasLabel={true}
                    labelText="Confirme sua senha"
                    register={{
                        ...register('confirmPass', {
                            required: {
                                value: true,
                                message: 'Este campo é obrigatório',
                            },
                        }),
                    }}
                    errors={errors.confirmPass}
                />

                <div className="flex gap-4 ml-auto">
                    <Link
                        href="signin"
                        className="py-4 px-2 btn-tertiary text-xs"
                    >
                        Voltar
                    </Link>
                    <Button type={ButtonEnum.SECONDARY}>Criar conta</Button>
                </div>
            </form>

            <div className="text-yellow-900 bg-neutral-300 p-4 h-fit rounded text-[10px]">
                <h6>A senha deve conter:</h6>
                <ul className="text-neutral-500">
                    <li>No mínimo 8 caracteres;</li>
                    <li>Uma letra maíuscula;</li>
                    <li>Uma letra minúscula;</li>
                    <li>Um caractere especial;</li>
                    <li>Um numeral;</li>
                </ul>
            </div>
        </div>
    );
}
