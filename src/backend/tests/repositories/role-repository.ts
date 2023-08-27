import { RoleModel, RoleNameEnumModel } from '@/backend/data/models';
import { RoleRepository } from '@/backend/data/repositories';

export class InMemoryRoleRepository implements RoleRepository {
    public roles: RoleModel[] = [];

    async createRole(roleName: RoleNameEnumModel): Promise<void> {
        const role: RoleModel = {
            roleName,
        };
        this.roles.push(role);
    }
}
