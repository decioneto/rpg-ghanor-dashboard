import { Button, ButtonEnum } from '@/components/Button';
import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';
import { SelectInput } from '@/components/Select';
import Link from 'next/link';

export default function Register() {
    return (
        <div>
            <h3 className="h3 text-yellow-900 pb-8">Criar novo cadastro</h3>

            <form className="flex flex-col gap-8">
                <Input
                    type="text"
                    id="username"
                    placeholder="Usuário"
                    hasLabel={true}
                    labelText="Nome do usuário"
                />
                <SelectInput id="role" hasLabel labelText="Papel" />
                <InputPassword
                    id="password"
                    placeholder="Senha"
                    hasLabel={true}
                    labelText="Crie uma senha"
                />
                <InputPassword
                    id="confirm-password"
                    placeholder="Confirme sua senha"
                    hasLabel={true}
                    labelText="Confirme sua senha"
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
        </div>
    );
}
