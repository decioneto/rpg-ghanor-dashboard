import { compare, hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { RoleRepository } from '../../repositories/role-repository';
import { UserRepository } from '../../repositories/user-repository';

interface AuthenticateUserRequest {
    username: string;
    password: string;
}

interface AuthenticateUserResponse {
    token: string;
    user: {
        username: string;
    };
    role: {
        roleName: string;
    };
}

export class AuthenticateUser {
    constructor(
        private userRepository: UserRepository,
        private roleRepository: RoleRepository
    ) {}

    async execute(
        request: AuthenticateUserRequest
    ): Promise<AuthenticateUserResponse> {
        const { username, password } = request;
        const user = await this.userRepository.findByUsername(username);

        if (!user) {
            throw new Error('Incorrect username or password');
        }

        console.log(password);

        const isSamePasseword = await compare(password, user.password);

        if (!isSamePasseword) {
            throw new Error('Incorrect username or password');
        }

        const role = await this.roleRepository.findById(user.roleId);

        if (!role) {
            throw new Error('Role not found');
        }

        return {
            token: randomUUID(),
            user: {
                username: user.username,
            },
            role: {
                roleName: role.roleName,
            },
        };
    }
}
