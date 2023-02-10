import { RoleNameEnum } from '@/enums/RoleEnum';
import { hash } from 'bcryptjs';
import { User } from '../entities/user';
import { RoleRepository } from '../repositories/role-repository';
import { UserRepository } from '../repositories/user-repository';

interface CreateUserRequest {
    username: string;
    password: string;
    roleName: RoleNameEnum;
}

interface CreateUserResponse {
    user: User;
}

export class CreateUser {
    constructor(
        private userRepository: UserRepository,
        private roleRepository: RoleRepository
    ) {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { username, password, roleName } = request;
        const userExist = await this.userRepository.findByUsername(username);
        const role = await this.roleRepository.findByName(roleName);

        if (userExist) {
            throw new Error('User already exists');
        }

        if (!role) {
            throw new Error('Role does not exists');
        }

        const passwordHash = await hash(password, 8);

        const user = new User({
            username,
            password: passwordHash,
            roleId: role.id,
        });

        await this.userRepository.create(user);

        return {
            user,
        };
    }
}
