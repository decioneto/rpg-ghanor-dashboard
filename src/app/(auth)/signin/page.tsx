import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { EyeOff } from 'react-feather';

export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <Logo size="lg" />

            <div className="border border-yellow-100 p-4 relative">
                <div className="after:block after:border after:absolute after:border-yellow-100 after:w-4 after:h-4 after:-left-4 after:-bottom-4 before:block before:border before:absolute before:border-yellow-100 before:w-4 before:h-4 before:-right-4 before:-bottom-4" />
                <div className="after:block after:border after:absolute after:border-yellow-100 after:w-4 after:h-4 after:-left-4 after:-top-4 before:block before:border before:absolute before:border-yellow-100 before:w-4 before:h-4 before:-right-4 before:-top-4" />
                <form className="flex flex-col gap-4">
                    <Input
                        type="text"
                        id="username"
                        placeholder="Digite o usuário"
                        hasLabel={true}
                        labelText={'Usuário'}
                        width={400}
                    />
                    <Input
                        type="password"
                        id="password"
                        placeholder="Digite a senha"
                        hasLabel={true}
                        labelText={'Senha'}
                        width={400}
                        inputIcon={<EyeOff />}
                    />
                    <div className="flex gap-4 ml-auto">
                        <Button>Criar conta</Button>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
