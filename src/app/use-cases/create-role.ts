import { RoleLevelEnum, RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from '../entities/role';

interface CreateRoleRequest {
    roleName: RoleNameEnum;
    roleLevel: RoleLevelEnum;
}

export class CreateRole {
    async execute(request: CreateRoleRequest): Promise<Role> {
        const { roleName, roleLevel } = request;

        const role = new Role({
            roleName,
            roleLevel,
        });

        return role;
    }
}
