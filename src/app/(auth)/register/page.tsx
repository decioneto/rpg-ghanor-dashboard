'use client';

import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { Button, ButtonEnum } from '@/components/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';
import { SelectInput, SelectItemsProps } from '@/components/Select';
import { RoleNameEnum } from '@/enums/RoleEnum';

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

const createUserRegisterSchema = z.object({
    user: z
        .string()
        .nonempty('Este campo é obrigatório')
        .min(2, 'Seu nome de usuário deve conter pelo menos 2 caracteres'),
    role: z.string().nonempty('Este campo é obrigatório'),
    password: z.string().nonempty('Este campo é obrigatório'),
    confirmPass: z.string().nonempty('Este campo é obrigatório'),
});

type CreateUserRegisterData = z.infer<typeof createUserRegisterSchema>;

export default function Register() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<CreateUserRegisterData>({
        resolver: zodResolver(createUserRegisterSchema),
    });

    function handleFormSubmit({
        user,
        role,
        password,
    }: CreateUserRegisterData) {
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
                        ...register('user'),
                    }}
                    errors={errors.user}
                />
                <Controller
                    control={control}
                    name="role"
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
                        ...register('password'),
                    }}
                    errors={errors.password}
                />
                <InputPassword
                    id="confirm-password"
                    placeholder="Confirme sua senha"
                    hasLabel={true}
                    labelText="Confirme sua senha"
                    register={{
                        ...register('confirmPass'),
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
                <ul>
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
