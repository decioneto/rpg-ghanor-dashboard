'use client';

import { Button, ButtonEnum } from '@/components/Button';
import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';
import { SwordIcon } from '@/CustomIcons/SwordIcon';
import Link from 'next/link';
import { FormEvent } from 'react';

export default function SignIn() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <div className="border border-yellow-100 p-8 relative">
            <div className="after:block after:border after:absolute after:border-yellow-100 after:w-4 after:h-4 after:-left-4 after:-bottom-4 before:block before:border before:absolute before:border-yellow-100 before:w-4 before:h-4 before:-right-4 before:-bottom-4" />
            <div className="after:block after:border after:absolute after:border-yellow-100 after:w-4 after:h-4 after:-left-4 after:-top-4 before:block before:border before:absolute before:border-yellow-100 before:w-4 before:h-4 before:-right-4 before:-top-4" />
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    id="username"
                    placeholder="Digite o usuário"
                    hasLabel={true}
                    labelText={'Usuário'}
                />
                <InputPassword
                    id="password"
                    placeholder="Digite a senha"
                    hasLabel={true}
                    labelText={'Senha'}
                />
                <div className="flex gap-4 ml-auto">
                    <Link
                        href="register"
                        className="py-4 px-2 btn-tertiary text-xs"
                    >
                        Criar conta
                    </Link>
                    <Button
                        type={ButtonEnum.SECONDARY}
                        hasIcon
                        icon={<SwordIcon />}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}
