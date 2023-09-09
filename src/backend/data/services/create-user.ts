import { User } from '@/backend/core/entities';
import { CreateUserUseCase } from '@/backend/core/use-cases';
import { UserModel } from '../models/user';
import { HasherRepository } from '../protocols/cryptography/hasher-repository';
import { UserRepository } from '../repositories/user-repository';

export class CreateUserService implements CreateUserUseCase {
    constructor(
        private userRepository: UserRepository,
        private hasherRepository: HasherRepository
    ) {}

    async execute({ roleId, password, username }: User): Promise<boolean> {
        const exists = await this.userRepository.checkByUsername(username);

        if (exists) {
            return false;
        }

        const newPassword = await this.hasherRepository.hash(password);

        const user: UserModel = {
            username,
            password: newPassword,
            roleId,
        };
        await this.userRepository.createUser(user);

        return true;
    }
}
