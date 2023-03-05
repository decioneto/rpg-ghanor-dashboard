import { Button, ButtonEnum } from '@/components/Button';
import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';
import { SelectInput, SelectItemsProps } from '@/components/Select';
import { RoleNameEnum } from '@/enums/RoleEnum';
import Link from 'next/link';

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
                <SelectInput
                    id="role"
                    hasLabel
                    labelText="Papel"
                    itens={SELECT_ITEMS}
                />
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

            <div className="absolute inset-y-0 -right-24 text-yellow-900 bg-neutral-300 p-4 h-fit rounded text-xs">
                <h6>Regras para a senha</h6>
                <p>Deve ter no mínimo 8 caracteres</p>
                <p>Deve conter pelo menos:</p>
                <ul>
                    <li>Uma letra maíuscula;</li>
                    <li>Uma letra minúscula;</li>
                    <li>Um caractere especial;</li>
                    <li>Uma numeral;</li>
                </ul>
            </div>
        </div>
    );
}
