import { RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from '../entities/role';
import { User } from '../entities/user';
import { RoleRepository } from '../repositories/role-repository';
import { UserRepository } from '../repositories/user-repository';

interface CreatesUserRoleRequest {
    userId: string;
    roleName: RoleNameEnum;
}

interface CreatesUserRoleResponse {
    user: User;
    role: Role;
}

export class CreateUserRole {
    constructor(
        private userRepository: UserRepository,
        private roleRepository: RoleRepository
    ) {}

    async execute(
        request: CreatesUserRoleRequest
    ): Promise<CreatesUserRoleResponse> {
        const { userId, roleName } = request;

        const user = await this.userRepository.findById(userId);
        const role = await this.roleRepository.findByName(roleName);

        if (!user) {
            throw new Error('User do not exists');
        }

        if (!role) {
            throw new Error('Role do not exists');
        }

        await this.userRepository.createUserRole(user.id, role.id);

        user.role = role;

        return {
            user,
            role,
        };
    }
}
