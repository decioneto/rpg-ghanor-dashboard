import { RoleModel } from '@/backend/data/models';
import { RoleRepository } from '@/backend/data/repositories';

export class InMemoryRoleRepository implements RoleRepository {
    public roles: RoleModel[] = [];

    async createRole(role: RoleModel): Promise<void> {
        this.roles.push(role);
    }
}
