import { Role } from '@/app/entities/role';
import { RoleRepository } from '@/app/repositories/role-repository';

export class InMemoryRoleRepository implements RoleRepository {
    public roles: Role[] = [];

    async create(role: Role): Promise<void> {
        this.roles.push(role);
    }

    async findRoleById(roleId: string): Promise<Role | null> {
        const role = this.roles.find((role) => role.id === roleId);

        if (!role) return null;

        return role;
    }
}
