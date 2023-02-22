import { Role } from '@/main/entities/role';
import { RoleRepository } from '@/main/repositories/role-repository';

export class InMemoryRoleRepository implements RoleRepository {
    public roles: Role[] = [];

    async create(role: Role): Promise<void> {
        this.roles.push(role);
    }

    async findByName(roleName: string): Promise<Role | null> {
        const role = this.roles.find((role) => role.roleName === roleName);

        if (!role) return null;

        return role;
    }

    async findById(roleId: string): Promise<Role | null> {
        const role = this.roles.find((role) => role.id === roleId);

        if (!role) return null;

        return role;
    }
}
