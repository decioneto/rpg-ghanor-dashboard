import { Role } from '../../entities/role';
import { RoleRepository } from '../../repositories/role-repository';

interface GetRoleRequest {
    roleId: string;
}

interface GetRoleResponse {
    role: Role;
}

export class GetRole {
    constructor(private roleRepository: RoleRepository) {}

    async execute(request: GetRoleRequest): Promise<GetRoleResponse> {
        const { roleId } = request;
        const role = await this.roleRepository.findById(roleId);

        if (!role) {
            throw new Error('Role does not exists');
        }

        return {
            role,
        };
    }
}
