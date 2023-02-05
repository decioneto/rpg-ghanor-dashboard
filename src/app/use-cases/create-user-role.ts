import { User } from '../entities/user';
import { RoleRepository } from '../repositories/role-repository';
import { UserRepository } from '../repositories/user-repository';

interface CreatesUserRoleRequest {
    userId: string;
    roleId: string;
}

interface CreatesUserRoleResponse {
    user: User;
}

export class CreateUserRole {
    constructor(
        private userRepository: UserRepository,
        private roleRepository: RoleRepository
    ) {}

    async execute(
        request: CreatesUserRoleRequest
    ): Promise<CreatesUserRoleResponse | null> {
        const { userId, roleId } = request;

        if (!userId) {
            throw new Error('User do not exists');
        }

        const user = await this.userRepository.findUserById(userId);
        const role = await this.roleRepository.findRoleById(roleId);

        if (!user || !role) {
            return null;
        }

        user.role = role;

        return {
            user,
        };
    }
}
