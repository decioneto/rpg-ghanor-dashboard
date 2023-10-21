import {
    AuthenticationUseCase,
    AuthParams,
    AuthResult,
} from '@/backend/core/use-cases/authentication';
import { EncrypterRepository } from '../protocols/cryptography/encrypter-repository';
import { HasherRepository } from '../protocols/cryptography/hasher-repository';
import { GetUserByUsernameRepository } from '../protocols/db/get-user-by-username';

export class AuthenticationService implements AuthenticationUseCase {
    constructor(
        private getUserByUsernameRepository: GetUserByUsernameRepository,
        private hasherRepository: HasherRepository,
        private encrypterRepository: EncrypterRepository
    ) {}

    async execute({ username, password }: AuthParams): Promise<AuthResult> {
        const account =
            await this.getUserByUsernameRepository.getUserByUsername(username);
        if (account) {
            const isValid = await this.hasherRepository.compare(
                password,
                account.password
            );
            console.log(account);
            if (isValid) {
                const accessToken = await this.encrypterRepository.encrypt(
                    account.username
                );
                return {
                    accessToken,
                    user: {
                        ...account,
                        password: '',
                    },
                };
            }
        }

        throw new Error(
            `It was not possible to authenticate the user with the username ${username}`
        );
    }
}
